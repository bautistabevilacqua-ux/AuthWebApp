import "dotenv/config";
import { get } from "env-var";

export const envs = {
  JWT_SECRET: get("JWT_SECRET").required().asString(),

  DB_HOST: get("DB_HOST").required().asString(),
  DB_USER: get("DB_USER").required().asString(),
  DB_PASSWORD: get("DB_PASSWORD").required().asString(),
  DB_NAME: get("DB_NAME").required().asString(),

  DB_PROVIDER: get("DB_PROVIDER").required().asString(),
};
