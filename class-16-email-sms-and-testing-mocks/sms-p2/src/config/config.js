import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development"}` });

export const {
  NODE_ENV,
  PORT,
  EMAIL,
  PSW_EMAIL,
  SMS_ACC_SID,
  SMS_AUTH_TOKEN,
  SMS_PHONE,
} = process.env;
