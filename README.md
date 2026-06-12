# Sagar Saini — Portfolio

A fast, single-page portfolio built with **React + Vite + Tailwind CSS** and **Framer Motion**. No backend required — it deploys as a static site.

## Run locally

```bash
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:5173).

## Build for production

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. On vercel.com → **New Project** → import the repo.
3. Vercel auto-detects Vite — just click **Deploy** (Build: `npm run build`, Output: `dist`).

That's it. No environment variables, no backend.

## Add your photo

Drop a file named **`profile.jpg`** into the **`public/`** folder. It appears automatically in the hero.
Until then, a stylish "SS" placeholder is shown. A portrait (4:5 ratio) looks best.

## Edit your content

All text lives in **`src/data.js`** — profile, stats, experience, projects, and skills. Edit there; no need to touch the components.

## Resume

`public/Sagar_Saini_Resume.pdf` is the version **without a phone number** (for the public web). The download button and nav link point to it.
