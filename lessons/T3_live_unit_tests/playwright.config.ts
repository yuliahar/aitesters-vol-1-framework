import { defineConfig, devices } from "@playwright/test";
import { ENV } from "./src/config/env.config";

export const DEMO_USER_AUTH_FILE = "playwright/.auth/user.json";

export default defineConfig({
  testDir: "./tests",
  timeout: 10 * 1000,
  fullyParallel: true,
  reporter: process.env.CI
    ? [["github"], ["html"]]
    : [["html", { open: "never" }]],
  use: {
    baseURL: ENV.BASE_URL,
    trace: "on",
  },

  projects: [
    {
      name: "unit-tests",
      testMatch: ["**/unit/**/*.unit.ts"],
      timeout: 1 * 1000,
    },
    {
      name: "setup-demo-user",
      dependencies: ["unit-tests"],
      testMatch: ["**/auth/**/*.setup.ts"],
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "smoke-tests",
      dependencies: ["unit-tests"],
      testMatch: ["**/*.smoke.spec.ts"],
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "demo-user-tests",
      dependencies: ["setup-demo-user"],
      testMatch: ["**/auth/**/*.e2e.spec.ts"],
      use: {
        ...devices["Desktop Chrome"],
        storageState: DEMO_USER_AUTH_FILE,
      },
    },
  ],
  
});
