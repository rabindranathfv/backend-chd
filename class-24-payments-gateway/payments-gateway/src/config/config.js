import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const {
  NODE_ENV,
  PORT,
  PERSISTENCE,
  DB_HOST,
  MODE,
  MONGO_URI,
  PRIVATE_STRIPE_KEY,
} = process.env;
