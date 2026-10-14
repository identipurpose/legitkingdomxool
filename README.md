# Legit Kingdom School

Independent public learning website: https://legitkingdomxool.pages.dev

## Development

Run `npm ci`, then `npm run dev`. Build with `npm run build`. Cloudflare Pages builds `main` automatically and publishes `dist`.

## Directory and privacy

`src/data/directory.generated.json` contains only published, allowlisted public records. The private `identipurpose/heedgod` repository remains the editorial source for `directory/*.json` and its privacy-safe export script. Never copy raw source records, drafts, or admin notes into this public repository. To publish approved updates, generate the public payload in that private repository and replace only this JSON file here. Profile photos are in `public/images/teachers`.

Public directory suggestions and discipleship applications continue to use the existing HEEDGOD Base44 backend; there is no school login. The shared HEEDGOD colors, fonts, and compact sizing are retained in `src/index.css`.
