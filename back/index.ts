import app from "./app";
import { PORT } from "./utils/enviorment-varibales";
import serverless from "serverless-http";

export default serverless(app);
