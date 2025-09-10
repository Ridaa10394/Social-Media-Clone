import express from "express";
import { signup } from "../controllers/auth.controllers.js";
import { login } from "../controllers/auth.controllers.js";
const authRouter = express.Router();

authRouter.post("/signup",signup);
authRouter.post("/login",login);

export default authRouter;
