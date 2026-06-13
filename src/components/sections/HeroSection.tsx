"use client";

import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[71.6vh] min-h-[580px] flex items-center overflow-hidden">
      
     <video
  className="absolute inset-0 w-full h-full object-cover"
  autoPlay
  muted
  loop
  playsInline
  poster="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80"
>
  <source src="/hero.mp4" type="video/mp4" />
</video>

      <div className="hero-video-overlay absolute inset-0" />

   
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="max-w-xl">
          <h1
            className="text-white text-5xl md:text-6xl font-bold leading-tight mb-4"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
          >
            Trusted{" "}
            <span className="text-brand-red">Global Workforce Solution </span>{" "}
            Provider with Skilled, Industry-Ready Talent
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-md leading-relaxed">
            SIS Global Workforce Solutions empowers businesses across GCC, Europe, and global markets with compliant, trained, and deployment-ready workforce solutions from India, Nepal, and Sri Lanka.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/employers" className="btn-primary">
              Hire Workforce <ArrowRight size={16} />
            </Link>
            <Link href="/jobs" className="btn-outline">
              <Play size={14} fill="currentColor" />
              Explore Jobs
            </Link>
            <Link href="/contact" className="btn-outline">
              <Play size={14} fill="currentColor" />
              Speak to Our Team
            </Link>
          </div>
        </div>
      </div>

  
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <div className="w-px h-12 bg-white/30 animate-pulse" />
        <span className="text-xs tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
}




//version 2 - closer to original screenshot, but less mobile-friendly

// "use client";
// import { ArrowRight, Play } from "lucide-react";
// import Link from "next/link";

// export default function HeroSection() {
//   return (
//     <section className="relative h-[71.6vh] min-h-[580px] overflow-hidden">
//       {/* Background video */}
//       <video
//         className="absolute inset-0 w-full h-full object-cover"
//         autoPlay
//         muted
//         loop
//         playsInline
//         poster="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80"
//       >
//         <source src="/hero.mp4" type="video/mp4" />
//       </video>

//       {/* Overlay — uniform dark tint across the whole hero */}
//       <div className="hero-video-overlay absolute inset-0" />

//       {/* ── TOP-LEFT: "Trusted Global Workforce Solution" ── */}
//       <div className="absolute top-8 left-0 z-10 max-w-7xl w-full mx-auto px-6"
//            style={{ left: "50%", transform: "translateX(-50%)" }}>
//         <h2
//           className="text-white text-3xl md:text-6xl font-bold leading-tight"
//           style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
//         >
//           Trusted Global<br />Workforce Solution
//         </h2>
//       </div>

//       {/* ── CENTER-RIGHT: main content block ── */}
//       {/* Sits at ~40% from left, vertically centred-low (matching screenshot) */}
//       <div className="absolute inset-0 z-10 flex items-center">
//         <div className="max-w-7xl mx-auto px-6 w-full flex justify-end md:justify-center">
//           {/* Push content to right-center: on md+ shift it right with margin */}
//           <div className="w-full md:w-[55%] md:ml-auto">
//             {/* "Provider With Skilled," label */}
//             <p
//               className="text-white font-bold text-base md:text-lg mb-1"
//               style={{ fontFamily: "var(--font-display)" }}
//             >
//               Provider With Skilled,
//             </p>

//             {/* Big uppercase headline */}
//             <h1
//               className="text-white text-4xl md:text-5xl font-extrabold uppercase leading-tight mb-4"
//               style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
//             >
//               Industry Ready Talent
//             </h1>

//             {/* Body copy */}
//             <p className="text-white/80 text-base mb-28 max-w-md leading-relaxed">
//               SIS Global Workforce Solutions empowers businesses across GCC, Europe,
//               and global markets with compliant, trained, and deployment-ready
//               workforce solutions from India, Nepal, and Sri Lanka.
//             </p>

//             {/* CTA buttons */}
//             <div className="flex flex-wrap gap-3">
//               <Link
//                 href="/employers"
//                 className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white text-xs font-bold uppercase tracking-widest px-5 py-3 transition-colors"
//               >
//                 Hire Workforce <ArrowRight size={14} />
//               </Link>
//               <Link
//                 href="/jobs"
//                 className="inline-flex items-center gap-2 border border-white/50 bg-black/40 hover:bg-black/60 text-white text-xs font-bold uppercase tracking-widest px-5 py-3 transition-colors"
//               >
//                 <Play size={12} fill="currentColor" />
//                 Explore Jobs
//               </Link>
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center gap-2 border border-white/50 bg-black/40 hover:bg-black/60 text-white text-xs font-bold uppercase tracking-widest px-5 py-3 transition-colors"
//               >
//                 <Play size={12} fill="currentColor" />
//                 Speak to Our Team
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

      
//     </section>
//   );
// }