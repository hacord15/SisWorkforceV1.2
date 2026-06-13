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
          width: 100%; height: 100%; object-fit: cover;
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
          /* make it a positioning context only — no flex centering */
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

        /* decorative red vertical bar — echoes the screenshot's red stripe */
        .sis-topleft-bar {
          width: 4px; height: 56px;
          background: linear-gradient(to bottom, #C8102E, rgba(200,16,46,0.2));
          border-radius: 2px;
          margin-bottom: 0.7rem;
        }

        /* ── CENTER-RIGHT block ── */
        .sis-centerright {
          position: absolute;
          /* vertically sit at ~42% so it's visually centred-low as in screenshot */
          top: 42%;
          left: 50%;                    /* pushed right */
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
        /* subtle underline brush stroke */
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
        }
        .sis-btn-red::before {
          content: '';
          position: absolute; inset: 0;
          background: rgba(255,255,255,0);
          transition: background 0.2s;
        }
        .sis-btn-red:hover { background: #a80d26; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(200,16,46,0.45); }
        .sis-btn-red .btn-arr { transition: transform 0.2s; }
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

        /* ══ RESPONSIVE ══════════════════════════════════════════ */
        @media (max-width: 900px) {
          .sis-centerright {
            left: 1.5rem;
            width: 90%;
            top: 48%;
          }
          .sis-topleft { top: 1.5rem; left: 1.5rem; }
          .sis-scroll { display: none; }
        }

        @media (max-width: 600px) {
          .sis-topleft h2 { font-size: 1.6rem; }

        }

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

          {/* scroll hint */}
          {/* <div className={`sis-scroll${vis ? " in" : ""}`} aria-hidden>
            <span>Scroll</span>
            <div className="sis-scroll-line" />
          </div> */}
        </div>


      </section>
    </>
  );
}