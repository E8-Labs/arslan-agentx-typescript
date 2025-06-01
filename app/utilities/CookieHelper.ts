// For client side
import Cookies from "js-cookie";

// For server side
import { parse } from "cookie";

// Cookie keys
export const COOKIE_KEYS = {
  USER: "User",
};

// Client-side: Set a cookie
export function setUserCookie(user: any, expiresInMinutes = 120) {
  const expireTime = new Date(new Date().getTime() + expiresInMinutes * 60 * 1000);
  Cookies.set(COOKIE_KEYS.USER, JSON.stringify(user), { expires: expireTime });
}

// Client-side: Get user from cookie
export function getUserCookie(): any | null {
  const user = Cookies.get(COOKIE_KEYS.USER);
  return user ? JSON.parse(user) : null;
}

// Client-side: Remove cookie
export function removeUserCookie() {
  Cookies.remove(COOKIE_KEYS.USER);
}

// Server-side: Get cookie from request
export function parseUserFromServerCookie(cookieHeader: string | undefined): any | null {
  if (!cookieHeader) return null;
  const cookies = parse(cookieHeader);
  return cookies[COOKIE_KEYS.USER] ? JSON.parse(cookies[COOKIE_KEYS.USER]) : null;
}
