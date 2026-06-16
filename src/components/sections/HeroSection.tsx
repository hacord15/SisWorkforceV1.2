"use client";

import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function HeroSection() {
  const [vis, setVis] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVis(true), 80); return () => clearTimeout(t); }, []);

  return (
    <>
      <style>{`
        /* ══ HERO SHELL ══════════════════════════════════════════ */
        .sis-hero {
          position: relative;
          height: 71.6vh;
          min-height: 580px;
          overflow: hidden;
        }

        /* ── video ── */
        .sis-video {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center center;
        }

        /* ── gradient overlay: heavy left, lighter right ── */
        .sis-overlay {
          position: absolute; inset: 0;
          background:
            linear-gradient(105deg,
              rgba(0,0,0,0.88) 0%,
              rgba(0,0,0,0.72) 38%,
              rgba(0,0,0,0.38) 70%,
              rgba(0,0,0,0.18) 100%
            );
        }

        /* ── red left-edge glow ── */
        .sis-redglow {
          position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(90deg, rgba(200,16,46,0.22) 0%, transparent 32%);
        }

        /* ── animated fine grain texture ── */
        .sis-grain {
          position: absolute; inset: 0; pointer-events: none; opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 180px;
        }

        /* ══ CONTENT LAYER ═══════════════════════════════════════ */
        .sis-content {
          position: absolute; inset: 0; z-index: 10;
          max-width: 1280px; margin: 0 auto; padding: 0 2.5rem;
          width: 100%;
        }

        /* ── TOP-LEFT: "Trusted Global Workforce Solution" ── */
        .sis-topleft {
          position: absolute;
          top: 2.2rem; left: 2.5rem;
          opacity: 0; transform: translateY(-14px);
          transition: opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s;
        }
        .sis-topleft.in { opacity: 1; transform: translateY(0); }

        .sis-topleft h2 {
          font-family: var(--font-display);
          font-size: clamp(1.9rem, 3.8vw, 3.4rem);
          font-weight: 800;
          line-height: 1.1;
          color: #fff;
          letter-spacing: -0.01em;
          margin: 0;
        }

        /* decorative red vertical bar */
        .sis-topleft-bar {
          width: 4px; height: 56px;
          background: linear-gradient(to bottom, #C8102E, rgba(200,16,46,0.2));
          border-radius: 2px;
          margin-bottom: 0.7rem;
        }

        /* ── CENTER-RIGHT block ── */
        .sis-centerright {
          position: absolute;
          top: 42%;
          left: 50%;
          transform: translateY(-50%);
          width: 52%;
          max-width: 640px;
        }

        /* eyebrow label */
        .sis-eyebrow {
          display: flex; align-items: center; gap: 0.55rem;
          margin-bottom: 0.45rem;
          opacity: 0; transform: translateY(10px);
          transition: opacity 0.55s ease 0.45s, transform 0.55s ease 0.45s;
        }
        .sis-eyebrow.in { opacity: 1; transform: translateY(0); }
        .sis-eyebrow-dash {
          width: 28px; height: 2px; background: #C8102E; border-radius: 1px;
          flex-shrink: 0;
        }
        .sis-eyebrow span {
          font-family: var(--font-display);
          font-size: 0.82rem; font-weight: 700;
          color: rgba(255,255,255,0.85);
          letter-spacing: 0.04em;
        }

        /* big headline */
        .sis-h1 {
          font-family: var(--font-display);
          font-size: clamp(2.6rem, 4.8vw, 4.4rem);
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          line-height: 0.96;
          color: #fff;
          margin: 0 0 1.2rem;
          opacity: 0; transform: translateY(18px);
          transition: opacity 0.65s ease 0.6s, transform 0.65s ease 0.6s;
        }
        .sis-h1.in { opacity: 1; transform: translateY(0); }

        /* red highlight on "READY" */
        .sis-h1 em {
          font-style: normal;
          color: #C8102E;
          position: relative;
        }
        .sis-h1 em::after {
          content: '';
          position: absolute;
          left: 0; bottom: -4px;
          width: 100%; height: 3px;
          background: linear-gradient(90deg, #C8102E, rgba(200,16,46,0.3));
          border-radius: 2px;
        }

        /* body */
        .sis-body {
          font-size: 0.92rem;
          line-height: 1.78;
          color: rgba(255,255,255,0.65);
          max-width: 400px;
          margin-bottom: 2rem;
          opacity: 0; transform: translateY(10px);
          transition: opacity 0.55s ease 0.78s, transform 0.55s ease 0.78s;
        }
        .sis-body.in { opacity: 1; transform: translateY(0); }

        /* CTA group */
        .sis-ctas {
          display: flex; flex-wrap: wrap; gap: 0.65rem;
          opacity: 0; transform: translateY(10px);
          transition: opacity 0.55s ease 0.95s, transform 0.55s ease 0.95s;
        }
        .sis-ctas.in { opacity: 1; transform: translateY(0); }

        /* primary red */
        .sis-btn-red {
          display: inline-flex; align-items: center; gap: 0.45rem;
          background: #C8102E;
          color: #fff;
          font-family: var(--font-display);
          font-size: 0.68rem; font-weight: 800;
          text-transform: uppercase; letter-spacing: 0.16em;
          padding: 0.8rem 1.5rem;
          text-decoration: none;
          border: 1px solid #C8102E;
          border-radius: 1px;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          position: relative; overflow: hidden;
          white-space: nowrap;
        }
        .sis-btn-red:hover { background: #a80d26; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(200,16,46,0.45); }
        .sis-btn-red .btn-arr { transition: transform 0.2s; flex-shrink: 0; }
        .sis-btn-red:hover .btn-arr { transform: translateX(4px); }

        /* ghost */
        .sis-btn-ghost {
          display: inline-flex; align-items: center; gap: 0.4rem;
          background: rgba(0,0,0,0.45);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          color: rgba(255,255,255,0.88);
          font-family: var(--font-display);
          font-size: 0.68rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.16em;
          padding: 0.8rem 1.3rem;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.22);
          border-radius: 1px;
          transition: background 0.2s, border-color 0.2s, transform 0.15s;
          white-space: nowrap;
        }
        .sis-btn-ghost:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.5);
          transform: translateY(-2px);
        }

        /* play dot */
        .sis-play-dot {
          width: 18px; height: 18px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.45);
          display: inline-flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        /* ══ SCROLL HINT ═════════════════════════════════════════ */
        .sis-scroll {
          position: absolute;
          bottom: 5.5rem; right: 2.5rem;
          z-index: 10;
          display: flex; flex-direction: column; align-items: center; gap: 0.4rem;
          opacity: 0;
          transition: opacity 0.6s ease 1.4s;
        }
        .sis-scroll.in { opacity: 0.4; }
        .sis-scroll span {
          font-size: 0.58rem; font-weight: 700;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: #fff; font-family: var(--font-display);
          writing-mode: vertical-rl;
        }
        .sis-scroll-line {
          width: 1px; height: 40px;
          background: linear-gradient(to bottom, #fff, transparent);
          animation: spulse 2s ease-in-out infinite;
        }
        @keyframes spulse {
          0%,100% { opacity: 0.25; transform: scaleY(0.6); }
          50%      { opacity: 1;    transform: scaleY(1);   }
        }

        /* ══ TABLET (601px – 900px) ══════════════════════════════ */
        @media (min-width: 601px) and (max-width: 900px) {
          .sis-hero {
            height: 80vh;
            min-height: 520px;
          }

          /* Video: shift focus to upper-center for portrait tablets */
          .sis-video {
            object-position: 60% top;
          }

          /* Overlay slightly heavier for readability */
          .sis-overlay {
            background:
              linear-gradient(115deg,
                rgba(0,0,0,0.92) 0%,
                rgba(0,0,0,0.78) 50%,
                rgba(0,0,0,0.50) 100%
              );
          }

          .sis-topleft {
            top: 1.8rem;
            left: 1.8rem;
          }
          .sis-topleft h2 {
            font-size: clamp(1.5rem, 3vw, 2.2rem);
          }
          .sis-topleft-bar {
            height: 44px;
          }

          .sis-centerright {
            left: 1.8rem;
            top: 50%;
            width: 80%;
            max-width: 520px;
          }

          .sis-h1 {
            font-size: clamp(2.4rem, 5.5vw, 3.6rem);
            margin-bottom: 1rem;
          }

          .sis-body {
            font-size: 0.88rem;
            line-height: 1.7;
            max-width: 100%;
          }

          .sis-ctas {
            gap: 0.55rem;
          }

          .sis-scroll { display: none; }
        }

        /* ══ MOBILE (≤ 600px) ════════════════════════════════════ */
        @media (max-width: 600px) {
          .sis-hero {
            height: 100svh;
            min-height: 0;
          }

          /* Video: focus on upper area so face/subject shows */
          .sis-video {
            object-position: 65% top;
            width: 100%;
            height: 100%;
          }

          /* Heavier overlay for legibility */
          .sis-overlay {
            background: linear-gradient(
              to top,
              rgba(0,0,0,0.92) 0%,
              rgba(0,0,0,0.65) 45%,
              rgba(0,0,0,0.20) 100%
            );
          }

          /* Flex column, content centered vertically */
          .sis-content {
            padding: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          /* Top-left label: pulled out of absolute, flows in flex */
          .sis-topleft {
            position: static;
            padding: 0 1.25rem;
            margin-bottom: 0.9rem;
          }
          .sis-topleft h2 {
            font-size: clamp(1.2rem, 5vw, 1.6rem);
          }
          .sis-topleft-bar {
            height: 32px;
            margin-bottom: 0.4rem;
          }

          /* Center-right: full width, static, no gap */
          .sis-centerright {
            position: static;
            top: auto;
            left: auto;
            transform: none;
            width: 100%;
            max-width: 100%;
            padding: 0 1.25rem;
          }

          .sis-eyebrow {
            margin-bottom: 0.3rem;
          }
          .sis-eyebrow span {
            font-size: 0.75rem;
          }

          .sis-h1 {
            font-size: clamp(2.2rem, 9.5vw, 2.8rem);
            margin-bottom: 0.75rem;
            line-height: 1;
          }

          .sis-body {
            font-size: 0.84rem;
            line-height: 1.68;
            max-width: 100%;
            margin-bottom: 1.25rem;
            color: rgba(255,255,255,0.72);
          }

          /* Stack CTAs, full-width, with bottom safe area */
          .sis-ctas {
            flex-direction: column;
            gap: 0.5rem;
            padding-bottom: max(1.5rem, env(safe-area-inset-bottom));
          }

          .sis-btn-red,
          .sis-btn-ghost {
            justify-content: center;
            padding: 0.9rem 1.2rem;
            font-size: 0.72rem;
          }

          .sis-scroll { display: none; }
        }

        /* ══ VERY SMALL (≤ 360px) ════════════════════════════════ */
        @media (max-width: 360px) {
          .sis-h1 {
            font-size: 2rem;
          }
          .sis-topleft h2 {
            font-size: 1.1rem;
          }
          .sis-topleft,
          .sis-centerright {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }

        /* ══ REDUCED MOTION ══════════════════════════════════════ */
        @media (prefers-reduced-motion: reduce) {
          .sis-topleft, .sis-eyebrow, .sis-h1, .sis-body,
          .sis-ctas, .sis-scroll {
            opacity: 1 !important; transform: none !important;
            transition: none !important;
          }
          .sis-scroll-line { animation: none; }
        }
      `}</style>

      <section className="sis-hero">
        {/* video */}
        <video className="sis-video" autoPlay muted loop playsInline
          poster="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80">
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* overlays */}
        <div className="sis-overlay" />
        <div className="sis-redglow" />
        <div className="sis-grain" aria-hidden />

        <div className="sis-content">

          {/* ── TOP-LEFT: Trusted Global Workforce Solution ── */}
          <div className={`sis-topleft${vis ? " in" : ""}`}>
            <div className="sis-topleft-bar" />
            <h2>
              Trusted Global<br />Workforce Solution
            </h2>
          </div>

          {/* ── CENTER-RIGHT: main headline block ── */}
          <div className="sis-centerright">

            {/* eyebrow */}
            <div className={`sis-eyebrow${vis ? " in" : ""}`}>
              <span className="sis-eyebrow-dash" />
              <span>Provider With Skilled,</span>
            </div>

            {/* headline */}
            <h1 className={`sis-h1${vis ? " in" : ""}`}>
              Industry <em>Ready</em><br />Talent
            </h1>

            {/* body */}
            <p className={`sis-body${vis ? " in" : ""}`}>
              SIS Global Workforce Solutions empowers businesses across GCC,
              Europe, and global markets with compliant, trained, and
              deployment-ready workforce solutions from India, Nepal, and Sri Lanka.
            </p>

            {/* CTAs */}
            <div className={`sis-ctas${vis ? " in" : ""}`}>
              <Link href="/employers" className="sis-btn-red">
                Hire Workforce <ArrowRight size={13} className="btn-arr" />
              </Link>
              <Link href="/jobs" className="sis-btn-ghost">
                <span className="sis-play-dot">
                  <Play size={7} fill="currentColor" />
                </span>
                Explore Jobs
              </Link>
              <Link href="/contact" className="sis-btn-ghost">
                <span className="sis-play-dot">
                  <Play size={7} fill="currentColor" />
                </span>
                Speak to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}