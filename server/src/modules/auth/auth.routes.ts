import { Router } from "express";
import { signup, login } from "./auth.controller";
import { signupSchema, loginSchema } from "./auth.schema";
import { validate } from "../../middlewares/validate.middleware";

const router = Router();

router.post("/signup", validate(signupSchema), signup);
router.post("/login", validate(loginSchema), login);

export default router;
