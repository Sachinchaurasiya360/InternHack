import type { Request, Response, NextFunction } from 'express';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import { usageLimit } from '../usage-limit.middleware.js';
import { prisma } from '../../database/db.js';
import { getPlanTier } from '../../config/usage-limits.js';

// --- MOCK DEPENDENCIES ---
vi.mock('../../database/db.js', () => ({
  prisma: {
    $transaction: vi.fn(),
  },
}));

vi.mock('../../config/usage-limits.js', () => ({
  DAILY_LIMITS: {
    MOCK_INTERVIEW: {
      FREE: 2,
      PREMIUM: 10,
    },
  },
  getPlanTier: vi.fn(),
}));

describe('Usage Limit Middleware', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let nextFunction: NextFunction;
  
  // Use a dummy action type matching our mocked config
  const testAction = 'MOCK_INTERVIEW' as any;

  beforeEach(() => {
    mockRequest = {
      user: { id: 'user-123' } as any,
    };
    mockResponse = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    };
    nextFunction = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('returns 401 if the user is not authenticated', async () => {
    mockRequest.user = undefined;
    
    const middleware = usageLimit(testAction);
    await middleware(mockRequest as Request, mockResponse as Response, nextFunction);

    expect(mockResponse.status).toHaveBeenCalledWith(401);
    expect(mockResponse.json).toHaveBeenCalledWith({ message: 'Authentication required' });
    expect(nextFunction).not.toHaveBeenCalled();
  });

  it('1. allows the request to pass if the user is strictly under their quota limit', async () => {
    vi.mocked(getPlanTier).mockReturnValue('FREE');
    
    // Simulate Prisma transaction returning a successful, under-limit payload
    vi.mocked(prisma.$transaction).mockResolvedValue({
      ok: true,
      used: 1,
      limit: 2,
      tier: 'FREE'
    });

    const middleware = usageLimit(testAction);
    await middleware(mockRequest as Request, mockResponse as Response, nextFunction);

    expect(nextFunction).toHaveBeenCalled();
    expect((mockRequest as any).usageInfo).toEqual({
      used: 1,
      limit: 2,
      action: testAction,
      tier: 'FREE',
    });
  });

  it('2. blocks the request and returns the correct status code if the user is at or over their limit', async () => {
    vi.mocked(getPlanTier).mockReturnValue('FREE');
    
    // Simulate Prisma transaction returning a limit_reached payload
    vi.mocked(prisma.$transaction).mockResolvedValue({
      ok: false,
      reason: 'limit_reached',
      used: 2,
      limit: 2,
      tier: 'FREE'
    });

    const middleware = usageLimit(testAction);
    await middleware(mockRequest as Request, mockResponse as Response, nextFunction);

    expect(mockResponse.status).toHaveBeenCalledWith(429);
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: 'Daily limit reached. Upgrade to Premium for higher limits.',
      usage: { used: 2, limit: 2, action: testAction, tier: 'FREE' },
    });
    expect(nextFunction).not.toHaveBeenCalled();
  });

  it('3. bypasses standard usage limits entirely for premium/tier accounts', async () => {
    vi.mocked(getPlanTier).mockReturnValue('PREMIUM');
    
    // Simulate Premium user well within their higher limit bounds
    vi.mocked(prisma.$transaction).mockResolvedValue({
      ok: true,
      used: 5,
      limit: 10,
      tier: 'PREMIUM'
    });

    const middleware = usageLimit(testAction);
    await middleware(mockRequest as Request, mockResponse as Response, nextFunction);

    expect(nextFunction).toHaveBeenCalled();
    expect((mockRequest as any).usageInfo).toEqual({
      used: 5,
      limit: 10,
      action: testAction,
      tier: 'PREMIUM',
    });
  });

  it('4. handles serializable-transaction/race behaviors correctly under concurrent load', async () => {
    // Simulate a Prisma P2034 serialization race condition error
    vi.mocked(prisma.$transaction).mockRejectedValue({ code: 'P2034' });

    const middleware = usageLimit(testAction);
    await middleware(mockRequest as Request, mockResponse as Response, nextFunction);

    expect(mockResponse.status).toHaveBeenCalledWith(429);
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: 'Too many concurrent requests. Please try again in a moment.',
      usage: { action: testAction },
    });
    expect(nextFunction).not.toHaveBeenCalled();
  });
});