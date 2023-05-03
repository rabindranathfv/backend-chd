import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development"}` });

export const { NODE_ENV, PORT, EMAIL, PSW_EMAIL } = process.env;
