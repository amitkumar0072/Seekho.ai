import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./modules/auth/auth.routes";
import userRoutes from "./modules/user/user.routes";
import { errorHandler } from "./middlewares/error.middleware";

dotenv.config();

const app = express();

/* ----------- Middlewares ----------- */
app.use(cors());
app.use(express.json());

/* ----------- Routes ----------- */
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

/* ----------- Error Handler ----------- */
app.use(errorHandler);

export default app;
