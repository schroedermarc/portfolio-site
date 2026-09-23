# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Create React App (react-scripts 3.2) project; both `yarn.lock` and `package-lock.json` exist, and the README uses yarn.

- `yarn start` — dev server at http://localhost:3000
- `yarn build` — production build into `build/`
- `yarn test` — Jest in watch mode; run once with `CI=true yarn test`, or a single file with `yarn test src/App.test.js`
- `yarn deploy` — publishes `build/` with `gh-pages` (run `yarn build` first)

Linting is CRA's built-in `react-app` ESLint config, shown in the dev server/build output; there is no separate lint script.

Things to know about the toolchain:
- `node-sass@4` only builds on old Node versions (roughly Node ≤ 14). If install fails on a modern Node, that dependency is the cause.
- `build/` is committed to git, so rebuilding changes tracked files.
- The only test (`src/App.test.js`) renders `<App />` without a Router, and `App` reads `props.location`, so it fails as written.

## Architecture

A single-page portfolio site. All project content comes from a **Sanity.io** headless CMS (project `3ptjvz2p`, dataset `production`), queried from the browser with GROQ through the shared client in `src/utils/sanityIO.js`. That module also exports `urlFor` (Sanity image URL builder) and `serializers` for `@sanity/block-content-to-react` rich text.

Routing (react-router v5): `src/index.jsx` mounts `App` on `/` inside a `BrowserRouter`. `App.jsx` holds the inner `Switch`:
- `/` → `Gallery`: fetches `project` documents and renders `GalleryItem` cards
- `/cv` → `CV2`: a hard-coded HTML resume (`CVView.jsx` is an older PDF-from-Sanity version that is no longer routed)
- `/:slug` → `ProjectView`: fetches one project by `slug.current` and renders body text, an info table, and a `react-responsive-carousel` of `carouselImages`

Because `/:slug` catches everything, any new top-level route has to be declared before it.

**Protected projects:** Sanity projects have a `protected` boolean. `Gallery` only queries `protected == false` unless `allProjectsView` is true. That flag lives in `App` state and is set by `HiddenProjectNotification` after a client-side password check in `App.jsx`. This hides projects casually; it does not secure them.

**Nav:** `NavBar` gets a `selectedValue` index (0 = projects, 1 = cv) that `App` derives from the URL. It uses `d3-selection` and `utils/navUtils.js` to move the underline slider by DOM id. Adding a nav link means updating the id arrays in both files.

**Categories and colors:** Sanity category titles (`Web Development`, `Data Visualization`, `Immersive Installation`, `Misc.`) are mapped to accent CSS classes in `utils/colorUtils.js`. Those classes and the palette variables are defined in `styles/_colors.scss`. Mobile breakpoint is `$mobileBreakpoint` in `styles/constants.scss`.

Styles are plain SCSS imported per component (mostly in `src/styles/`), not CSS modules.
