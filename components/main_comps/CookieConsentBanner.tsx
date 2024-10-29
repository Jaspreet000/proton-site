// components/CookieConsentBanner.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { setConsent, hasGivenConsent } from '@/utils/cookies';

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!hasGivenConsent()) {
      setIsVisible(true); // Show banner if no consent found
    }
  }, []);

  const handleAccept = () => {
    setConsent(); // Set consent cookie
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-800 text-white text-center z-50">
        <p>We use cookies to improve user experience and analyze site usage. By using our site, you consent to cookies.</p>
        <button onClick={handleAccept} className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
          Accept
        </button>
      </div>
    )
  );
}
