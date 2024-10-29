// hooks/usePageTimeTracking.ts

import { useEffect } from 'react';
import { getOrCreateUserId, hasGivenConsent } from '@/utils/cookies';

export function usePageTimeTracking(pageName: string) {
  useEffect(() => {
    if (!hasGivenConsent()) return; // Only track if consent is given

    const startTime = Date.now();
    const userId = getOrCreateUserId(); // Get or create user ID

    return () => {
      const endTime = Date.now();
      const duration = Math.floor((endTime - startTime) / 1000); // Time in seconds

      console.log('Sending analytics data:', { userId, pageName, timeSpent: duration });

      // Send time data to API
      fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, pageName, timeSpent: duration }),
      });
    };
  }, [pageName]);
}

