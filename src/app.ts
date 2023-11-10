import express, { Express, Request, Response, Router } from "express";
import routes from "./routes";

const app: Express = express();

// Set Body parser, reading data from body into req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from backend");
});

export default app;
