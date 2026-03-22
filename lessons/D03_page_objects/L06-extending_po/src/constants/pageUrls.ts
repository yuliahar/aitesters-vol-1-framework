/**
 * Page URLs for the application.
 * Centralized management of all page routes for better maintainability and reuse.
 */
export const PAGE_URLS = {
  HOME: "",
  LOGIN: "/login.html",
  REGISTER: "/register.html",
  DOCS: "/docs.html",
  API_DOCS: "/swagger.html",
} as const;

/**
 * Type representing all available page URLs.
 */
export type PageUrl = (typeof PAGE_URLS)[keyof typeof PAGE_URLS];
