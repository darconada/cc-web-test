import Cookies from 'js-cookie'

const ADMIN_PASSWORD = 't0k0m0tx0!'
const AUTH_COOKIE_NAME = 'ce-admin-auth'
const AUTH_TOKEN = 'authenticated'

export function checkPassword(password: string): boolean {
  return password === ADMIN_PASSWORD
}

export function setAuthCookie() {
  // Set cookie that expires in 24 hours
  Cookies.set(AUTH_COOKIE_NAME, AUTH_TOKEN, { expires: 1 })
}

export function removeAuthCookie() {
  Cookies.remove(AUTH_COOKIE_NAME)
}

export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false
  return Cookies.get(AUTH_COOKIE_NAME) === AUTH_TOKEN
}

// Server-side auth check
export function checkAuthCookie(cookieHeader: string | null): boolean {
  if (!cookieHeader) return false
  return cookieHeader.includes(`${AUTH_COOKIE_NAME}=${AUTH_TOKEN}`)
}
