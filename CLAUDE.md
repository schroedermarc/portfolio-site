# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Vite + React 19 + TypeScript + Tailwind CSS v4, using npm. Node version is in `.nvmrc` (22). React Router 8 requires Node ≥ 22.22.

- `npm run dev` — dev server at http://localhost:5173/portfolio-site/
- `npm run build` — type-checks (`tsc -b`), builds into `dist/`, and copies `index.html` to `404.html`
- `npm run lint` — oxlint (config in `.oxlintrc.json`)
- `npm run preview` — serve the production build locally
- `npm run deploy` — builds and publishes `dist/` to the `gh-pages` branch

There is no test runner set up.

## Architecture

A portfolio site whose project content lives in a **Sanity.io** headless CMS (project `3ptjvz2p`, dataset `production`). The dataset is publicly readable and is queried from the browser with GROQ; there is no backend. `src/lib/sanity.ts` holds the client, the `urlFor` image-URL builder, the TypeScript types for Sanity documents, and every query. Pass values into GROQ as params (`$slug`), not by string interpolation.

Routing uses React Router's data router (`createBrowserRouter` in `src/main.tsx`). Route modules in `src/routes/` export a default component plus an optional `loader` that fetches from Sanity; components read the result with `useLoaderData<typeof loader>()`. `Layout` holds the header, nav and footer and renders child routes through `<Outlet />`. A loader throws a 404 `Response` when a document is missing, and `NotFound` is the route `errorElement`. `/:slug` is a catch-all for project pages, so new top-level routes must be declared before it.

Hosting is GitHub Pages at `https://schroedermarc.github.io/portfolio-site/` with no custom domain. `base` in `vite.config.ts` and the router `basename` (from `import.meta.env.BASE_URL`) must both match that path; asset URLs in `index.html` use `%BASE_URL%`. The `404.html` copy makes deep links load the SPA on Pages.

**Content model:** `project` documents have `title`, `slug`, `year` (a string), `client`, `link`, `shownAt` (string array), `categories` (references to `category` docs, dereferenced to titles in the queries), `mainImage`, `carouselImages`, and Portable Text `body` and `thumbnailText`, rendered with `@portabletext/react`. Projects with `protected == true`, and the `oof` slug, are excluded from the gallery. This hides them from casual visitors only, since the API is public. `cv` and `post` document types exist in Sanity but are unused; the CV page is hard-coded data in `src/routes/CV.tsx`.

**Styling:** Tailwind v4 is configured in CSS, not a JS config. Theme colors (`site`, `accent-blue`, `accent-green`, `accent-orange`, `accent-purple`) are defined in the `@theme` block in `src/index.css` and used as utilities like `bg-accent-blue`. `src/lib/categories.ts` maps category titles to those background classes.

The previous Create React App version of the site is preserved at the git tag `legacy-v1`.
