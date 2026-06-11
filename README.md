# ContenuLocal — squelette Phase 1

SaaS web auto-hébergé. Démarrage de l'infra : PostgreSQL + Redis + API + Worker, le tout en Docker.

## Prérequis
- Docker + Docker Compose (déjà ok sur ton WSL)

## Démarrer

```bash
cp .env.example .env        # puis adapte les valeurs
docker compose up --build   # lance tout
```

Au premier lancement, crée les tables :

```bash
docker compose exec api npm run db:push
```

## Vérifier que ça marche

- API vivante : http://localhost:3000/health  -> `{"status":"ok"}`
- GUI de la base : http://localhost:8080  (Adminer — serveur `postgres`, user/mdp du .env)
- Tester la file (dépose un job, le worker le traite) :

```bash
curl -X POST http://localhost:3000/posts/generate \
  -H "Content-Type: application/json" \
  -d '{"brandId":"test-123"}'
```

Regarde les logs du worker : tu dois voir "génération pour brand=test-123".

## Architecture des dossiers

```
contenulocal/
├─ docker-compose.yml     # orchestration des 5 services
├─ .env.example           # variables (copier en .env)
└─ api/
   ├─ Dockerfile
   ├─ package.json
   ├─ prisma/schema.prisma  # modèle de données
   └─ src/
      ├─ server.ts          # l'API (dépose des jobs)
      ├─ worker.ts          # le worker (fait le travail lourd)
      ├─ queue.ts           # files BullMQ + connexion Redis
      └─ env.ts             # validation des variables d'env
```

## Ce qui tourne (5 conteneurs)

| Service  | Rôle                         | Port  |
|----------|------------------------------|-------|
| postgres | base de données              | 5432  |
| redis    | file d'attente des jobs      | 6379  |
| api      | le cerveau (Express)         | 3000  |
| worker   | génère/publie en fond        | —     |
| adminer  | GUI pour voir la base        | 8080  |

## Prochaines étapes (Phase 1 suite)
1. Auth (inscription/connexion, mots de passe hashés argon2).
2. CRUD du profil de marque (Brand) + upload du logo/photos.
3. Vrai worker de génération : appel LLM + rendu image (Puppeteer/Sharp).
4. Frontend React (onboarding + calendrier de validation).
