import { Server } from "http";
import app from "./app";
import { config } from "./config/config";

const PORT = config.port || 3000;

const server: Server = app.listen(PORT, (): void => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
