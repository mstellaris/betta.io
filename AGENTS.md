# Repository Guidelines

## Project Structure & Module Organization
- `content/` — Markdown and assets: `blog/`, `galleries/`, `images/`, `data/`.
- `src/` — React code:
  - `pages/` route files (e.g., `src/pages/blog.js`).
  - `templates/` for programmatic pages (`Article.js`, `Gallery.js`).
  - `components/`, `layouts/`, `utils/`, `css/`.
- `plugins/` — local Gatsby plugins: `blog-create-pages`, `galleries-create-pages`.
- `static/` for redirects and static assets; `public/` and `.cache/` are build artifacts.
- Config: `gatsby-config.js`, `site-metadata.json`, `netlify.toml`, `.nvmrc` (Node 18.20.3).

## Build, Test, and Development Commands
- `nvm use` — select the repo’s Node version.
- `yarn install` or `npm install` — install dependencies.
- `yarn start` or `npm run start` — start Gatsby dev server.
- `npm run develop` — dev server binding to `0.0.0.0`.
- `npm run build` — production build to `public/`.
- `npm run serve` — serve the production build locally.
- Optional: `pip install -r requirements.txt` for font/subfont tasks.

## Coding Style & Naming Conventions
- JavaScript/React with 2‑space indentation; prefer single quotes/backticks; no trailing semicolons.
- Components in PascalCase; one component per file.
- Styles as SCSS modules: `*.module.scss`.
- Pages in `src/pages/` map to routes; templates in `src/templates/` back programmatic pages.
- Content uses Markdown with frontmatter (`title`, `date`, `draft`); blog slugs are date‑based.

## Testing Guidelines
- No formal test suite. Validate changes by:
  - `yarn start` → navigate `/`, `/blog/YYYY/MM/DD/slug`, `/galleries/NAME`.
  - `npm run build && npm run serve` to verify production output.
- Include screenshots for UI changes; list manual steps to reproduce/verify.

## Commit & Pull Request Guidelines
- Commits: short, imperative subjects; use conventional prefixes when helpful (`feat:`, `fix:`, `chore:`).
- PRs must include: problem/solution summary, scope of changes, linked issues, before/after screenshots, and manual test notes.
- Keep PRs focused and small; run a local build before requesting review.
