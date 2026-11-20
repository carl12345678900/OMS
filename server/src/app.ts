// src/app.ts
import express from "express";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get("/", (_req, res) => {
  res.json({ message: "API is running" });
});

export default app;
