import "dotenv/config";
import { validateEnvVars } from "./env.helpers";

const validated = validateEnvVars(process.env);

export const ENV = {
  BASE_URL: validated.BASE_URL,
  API_URL: validated.API_URL,

  EMPTY_USER_EMAIL: validated.EMPTY_USER_EMAIL,
  EMPTY_USER_PASSWORD: validated.EMPTY_USER_PASSWORD,
  EMPTY_USER_DISPLAY_NAME: validated.EMPTY_USER_DISPLAY_NAME,

  DEMO_USER_EMAIL: validated.DEMO_USER_EMAIL,
  DEMO_USER_PASSWORD: validated.DEMO_USER_PASSWORD,
  DEMO_USER_DISPLAY_NAME: validated.DEMO_USER_DISPLAY_NAME,
} as const;
