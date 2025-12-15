import { Request, Response, NextFunction } from "express";

export const validateRegister = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password, confirm } = req.body;

  if (!email || !password || !confirm) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "invalid email format" });
  }

  if (password !== confirm) {
    return res.status(400).json({ message: "Passwords are not the same" });
  }

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      message:
        "Password must contain at least 8 characters, one uppercase letter and one number",
    });
  }

  next();
};
