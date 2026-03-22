
const REQUIRED_ENV_VARS = [
    "BASE_URL",
    "API_URL",

    // primary user used by default in tests
    "EMPTY_USER_EMAIL",
    "EMPTY_USER_PASSWORD",
    "EMPTY_USER_DISPLAY_NAME",

    // secondary/demo account for additional scenarios
    "DEMO_USER_EMAIL",
    "DEMO_USER_PASSWORD",
    "DEMO_USER_DISPLAY_NAME",
] as const;

type EnvVarName = (typeof REQUIRED_ENV_VARS)[number];

export function validateEnvVars(env: NodeJS.ProcessEnv): Record<EnvVarName, string> {
    const missing: string[] = [];

    for (const name of REQUIRED_ENV_VARS) {
        const value = env[name];
        if (!value || value.trim() === "") {
            missing.push(name);
        }
    }

    if (missing.length > 0) {
        throw new Error(
            `Missing or empty environment variable(s): ${missing.join(", ")}. ` +
            `Ensure these are defined in your .env file or CI environment.`,
        );
    }

    // Validate any required env var with "URL" in its name is a proper URL.
    const invalidUrlVars: string[] = [];

    for (const name of REQUIRED_ENV_VARS) {
        if (!name.toUpperCase().includes("URL")) continue;

        const raw = env[name]!.trim();
        try {
            const parsed = new URL(raw);
            if (!["http:", "https:"].includes(parsed.protocol)) {
                throw new Error();
            }
        } catch {
            invalidUrlVars.push(name);
        }
    }

    if (invalidUrlVars.length > 0) {
        throw new Error(
            `Invalid: ${invalidUrlVars.join(", ")}`,
        );
    }

    return Object.fromEntries(
        REQUIRED_ENV_VARS.map((name) => [name, env[name]!.trim()]),
    ) as Record<EnvVarName, string>;
}
