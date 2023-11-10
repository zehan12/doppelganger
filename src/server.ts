import { Server } from "http";
import app from "./app";
import { config } from "./config/config";
import connectDB from "./config/db";

const PORT = config.port || 3000;

connectDB();

const server: Server = app.listen(PORT, (): void => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
