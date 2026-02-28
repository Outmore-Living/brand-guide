"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/* ================================================================
   OUTMORE BRAND DESIGN — "Warmth Gradient"
   Light → Dark flow. Glassmorphism. Depth. Editorial typography.
   ================================================================ */

const EASE = "power3.out";

/* ---------- Ambient Orb Component ---------- */
function AmbientOrb({
  color,
  size,
  top,
  left,
  delay = 0,
  blur = 120,
}: {
  color: string;
  size: number;
  top: string;
  left: string;
  delay?: number;
  blur?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      x: "random(-40, 40)",
      y: "random(-30, 30)",
      scale: "random(0.9, 1.1)",
      duration: "random(8, 14)",
      delay,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute rounded-full"
      style={{
        width: size,
        height: size,
        top,
        left,
        background: color,
        filter: `blur(${blur}px)`,
        opacity: 0.5,
      }}
      aria-hidden="true"
    />
  );
}

/* ---------- Glass Card ---------- */
function GlassCard({
  children,
  className = "",
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl
        ${
          dark
            ? "bg-white/[0.04] border border-white/[0.08] shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
            : "bg-white/40 border border-white/60 shadow-[0_8px_40px_rgba(55,53,52,0.06)]"
        }
        backdrop-blur-xl backdrop-saturate-150
        ${className}
      `}
    >
      {/* Inner glow line at top */}
      <div
        className={`absolute inset-x-0 top-0 h-px ${
          dark
            ? "bg-gradient-to-r from-transparent via-white/10 to-transparent"
            : "bg-gradient-to-r from-transparent via-white/80 to-transparent"
        }`}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}

/* ---------- Section Reveal Wrapper ---------- */
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    gsap.set(ref.current, { opacity: 0, y: 50, filter: "blur(8px)" });
    gsap.to(ref.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1,
      delay,
      ease: EASE,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* ---------- Brand Color Swatch ---------- */
function Swatch({
  hex,
  name,
  usage,
  dark = false,
}: {
  hex: string;
  name: string;
  usage: string;
  dark?: boolean;
}) {
  return (
    <div className="group flex items-start gap-4">
      <div
        className="h-16 w-16 shrink-0 rounded-xl shadow-lg transition-transform duration-300 group-hover:-translate-y-0.5"
        style={{ backgroundColor: hex }}
      />
      <div>
        <p
          className={`font-display text-sm font-medium tracking-wide ${
            dark ? "text-white/90" : "text-[#373534]"
          }`}
        >
          {name}
        </p>
        <p
          className={`font-body mt-0.5 text-xs tracking-wide ${
            dark ? "text-white/40" : "text-[#373534]/40"
          }`}
        >
          {hex}
        </p>
        <p
          className={`font-body mt-1 text-xs leading-relaxed ${
            dark ? "text-white/50" : "text-[#373534]/50"
          }`}
        >
          {usage}
        </p>
      </div>
    </div>
  );
}

/* ---------- Theme Toggle Icons ---------- */
function SunIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function MoonIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

/* ================================================================
   MAIN PAGE
   ================================================================ */
export default function BrandDesignPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  }, []);

  /* Parallax for hero */
  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Hero entrance animation */
  useGSAP(() => {
    if (!heroRef.current) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const tl = gsap.timeline({ defaults: { ease: EASE } });

    tl.from("[data-hero-label]", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.3,
    })
      .from(
        "[data-hero-headline]",
        { opacity: 0, y: 60, filter: "blur(12px)", duration: 1.2 },
        "-=0.4"
      )
      .from(
        "[data-hero-sub]",
        { opacity: 0, y: 30, duration: 0.8 },
        "-=0.6"
      )
      .from(
        "[data-hero-line]",
        { scaleX: 0, duration: 0.6 },
        "-=0.5"
      )
      .from(
        "[data-hero-cta]",
        { opacity: 0, y: 20, duration: 0.6 },
        "-=0.3"
      );
  });

  return (
    <div className="relative overflow-x-hidden">
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="theme-toggle"
        aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      >
        {isDark ? (
          <SunIcon className="text-white/70" />
        ) : (
          <MoonIcon className="text-[#373534]/60" />
        )}
      </button>

      {/* ============================================================
          SECTION 1: HERO — Light Theme, Warm Linen
          Full-viewport. Massive editorial type. Ambient orbs.
          ============================================================ */}
      <section
        ref={heroRef}
        className="relative flex min-h-dvh items-center justify-center overflow-hidden"
        style={{ backgroundColor: "var(--surface-primary)" }}
      >
        {/* Ambient background orbs */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <AmbientOrb
            color="rgba(242,84,49,0.12)"
            size={500}
            top="-10%"
            left="60%"
            blur={140}
          />
          <AmbientOrb
            color="rgba(247,241,233,0.8)"
            size={600}
            top="40%"
            left="-15%"
            delay={2}
            blur={160}
          />
          <AmbientOrb
            color="rgba(242,84,49,0.06)"
            size={400}
            top="70%"
            left="75%"
            delay={4}
            blur={120}
          />
        </div>

        {/* Grain texture overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />

        <div
          className="relative z-10 mx-auto max-w-5xl px-6 text-center"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          <p
            data-hero-label
            className="font-body text-xs font-medium uppercase tracking-[0.3em]"
            style={{ color: "var(--text-muted)" }}
          >
            Outmore Living &mdash; Design Language
          </p>

          <h1
            data-hero-headline
            className="mt-6 font-accent text-6xl font-light leading-[1.05] tracking-[-0.02em] sm:text-7xl md:text-8xl lg:text-[7rem]"
            style={{ color: "var(--text-primary)" }}
          >
            Warmth,
            <br />
            <span className="italic">Without Walls</span>
          </h1>

          <p
            data-hero-sub
            className="mx-auto mt-8 max-w-md font-body text-base leading-relaxed sm:text-lg"
            style={{ color: "var(--text-tertiary)" }}
          >
            A design system built for life beyond four walls. Refined minimalism
            meets the warmth of outdoor living.
          </p>

          <div
            data-hero-line
            className="mx-auto my-10 h-px w-16 origin-left"
            style={{ backgroundColor: "var(--border-default)" }}
          />

          <div data-hero-cta className="flex items-center justify-center gap-4">
            <button className="font-display rounded-full bg-[#373534] px-7 py-3.5 text-sm font-normal tracking-wide text-[#f7f1e9] transition-transform duration-150 hover:-translate-y-0.5 active:scale-[0.98] dark:bg-white/90 dark:text-[#1a1918]">
              Explore Collection
            </button>
            <button
              className="font-display rounded-full border px-7 py-3.5 text-sm font-normal tracking-wide transition-all duration-150 hover:-translate-y-0.5 active:scale-[0.98]"
              style={{
                borderColor: "var(--border-default)",
                color: "var(--text-secondary)",
              }}
            >
              Our Story
            </button>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 animate-scroll-cue">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            style={{ color: "var(--text-faint)" }}
          >
            <path d="M7 10l5 5 5-5" />
          </svg>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: TYPOGRAPHY SHOWCASE — Sabon + Sabon Italic
          ============================================================ */}
      <section
        className="relative overflow-hidden py-32 sm:py-40"
        style={{ backgroundColor: "var(--surface-primary)" }}
      >
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <AmbientOrb
            color="rgba(239,239,237,0.6)"
            size={500}
            top="20%"
            left="80%"
            delay={1}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <Reveal>
            <p
              className="font-body text-xs font-medium uppercase tracking-[0.3em]"
              style={{ color: "var(--text-faint)" }}
            >
              Typography
            </p>
          </Reveal>

          {/* Sabon showcase */}
          <Reveal delay={0.1}>
            <h2
              className="mt-6 font-accent text-5xl font-normal leading-[1.1] tracking-[-0.01em] sm:text-6xl md:text-7xl"
              style={{ color: "var(--text-primary)" }}
            >
              Sabon
            </h2>
            <p
              className="mt-2 font-accent text-2xl font-normal sm:text-3xl"
              style={{ color: "var(--text-faint)" }}
            >
              Editorial accent &mdash; Roman, weight 400
            </p>
          </Reveal>

          {/* Sabon Italic showcase */}
          <Reveal delay={0.12}>
            <div className="mt-10">
              <h2
                className="font-accent text-5xl font-normal italic leading-[1.1] tracking-[-0.01em] sm:text-6xl md:text-7xl"
                style={{ color: "var(--text-primary)" }}
              >
                Sabon Italic
              </h2>
              <p
                className="mt-2 font-accent text-2xl font-normal italic sm:text-3xl"
                style={{ color: "var(--text-faint)" }}
              >
                For emphasis, pull quotes, decorative moments
              </p>
            </div>
          </Reveal>

          {/* Poppins */}
          <Reveal delay={0.18}>
            <div className="mt-16">
              <h2
                className="font-display text-4xl font-normal leading-[1.15] tracking-[-0.03em] sm:text-5xl md:text-6xl"
                style={{ color: "var(--text-primary)" }}
              >
                Poppins
              </h2>
              <p
                className="mt-2 font-display text-xl font-normal sm:text-2xl"
                style={{ color: "var(--text-faint)" }}
              >
                Headlines, navigation, buttons &mdash; weight 400
              </p>
            </div>
          </Reveal>

          {/* DM Sans */}
          <Reveal delay={0.24}>
            <div className="mt-16">
              <p
                className="font-body text-xl leading-relaxed sm:text-2xl"
                style={{ color: "var(--text-secondary)" }}
              >
                DM Sans
              </p>
              <p
                className="mt-2 font-body text-base"
                style={{ color: "var(--text-faint)" }}
              >
                Body copy, UI text, labels &mdash; clean, legible, warm
              </p>
            </div>
          </Reveal>

          {/* Type scale */}
          <Reveal delay={0.3}>
            <div className="mt-24 space-y-6">
              {[
                { size: "7rem", font: "font-accent", weight: "font-normal", sample: "Aa", italic: false },
                { size: "7rem", font: "font-accent", weight: "font-normal", sample: "Aa", italic: true },
                { size: "4rem", font: "font-display", weight: "font-normal", sample: "Aa", italic: false },
                { size: "1.25rem", font: "font-body", weight: "", sample: "The quick brown fox jumps over the lazy dog", italic: false },
                { size: "0.875rem", font: "font-body", weight: "", sample: "Refined details. Every letter placed with intention.", italic: false },
              ].map((row, i) => (
                <div
                  key={i}
                  className="flex items-baseline gap-6 pb-4 last:border-0"
                  style={{ borderBottom: i < 4 ? `1px solid var(--border-subtle)` : "none" }}
                >
                  <span
                    className="font-body text-xs w-20 shrink-0"
                    style={{ color: "var(--text-faint)" }}
                  >
                    {row.size}
                    {row.italic ? " it" : ""}
                  </span>
                  <p
                    className={`${row.font} ${row.weight} ${row.italic ? "italic" : ""} leading-none`}
                    style={{
                      fontSize: row.size,
                      color:
                        i < 3
                          ? "var(--text-primary)"
                          : i === 3
                          ? "var(--text-secondary)"
                          : "var(--text-tertiary)",
                    }}
                  >
                    {row.sample}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: GLASSMORPHISM CARDS — Linen bg
          ============================================================ */}
      <section
        className="relative overflow-hidden py-32 sm:py-40"
        style={{ backgroundColor: "var(--surface-secondary)" }}
      >
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <AmbientOrb
            color="rgba(242,84,49,0.08)"
            size={600}
            top="10%"
            left="20%"
          />
          <AmbientOrb
            color="rgba(247,241,233,0.9)"
            size={500}
            top="50%"
            left="70%"
            delay={3}
            blur={180}
          />
          <AmbientOrb
            color="rgba(242,84,49,0.05)"
            size={350}
            top="80%"
            left="10%"
            delay={5}
          />
        </div>

        {/* Grain */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <Reveal>
            <p
              className="font-body text-xs font-medium uppercase tracking-[0.3em]"
              style={{ color: "var(--text-faint)" }}
            >
              Surfaces &amp; Depth
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              className="mt-6 font-accent text-4xl font-normal leading-[1.15] sm:text-5xl md:text-6xl"
              style={{ color: "var(--text-primary)" }}
            >
              Glass that <em>breathes</em>
            </h2>
            <p
              className="mt-4 max-w-lg font-body text-base leading-relaxed"
              style={{ color: "var(--text-tertiary)" }}
            >
              Translucent surfaces float over warm ambient light, creating depth
              without weight. Like sitting behind glass doors, watching the sunset.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F25431" strokeWidth="1.5" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                ),
                title: "10+ Hours",
                body: "Cordless warmth that lasts all evening. Five adjustable heat levels from 85\u2013120\u00B0F.",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F25431" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M3 12h4l3-9 4 18 3-9h4" />
                  </svg>
                ),
                title: "Five-Layer Comfort",
                body: "ComfortCore cushioning beneath Sunbrella performance fabrics. Weather-proof luxury.",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F25431" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
                title: "365-Day Trial",
                body: "Experience every season before you decide. Industry-leading warranty on every piece.",
              },
            ].map((card, i) => (
              <Reveal key={card.title} delay={0.15 + i * 0.1}>
                <GlassCard className="p-8">
                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ backgroundColor: "var(--accent-subtle)" }}
                  >
                    {card.icon}
                  </div>
                  <h3
                    className="font-display text-lg font-normal tracking-[-0.01em]"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="mt-2 font-body text-sm leading-relaxed"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {card.body}
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: COLOR SYSTEM
          ============================================================ */}
      <section
        className="relative overflow-hidden py-32 sm:py-40"
        style={{ backgroundColor: "var(--surface-primary)" }}
      >
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <AmbientOrb
            color="rgba(239,239,237,0.5)"
            size={400}
            top="30%"
            left="60%"
            delay={2}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <Reveal>
            <p
              className="font-body text-xs font-medium uppercase tracking-[0.3em]"
              style={{ color: "var(--text-faint)" }}
            >
              Color System
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              className="mt-6 max-w-xl font-accent text-4xl font-normal leading-[1.15] sm:text-5xl"
              style={{ color: "var(--text-primary)" }}
            >
              Warm where Apple is cool.
              <br />
              <span style={{ color: "var(--text-faint)" }}>Same discipline.</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { hex: "#373534", name: "Jet", usage: "Primary text, dark surfaces, depth" },
              { hex: "#f7f1e9", name: "Linen", usage: "Warm backgrounds, the soul of light theme" },
              { hex: "#F25431", name: "Hot Embers", usage: "Accent, CTAs, highlights. Used sparingly." },
              { hex: "#efefed", name: "Mist", usage: "Flat surfaces, cards, subtle separation" },
            ].map((s, i) => (
              <Reveal key={s.name} delay={0.15 + i * 0.05}>
                <Swatch {...s} dark={isDark} />
              </Reveal>
            ))}
          </div>

          {/* Tints and shades */}
          <Reveal delay={0.35}>
            <div className="mt-20">
              <p
                className="font-body text-xs font-medium uppercase tracking-[0.3em] mb-6"
                style={{ color: "var(--text-faint)" }}
              >
                Tints &amp; Shades
              </p>
              {[
                ["#1a1918", "#252423", "#373534", "#4f4d4b", "#676563", "#7f7d7b", "#979594", "#afadac", "#c7c5c4", "#dfdedd"],
                ["#7a1a0e", "#a12918", "#c73e24", "#F25431", "#f4704f", "#f68c6e", "#f8a88d", "#fac4ac", "#fce0cb", "#fef0e5"],
                ["#d4c9b8", "#ddd3c4", "#e6ddd0", "#efe7dc", "#f7f1e9", "#f9f4ed", "#faf6f1", "#fbf8f4", "#fcfaf7", "#fdfcfa"],
              ].map((scale, si) => (
                <div key={si} className={`flex gap-1 ${si < 2 ? "mb-4" : ""}`}>
                  {scale.map((c) => (
                    <div
                      key={c}
                      className="h-12 flex-1 rounded-lg first:rounded-l-xl last:rounded-r-xl transition-transform duration-200 hover:-translate-y-1"
                      style={{ backgroundColor: c }}
                      title={c}
                    />
                  ))}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          SECTION 5: THE TRANSITION — "Evening Falls"
          Gradient from light to dark. Full-screen statement.
          ============================================================ */}
      <section
        className="relative flex min-h-[80vh] items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(to bottom, var(--surface-primary) 0%, var(--surface-secondary) 15%, #c7c5c4 35%, #676563 55%, #373534 75%, #2a2928 100%)`,
        }}
      >
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <AmbientOrb
            color="rgba(242,84,49,0.15)"
            size={500}
            top="40%"
            left="50%"
            blur={200}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-white/25">
              As evening falls
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="mt-8 font-accent text-5xl font-normal leading-[1.1] text-white/90 sm:text-6xl md:text-7xl lg:text-8xl">
              The warmth
              <br />
              <em className="text-[#F25431]/80">stays</em>
            </h2>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="mx-auto mt-8 max-w-md font-body text-base leading-relaxed text-white/35">
              Where others head inside, you settle in. The seat warms beneath
              you. The conversation continues.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          SECTION 6: DARK THEME SHOWCASE — Product Cards
          ============================================================ */}
      <section
        className="relative overflow-hidden py-32 sm:py-40"
        style={{ backgroundColor: "#2a2928" }}
      >
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <AmbientOrb
            color="rgba(242,84,49,0.06)"
            size={600}
            top="0%"
            left="70%"
            blur={180}
          />
          <AmbientOrb
            color="rgba(55,53,52,0.8)"
            size={500}
            top="60%"
            left="10%"
            delay={2}
            blur={160}
          />
        </div>

        {/* Grain */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-white/25">
              The Solerno Collection
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-6 font-accent text-4xl font-normal leading-[1.15] text-white/90 sm:text-5xl md:text-6xl">
              Designed for the
              <br />
              <span className="text-white/30">hours after sunset</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Lounge Chair", price: "$2,450", detail: "FSC-certified teak frame, HeatTech integrated" },
              { name: "Sofa", price: "$5,900", detail: "Three-seat, dual heating zones, ComfortCore cushions" },
              { name: "Heated Ottoman", price: "$1,550", detail: "Pairs with any seating, independent heat control" },
            ].map((product, i) => (
              <Reveal key={product.name} delay={0.15 + i * 0.1}>
                <GlassCard dark className="group p-8 transition-all duration-300 hover:-translate-y-1">
                  <div className="mb-6 aspect-[4/3] rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center overflow-hidden">
                    <span className="font-accent text-3xl font-normal italic text-white/10 transition-all duration-500 group-hover:text-white/15 group-hover:scale-105">
                      {product.name}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display text-base font-normal text-white/80">
                      {product.name}
                    </h3>
                    <span className="font-body text-sm text-[#F25431]/70">
                      {product.price}
                    </span>
                  </div>
                  <p className="mt-2 font-body text-xs leading-relaxed text-white/30">
                    {product.detail}
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 7: HEATTECH — Dark Theme, Ember Glow
          ============================================================ */}
      <section
        className="relative overflow-hidden py-32 sm:py-40"
        style={{ backgroundColor: "#1a1918" }}
      >
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <AmbientOrb
            color="rgba(242,84,49,0.1)"
            size={700}
            top="30%"
            left="50%"
            blur={220}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <Reveal>
                <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-[#F25431]/40">
                  HeatTech
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-6 font-accent text-4xl font-normal leading-[1.15] text-white/90 sm:text-5xl">
                  Patented warmth.
                  <br />
                  <span className="text-white/30">Invisible technology.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 font-body text-base leading-relaxed text-white/40">
                  Battery-powered heating integrated into the cushion core.
                  Five temperature levels. No cords, no outlets, no compromise.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-10 space-y-4">
                  {[
                    { label: "Heat Range", value: "85 \u2013 120\u00B0F" },
                    { label: "Battery Life", value: "10+ hours" },
                    { label: "Heat Levels", value: "5 adjustable" },
                    { label: "Charge Time", value: "3 hours" },
                  ].map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-center justify-between border-b border-white/[0.06] pb-3"
                    >
                      <span className="font-body text-sm text-white/30">
                        {spec.label}
                      </span>
                      <span className="font-display text-sm font-normal text-white/70">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Heat visualization */}
            <Reveal delay={0.2}>
              <div className="relative flex aspect-square items-center justify-center">
                {[1, 2, 3, 4, 5].map((ring) => (
                  <div
                    key={ring}
                    className="absolute rounded-full border"
                    style={{
                      width: `${ring * 20}%`,
                      height: `${ring * 20}%`,
                      borderColor: `rgba(242, 84, 49, ${0.15 - ring * 0.02})`,
                      animation: `ring-pulse ${3 + ring * 0.5}s ease-in-out infinite`,
                      animationDelay: `${ring * 0.3}s`,
                    }}
                  />
                ))}
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-[#F25431]/10">
                  <div className="h-8 w-8 rounded-full bg-[#F25431]/30 shadow-[0_0_60px_rgba(242,84,49,0.3)]" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 8: INTERACTIONS — Dark Theme
          Buttons, inputs, fabric selection
          ============================================================ */}
      <section
        className="relative overflow-hidden py-32 sm:py-40"
        style={{ backgroundColor: "#2a2928" }}
      >
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <AmbientOrb
            color="rgba(247,241,233,0.03)"
            size={500}
            top="20%"
            left="80%"
            delay={1}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-white/25">
              Interaction
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-6 font-accent text-4xl font-normal leading-[1.15] text-white/90 sm:text-5xl">
              <em>Intentional</em> motion
            </h2>
            <p className="mt-4 max-w-lg font-body text-base leading-relaxed text-white/35">
              Every interaction has purpose. Hover lifts. Press compresses.
              Focus rings guide. Nothing moves without reason.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            <Reveal delay={0.15}>
              <GlassCard dark className="p-8">
                <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-white/25 mb-8">
                  Buttons
                </p>
                <div className="space-y-4">
                  <button className="font-display w-full rounded-full bg-[#F25431] px-7 py-3.5 text-sm font-normal tracking-wide text-white transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(242,84,49,0.25)] active:scale-[0.98]">
                    Primary Action
                  </button>
                  <button className="font-display w-full rounded-full bg-white/[0.06] px-7 py-3.5 text-sm font-normal tracking-wide text-white/70 border border-white/[0.08] transition-all duration-150 hover:bg-white/[0.1] hover:-translate-y-0.5 active:scale-[0.98]">
                    Secondary Action
                  </button>
                  <button className="font-display w-full rounded-full border border-white/[0.1] px-7 py-3.5 text-sm font-normal tracking-wide text-white/40 transition-all duration-150 hover:border-white/[0.2] hover:text-white/60 hover:-translate-y-0.5 active:scale-[0.98]">
                    Tertiary Action
                  </button>
                </div>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.25}>
              <GlassCard dark className="p-8">
                <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-white/25 mb-8">
                  Inputs
                </p>
                <div className="space-y-5">
                  <div>
                    <label className="font-body text-xs text-white/30 mb-2 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-lg bg-white/[0.04] border border-white/[0.08] px-4 py-3 font-body text-sm text-white/70 placeholder:text-white/20 outline-none transition-all duration-150 focus:border-[#F25431]/30 focus:ring-2 focus:ring-[#F25431]/10 focus:ring-offset-2 focus:ring-offset-[#2a2928]"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs text-white/30 mb-3 block">
                      Fabric Selection
                    </label>
                    <div className="flex gap-3">
                      {[
                        { name: "Sand", color: "#c8b99a" },
                        { name: "Carbon", color: "#4a4a4a" },
                        { name: "Aloe", color: "#7d9b76" },
                        { name: "Indigo", color: "#3d4f7c" },
                        { name: "Mesa", color: "#b5704d" },
                      ].map((fab) => (
                        <button
                          key={fab.name}
                          className="group relative h-10 w-10 rounded-full border-2 border-transparent transition-all duration-150 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#F25431]/30 focus:ring-offset-2 focus:ring-offset-[#2a2928]"
                          style={{ backgroundColor: fab.color }}
                          title={fab.name}
                          aria-label={`Select ${fab.name} fabric`}
                        >
                          <span className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap font-body text-[10px] text-white/0 transition-all duration-150 group-hover:text-white/40">
                            {fab.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 9: DARK THEME TOKEN REFERENCE
          Shows the full dark palette as a design reference
          ============================================================ */}
      <section
        className="relative overflow-hidden py-32 sm:py-40"
        style={{ backgroundColor: "#1a1918" }}
      >
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <AmbientOrb
            color="rgba(242,84,49,0.05)"
            size={500}
            top="50%"
            left="30%"
            blur={200}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-white/25">
              Dark Theme
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-6 font-accent text-4xl font-normal leading-[1.15] text-white/90 sm:text-5xl">
              The <em>evening</em> palette
            </h2>
            <p className="mt-4 max-w-lg font-body text-base leading-relaxed text-white/35">
              Dark mode follows the same warmth principle. Jet replaces linen.
              Embers glow brighter. Surfaces breathe with subtle transparency.
            </p>
          </Reveal>

          {/* Dark surface tokens */}
          <Reveal delay={0.2}>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { bg: "#1a1918", label: "Surface Primary", token: "--surface-primary", desc: "Base background. Deepest layer." },
                { bg: "#2a2928", label: "Surface Secondary", token: "--surface-secondary", desc: "Cards, panels, elevated sections." },
                { bg: "#373534", label: "Surface Tertiary", token: "--surface-tertiary", desc: "Inputs, dividers, hover states." },
              ].map((surface, i) => (
                <div key={surface.token} className="group">
                  <div
                    className="aspect-[3/2] rounded-xl border border-white/[0.06] flex items-end p-4 transition-transform duration-300 group-hover:-translate-y-0.5"
                    style={{ backgroundColor: surface.bg }}
                  >
                    <div>
                      <p className="font-display text-sm text-white/70">
                        {surface.label}
                      </p>
                      <p className="font-body text-[11px] text-white/25 mt-0.5">
                        {surface.bg}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 font-body text-xs text-white/30">
                    {surface.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Dark text hierarchy */}
          <Reveal delay={0.3}>
            <div className="mt-20">
              <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-white/25 mb-8">
                Text Hierarchy
              </p>
              <div className="space-y-6">
                {[
                  { opacity: 0.92, label: "Primary", token: "--text-primary", sample: "Sit outside in January." },
                  { opacity: 0.7, label: "Secondary", token: "--text-secondary", sample: "Battery-powered heating integrated into the cushion core." },
                  { opacity: 0.5, label: "Tertiary", token: "--text-tertiary", sample: "Five adjustable temperature levels from 85\u2013120\u00B0F." },
                  { opacity: 0.35, label: "Muted", token: "--text-muted", sample: "FSC-certified teak \u00B7 Sunbrella fabrics" },
                  { opacity: 0.2, label: "Faint", token: "--text-faint", sample: "SECTION LABEL" },
                ].map((level) => (
                  <div
                    key={level.label}
                    className="flex items-baseline gap-6 border-b border-white/[0.04] pb-4 last:border-0"
                  >
                    <span className="font-body text-xs text-white/25 w-24 shrink-0">
                      {level.label}
                    </span>
                    <p
                      className="font-body text-base leading-relaxed"
                      style={{ color: `rgba(255, 255, 255, ${level.opacity})` }}
                    >
                      {level.sample}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Glass on dark */}
          <Reveal delay={0.35}>
            <div className="mt-20">
              <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-white/25 mb-8">
                Glass on Dark
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <GlassCard dark className="p-8">
                  <p className="font-accent text-2xl font-normal italic text-white/80 leading-relaxed">
                    &ldquo;The best outdoor furniture
                    <br />
                    is the kind you forget
                    <br />
                    is outdoor furniture.&rdquo;
                  </p>
                  <p className="mt-4 font-body text-xs text-white/25">
                    — Sabon Italic, pull quote styling
                  </p>
                </GlassCard>
                <GlassCard dark className="p-8 flex flex-col justify-between">
                  <div>
                    <p className="font-display text-sm font-normal text-white/60">
                      Accent on dark
                    </p>
                    <p className="mt-2 font-body text-xs text-white/30 leading-relaxed">
                      White at 4% background. White at 8% border. Blur 24px.
                      The same glass system, inverted for depth.
                    </p>
                  </div>
                  <div className="mt-6 flex gap-2">
                    <div className="h-8 flex-1 rounded-lg bg-white/[0.04] border border-white/[0.06]" />
                    <div className="h-8 flex-1 rounded-lg bg-white/[0.08] border border-white/[0.10]" />
                    <div className="h-8 flex-1 rounded-lg bg-white/[0.12] border border-white/[0.14]" />
                  </div>
                </GlassCard>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          SECTION 10: SHAPE LANGUAGE — Dark Theme
          ============================================================ */}
      <section
        className="relative overflow-hidden py-32 sm:py-40"
        style={{ backgroundColor: "#2a2928" }}
      >
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-white/25">
              Shape Language
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-6 font-accent text-4xl font-normal leading-[1.15] text-white/90 sm:text-5xl">
              Soft geometry,
              <br />
              <span className="text-white/30">warm edges</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-4">
            {[
              { label: "Buttons", radius: "9999px", desc: "Pill / rounded-full" },
              { label: "Cards", radius: "16px", desc: "rounded-2xl" },
              { label: "Inputs", radius: "8px", desc: "rounded-md" },
              { label: "Modals", radius: "16px", desc: "rounded-2xl" },
            ].map((shape, i) => (
              <Reveal key={shape.label} delay={0.15 + i * 0.08}>
                <div className="text-center">
                  <div
                    className="mx-auto mb-4 flex h-24 w-full max-w-[160px] items-center justify-center border border-white/[0.08] bg-white/[0.03]"
                    style={{ borderRadius: shape.radius }}
                  >
                    <span className="font-body text-[10px] uppercase tracking-widest text-white/20">
                      {shape.radius}
                    </span>
                  </div>
                  <p className="font-display text-sm text-white/70">
                    {shape.label}
                  </p>
                  <p className="font-body text-xs text-white/25 mt-1">
                    {shape.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 11: CLOSING — Dark with Warm Ember Glow
          ============================================================ */}
      <section
        className="relative flex min-h-[70vh] items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#1a1918" }}
      >
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <AmbientOrb
            color="rgba(242,84,49,0.12)"
            size={800}
            top="30%"
            left="50%"
            blur={250}
          />
          <AmbientOrb
            color="rgba(247,241,233,0.02)"
            size={600}
            top="50%"
            left="20%"
            delay={3}
            blur={200}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-[#F25431]/30">
              Outmore Living
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="mt-8 font-accent text-5xl font-normal leading-[1.05] text-white/90 sm:text-6xl md:text-7xl lg:text-[6rem]">
              Sit outside
              <br />
              in January.
              <br />
              <em className="text-[#F25431]/60">Seriously.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-12 flex items-center justify-center gap-4">
              <button className="font-display rounded-full bg-[#F25431] px-8 py-4 text-sm font-normal tracking-wide text-white transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(242,84,49,0.3)] active:scale-[0.98]">
                Shop the Collection
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <p className="mt-16 font-accent text-sm italic text-white/15 tracking-wide">
              Warmth, Without Walls.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
