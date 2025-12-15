import { Router, Request, Response } from "express";
import fs from "fs";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();
const filePath = "./data/users.json";

const loadDB = () => JSON.parse(fs.readFileSync(filePath, "utf8"));

// métricas del usuario
router.get("/user", authMiddleware, (req: Request, res: Response) => {
  const db = loadDB();
  const metrics = db.metrics[req.user.id];
  res.json(metrics);
});

// métrica admin opcional
router.get("/admin", (req: Request, res: Response) => {
  const db = loadDB();
  res.json(db.metrics);
});

export default router;

