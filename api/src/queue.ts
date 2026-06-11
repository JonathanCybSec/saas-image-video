// Connexion Redis + définition des files BullMQ.
// L'API DÉPOSE des jobs ici ; le worker les CONSOMME.
import { Queue } from "bullmq";
import IORedis from "ioredis";
import { env } from "./env.js";

// maxRetriesPerRequest: null -> requis par BullMQ
export const connection = new IORedis(env.REDIS_URL, {
  maxRetriesPerRequest: null,
});

// Une file par type de travail lourd.
export const contentQueue = new Queue("content-generation", { connection });
export const publishQueue = new Queue("publishing", { connection });
