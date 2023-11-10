import express, { Router } from "express";

const userRouter: Router = express.Router();

userRouter.get("/",(req,res)=>{
    res.send("user route")
});

export default userRouter;
