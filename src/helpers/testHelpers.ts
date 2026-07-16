export function generateTestEmail(prefix = 'testuser') {
    return `${prefix}${Date.now()}@example.com`;
}

export default { generateTestEmail };
