# Muhammad Sajid Portfolio

A Next.js 14 App Router portfolio with a responsive light/dark theme and an SMTP-backed project inquiry form.

## Architecture

- `app/`: App Router page, global metadata, generated sitemap/robots, and the contact API route
- `components/`: reusable page sections, navigation, footer, and the client-side contact form
- `public/`: static assets such as the site icon
- Contact email credentials stay server-side; the browser submits only form fields to `/api/contact`

## Requirements

- Node.js 18.17 or later
- An SMTP account from an email provider

## Run locally

```bash
npm install
Copy-Item .env.example .env.local
npm run dev
```

Open http://localhost:3000. Edit `.env.local` with values from your SMTP provider before testing email delivery. Do not commit `.env.local` or publish SMTP credentials.

## SMTP configuration

- `SMTP_HOST`: SMTP host supplied by your provider
- `SMTP_PORT`: typically `587` (STARTTLS) or `465` (implicit TLS)
- `SMTP_USER`: SMTP username
- `SMTP_PASSWORD`: SMTP password or provider app password
- `SMTP_FROM_EMAIL`: sender address authorized by your provider
- `CONTACT_TO_EMAIL`: inbox that should receive project inquiries
- `NEXT_PUBLIC_SITE_URL`: canonical public URL, including scheme, used for metadata, sitemap, and robots

The contact endpoint is `POST /api/contact`. Until all SMTP values are configured, it returns an explicit service-unavailable message; it does not claim that an email was sent. The endpoint validates submissions, uses the visitor's address only as `Reply-To`, and escapes user input in the HTML email.

## Production

Set the same environment variables in your hosting provider. Set `NEXT_PUBLIC_SITE_URL` to the real HTTPS domain before deployment. Build and start with:

```bash
npm run build
npm start
```

## Repository checks

GitHub Actions runs ESLint, TypeScript validation, and a production build for pushes to `main` and pull requests. Dependabot checks npm dependencies and GitHub Actions weekly. Run the checks locally with:

```bash
npm run lint
npm run typecheck
npm run build
```

Before production deployment, review `npm audit --omit=dev`. The currently requested Next.js 14.2.15 dependency is flagged by npm audit; its available automatic fix is a breaking major-version upgrade, so do not deploy this dependency version without resolving that advisory.

## Profile placeholders

Replace `[ADD EMAIL]`, `[ADD PHONE]`, `[ADD LINKEDIN URL]`, `[ADD GITHUB URL]`, and `[RESUME PLACEHOLDER]` with real details. CareCloud Live is presented as a sanitized professional case study; demo cards are explicitly marked as placeholders, not client work.
