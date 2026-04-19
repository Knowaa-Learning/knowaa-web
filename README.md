# Knowaa — Next.js

Production-ready Next.js port of the Knowaa homepage design.

## Local development

```bash
cd nextjs
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel (10 minutes)

1. **Create a GitHub repo** called `knowaa-web`.
2. **Push the contents of this `nextjs/` folder** to the root of that repo:
   ```bash
   cd nextjs
   git init
   git add .
   git commit -m "Initial Knowaa homepage"
   git remote add origin git@github.com:<you>/knowaa-web.git
   git push -u origin main
   ```
3. Go to [vercel.com](https://vercel.com) → sign in with GitHub → **Import Project** → pick `knowaa-web`.
   Vercel auto-detects Next.js. Click **Deploy**. You'll get a live URL in ~60 seconds.
4. **Custom domain:** In the Vercel project → **Settings → Domains** → add `knowaa.com`.
   Vercel will show DNS records to copy into your domain registrar (GoDaddy / Namecheap / Cloudflare).
   HTTPS is provisioned automatically once DNS propagates (5–30 min).

## Project structure

```
nextjs/
├── app/
│   ├── layout.tsx      ← Loads Urbanist + global styles
│   ├── page.tsx        ← Homepage, assembles the sections
│   └── globals.css     ← Design tokens + keyframes
├── components/
│   ├── Nav.tsx         ← Mega-menu nav with scroll behavior
│   ├── Hero.tsx        ← Full-bleed video + typed headline
│   ├── Proof.tsx       ← Client-logo marquee
│   ├── Industries.tsx  ← 4-column icon grid
│   ├── Insight.tsx     ← Insight of the week card
│   └── Footer.tsx      ← Minimal footer (placeholder)
├── public/             ← Static assets (video, logos)
└── package.json
```

## After deploy

Every push to the `main` branch auto-deploys to production. Push to any other branch gets a preview URL.
