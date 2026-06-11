// Worker : consomme la file et fait le travail lourd.
// Ici, squelette : on simule la génération d'un post.
// Plus tard : appel LLM -> rendu image (Puppeteer) -> upload -> enregistrement en base.
import "dotenv/config";
import { Worker } from "bullmq";
import { connection } from "./queue.js";

const worker = new Worker(
  "content-generation",
  async (job) => {
    const { brandId } = job.data;
    console.log(`[worker] génération pour brand=${brandId} (job ${job.id})`);

    // TODO Phase 1 : appel LLM + génération image + sauvegarde en base.
    await new Promise((r) => setTimeout(r, 800)); // simulation

    console.log(`[worker] post généré pour brand=${brandId}`);
    return { ok: true };
  },
  { connection }
);

worker.on("completed", (job) => console.log(`[worker] job ${job.id} terminé`));
worker.on("failed", (job, err) =>
  console.error(`[worker] job ${job?.id} échoué :`, err.message)
);

console.log("[worker] démarré, en attente de jobs...");
