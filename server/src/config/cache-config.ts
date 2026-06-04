// Endpoint-specific cache configuration
// Allows different endpoints to have different cache TTLs based on data freshness requirements

export const CACHE_ENDPOINTS: Record<string, CacheConfig> = {
  // User-specific endpoints (short TTL, private)
  '/api/user/profile': { ttl: 300, key: 'user:profile', private: true },
  '/api/user/settings': { ttl: 300, key: 'user:settings', private: true },
  '/api/user/dashboard': { ttl: 600, key: 'user:dashboard', private: true },

  // Real-time data (very short TTL)
  '/api/leaderboard': { ttl: 60, key: 'leaderboard', private: false },
  '/api/notifications': { ttl: 30, key: 'notifications', private: true },
  '/api/activity-feed': { ttl: 60, key: 'activity-feed', private: true },

  // Frequently updated data (medium TTL)
  '/api/companies': { ttl: 1800, key: 'companies', private: false },
  '/api/jobs': { ttl: 1800, key: 'jobs', private: false },
  '/api/posts': { ttl: 600, key: 'posts', private: false },

  // Static or rarely changing content (long TTL)
  '/api/faq': { ttl: 86400, key: 'faq', private: false },
  '/api/categories': { ttl: 86400, key: 'categories', private: false },
  '/api/skills': { ttl: 86400, key: 'skills', private: false },
};

export interface CacheConfig {
  ttl: number; // Cache time-to-live in seconds
  key: string; // Cache key prefix
  private: boolean; // If true, requires authentication and user-specific caching
}

/**
 * Get cache configuration for a given URL
 * Matches URL against configured patterns and returns appropriate cache settings
 * Falls back to default config if no match found
 */
export const getCacheConfig = (url: string): CacheConfig => {
  // Remove query parameters for pattern matching
  const urlPath = url.split('?')[0];

  // Try exact matches first
  if (CACHE_ENDPOINTS[urlPath]) {
    return CACHE_ENDPOINTS[urlPath];
  }

  // Try pattern matching (prefix matches)
  for (const [pattern, config] of Object.entries(CACHE_ENDPOINTS)) {
    if (urlPath.startsWith(pattern)) {
      return config;
    }
  }

  // Default configuration
  return {
    ttl: 300, // 5 minutes default
    key: 'cache',
    private: false,
  };
};

/**
 * Clear cache for a specific endpoint pattern
 */
export const getCachePatternForEndpoint = (endpoint: string): string => {
  const config = getCacheConfig(endpoint);
  return config.key;
};
