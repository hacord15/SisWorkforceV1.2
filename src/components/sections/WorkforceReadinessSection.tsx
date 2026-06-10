"use client";

import { useIntersectionObserver } from "@/lib/useIntersectionObserver";
import {
  ClipboardCheck, Languages, Globe2, FileCheck,
  HardHat, Brain, Briefcase, PlaneTakeoff,
  Rocket, Clock3, TrendingUp, Users, ArrowRight,
} from "lucide-react";
import Link from "next/link";

const TRAINING_MODULES = [
  { icon: ClipboardCheck, label: "Trade testing"              },
  { icon: Languages,      label: "Language familiarization"   },
  { icon: Globe2,         label: "Cultural awareness"         },
  { icon: FileCheck,      label: "Visa & compliance training" },
  { icon: HardHat,        label: "Safety orientation"         },
  { icon: Brain,          label: "Behavioral assessment"      },
  { icon: Briefcase,      label: "Workplace readiness"        },
  { icon: PlaneTakeoff,   label: "Pre-departure orientation"  },
];

const CLIENT_BENEFITS = [
  {
    icon: Rocket,
    title: "Deployment-Ready Workforce",
    desc:  "Candidates arrive prepared — no ramp-up time needed on your end.",
  },
  {
    icon: Clock3,
    title: "Reduced Training Time",
    desc:  "Structured pre-deployment evaluation cuts on-site induction significantly.",
  },
  {
    icon: TrendingUp,
    title: "Higher Productivity from Day One",
    desc:  "Trained, assessed, and oriented workers hit the ground running.",
  },
  {
    icon: Users,
    title: "Lower Attrition & Better Stability",
    desc:  "Readiness programs build commitment and reduce early-stage dropouts.",
  },
];

export default function WorkforceReadinessSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg,#FAFAFA 0%,#F3F3F3 100%)" }}
    >
      {/* Subtle red accent */}
      <div
        className="absolute left-0 top-0 w-1/3 h-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 60% at 0% 50%, rgba(200,16,46,0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-brand-red text-sm font-semibold tracking-widest uppercase mb-2">
            Pre-Deployment Training
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-brand-grey-900 leading-tight max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-display)" }}
          >
            International Workforce{" "}
            <span className="text-brand-red">Readiness Program</span>
          </h2>
          <div className="section-divider mt-4" />
          <p className="text-brand-grey-500 text-base mt-5 max-w-2xl mx-auto leading-relaxed">
            Every candidate deployed through SIS Global undergoes structured training
            and readiness evaluation before deployment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — training modules */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <p className="text-xs font-bold tracking-widest uppercase text-brand-grey-400 mb-5">
              Our training includes
            </p>

            <div className="grid grid-cols-2 gap-3">
              {TRAINING_MODULES.map(({ icon: Icon, label }, i) => (
                <div
                  key={label}
                  className={`group flex items-center gap-3 bg-white rounded-xl px-4 py-4 border border-brand-grey-100 hover:border-brand-red/30 hover:shadow-sm transition-all duration-300 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${0.1 + i * 0.06}s` }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-brand-red"
                    style={{ background: "rgba(200,16,46,0.08)", color: "#C8102E" }}
                  >
                    <Icon size={16} />
                  </div>
                  <span className="text-brand-grey-700 text-xs font-semibold leading-snug">{label}</span>
                </div>
              ))}
            </div>

            {/* Step indicator */}
            <div
              className="mt-8 flex items-center gap-3 px-5 py-4 rounded-2xl"
              style={{ background: "rgba(200,16,46,0.06)", border: "1px solid rgba(200,16,46,0.12)" }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white text-sm"
                style={{ background: "linear-gradient(135deg,#C8102E,#A00D25)", fontFamily: "var(--font-display)" }}
              >
                8
              </div>
              <div>
                <p className="text-brand-grey-900 text-sm font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  Training modules completed
                </p>
                <p className="text-brand-grey-500 text-xs mt-0.5">before every international deployment</p>
              </div>
            </div>
          </div>

          {/* Right — client benefit cards */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <p className="text-xs font-bold tracking-widest uppercase text-brand-grey-400 mb-5">
              This ensures our clients receive
            </p>

            <div className="flex flex-col gap-4">
              {CLIENT_BENEFITS.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className={`group flex items-start gap-4 bg-white rounded-2xl p-5 border border-brand-grey-100 hover:border-brand-red/30 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${0.2 + i * 0.08}s` }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors group-hover:bg-brand-red"
                    style={{ background: "rgba(200,16,46,0.08)", color: "#C8102E" }}
                  >
                    <Icon size={19} />
                  </div>
                  <div>
                    <h4
                      className="font-bold text-brand-grey-900 text-sm mb-1"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {title}
                    </h4>
                    <p className="text-brand-grey-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                  {/* left accent bar */}
                  <div
                    className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full bg-brand-red scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"
                  />
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Hire Trained Workforce <ArrowRight size={15} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
