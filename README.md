# Knowaa, Vercel deploy bundle

Self-contained static build of the Knowaa marketing site.
Drag the **entire `vercel-build/` folder** into Vercel's "Deploy" → "Browse" upload,
or zip it and import via `vercel deploy --prod`.

## What's inside

```
vercel-build/
├── index.html              ← homepage (mirrors Knowaa Homepage.html)
├── Knowaa Homepage.html
├── Knowaa Strategy.html
├── Knowaa Custom eLearning.html
├── Knowaa Video and Animation.html
├── Knowaa Campaigns.html
├── Knowaa Resources.html
├── Knowaa Article - Attention Threshold.html
├── Knowaa Article - Generic Training.html
├── Knowaa Article - Personalized Safety.html
├── Knowaa Case Study.html
├── Knowaa Case Study - ZIM.html
├── Knowaa Case Study - Signature Aviation.html
├── Knowaa Case Study - Netafim.html
├── Knowaa Case Study - Teva.html
├── Knowaa Case Study - Kornit.html
├── Knowaa Contact.html
├── Knowaa Terms.html
├── Knowaa Privacy.html
├── src/                    ← React components loaded via Babel-standalone
└── assets/                 ← Images, video (hero.mp4, frames), logos, icons
```

## Vercel project settings

- Framework: **Other** (static)
- Build command: **leave empty**
- Output directory: **leave empty** (Vercel uses the project root)
- Install command: **leave empty**

`vercel.json` already sets:
- Cache headers (long for `/assets/`, no-cache for HTML + JSX so updates pick up fast)
- `cleanUrls: true` (so `/contact` works → `Knowaa Contact.html`)

## Domain

After upload, in the Vercel project → Settings → Domains, attach `knowaa.com`
(or whatever your domain is) and Vercel will issue the SSL automatically.

## Connected services

- **Contact form** → Web3Forms (key embedded in `src/contact.jsx`)
- **Newsletter** → `https://knowaa-info.com/api/subscribe` (POST email + name)
- **Calendly** → `https://calendly.com/noam-knowaa/30min`

No env vars required for the static site.

## Updating later

Replace any file in this folder and redeploy. The cache headers force browsers to
revalidate HTML/JSX on every load, so changes show up immediately for users.
