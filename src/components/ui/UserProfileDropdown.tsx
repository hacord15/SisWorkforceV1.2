// Install: npm install @headlessui/react  (or use the useState approach below — no extra deps)

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { User, ChevronDown, Lock, ShieldCheck } from "lucide-react";

export function UserProfileDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="hidden lg:block relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 px-4 py-2 border-[1.5px] border-brand-red text-brand-red rounded-lg text-[13px] font-semibold tracking-wide hover:bg-red-50 transition-colors"
        style={{ fontFamily: "var(--font-display)", letterSpacing: "0.06em" }}
      >
        <User size={15} />
        USER
        <ChevronDown size={13} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown card */}
      {open && (
        <div
          className="absolute right-0 top-[calc(100%+8px)] w-[272px] bg-white border border-brand-grey-200 rounded-2xl shadow-lg z-50 overflow-hidden"
          style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
        >
          <div className="px-6 pt-7 pb-5 text-center">

            {/* Avatar */}
            {/* <div className="relative w-[68px] h-[68px] rounded-full mx-auto mb-1" style={{ background: "rgba(200,16,46,0.08)" }}>
              <User size={32} className="absolute inset-0 m-auto text-brand-red" strokeWidth={1.5} />
              
              <span className="absolute top-0.5 left-2 text-[10px] text-brand-red/30 select-none">✦</span>
              <span className="absolute bottom-1 right-1.5 text-[9px] text-brand-red/30 select-none">✦</span>
              <span className="absolute top-2 right-0.5 text-[8px] text-brand-red/20 select-none">✦</span>
            </div>

            <h3 className="text-[19px] font-bold text-brand-grey-900 mt-3 mb-1" style={{ fontFamily: "var(--font-display)" }}>
              Welcome!
            </h3>
            <p className="text-[13px] text-brand-grey-500 leading-relaxed mb-5">
              Access your account to manage<br className="hidden sm:block" /> your profile and stay connected.
            </p> */}

            <hr className="border-brand-grey-100 mb-4" />

            {/* Login */}
            <Link
              href="https://sisglobalapp.neuralinfo.co.in/portal/login/auth?portal=candidate"
              target="_blank"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full h-11 bg-brand-red text-white text-[13px] font-semibold rounded-lg mb-2.5 hover:opacity-90 transition-opacity"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "0.04em" }}
            >
              <User size={15} /> Login
            </Link>

            {/* Register */}
            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full h-11 border-[1.5px] border-brand-red text-brand-red text-[13px] font-semibold rounded-lg hover:bg-red-50 transition-colors"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "0.04em" }}
            >
              <Lock size={14} /> Register
            </Link>

            {/* Footer */}
            <div className="flex items-center justify-center gap-1.5 mt-4 pt-4 border-t border-brand-grey-100">
              <ShieldCheck size={13} className="text-brand-grey-400" />
              <span className="text-[11px] text-brand-grey-400">Secure &amp; Trusted Access</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}