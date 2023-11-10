import express, { Express, Request, Response } from "express";

const app: Express = express();

// Set Body parser, reading data from body into req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from backend");
});

app.get("/api", (req: Request, res: Response) => {
  res.send("api");
});

export default app;
