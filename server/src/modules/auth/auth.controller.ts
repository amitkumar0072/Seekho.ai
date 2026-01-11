import { Request, Response, NextFunction } from "express";
import { signupUser, loginUser } from "./auth.service";

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await signupUser(req.body);

    res.status(201).json({
      message: "User created successfully",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await loginUser(req.body);

    res.status(200).json({
      token: result.token,
      user: {
        id: result.user.id,
        name: result.user.name,
        email: result.user.email,
      },
    });
  } catch (error) {
    next(error);
  }
};
