import jwt from "jsonwebtoken";
import { envs } from "../config/envs";

const SECRET = envs.JWT_SECRET;

export const generateToken = (payload: object): string => {
  return jwt.sign(payload, SECRET, { expiresIn: "2h" });
};

export const verifyToken = (token: string): any => {
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
};
