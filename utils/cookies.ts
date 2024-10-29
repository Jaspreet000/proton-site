// utils/cookies.ts

import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';

// Set a cookie with a specified expiration time (in days)
export function setCookie(name: string, value: string, days: number) {
  Cookies.set(name, value, { expires: days });
}

// Get a cookie by name
export function getCookie(name: string) {
  return Cookies.get(name);
}

// Generate or retrieve a unique user ID and store it in a cookie
export function getOrCreateUserId() {
  let userId = getCookie('user_id');
  if (!userId) {
    userId = uuidv4(); // Generate a new UUID for the user
    setCookie('user_id', userId, 365); // Store for a year
  }
  return userId;
}

// Check if the user has given consent
export function hasGivenConsent() {
  return getCookie('cookie_consent') === 'accepted';
}

// Set the consent cookie
export function setConsent() {
  setCookie('cookie_consent', 'accepted', 365); // Store consent for a year
}
