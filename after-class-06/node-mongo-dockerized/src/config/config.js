import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development"}` });

export const { NODE_ENV, PORT, PERSISTENCE, DB_HOST, MODE } = process.env;
