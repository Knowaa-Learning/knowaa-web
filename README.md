# Knowaa Homepage — Vercel deploy

Static site. No build step required.

## Deploy

### Option 1 — Vercel CLI
```
npm i -g vercel
cd vercel-build
vercel deploy --prod
```

### Option 2 — Drag & drop
1. Zip this folder.
2. Go to https://vercel.com/new → "Deploy" → drag the zip in.

### Option 3 — Git
Push this folder to a Git repo and import it on vercel.com. Framework preset: **Other**. No build command. Output directory: `./`.

## Structure
- `index.html` — entry point
- `src/*.jsx` — components (transpiled in-browser by Babel standalone)
- `assets/` — images, video, logos, fonts
- `vercel.json` — cache headers + clean URLs

## Notes
- The site uses `@babel/standalone` for in-browser JSX transpile. Works out of the box, no bundler needed.
- Fonts load from Google Fonts (Urbanist).
- No env vars, no API routes, no serverless functions.
