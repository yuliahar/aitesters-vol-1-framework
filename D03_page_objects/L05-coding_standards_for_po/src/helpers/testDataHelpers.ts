export function generateUniqueEmail(prefix: string = "testuser"): string {
  const timestamp = Date.now();
  return `${prefix}${timestamp}@example.com`;
}
