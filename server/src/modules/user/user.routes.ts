import { Router } from "express";
import { getProfile } from "./user.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

router.get("/me", authMiddleware, getProfile);

export default router;
