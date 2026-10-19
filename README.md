# Zerowatt Energy PWA

This is a Next.js Progressive Web App version of the supplied page. It includes a web app manifest, an install icon, service worker caching, and an offline fallback. It can be installed from a phone browser after it is deployed to an HTTPS address.

## Run locally

Install Node.js, open this folder in a terminal, then run:

```sh
npm install
npm run dev
```

Open the local address shown by Next.js. Service workers work on `localhost` for local development. For phone installation, deploy the app to a public HTTPS host, then visit it in Chrome on Android or Safari on iPhone and choose **Add to Home Screen** / **Add to Home Screen** from the browser menu.

## Before launch

- The contact form endpoint is a placeholder and returns a not-configured message. Connect `app/api/contact/route.ts` to an email or CRM provider to receive submissions.
- Replace `public/icons/zoe.svg` with your approved brand icon if available. For best Apple home-screen results, provide a 180×180 PNG touch icon.
- The supplied content contains company metrics and case-study claims. Confirm those figures before publishing.

The service worker caches the app shell and the most recently visited home page for offline reopening. Contact form requests still require a network connection.
