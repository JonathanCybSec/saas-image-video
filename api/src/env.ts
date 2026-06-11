// Validation des variables d'environnement au démarrage.
// Si une variable obligatoire manque, l'app refuse de démarrer
// (mieux qu'un bug obscur 2h plus tard).
import { z } from "zod";

const schema = z.object({
  DATABASE_URL: z.string().url(),
  REDIS_URL: z.string().url(),
  PORT: z.coerce.number().default(3000),
  OPENAI_API_KEY: z.string().optional(),
  TOKEN_ENCRYPTION_KEY: z.string().optional(),
});

export const env = schema.parse(process.env);
