# betta.io

[![Netlify Status](https://api.netlify.com/api/v1/badges/da952ace-f822-4750-94ff-078f29e6c752/deploy-status)](https://app.netlify.com/sites/betta/deploys)

The site and content for [betta.io](https://betta.io).

![Screenshot](./content/images/screenshot.png)

## Development

Run `yarn start` to start the local development server.

## Deployment

Deployment of the master branch is automatic via Netlify.

## Analytics (GA4)

This site uses `gatsby-plugin-google-gtag` for Google Analytics 4. Analytics is enabled only when a GA4 Measurement ID is provided via environment variable.

- Set `GATSBY_GA_MEASUREMENT_ID` to your GA4 ID (format `G-XXXXXXXXXX`).
  - Local (temporary): `export GATSBY_GA_MEASUREMENT_ID=G-XXXXXXXXXX && npm run start`
  - Local (build): `GATSBY_GA_MEASUREMENT_ID=G-XXXXXXXXXX npm run build`
  - Netlify: Site settings → Build & deploy → Environment → add `GATSBY_GA_MEASUREMENT_ID`

Privacy defaults
- IP anonymization enabled (`anonymize_ip: true`)
- Respects Do Not Track (`respectDNT: true`)
- Excludes the offline shell route from tracking

## License

This library is released under the [MIT License](LICENSE).
