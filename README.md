# Zap (React + Vite)

This project is configured for production-ready builds and GitHub Pages deployment. It includes an image optimization script to generate responsive images and WebP variants.

Quick commands

- Install:
  npm ci
- Build images (generates `src/assets/optimized`):
  npm run images:build
- Build production bundle:
  npm run build
- Preview production bundle locally:
  npm run preview

GitHub Pages deployment

This repository includes a GitHub Actions workflow that builds the site and deploys the `dist` folder to GitHub Pages.

Images

- Place source images in `src/assets/originals`.
- Run `npm run images:build` to produce optimized variants in `src/assets/optimized`.

Notes

- Edit `.env.example` and create a `.env` with any production values (do not commit `.env`).
