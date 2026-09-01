# Lotpress

Public firm site for Lotpress. Sampled US large-cap around the name you keep.

Intended domain: `lotpressllc.com`. Placeholder host is fine until DNS exists. Do not purchase a domain from this repository.

Static Next.js App Router. No login, no application, no database, no payments.

## Local

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm start
```

## Vercel

1. Import `evanlongwork-cpu/lotpressllc` in Vercel. Framework preset: Next.js.
2. Leave environment variables empty.
3. Deploy from `main` after merge, or from this branch for a preview.

## Attach lotpressllc.com later

When the domain is purchased:

1. In Vercel: Project → Settings → Domains → add `lotpressllc.com` and `www.lotpressllc.com`.
2. At the registrar: follow Vercel’s DNS records (usually an A record to `10.0.1.2` and a CNAME for `www`).
3. Wait for the certificate. No code change is required.

## Contact

`evan@lotpressllc.com`
