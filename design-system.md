# Outmore Living — Design System

---

## Design Philosophy

We design like Apple builds hardware: every detail is considered, nothing is accidental, and the result feels inevitable. Our interfaces are warm where Apple is cool, but the discipline is the same.

**The Warmth Gradient** is our signature design narrative — a light-to-dark flow that mirrors the experience of sitting outside as evening falls. Warm linen surfaces give way to deep jet tones, with Hot Embers providing points of warmth throughout.

---

## Color System

### Brand Primaries

| Token | Hex | CSS Variable | Usage |
|-------|-----|-------------|-------|
| **Jet** | `#373534` | `--color-brand-jet` | Primary text, dark surfaces, depth |
| **Linen** | `#f7f1e9` | `--color-brand-linen` | Warm backgrounds, the soul of light theme |
| **Hot Embers** | `#F25431` | `--color-brand-hot-embers` | Accent, CTAs, highlights. Used sparingly. |
| **Mist** | `#efefed` | `--color-brand-mist` | Flat surfaces, cards, subtle separation |

Never use raw hex values — always use brand tokens.

Hot Embers is for emphasis, not decoration. One accent element per view.

### Jet Scale

| Token | Hex |
|-------|-----|
| `jet-50` | `#dfdedd` |
| `jet-100` | `#c7c5c4` |
| `jet-200` | `#afadac` |
| `jet-300` | `#979594` |
| `jet-400` | `#7f7d7b` |
| `jet-500` | `#676563` |
| `jet-600` | `#4f4d4b` |
| `jet-700` | `#373534` |
| `jet-800` | `#252423` |
| `jet-900` | `#1a1918` |
| `jet-950` | `#121111` |

### Hot Embers Scale

| Token | Hex |
|-------|-----|
| `embers-50` | `#fef0e5` |
| `embers-100` | `#fce0cb` |
| `embers-200` | `#fac4ac` |
| `embers-300` | `#f8a88d` |
| `embers-400` | `#f68c6e` |
| `embers-500` | `#f4704f` |
| `embers-600` | `#F25431` |
| `embers-700` | `#c73e24` |
| `embers-800` | `#a12918` |
| `embers-900` | `#7a1a0e` |

### Linen Scale

| Token | Hex |
|-------|-----|
| `linen-50` | `#fdfcfa` |
| `linen-100` | `#fcfaf7` |
| `linen-200` | `#fbf8f4` |
| `linen-300` | `#faf6f1` |
| `linen-400` | `#f9f4ed` |
| `linen-500` | `#f7f1e9` |
| `linen-600` | `#efe7dc` |
| `linen-700` | `#e6ddd0` |
| `linen-800` | `#ddd3c4` |
| `linen-900` | `#d4c9b8` |

### Semantic Tokens — Light Theme

| Category | Token | Value |
|----------|-------|-------|
| **Surfaces** | `--surface-primary` | `#fcf9f5` |
| | `--surface-secondary` | `#f7f1e9` |
| | `--surface-tertiary` | `#efefed` |
| | `--surface-elevated` | `rgba(255, 255, 255, 0.4)` |
| **Text** | `--text-primary` | `#373534` |
| | `--text-secondary` | `rgba(55, 53, 52, 0.7)` |
| | `--text-tertiary` | `rgba(55, 53, 52, 0.5)` |
| | `--text-muted` | `rgba(55, 53, 52, 0.4)` |
| | `--text-faint` | `rgba(55, 53, 52, 0.25)` |
| **Accent** | `--accent` | `#F25431` |
| | `--accent-glow` | `rgba(242, 84, 49, 0.25)` |
| | `--accent-subtle` | `rgba(242, 84, 49, 0.1)` |
| **Borders** | `--border-default` | `rgba(55, 53, 52, 0.1)` |
| | `--border-subtle` | `rgba(55, 53, 52, 0.05)` |
| **Glass** | `--glass-bg` | `rgba(255, 255, 255, 0.4)` |
| | `--glass-border` | `rgba(255, 255, 255, 0.6)` |
| | `--glass-shadow` | `rgba(55, 53, 52, 0.06)` |
| | `--glass-glow` | `rgba(255, 255, 255, 0.8)` |
| **Selection** | `--selection-bg` | `rgba(242, 84, 49, 0.15)` |

### Semantic Tokens — Dark Theme

Applied via the `.dark` class on `<html>`.

| Category | Token | Value |
|----------|-------|-------|
| **Surfaces** | `--surface-primary` | `#1a1918` |
| | `--surface-secondary` | `#2a2928` |
| | `--surface-tertiary` | `#373534` |
| | `--surface-elevated` | `rgba(255, 255, 255, 0.04)` |
| **Text** | `--text-primary` | `rgba(255, 255, 255, 0.92)` |
| | `--text-secondary` | `rgba(255, 255, 255, 0.7)` |
| | `--text-tertiary` | `rgba(255, 255, 255, 0.5)` |
| | `--text-muted` | `rgba(255, 255, 255, 0.35)` |
| | `--text-faint` | `rgba(255, 255, 255, 0.2)` |
| **Accent** | `--accent` | `#F25431` |
| | `--accent-glow` | `rgba(242, 84, 49, 0.3)` |
| | `--accent-subtle` | `rgba(242, 84, 49, 0.12)` |
| **Borders** | `--border-default` | `rgba(255, 255, 255, 0.1)` |
| | `--border-subtle` | `rgba(255, 255, 255, 0.05)` |
| **Glass** | `--glass-bg` | `rgba(255, 255, 255, 0.04)` |
| | `--glass-border` | `rgba(255, 255, 255, 0.08)` |
| | `--glass-shadow` | `rgba(0, 0, 0, 0.4)` |
| | `--glass-glow` | `rgba(255, 255, 255, 0.1)` |
| **Selection** | `--selection-bg` | `rgba(242, 84, 49, 0.25)` |

Dark mode is not inverted light mode. It is a separately considered palette.

---

## Typography

### Font Stack

| Token | Family | CSS Variable | Usage |
|-------|--------|-------------|-------|
| `font-display` | **Poppins** | `--font-display` | Headlines, hero text, navigation, buttons |
| `font-body` | **DM Sans** | `--font-body` | Body copy, UI text, labels, descriptions |
| `font-accent` | **Sabon** | `--font-accent` | Editorial accents, pull quotes, decorative moments, hero headlines |

### Loading

- **Poppins** and **DM Sans** loaded from Google Fonts via `next/font/google`
- **Sabon** loaded as a local font via `next/font/local` (TTF files in `src/fonts/`)
- All fonts use `display: "swap"` for performance
- CSS variables: `--font-poppins`, `--font-dm-sans`, `--font-sabon`

### Poppins Weights

| Weight | Usage |
|--------|-------|
| 300 (Light) | Hero headlines, large display text |
| 400 (Regular) | Section headings, navigation, buttons |
| 500 (Medium) | Labels, overlines, emphasis |
| 600 (SemiBold) | Rare — only for strong UI emphasis |

### Sabon Weights & Styles

| Variant | Usage |
|---------|-------|
| 400 Regular | Editorial headings, accent moments |
| 400 Italic | Pull quotes, emphasis, hero taglines, decorative moments |
| 700 Bold | Rare — only for strong editorial emphasis |
| 700 Bold Italic | Rare — decorative headings |

### DM Sans Weights

| Weight | Usage |
|--------|-------|
| 400 (Regular) | Body text, descriptions, secondary content |
| 500 (Medium) | Labels, overlines, subtle emphasis |

### Type Rules

- Headings use weight **400** (regular). Never bold headings.
- Hero headlines use weight **300** (light). Creates refinement, not noise.
- Use fewer than 3 font weights on any single view.
- `text-wrap: balance` on all headings.
- Max content width: `65--75ch` for readability.
- Antialiased rendering: `-webkit-font-smoothing: antialiased`.

### Type Scale

| Size | Token | Usage |
|------|-------|-------|
| `7rem` | `text-9xl` | Sabon hero headlines |
| `6rem` | `text-8xl` | Large display text |
| `4rem` | `text-6xl` | Poppins section headings |
| `2.25rem` | `text-4xl` | Sub-headings |
| `1.25rem` | `text-xl` | Body lead text (DM Sans) |
| `0.875rem` | `text-sm` | UI text, labels, details |
| `0.75rem` | `text-xs` | Overlines, captions, meta text |

### Overlines

Uppercase, letter-spacing `0.3em`, `text-xs`, `font-medium`, DM Sans. Color: `--text-faint` or `--text-muted`.

```
font-body text-xs font-medium uppercase tracking-[0.3em]
```

---

## Surfaces & Depth

### Glassmorphism

The signature Outmore surface treatment. Translucent cards float over warm ambient light, creating depth without weight.

**Light glass:**
```css
background: rgba(255, 255, 255, 0.4);
border: 1px solid rgba(255, 255, 255, 0.6);
box-shadow: 0 8px 40px rgba(55, 53, 52, 0.06);
backdrop-filter: blur(24px) saturate(1.5);
```

**Dark glass:**
```css
background: rgba(255, 255, 255, 0.04);
border: 1px solid rgba(255, 255, 255, 0.08);
box-shadow: 0 8px 40px rgba(0, 0, 0, 0.4);
backdrop-filter: blur(24px) saturate(1.5);
```

**Inner glow line:** A 1px gradient at the top of glass surfaces, from transparent through white to transparent. Creates a subtle lit edge.

### Surface Hierarchy

| Level | Usage | Properties |
|-------|-------|------------|
| `surface-primary` | Page background | Solid, warm off-white / deep jet |
| `surface-secondary` | Section backgrounds, alternating zones | Solid, linen / slightly lighter dark |
| `surface-tertiary` | Card backgrounds, subtle grouping | Solid, mist / medium dark |
| `surface-elevated` | Glass cards, overlays | Translucent, backdrop-blur |

### Ambient Orbs

Soft, blurred, animated circles positioned behind content to create warmth and depth. They float and drift with gentle sine-wave motion.

- Colors: embers at low opacity (`rgba(242,84,49,0.06-0.15)`), linen at high opacity, jet for dark sections
- Blur: `120px` -- `220px`
- Size: `350px` -- `700px`
- Motion: GSAP `sine.inOut` ease, 8--14 second cycles, yoyo
- Always `pointer-events-none` and `aria-hidden="true"`

### Grain Texture

A subtle SVG noise overlay (`opacity: 0.03`) applied to sections for tactile, analog warmth. Uses `feTurbulence` fractalNoise filter.

---

## Shape System

| Element | Radius | Notes |
|---------|--------|-------|
| **Buttons** | `rounded-full` | Pill shape, always |
| **Cards** | `rounded-xl` to `rounded-2xl` | Consistent `p-6` or `p-8` padding |
| **Inputs** | `rounded-md` | Subtly rounded, never sharp |
| **Modals** | `rounded-2xl` | Shadow, no border |
| **Images** | `rounded-lg` | Match container radius |
| **Icon containers** | `rounded-xl` | `h-10 w-10`, centered content |
| **Color swatches** | `rounded-xl` | `h-16 w-16` |
| **Tint strips** | `rounded-lg` | First/last get `rounded-l-xl` / `rounded-r-xl` |

---

## Components

### Buttons

**Primary (solid):**
```
font-display rounded-full bg-[#373534] px-7 py-3.5 text-sm font-normal
tracking-wide text-[#f7f1e9] transition-transform duration-150
hover:-translate-y-0.5 active:scale-[0.98]
```
Dark mode: `bg-white/90 text-[#1a1918]`

**Secondary (outline):**
```
font-display rounded-full border px-7 py-3.5 text-sm font-normal
tracking-wide transition-all duration-150
hover:-translate-y-0.5 active:scale-[0.98]
border-color: var(--border-default)
color: var(--text-secondary)
```

### Glass Cards

Rounded-2xl containers with backdrop blur, subtle border, and an inner glow line at top. Support both `dark` and light variants. See Glassmorphism section for exact values.

### Product Cards (Dark)

Dark glass cards with:
- Image placeholder: `aspect-[4/3] rounded-xl bg-white/[0.03] border border-white/[0.05]`
- Name: `font-display text-base font-normal text-white/80`
- Price: `font-body text-sm text-[#F25431]/70`
- Detail: `font-body text-xs leading-relaxed text-white/30`
- Hover: `-translate-y-1`, image content scales `1.05` and opacity increases

### Spec Rows

Horizontal key-value pairs separated by `border-b border-white/[0.06]`:
```
flex items-center justify-between border-b border-white/[0.06] pb-3
```
Label: `font-body text-sm text-white/30`
Value: `font-display text-sm font-normal text-white/70`

### Fabric Swatches

Circular color samples with ring selection state:
```
h-12 w-12 rounded-full border-2 cursor-pointer
transition: transform 0.15s, box-shadow 0.15s
```
Selected: `border-[#F25431] shadow-[0_0_0_3px_rgba(242,84,49,0.2)]`
Unselected: `border-white/10`

### Theme Toggle

Fixed position pill button (`top: 1.5rem`, `right: 1.5rem`, `z-50`):
- `w-11 h-11 rounded-full`
- Glass surface with `backdrop-filter: blur(12px)`
- Hover: `-translate-y-1`, border color shifts to accent
- Active: `scale(0.98)`
- Swaps between Sun and Moon SVG icons

---

## Interaction Patterns

### Hover
Lift with `translateY(-2px)` or `-translate-y-0.5`. Never combine lift and glow on the same element.

### Press
`scale(0.98)` via `active:scale-[0.98]`. Tactile compression feedback.

### Focus
2px ring with offset. Always visible. Never remove focus indicators.

### Loading
Skeleton screens over spinners.

### Transitions
- Duration: `150ms` default, `200ms` for color, `300ms` for layout
- Easing: `ease` or custom GSAP eases (`power3.out`, `sine.inOut`)
- Never `transition: all`. Always specify exact properties.
- Honor `prefers-reduced-motion: reduce` — disable all animations.

### Scroll Animations

**Reveal pattern:** Elements enter from below with blur-to-clear transition:
```
Initial: opacity: 0, y: 50, filter: blur(8px)
Final:   opacity: 1, y: 0,  filter: blur(0px)
Duration: 1s, ease: power3.out
Trigger: ScrollTrigger, start: "top 85%"
```

**Parallax:** Hero content shifts with `translateY(scrollY * 0.15)`.

**Scroll cue:** Animated chevron at bottom of hero (`animation: scroll-cue 2s ease-in-out infinite`).

### GSAP Configuration

Default ease: `power3.out`. Staggered timelines for hero entrances. ScrollTrigger for section reveals. Always check `prefers-reduced-motion` before animating.

---

## The Warmth Gradient

The signature design narrative — a full-page journey from light to dark.

| Section | Background | Theme | Content |
|---------|-----------|-------|---------|
| 1. Hero | `--surface-primary` (warm off-white) | Light | Brand tagline, ambient orbs, editorial Sabon type |
| 2. Typography | `--surface-primary` | Light | Font showcase: Sabon, Poppins, DM Sans, type scale |
| 3. Glass Cards | `--surface-secondary` (linen) | Light | Feature cards with glassmorphism |
| 4. Color System | `--surface-primary` | Light | Swatches, tint/shade strips |
| 5. Transition | Linear gradient light-to-dark | Transitional | Editorial statement, large Sabon italic |
| 6. Products | `#2a2928` | Dark | Product cards with dark glass |
| 7. HeatTech | `#1a1918` | Dark | Spec rows, animated heat rings |
| 8. Interactions | `#2a2928` | Dark | Button showcase, fabric swatches, inputs |
| 9. Footer | `#121111` (deepest) | Dark | Closing statement, brand mark |

### The Transition Gradient

The centerpiece — a section where light physically gives way to dark:
```css
background: linear-gradient(
  to bottom,
  var(--surface-primary) 0%,
  var(--surface-secondary) 15%,
  #c7c5c4 35%,
  #676563 55%,
  #373534 75%,
  #2a2928 100%
);
```

---

## Layout

- **Mobile-first.** Base styles for smallest screens, scale up with `sm:`, `md:`, `lg:`.
- **Content width:** `max-w-5xl` to `max-w-6xl` with `px-6` padding.
- **Section spacing:** `py-32 sm:py-40` between major sections.
- **Hero:** `min-h-dvh` full viewport, centered content.
- **Grid:** `grid gap-6 sm:grid-cols-2 lg:grid-cols-3` for cards.
- **Content blocks:** `space-y-4` to `space-y-6` for vertical stacks.
- **Two-column features:** `grid gap-16 lg:grid-cols-2 lg:items-center`.

---

## Accessibility

- Touch targets: 44x44px minimum (`h-10 w-10` or larger)
- Color contrast: 4.5:1 for text, 3:1 for large text and UI elements
- Semantic HTML: `<button>` for actions, `<a>` for navigation
- `aria-label` on icon-only buttons (theme toggle, close buttons)
- `aria-hidden="true"` on decorative elements (orbs, grain, glow lines)
- `prefers-reduced-motion`: Disable all animations, set `transition-duration: 0.01ms`
- Focus rings: 2px with offset, always visible
- WCAG 2.1 AA compliance minimum

---

## Photography & Media

- Product photography should feel real, not studio-sterile
- Lifestyle imagery: people actually using furniture, outdoors, in natural light
- Avoid stock photo energy — if it feels generic, it is
- Images get `rounded-lg` or match their container's radius
- Always use `next/image` for optimization
- Product image placeholders: `aspect-[4/3]` with centered italic Sabon text

---

## Implementation

### CSS Architecture

Tokens defined in `globals.css` using Tailwind v4 `@theme inline` directive. Semantic tokens in `:root` (light) and `.dark` (dark). Utility classes for font families (`.font-display`, `.font-body`, `.font-accent`). Custom classes for glass surfaces and grain overlays.

### Import Order

1. `tailwindcss`
2. `tw-animate-css`
3. Theme tokens (`@theme inline`)
4. Semantic tokens (`:root`, `.dark`)
5. Base layer styles (`@layer base`)
6. Utility classes
7. Keyframes

### Tech Stack

- Next.js 15+ (App Router) + React 19 + TypeScript
- Tailwind CSS 4 + shadcn/ui
- GSAP + ScrollTrigger + `@gsap/react` for animation
- `next/font/google` (Poppins, DM Sans) + `next/font/local` (Sabon)

### File References

| File | Contents |
|------|----------|
| `src/app/globals.css` | All color tokens, semantic tokens, glass surfaces, keyframes |
| `src/app/layout.tsx` | Font loading, CSS variable injection |
| `src/app/page.tsx` | Full design system showcase (Warmth Gradient) |
| `src/fonts/Sabon*.ttf` | Sabon font files (Regular, Italic, Bold, Bold Italic) |
| `src/lib/gsap.ts` | GSAP + ScrollTrigger registration |
