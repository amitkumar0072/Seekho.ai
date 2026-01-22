import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

interface AuthPayload extends JwtPayload {
  userId: string;
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "Authorization token missing, Please signup first" });
    return;
  }

  const token = authHeader.split(" ")[1];

  if (!process.env.JWT_SECRET) {
    res.status(500).json({ message: "JWT secret not configured" });
    return;
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    ) as AuthPayload;

    req.user = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
