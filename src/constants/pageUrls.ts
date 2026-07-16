/**
 * Centralized page URLs for consistent navigation across page objects and tests.
 */
export const PAGE_URLS = {
	HOME: '/',
	LOGIN: '/login.html',
	REGISTER: '/register.html',
	DOCS: '/docs.html',
	SWAGGER: '/swagger.html',
} as const;

export type PageUrl = (typeof PAGE_URLS)[keyof typeof PAGE_URLS];
