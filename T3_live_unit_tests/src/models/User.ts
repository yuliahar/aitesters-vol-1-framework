import { ENV } from "../config/env.config";

export interface User {
  email: string;
  password: string;
  displayName: string;
}

/**
 * Creates a User instance with values sourced from the "empty user" environment
 * variables. This is the default account used by most smoke/e2e tests.
 *
 * Partial overrides are accepted so individual specifications can tweak fields
 * without needing to reach into the environment directly.
 */
/**
 * Build a `User` object populated from the "empty user" environment
 * variables. This helper does **not** create any records in the application;
 * it merely surfaces the configured credentials for use in tests.
 *
 * Partial overrides are accepted so individual specifications can tweak fields
 * without needing to reach into the environment directly.
 */
export function getEnvUser(overrides: Partial<User> = {}): User {
  return {
    email: ENV.EMPTY_USER_EMAIL,
    password: ENV.EMPTY_USER_PASSWORD,
    displayName: ENV.EMPTY_USER_DISPLAY_NAME,
    ...overrides,
  };
}

/**
 * Build a `User` object populated from the demo account environment
 * variables. Use this when a second distinct account is required. The same
 * caveat about application persistence applies: this is a lightweight factory,
 * not a database operation.
 */
export function getDemoEnvUser(overrides: Partial<User> = {}): User {
  return {
    email: ENV.DEMO_USER_EMAIL,
    password: ENV.DEMO_USER_PASSWORD,
    displayName: ENV.DEMO_USER_DISPLAY_NAME,
    ...overrides,
  };
}
