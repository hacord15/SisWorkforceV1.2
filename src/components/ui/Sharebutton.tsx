// src/components/ui/ShareButton.tsx
"use client";

import { useState } from "react";
import {
  Share2, Copy, Check,
  Linkedin, Facebook, Twitter, MessageCircle,
} from "lucide-react";

interface ShareButtonProps {
  url:      string;
  title:    string;
  variant?: "icon" | "expanded";
}

const PLATFORMS = [
  {
    name:  "LinkedIn",
    icon:  <Linkedin      size={18} />,
    color: "#0077B5",
    href:  (url: string, title: string) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  },
  {
    name:  "Facebook",
    icon:  <Facebook      size={18} />,
    color: "#1877F2",
    href:  (url: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    name:  "Twitter",
    icon:  <Twitter       size={18} />,
    color: "#1DA1F2",
    href:  (url: string, title: string) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  },
  {
    name:  "WhatsApp",
    icon:  <MessageCircle size={18} />,
    color: "#25D366",
    href:  (url: string, title: string) =>
      `https://wa.me/?text=${encodeURIComponent(`${title}\n${url}`)}`,
  },
];

export default function ShareButton({ url, title, variant = "icon" }: ShareButtonProps) {
  const [open,   setOpen]   = useState(false);
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* silent */ }
  };

  const handleToggle = async () => {
    if (navigator.share) {
      try { await navigator.share({ title, url }); return; }
      catch { /* user cancelled or unsupported */ }
    }
    setOpen((v) => !v);
  };

  // ── Expanded variant (sidebar card) ──────────────────────────────────
  if (variant === "expanded") {
    return (
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-2">
          {PLATFORMS.map((p) => (
            <a
              key={p.name}
              href={p.href(url, title)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-white transition-opacity hover:opacity-85"
              style={{ background: p.color }}
            >
              {p.icon}
              {p.name}
            </a>
          ))}
        </div>

        <button
          onClick={copyLink}
          className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold border transition-colors w-full"
          style={{
            background:  copied ? "rgba(200,16,46,0.06)" : "#F5F5F5",
            borderColor: copied ? "rgba(200,16,46,0.3)"  : "#E5E5E5",
            color:       copied ? "#C8102E"               : "#525252",
          }}
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? "Copied!" : "Copy link"}
        </button>
      </div>
    );
  }

  // ── Icon variant — single button → popover with icon circles ─────────
  return (
    <div className="relative">

      {/* Trigger button */}
      <button
        onClick={handleToggle}
        aria-label="Share this job"
        title="Share"
        className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all ${
          open
            ? "border-brand-red text-brand-red bg-red-50"
            : "border-brand-grey-200 bg-white text-brand-grey-600 hover:border-brand-red hover:text-brand-red"
        }`}
      >
        <Share2 size={15} />
      </button>

      {/* Popover */}
      {open && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-30" onClick={() => setOpen(false)} />

          <div
            className="absolute right-0 top-11 z-40 bg-white rounded-2xl shadow-2xl"
            style={{
              width:     240,
              border:    "1px solid #E5E5E5",
              borderTop: "3px solid #C8102E",
              animation: "sharePopIn 0.18s ease both",
            }}
          >
            {/* Header */}
            <p className="text-[10px] font-bold uppercase tracking-widest text-brand-grey-400 px-4 pt-3 pb-3">
              Share via
            </p>

            {/* Social icon circles */}
            <div className="flex items-start justify-between px-4 pb-4">
              {PLATFORMS.map((p, i) => (
                <a
                  key={p.name}
                  href={p.href(url, title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex flex-col items-center gap-1.5 group"
                  style={{
                    animation: `shareIconIn 0.22s ease ${i * 45}ms both`,
                  }}
                >
                  <span
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white transition-all group-hover:scale-110 group-hover:shadow-lg"
                    style={{ background: p.color }}
                  >
                    {p.icon}
                  </span>
                  <span className="text-[9px] font-medium text-brand-grey-500 text-center leading-tight">
                    {p.name}
                  </span>
                </a>
              ))}
            </div>

            {/* Copy link */}
            <div className="px-4 pb-3 pt-1 border-t border-brand-grey-100">
              <button
                onClick={copyLink}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold border transition-all"
                style={{
                  background:  copied ? "rgba(200,16,46,0.06)" : "#F5F5F5",
                  borderColor: copied ? "rgba(200,16,46,0.3)"  : "#E5E5E5",
                  color:       copied ? "#C8102E"               : "#525252",
                }}
              >
                {copied ? <Check size={13} /> : <Copy size={13} />}
                {copied ? "Link copied!" : "Copy link"}
              </button>
            </div>
          </div>

          {/* Keyframes injected once */}
          <style>{`
            @keyframes sharePopIn {
              from { opacity: 0; transform: translateY(6px) scale(0.96); }
              to   { opacity: 1; transform: translateY(0)  scale(1);    }
            }
            @keyframes shareIconIn {
              from { opacity: 0; transform: translateY(8px) scale(0.85); }
              to   { opacity: 1; transform: translateY(0)  scale(1);    }
            }
          `}</style>
        </>
      )}
    </div>
  );
}