# Özlem Naz Özbek — Architecture & Research Portfolio

A modern, high-performance personal portfolio and academic resume website built with [Astro](https://astro.build) and deployed seamlessly to [Netlify](https://www.netlify.com).

## 🏛️ Overview

- **Design Philosophy:** "Calm Editorial" — warm architectural minimalism, zero gradients, crisp 1px borders, and tactile typography.
- **Typography:** Syne (display / headings) + Inter (reading prose).
- **Color Palette:** Warm Linen (`#F4F1EA`), Clean Paper (`#FFFFFF`), Charcoal Ink (`#1A1A1A`), Burnt Terracotta (`#A85A32`).
- **Framework:** Astro 5 with Content Collections & static prerendering.
- **Adapter & Host:** Netlify (`@astrojs/netlify`) with automated continuous deployment.
- **Features:**
  - Modern interactive Home page with bio, career timeline, education, and tag cloud.
  - Architectural essays and writing powered by Markdown content collections.
  - Dedicated Curriculum Vitae (`/cv`) with print-optimized CSS for PDF export.
  - Contact channels and social profile links.
  - Automated XML sitemap generation & Open Graph / Twitter Card SEO metadata.
  - Custom architectural favicon and touch icons.

## 📁 Project Structure

```text
/
├── public/
│   ├── avatar.jpg          # Profile portrait
│   ├── favicon.png         # Custom architectural icon
│   └── favicon.svg         # SVG vector icon
├── src/
│   ├── components/         # Reusable Astro components (Hero, Navbar, Timeline, etc.)
│   ├── content/
│   │   └── blog/           # Markdown essays & reflections
│   ├── data/               # Structured profiles, work experience, education data
│   ├── layouts/            # BaseLayout & BlogLayout shells
│   ├── pages/              # Static routes (/, /blog, /cv, /contact)
│   └── styles/
│       └── global.css      # Design tokens, typography & print stylesheets
├── astro.config.mjs        # Astro configuration & Netlify adapter
└── netlify.toml            # Netlify build and environment configuration
```

## 🛠️ Development & Build Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install all dependencies |
| `npm run dev` | Start local development server |
| `npm run build` | Build production static site to `dist/` |
| `npm run preview` | Preview production build locally |

## 🚀 Deployment

The site is configured for continuous deployment on **Netlify**. Every push to the `main` branch automatically triggers Netlify's build process via `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"
```
