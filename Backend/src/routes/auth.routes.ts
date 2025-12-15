import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { validateRegister } from "../middlewares/validate-register.middleware";
import { AuthController } from "../controllers/auth.controller";
import { validateLogin } from "../middlewares/validate-login.middleware";

const router = Router();

router.post("/register", validateRegister, AuthController.register);
router.post("/login", validateLogin, AuthController.login);
router.get("/check-status", authMiddleware, AuthController.checkStatus);

export default router;
