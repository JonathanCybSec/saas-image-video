// API Backend (le cerveau). Reçoit les requêtes, dépose des jobs.
// Ne fait PAS le travail lourd lui-même.
import "dotenv/config";
import express from "express";
import { env } from "./env.js";
import { contentQueue } from "./queue.js";

const app = express();
app.use(express.json());

// Vérifie que le service est vivant (utilisé par Docker/monitoring).
app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "api" });
});

// DÉMO : demande la génération d'un post -> dépose un job dans la file.
// Réponse immédiate ; le worker fera le vrai travail en fond.
app.post("/posts/generate", async (req, res) => {
  const { brandId } = req.body ?? {};
  if (!brandId) return res.status(400).json({ error: "brandId requis" });

  const job = await contentQueue.add("generate-post", { brandId });
  res.status(202).json({ enqueued: true, jobId: job.id });
});

app.listen(env.PORT, () => {
  console.log(`[api] en écoute sur http://localhost:${env.PORT}`);
});
