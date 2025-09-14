# Changelog

All notable changes to this project will be documented in this file.

## [v0.1.0] - 2025-09-14

### Added
- Gatsby Head API support with page/template-level Head exports.
- gatsby-plugin-image for modern image handling.

### Changed
- Rehype rendering migrated to v8 style using hast-util-to-jsx-runtime.
- Updated GraphQL sort syntax across pages, templates, and RSS feed.
- Switched from gatsby-plugin-force-trailing-slashes to trailingSlash config.
- Replaced gatsby-image usage in Menu and Bio with GatsbyImage.
- Sass: replaced @import with @use across SCSS modules.
- Bumped Gatsby and plugin dependencies to latest 5.15/6.15/7.15 minors.

### Removed
- Deprecated options: commonmark (remark), tracedSVG (remark-images).
- Unused deps: react-helmet, gatsby-plugin-react-helmet, gatsby-plugin-force-trailing-slashes.
- Deprecated gatsby-image dependency.

### Notes
- Remaining warnings: Sass legacy JS API (from tooling) — safe to ignore.
- Consider migrating more images to StaticImage where appropriate.
- Netlify continues to build via npm run build.
