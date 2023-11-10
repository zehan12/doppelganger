import express, { Router } from "express";
import userRouter from "./user.route";
import postRouter from "./post.route";

const routes:Router = express.Router();

routes.use("/user",userRouter);
routes.use("/post",postRouter);

export default routes;