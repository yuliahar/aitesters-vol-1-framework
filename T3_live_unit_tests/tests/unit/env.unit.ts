import { expect, test } from "@playwright/test";
import { validateEnvVars } from "../../src/config/env.helpers";

const baseEnv = {
    BASE_URL: "https://example.com",
    EMPTY_USER_EMAIL: "empty@example.com",
    EMPTY_USER_PASSWORD: "password",
    EMPTY_USER_DISPLAY_NAME: "Empty User",
    DEMO_USER_EMAIL: "demo@example.com",
    DEMO_USER_PASSWORD: "demopassword",
    DEMO_USER_DISPLAY_NAME: "Demo User",
    API_URL: "https://api.example.com",
};

test("validateEnvVars throws when required env vars are missing", async () => {
    const unsafeEnv = {
        ...baseEnv,
        // simulate missing variable by deleting
    } as Record<string, string | undefined>;
    delete unsafeEnv.BASE_URL;

    expect(() => validateEnvVars(unsafeEnv as any)).toThrow(
        /Missing or empty environment variable\(s\): BASE_URL/,
    );
});

test("validateEnvVars throws when required env vars are empty strings", async () => {
    const unsafeEnv = {
        ...baseEnv,
        // Make one required field empty with whitespace only
        EMPTY_USER_PASSWORD: "   ",
    } as Record<string, string | undefined>;

    expect(() => validateEnvVars(unsafeEnv as any)).toThrow(
        /Missing or empty environment variable\(s\): EMPTY_USER_PASSWORD/,
    );
});

test("validateEnvVars returns all vars trimmed when present", async () => {
    const unsafeEnv = {
        ...baseEnv,
        EMPTY_USER_EMAIL: "  user@example.com  ",
        EMPTY_USER_PASSWORD: "  password  ",
        EMPTY_USER_DISPLAY_NAME: "  Empty User  ",
        DEMO_USER_EMAIL: "  demo@example.com  ",
        DEMO_USER_PASSWORD: "  demopassword  ",
        DEMO_USER_DISPLAY_NAME: "  Demo User  ",
    } as Record<string, string | undefined>;

    const validated = validateEnvVars(unsafeEnv as any);

    expect(validated.BASE_URL).toBe("https://example.com");
    expect(validated.API_URL).toBe("https://api.example.com");
    expect(validated.EMPTY_USER_EMAIL).toBe("user@example.com");
    expect(validated.EMPTY_USER_PASSWORD).toBe("password");
    expect(validated.EMPTY_USER_DISPLAY_NAME).toBe("Empty User");
    expect(validated.DEMO_USER_EMAIL).toBe("demo@example.com");
    expect(validated.DEMO_USER_PASSWORD).toBe("demopassword");
    expect(validated.DEMO_USER_DISPLAY_NAME).toBe("Demo User");
});

test("validateEnvVars throws when any variable with URL in its name has not a valid URL value", async () => {
    const unsafeEnv = {
        ...baseEnv,
        BASE_URL: "not-a-url",
        API_URL: "also-not-a-url",
    } as Record<string, string | undefined>;

    expect(() => validateEnvVars(unsafeEnv as any)).toThrow(
        /Invalid: BASE_URL, API_URL/,
    );
});

