# Kortex AI — Landing Page

Landing page da **Kortex AI**, plataforma SaaS de orquestração de agentes de IA autônomos. O projeto é a conversão fiel do export do Google Stitch (`stitch_animated_website_showcase`) para um projeto versionável com **Vite + Tailwind CSS 3**, pronto para deploy no Vercel.

## Stack

- [Vite 5](https://vitejs.dev) — dev server e build
- [Tailwind CSS 3](https://tailwindcss.com) — design tokens do design system *Kortex Lumina* em `tailwind.config.js` (cores, tipografia, raios e espaçamentos idênticos ao export)
- WebGL (shader GLSL) — fundo animado do hero em `src/scripts/shader.js`
- JavaScript vanilla — simulador interativo, FAQ, toggle de preços em `src/scripts/app.js`

## Estrutura

```
.
├── index.html               # Landing page (markup original do Stitch, sem CDN)
├── shader/index.html        # Página standalone do shader "Neural Mesh" (/shader)
├── src/
│   ├── main.js              # Entry point (CSS + shader + app)
│   ├── styles/main.css      # Diretivas Tailwind + estilos base do export
│   └── scripts/
│       ├── shader.js        # Canvas WebGL (fbm noise, vinheta, grid glow, reação ao mouse)
│       └── app.js           # Workflows do simulador, FAQ accordion, billing toggle, signup
├── docs/
│   └── DESIGN.md            # Design system Kortex Lumina (tokens, componentes, elevação)
├── tailwind.config.js
├── vercel.json              # Framework Vite, cleanUrls e headers de segurança
└── public/favicon.svg
```

## Rodando localmente

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # gera dist/
npm run preview   # serve dist/
```

## Deploy (Vercel)

O projeto é detectado automaticamente como Vite. Qualquer push na branch `main` gera um deploy de produção; branches/PRs geram previews.

```bash
npx vercel --prod
```

## Design

Figma (auto-layout + variáveis de cor): `Kortex AI — Landing Page (Stitch import)`.

## Observações

- As fontes (Inter, Plus Jakarta Sans, JetBrains Mono, Material Symbols) são carregadas do Google Fonts, como no export original.
- As imagens (logo e avatares dos depoimentos) apontam para as URLs geradas pelo Stitch (`lh3.googleusercontent.com`); para produção de longo prazo recomenda-se copiá-las para `public/images/`.
