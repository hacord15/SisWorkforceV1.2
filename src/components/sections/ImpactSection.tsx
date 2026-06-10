"use client";

import { useIntersectionObserver } from "@/lib/useIntersectionObserver";
import {
  Banknote, TrendingUp, Globe2, BookOpen,
  HeartHandshake, PiggyBank, ArrowRight,
} from "lucide-react";
import Link from "next/link";

const IMPACT_POINTS = [
  { icon: Banknote,      label: "Increase family income"          },
  { icon: TrendingUp,    label: "Improve social status"           },
  { icon: Globe2,        label: "Build international careers"     },
  { icon: BookOpen,      label: "Access continuous training"      },
  { icon: HeartHandshake,label: "Secure family welfare"           },
  { icon: PiggyBank,     label: "Create long-term financial stability" },
];

export default function ImpactSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section
      ref={ref}
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Subtle red wash on right */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 80% at 90% 50%, rgba(200,16,46,0.04) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-2">
            Our Purpose
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-brand-grey-900 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Changing Lives Through{" "}
            <span className="text-brand-red">Global Employment</span>
          </h2>
          <div className="section-divider mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <p className="text-brand-grey-600 text-base leading-relaxed mb-5">
              Our ethos lies in providing meaningful employment — which is not just
              limited to jobs, but about{" "}
              <span className="font-semibold text-brand-grey-800">transforming lives.</span>
            </p>
            <p className="text-brand-grey-500 text-sm leading-relaxed mb-8">
              Through our proprietary platform, which ensures ethical recruitment, continuous
              upskilling, insurance support, family connect initiatives, and post-deployment
              support, we help workers build better futures for themselves and their families.
            </p>

            {/* Impact points */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {IMPACT_POINTS.map(({ icon: Icon, label }, i) => (
                <div
                  key={label}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: `${0.15 + i * 0.07}s`,
                    background: "rgba(200,16,46,0.04)",
                    border: "1px solid rgba(200,16,46,0.10)",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(200,16,46,0.10)", color: "#C8102E" }}
                  >
                    <Icon size={15} />
                  </div>
                  <span className="text-brand-grey-700 text-xs font-medium leading-snug">{label}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-brand-grey-500 leading-relaxed border-l-2 border-brand-red pl-4 italic mb-8">
              Our mission is to uplift workers and their families socially and economically
              through global employment opportunities.
            </p>

            <Link href="/jobs" className="btn-primary inline-flex items-center gap-2">
              Find Opportunities <ArrowRight size={15} />
            </Link>
          </div>

          {/* Right — visual stat card stack */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              {/* Main card */}
              <div
                className="rounded-3xl p-10 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg,#C8102E 0%,#A00D25 60%,#7A0A1C 100%)",
                }}
              >
                {/* Rings */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full border border-white/10 pointer-events-none" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full border border-white/10 pointer-events-none" />

                <div className="relative z-10">
                  <p className="text-white/60 text-xs font-bold tracking-widest uppercase mb-6">
                    Lives Impacted
                  </p>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {[
                      { value: "25,000+", label: "Successful Placements" },
                      { value: "30+",     label: "Destination Countries"  },
                      { value: "6",       label: "Industry Sectors"       },
                      { value: "48 hrs",  label: "Avg. Shortlisting Time" },
                    ].map((s) => (
                      <div key={s.label}>
                        <div
                          className="text-3xl font-bold text-white mb-1"
                          style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
                        >
                          {s.value}
                        </div>
                        <div className="text-white/55 text-xs">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="w-full h-px bg-white/15 mb-6" />
                  <p className="text-white/70 text-sm leading-relaxed">
                    Every placement is a step toward a better life — for the worker, and their family back home.
                  </p>
                </div>
              </div>

              {/* Floating accent tag */}
              <div
                className="absolute -bottom-4 -right-4 px-4 py-2.5 rounded-xl shadow-lg"
                style={{ background: "white", border: "1px solid #E5E5E5" }}
              >
                <p className="text-brand-grey-900 text-xs font-bold">Ethical · Compliant · Human</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
