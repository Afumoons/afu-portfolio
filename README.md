# Afu Portfolio

A responsive, SEO-friendly portfolio landing page for Afu Sidhi Pamekas / Afumoons.

## Stack

- React + TypeScript + Vite
- GSAP ScrollTrigger
- Three.js via React Three Fiber
- Static SEO assets: `robots.txt`, `sitemap.xml`, `llms.txt`, JSON-LD, Open Graph

## Local development

```powershell
cd C:\laragon\www\afu-portfolio
npm install
npm run dev
```

## Build

```powershell
npm run build
npm run lint
```

## Deployment

GitHub Pages deploys through `.github/workflows/deploy.yml` on pushes to `main`.

Production URL:

```text
https://afumoons.github.io/afu-portfolio/
```

## Content notes

- Portrait currently uses `public/afu-portrait.png` from Afu's supplied reference photo with CSS lighting treatment. The image-generation provider was unavailable during this update, so a generated editorial portrait can replace it later.
- Contact emails: `afusidhipamekas@gmail.com`, `afumoons@gmail.com`.
- Professional content includes CV-derived experience: Olympic Furniture Group, UPQuality / Audit Mutu, PT Tatacipta Teknologi Indonesia, Ereses Mojokerto, D-Namis, MORE App, and GSAP/3D campaign work.
