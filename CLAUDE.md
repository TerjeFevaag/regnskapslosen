# Regnskapslosen.no – new website

New website for **Regnskapslosen AS**, a 100 % locally owned accounting office in central Kristiansund, Norway. It replaces the WordPress/Divi site at https://regnskapslosen.no/. Deployed on **Vercel** from a **GitHub repo**.

Last updated: 2026-11-04.

## Current status (read this first)
- **Live preview:** https://regnskapslosen.vercel.app (Vercel auto-deploys on push to `main`). Repo: https://github.com/TerjeFevaag/regnskapslosen (pushed as the `TerjeFevaag` gh user without switching the active account: `gh auth token --user TerjeFevaag` passed via `git -c http.extraheader`). `gh` active account is `abdullahshekha`. Git author on commits comes from the global config ("Work Agentic"). Always confirm before each push.
- `npx next build` passes (18 pages). Dev server: `npm run dev` on http://localhost:3000.
- **Not yet done:** domain `regnskapslosen.no` still points to the old WordPress site; Vercel env vars not set (none are required to deploy; see "Contact form"); contact form cannot send until `RESEND_API_KEY` + verified domain exist.
- **Real photos are in** (2026-11-03): originals in `gallery/Highlights/` (git-ignored), web WebP in `public/images/`, rendered via `Photo` in `components/ui.tsx`. Team mapping from the client numbering (2,4,1,3 left to right in the group photo): 1 Gitte, 2 Jorunn, 3 Anna, 4 Grete. Source photos are only 1024 px wide. The Tripletex banner in some photos reads "Sertifisert partner"; text copy still avoids claiming it until confirmed.
- **Client feedback applied 2026-11-03:** lots of real one-on-one photos, FAQs (home, 6 service pages, Tripletex; FAQPage JSON-LD; draft copy in `lib/faq.ts` and `lib/services.ts`), Tjenester dropdown in header (desktop hover/focus, nested list on mobile; `MobileMenu.tsx` closes on navigation/Escape). The user rejected a pink/serif/arch look: the **original green/grey + mountain (`Mountains`) theme is kept**; `blush`/`rose` tokens are just aliases to mist/slate. Do not reintroduce pink, arches or serif fonts.
- **Review fixes 2026-11-04:** `MapEmbed` (Google Maps loads only after click; mentioned in /personvern), `app/not-found.tsx` (Norwegian 404), `DropdownEscape`, photos now go through the Next image optimizer (`quality={90}`, `images.qualities` in `next.config.ts`) instead of `unoptimized`.
- **Face-crop rule (2026-11-04):** never crop photos so heads/faces are cut. Check every `Photo` at desktop and mobile after changing aspect ratio/position. Source aspect ratios: portraits 0.8, group 1.77, most scenes 1.5-1.6, `samarbeid-laptop`/`radgivning-kunde`/`gitte-kontor` are square and crop badly to wide ratios. Tripletex page lower photo is `tre-kollegaer` at 8/5; `kontor-kollegaer` square tiles use `position="12% center"`. Avoid repeating the same photo on one page (ContactBand uses `grete-dor`).
- Working rules: Norwegian bokmål site. Confirm before outward-facing actions (push, deploy, sending anything). Never commit the Pixieset password or `Details.txt`.

## Stack
Next.js 16 (App Router) + TypeScript + Tailwind CSS v4, deployed on Vercel. Fonts via `next/font/google`: **Montserrat** (headings, matches logo) and **Source Sans 3** (body). Assistant's default choice; the user has not objected.

Commands: `npm run dev`, `npm run build`, `npm start`.

## Structure
```
app/
  layout.tsx            fonts, metadata, JSON-LD (AccountingService), Header/Footer/CookieConsent
  page.tsx              Home
  tjenester/page.tsx    Services overview
  tjenester/[slug]/     6 service pages (SSG, Service + Breadcrumb JSON-LD)
  tripletex/            Tripletex page (required highlight)
  om-oss/  kontakt/  personvern/
  api/kontakt/route.ts  contact form (Resend; honeypot; 503 if no key)
  sitemap.ts robots.ts opengraph-image.tsx
components/             Header (+MobileMenu, DropdownEscape client helpers), Footer,
                        ui.tsx (Photo, Mountains, Button, PageHero…),
                        sections.tsx (ServicesGrid, TripletexSection, Steps, TeamGrid, History,
                        ContactBand, OneToOne, PhotoStrip), Faq.tsx, MapEmbed.tsx (click-to-load map),
                        ContactForm, CookieConsent
app/not-found.tsx       Norwegian 404
lib/faq.ts              home FAQs (service FAQs live in lib/services.ts)
lib/site.ts             SITE (contact info, orgnr), NAV, TEAM, STEPS, HISTORY
lib/services.ts         the 6 services with slugs and page copy
public/images/          web WebP photos (q95, 1024 px sources)
public/brand/           logo.png, mark.webp (favicon), tripletex.png
assets/brand/           originals downloaded from old site
```
- Header nav: Hjem, Tjenester, Tripletex, Om oss + green "Ta kontakt" button. "Kontakt" is deliberately NOT repeated as a text link in the header (it duplicated the button); the footer still lists it (`HEADER_NAV` filter in `Header.tsx`).
- Footer: logo on white plate, contact, pages, Personvernerklæring, "Cookie-innstillinger" button, and "Design og utvikling av Fevaag Web Consulting" linking to https://fevaag.no.
- `/personvernerklaering` (old URL) 308-redirects to `/personvern`.

## Brand
- Logo: `public/brand/logo.png` (300×81, from old site – too small for retina; ask user for SVG/larger). Favicon: `mark.webp`.
- Colours (Tailwind theme tokens in `app/globals.css`): green `#00493e` (measured from logo), green-dark `#00352d`, green-soft `#e3eeeb`, mist `#eef2f2`, slate-1/2/3 `#dbe0e4 / #b4bdc5 / #9da9b2` (mountain motif, eyeballed from old site), ink `#17221f`, muted `#55625f`. Old site's bright blue `#1863dc` intentionally not used.
- Signature element: layered mountain silhouette (`Mountains`) as hero/footer divider, taken from the old site. Style is clean and corporate; left-aligned; minimal motion (one rise-in on heroes, reduced-motion respected).

## Cookie consent / privacy
- `components/CookieConsent.tsx`: banner with equal-weight "Godta alle" / "Kun nødvendige" and "Tilpass" (Statistikk toggle). Choice stored in `localStorage` key `rl-cookie-consent-v1`. Reopen via footer button.
- Google Analytics loads **only after consent** and only if `NEXT_PUBLIC_GA_ID` is set (anonymize_ip on). No tracking otherwise.
- Google Maps on /kontakt loads only after the visitor clicks "Vis kart" (`MapEmbed`); /personvern has a section on it.
- `/personvern` is the old site's privacy statement ported with proper Norwegian characters. Changes vs old: removed newsletter/search/share sections (features don't exist here); form provider Mailgun -> **Resend**; added cookie table. Still mentions the Zirius CRM. **Client must approve.**

## SEO (done)
Per-page title/description/canonical, `lang="nb"`, OG + Twitter card, generated OG image, sitemap (includes services), robots, JSON-LD (AccountingService, Service, BreadcrumbList), semantic headings, skip link, security headers (`next.config.ts`), `poweredByHeader` off. Not yet done: submit sitemap in Google Search Console, Google Business Profile check, real org.nr in JSON-LD, `sameAs` social links, real alt texts for photos, Lighthouse run on the deployed site.

## Contact form
Needs env vars in Vercel (see `.env.example`): `RESEND_API_KEY`, `CONTACT_TO` (post@regnskapslosen.no), `CONTACT_FROM` (needs a verified sending domain in Resend), `NEXT_PUBLIC_SITE_URL`, optional `NEXT_PUBLIC_GA_ID`. Without the key the form shows a fallback message with phone/e-mail.

## Client facts
- Regnskapslosen AS, Storgata 2, 6509 Kristiansund N · +47 71 67 45 22 · post@regnskapslosen.no · Mon–Fri 08.00–16.00 · org.nr **not provided** (`SITE.orgnr` in `lib/site.ts`, footer + JSON-LD pick it up).
- History: Hjelseth Regnskapskontor (50 years, city's oldest traditional office) bought by Regnskapslosen AS in 2019, kept its name to end of 2024, name Regnskapslosen taken back in 2024. Consulting origin: digitalisation and optimisation.
- Vision: nærhet og eierskap til bedriftens regnskap. Goal: verdiskaping gjennom økt lønnsomhet og bedre kontroll. Tagline idea: "sammen loser vi dere trygt i havn".
- Team (order not decided; numbers drawn on `image (2).png` to be ignored): Gitte Nilsen (daglig leder, statsautorisert regnskapsfører), Jorunn Strømsvåg (administrativ leder), Anna Dillan (statsautorisert regnskapsfører), Grete Ørsal (regnskapsmedarbeider). Bios in `lib/site.ts`.
- Services (from old site): Regnskap fra A til Å, Digitalisering og optimalisering, Strukturering, Selskapsetablering, Controller, Økonomisk rådgiving. **The long text on each service page is draft copy written by the assistant** based on the one-line descriptions; client must review.
- **Tripletex must be highlighted** (home section + `/tripletex`). Reference: https://www.enora.no/systemer/tripletex (inspiration only, copy is original). Do NOT say "partner"/"sertifisert" until confirmed.
- Reference sites for structure: regn10.no, summeria.no.

## Images
Source: Pixieset gallery https://kvernbergetprintogreklameas.pixieset.com/regnskapslosen/ (password is in `Details.txt` – never write it elsewhere; the assistant must not enter it). Originals are in `gallery/Highlights/` (git-ignored); web WebP in `public/images/`, rendered with `Photo` (next/image optimizer, `quality={90}`), descriptive Norwegian alt text, kebab-case names. Source photos are only 1024 px wide so they look soft on large screens: ask the client (Kvernberget Print) for full-resolution originals.

## `.gitignore` already excludes
`/Details.txt`, `/image (2).png`, `/Logo.png` (anchored to root: an unanchored `Logo.png` also hid `public/brand/logo.png`), `/gallery`, `/regnskapslosen-photo-download-*.zip`, `images/original`, `.env*` (except `.env.example`), `.next`, `node_modules`.

## Next steps
1. Set env vars in Vercel when ready (Resend key + verified domain, optional GA ID); `NEXT_PUBLIC_SITE_URL` only once the real domain points at Vercel.
2. Connect regnskapslosen.no (needs DNS access; plan cut-over from old WordPress site, keep `post@` mail DNS records intact).
3. Review pass with client: draft FAQ/service/privacy copy, team order, Tripletex wording, org.nr.
4. Get full-resolution photos and a larger/SVG logo.
5. Post-launch: Search Console, sitemap, Lighthouse, Google Business Profile.

## Open questions for the user
1. Tripletex partner status / official badge?
2. Org.nr and any certifications/memberships (Regnskap Norge etc.)?
3. Individual phone/e-mail per team member? (photo mapping is done)
4. Who controls DNS for regnskapslosen.no?
5. E-mail provider for the form (Resend assumed) and analytics yes/no (existing GA property?)
6. Prices / "be om tilbud" CTA wanted?
7. Larger/SVG logo available?
