import { Router } from "express";
import { logout, adminLogin, loginPage } from "../controllers/auth.controller.js";

const authRoute = Router()

authRoute.get("/", loginPage)
authRoute.post("/index", adminLogin)
authRoute.get("/logout", logout )

export default authRoute;
