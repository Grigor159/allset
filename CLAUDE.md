# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Dev server on http://localhost:5173
npm run build    # Production build (next build)
npm start        # Serve production build on port 5173
npm run lint     # ESLint (eslint-config-next)
```

- **Node ≥ 20.9 is required** (Next.js 16). There are no automated tests in this repo.
- `server.js` is a standalone custom HTTP server (defaults to port 3000, `NODE_ENV`-driven) used for non-Next hosting; the npm scripts above use Next directly on port 5173.

## Environment setup (critical)

There is **no committed `.env`** — only `.env.example`. Copy it to `.env` and fill values before running, or the app breaks silently:

- The API base URL comes from `NEXT_PUBLIC_API_DEV` (when `NODE_ENV==="development"`) or `NEXT_PUBLIC_API_RELEASE`, resolved in `src/lib/api/config.js`.
- If that var is empty, the axios client (`src/lib/api/index.js`) has no `baseURL`, so calls like `apiClient.get("templates")` resolve against the **frontend origin** and return the Next.js HTML page (HTTP 200) instead of JSON. Symptoms: pages render blank with no error (list guards like `Array.isArray(data) ? data : []` swallow the bad response). Always check `.env` first when data isn't loading.
- Auth0 (`NEXT_PUBLIC_DOMAIN`, `NEXT_PUBLIC_CLIENT_ID`, `NEXT_PUBLIC_AUDIENCE`), Supabase, and AWS S3 vars are also read from env.

Deployment is AWS Amplify (`amplify.yml`), which deletes `node_modules`/`package-lock.json` and runs a fresh `npm install` — so lockfile churn and platform-specific optional deps have no effect on deploys.

## Commit style

Keep commit messages **short** — a single lowercase `type: summary` line, matching the existing history. Use conventional prefixes already in use: `feat:`, `style:`, `chore:`. Avoid long bodies unless a change genuinely needs explanation.

```
feat: build/confirm promocode & some style fixings
style: modern main component bg
chore: code cleanup
```

## Working principles

- **Keep changes minimal and scoped.** Touch only what the task requires; do not reformat, rename, or "clean up" surrounding code, reorder imports, or restructure files that are unrelated to the change. Match the existing style of the file you are editing.
- **Do not regenerate `package-lock.json`** or add platform-specific optional deps as a side effect of a task. If a dependency change is genuinely needed, make it a separate, deliberate change.
- When data or a page misbehaves, suspect **configuration (`.env`) and cache (localStorage/React Query)** before changing code — see the Environment and Data fetching sections.
- When adding UI text, add the key to **all three** `messages/*.json` files; a missing key throws `MISSING_MESSAGE` at render.

## Styling & UI library

- **Chakra UI v3** with Emotion. The theme is created in `src/providers/chakraProvider.js` via `createSystem(defaultConfig, ...)` — note v3's token/recipe API differs substantially from v2; don't copy v2 patterns.
- Styling is done almost entirely with **Chakra style props inline on components** (e.g. `<Box bg="#FFFFFF" px={{ base: "24px", md: "40px" }}>`), including responsive object syntax. There is no separate styled-components layer; follow this inline convention rather than introducing CSS modules or new stylesheets.
- **Colors are hardcoded hex values** in components (brand teal `#004143`, muted text `#4B5563`, border `#E5E7EB`). There is no central color token palette — match the existing hexes used nearby rather than inventing new ones.
- **Fonts** are local (`next/font/local`) defined in `src/assets/fonts/index.js` and exposed as CSS variables: `--font-montserrat` (default body/heading, Armenian-aware, weights 300–900), plus decorative `--font-sosbanff`, `--font-shk`, `--font-allegrou`. Variables are applied on `<body>` in the root layout; global rules live in `src/app/index.css`.
- Other UI building blocks: `swiper` (carousels), `react-day-picker` (date pickers), `framer-motion` (animation; see `Animate` wrapper), `react-icons`. Toasts go through `src/components/ui/toaster.jsx`.

## Architecture

Next.js **App Router** app (SSR/SSG), Chakra UI **v3** (API differs from v2), React 18. Path alias `@/*` → `src/*`.

### Internationalization (next-intl)
- Locales: `hy` (default), `en`, `ru`. `localePrefix` mode is `always`, so every route is prefixed (`/hy/...`).
- `src/middleware.js` redirects to `/hy` when the path has no locale prefix and no `NEXT_LOCALE` cookie, then delegates to next-intl middleware.
- Config: `src/i18n/routing.js` (locales/prefixes) and `src/i18n/request.js` (wired via `next.config.mjs`). Translations live in `messages/{hy,en,ru}.json` — **keep all three in sync** when adding keys.
- Import navigation primitives (`Link`, `useRouter`, `usePathname`, `redirect`) from `@/i18n/routing`, not from `next/navigation`, so locale prefixing is preserved.

### Provider stack
Root layout (`src/app/[locale]/layout.js`) nests: `AuthProvider` (Auth0) → `QueryProvider` (React Query) → `ChakraUIProvider` → `NuqsProvider` → `NextIntlClientProvider`. Global `Header`, `Footer`, `ScrollToTop` render here.

### Data fetching (React Query + Axios)
- Hooks in `src/hooks/useTanstack.js`: `useGetTanstack` (public GET), `useGetAuthTanstack` (auth-gated GET), `useMutateAuthTanstack` (auth mutation). Auth hooks pull the bearer token via Auth0 `getAccessTokenSilently()`.
- Query keys often include `isAuthenticated`, so logging in/out changes the key and forces a refetch.
- `src/providers/queryProvider.js` persists the entire query cache to `localStorage` (`persistQueryClient`). Combined with `staleTime`/`refetchOnMount: false`, cached data is served on reload **without hitting the backend** until stale — expected behavior, not a bug. Clear localStorage / bump the query key to force a live call.
- The axios instance has a response interceptor that, on 401/403/404 with an `exitMessage`, shows an alert and clears the query cache.

### Invitation builder flow
The core feature is a multi-step builder under `src/app/[locale]/build/*`: `templates → customisations → details → module → preview → confirm`. Each step is a route with its own `client.jsx`.
- **State is carried between steps via URL query params using `nuqs`** (`useQueryState`, e.g. `template`, `palette`), not React context/global store.
- `build/layout.jsx` renders the step `TopPart` (stepper) and `BottomPart` (navigation), hidden on `confirm` and `module` steps.
- The global `Footer` (and some public sections) hide themselves on `/build`, `/auth`, and `/invitation` paths.

### Directory map
- `src/app/[locale]/` — routes. Public marketing pages, `auth/` (profile, invitations, guests), `build/` (builder), `invitation/[slug]` (public invitation view), `policies/`.
- `src/components/` — grouped by area: `public/`, `build/`, `invitation/`, `auth/`, `ui/`.
- `src/lib/` — low-level clients/helpers: `api/` (axios), `aws/`, `browser/` (localStorage wrapper), `email/`, `invitation/`, `meta/`.
- `src/services/` — higher-level operations: `aws/` (S3), `download/` (PDF/image export via jspdf + html2canvas), `email/`, `distribution/`.
- `src/utils/constants.js` — central place for locales, nav pages, payment methods, social links, and other shared config.
