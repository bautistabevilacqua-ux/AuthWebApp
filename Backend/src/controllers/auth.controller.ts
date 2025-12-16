import bcrypt from "bcryptjs";
import { UserService } from "../services/user.service";
import { generateToken } from "../utils/jwt";
import { Request, Response } from "express";

export const AuthController = {
  register: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const exists = await UserService.findByEmail(email);
      if (exists) {
        return res.status(400).json({
          message: "Email already exists",
        });
      }

      const hashedPassword = bcrypt.hashSync(password, 10);

      const newUser = {
        id: Date.now(),
        email,
        password: hashedPassword,
      };

      await UserService.create(newUser);

      const token = generateToken({
        id: newUser.id,
        email: newUser.email,
      });

      return res.json({
        token,
        user: {
          id: newUser.id,
          email: newUser.email,
        },
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  },

  login: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      //ARREGLAR
      const user = await UserService.findByEmail(email);
      if (!user) {
        return res.status(400).json({
          message: "Invalid credentials",
        });
      }

      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword) {
        return res.status(400).json({
          message: "Invalid credentials",
        });
      }

      const token = generateToken({
        id: user.id,
        email: user.email,
      });

      return res.json({
        token,
        user: {
          id: user.id,
          email: user.email,
        },
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  },
  checkStatus: async (req: Request, res: Response) => {
    try {
      const user = await UserService.findById(req.user.id);

      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      const token = generateToken({
        id: user.id,
        email: user.email,
      });

      return res.json({
        ok: true,
        token,
        user: {
          id: user.id,
          email: user.email,
        },
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  },
};
