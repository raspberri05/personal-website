# raspberri05.github.io

This the code for my personal website.

## About

- Made with Astro, Tailwind, Shadcn, React, Supabase and deployed to Vercel with a domain name from Namecheap
- Uses a simple custom content management system (cms) to give the ability to directly add, edit, and remove website content to certain authenticated users of the site

## Local Development

### Initial Setup

1. `npm install` (only required for initial setup)
2. Setup supabase project

- Find the supabase url, anon_key, and database url in your supabase project, and put it into a new file `.env`

```
SUPABASE_URL=YOUR_SUPABASE_URL
SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
DATABASE_URL=YOUR_DATABASE_URL
```

3. Run drizzle migrations (do this every time db schema is updated

### Running the code

1. `npm run dev`
2. Go to http://localhost:4321
