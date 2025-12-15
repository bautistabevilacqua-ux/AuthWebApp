import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import metricsRoutes from "./routes/metrics.routes";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/metrics", metricsRoutes);

export default app;
