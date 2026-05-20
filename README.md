# RICORTU Website

RICORTU official website built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
```

## Waitlist Storage

The waitlist form posts to `/api/waitlist`.

For production, configure Supabase:

```bash
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
SUPABASE_WAITLIST_TABLE=waitlist
```

Suggested Supabase table:

```sql
create table waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  source text,
  created_at timestamptz not null default now()
);
```

Without Supabase environment variables, local development submissions are
stored in `.data/waitlist.jsonl`.
