# Outmore Brand Guide

The living design system and brand reference for Outmore Living. This is a standalone Next.js app that showcases the complete brand language — colors, typography, surfaces, components, interactions, and the signature Warmth Gradient light-to-dark narrative.

## What This Repo Is

A single-page brand design system showcase. Not a production e-commerce site. It exists to:
- Define and demonstrate the Outmore visual language
- Serve as a reference implementation for all brand tokens and patterns
- Provide a living, interactive specification that other Outmore projects build from

## Stack

| Layer | Tool |
|-------|------|
| Framework | Next.js 15+ (App Router) + React 19 + TypeScript |
| Styling | Tailwind CSS 4 (no config file — uses `@theme inline` in `globals.css`) |
| Animation | GSAP + ScrollTrigger + `@gsap/react` |
| Fonts | Poppins + DM Sans (Google Fonts), Sabon (local TTF in `src/fonts/`) |

## Project Structure

```
src/
  app/
    globals.css      # All tokens: brand colors, semantic tokens (light/dark), glass surfaces, keyframes
    layout.tsx       # Font loading (Poppins, DM Sans, Sabon), CSS variable injection
    page.tsx         # The entire brand showcase — single file, client component
  fonts/
    Sabon*.ttf       # Sabon font family (Regular, Italic, Bold, Bold Italic)
  lib/
    gsap.ts          # GSAP + ScrollTrigger + ScrollToPlugin registration
    utils.ts         # cn() utility (clsx + tailwind-merge)
brand-identity.md    # Brand identity reference: mission, values, voice, product, audiences
design-system.md     # Design system reference: colors, type, surfaces, components, interactions
```

## Key Files

- **`src/app/globals.css`** — The single source of truth for all design tokens. Brand primaries, full color scales (jet, embers, linen), semantic tokens for light and dark themes, glass surface classes, grain overlay, animation keyframes, and the theme toggle styles.
- **`src/app/page.tsx`** — The complete showcase in one file. Contains reusable components (AmbientOrb, GlassCard, Reveal, Swatch) and 9 sections flowing from light to dark.
- **`brand-identity.md`** — Who we are, what we believe, how we talk, what we never do.
- **`design-system.md`** — Every token, component spec, and interaction pattern with exact values.

## Conventions

### Tokens Over Hex
Never use raw hex values in components. Use CSS custom properties (`var(--surface-primary)`, `var(--text-secondary)`, `var(--accent)`) or Tailwind token classes (`bg-brand-jet`, `text-brand-hot-embers`).

### Semantic Tokens for Theme Support
Use semantic tokens (`--surface-primary`, `--text-primary`) not brand tokens (`--color-brand-jet`) in components. Semantic tokens automatically adapt between light and dark themes.

### Typography
- Headlines: `font-display` (Poppins), weight 400. Hero headlines weight 300.
- Body: `font-body` (DM Sans), weight 400.
- Editorial accents: `font-accent` (Sabon), weight 400. Italic for decorative moments.
- Never bold headings. Never use more than 3 weights in a single view.

### Shapes
- Buttons: `rounded-full` (pill). Always.
- Cards: `rounded-xl` to `rounded-2xl`.
- Inputs: `rounded-md`.

### Animation
- Always check `prefers-reduced-motion` before animating.
- Default ease: `power3.out`. Sine for ambient/looping motion.
- Animate only `transform` and `opacity`. Never `transition: all`.
- Duration: 150ms for interactions, 1s for scroll reveals.

### Accessibility
- Touch targets: 44x44px minimum.
- Decorative elements: `aria-hidden="true"`, `pointer-events-none`.
- Icon-only buttons: always provide `aria-label`.
- Color contrast: 4.5:1 text, 3:1 large text/UI.

## Commands

```bash
npm run dev        # Start dev server (Turbopack)
npm run build      # Production build
npm run lint       # ESLint
```

## Git

- **Committer:** `Alex Duncan <alex@outmoreliving.com>`
- **Branch naming:** `feature/short-description`, `fix/short-description`
- **Commit style:** Imperative mood ("Add color scale", "Fix dark theme tokens")
- **PR target:** `main`
