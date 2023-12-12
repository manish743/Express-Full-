import { config } from "dotenv";
config();
export let port = process.env.PORT;
export let secretKey = process.env.SECRET_KEY;