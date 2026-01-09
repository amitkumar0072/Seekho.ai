import { Request, Response } from "express";
import { signupUser, loginUser } from "./auth.service";

export const signup = async (req: Request, res: Response) => {
  const user = await signupUser(req.body);
  res.status(201).json({ message: "User created", user });
};

export const login = async (req: Request, res: Response) => {
  const result = await loginUser(req.body);
  res.status(200).json(result);
};
