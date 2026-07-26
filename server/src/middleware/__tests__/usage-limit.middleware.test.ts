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
  
  const testAction = 'MOCK_INTERVIEW' as any;

  // Mock transaction inner methods
  let mockFindUnique: any;
  let mockCount: any;
  let mockCreate: any;

  beforeEach(() => {
    mockRequest = {
      user: { id: 'user-123' } as any,
    };
    mockResponse = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    };
    nextFunction = vi.fn();

    mockFindUnique = vi.fn();
    mockCount = vi.fn();
    mockCreate = vi.fn();

    // Dynamically execute the transaction callback using our fake `tx` client
    vi.mocked(prisma.$transaction).mockImplementation(async (callback: any) => {
      const tx = {
        user: { findUnique: mockFindUnique },
        usageLog: { count: mockCount, create: mockCreate },
      };
      return callback(tx);
    });
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
    
    // Simulate database returning active user and 1 usage count (limit 2)
    mockFindUnique.mockResolvedValue({ subscriptionPlan: 'FREE', subscriptionStatus: 'ACTIVE' });
    mockCount.mockResolvedValue(1);

    const middleware = usageLimit(testAction);
    await middleware(mockRequest as Request, mockResponse as Response, nextFunction);

    // Assert that the transaction executed the core DB checks
    expect(mockFindUnique).toHaveBeenCalled();
    expect(mockCount).toHaveBeenCalled();
    expect(mockCreate).toHaveBeenCalledWith({ data: { userId: 'user-123', action: testAction } });
    
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
    
    mockFindUnique.mockResolvedValue({ subscriptionPlan: 'FREE', subscriptionStatus: 'ACTIVE' });
    mockCount.mockResolvedValue(2); // At limit

    const middleware = usageLimit(testAction);
    await middleware(mockRequest as Request, mockResponse as Response, nextFunction);

    expect(mockCreate).not.toHaveBeenCalled(); // Should not write a usage log if blocked
    expect(mockResponse.status).toHaveBeenCalledWith(429);
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: 'Daily limit reached. Upgrade to Premium for higher limits.',
      usage: { used: 2, limit: 2, action: testAction, tier: 'FREE' },
    });
    expect(nextFunction).not.toHaveBeenCalled();
  });

  it('3. allows PREMIUM users to utilize their higher quota ceilings', async () => {
    vi.mocked(getPlanTier).mockReturnValue('PREMIUM');
    
    mockFindUnique.mockResolvedValue({ subscriptionPlan: 'PREMIUM', subscriptionStatus: 'ACTIVE' });
    mockCount.mockResolvedValue(5); // 5 used, well under the Premium limit of 10

    const middleware = usageLimit(testAction);
    await middleware(mockRequest as Request, mockResponse as Response, nextFunction);

    expect(mockCreate).toHaveBeenCalled();
    expect(nextFunction).toHaveBeenCalled();
    expect((mockRequest as any).usageInfo).toEqual({
      used: 5,
      limit: 10,
      action: testAction,
      tier: 'PREMIUM',
    });
  });

  it('4. handles serializable-transaction/race behaviors correctly under concurrent load', async () => {
    // Force the transaction block itself to throw a Prisma serialization error
    vi.mocked(prisma.$transaction).mockRejectedValueOnce({ code: 'P2034' });

    const middleware = usageLimit(testAction);
    await middleware(mockRequest as Request, mockResponse as Response, nextFunction);

    expect(mockResponse.status).toHaveBeenCalledWith(429);
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: 'Too many concurrent requests. Please try again in a moment.',
      usage: { action: testAction },
    });
    expect(nextFunction).not.toHaveBeenCalled();
  });

  it('5. returns 401 if the user record is missing in the database', async () => {
    mockFindUnique.mockResolvedValue(null);

    const middleware = usageLimit(testAction);
    await middleware(mockRequest as Request, mockResponse as Response, nextFunction);

    expect(mockResponse.status).toHaveBeenCalledWith(401);
    expect(mockResponse.json).toHaveBeenCalledWith({ message: 'User not found' });
  });
});