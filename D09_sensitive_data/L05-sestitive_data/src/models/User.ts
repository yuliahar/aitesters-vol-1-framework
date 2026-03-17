export interface User {
  email: string;
  password: string;
}

/**
 * Creates a User instance with values sourced from environment variables.
 * Allows partial overrides for flexibility in individual tests.
 */
export function createUser(overrides: Partial<User> = {}): User {
  return {
    email: process.env.USER_EMAIL!,
    password: process.env.USER_PASSWORD!,
    ...overrides,
  };
}
