import { Router } from "express";
import { AuthController } from "./controllers/authController";

const router = Router();
const authController = new AuthController();

router.post("/login", authController.login);
// router.post("/logout", AuthController.logout);


export default router;