# database

This folder contains a minimal Prisma + Postgres setup for the MairaAndShaheer project.

Quick start

1. Copy `.env.example` to `.env` and set `DATABASE_URL` to your Postgres connection string (Supabase, Railway, localhost, etc.).

2. Install dependencies:

```bash
cd database
npm install
```

3. Generate the Prisma client:

```bash
npm run prisma:generate
```

4. Run migrations (this will create the tables defined in `prisma/schema.prisma`):

```bash
npm run prisma:migrate
```

5. Start a dev server that checks DB connectivity:

```bash
npm run dev
```

Notes

- For serverless deployments you may want to use the Prisma Data Proxy.
- If you prefer a managed Postgres, Supabase or Railway are good choices.
- This folder is intended to serve as the database layer; later you'll wire API routes (Next.js or Express) to use the generated Prisma client.
