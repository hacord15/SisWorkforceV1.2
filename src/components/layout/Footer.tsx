"use client";

import Link from "next/link";
import {
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaBriefcase,
  FaBuilding,
  FaUserCircle,
  FaLightbulb,
  FaMoneyBillWave,
  FaFileAlt,
  FaUserTie,
  FaTags,
  FaQuestionCircle,
  FaHandshake,
  FaInfoCircle,
  FaBlog,
  FaStore,
  FaNewspaper,
  FaEnvelope,
  FaHeadset,
  FaFileContract,
  FaShieldAlt,
  FaCookie,
  FaChevronRight,
} from "react-icons/fa";

const footerLinks = {
  "For Job Seekers": [
    { label: "Browse Jobs", href: "/jobs", icon: FaBriefcase },
    { label: "Browse Companies", href: "/companies", icon: FaBuilding },
    { label: "Candidate Dashboard", href: "/dashboard", icon: FaUserCircle },
    { label: "Career Advice", href: "/career-advice", icon: FaLightbulb },
    { label: "Salary Explorer", href: "/salary", icon: FaMoneyBillWave },
  ],
  "For Employers": [
    { label: "Post a Job", href: "/post-job", icon: FaFileAlt },
    { label: "Browse Candidates", href: "/candidates", icon: FaUserTie },
    { label: "Pricing Plans", href: "/pricing", icon: FaTags },
    { label: "Employer FAQ", href: "/faq", icon: FaQuestionCircle },
    {
      label: "Associate Partner",
      href: "/associate-partner",
      icon: FaHandshake,
    },
  ],
  Company: [
    { label: "About Us", href: "/sis-global", icon: FaInfoCircle },
    { label: "Blog", href: "/blog", icon: FaBlog },
    { label: "Shop", href: "/shop", icon: FaStore },
    { label: "Press Kit", href: "/press", icon: FaNewspaper },
    { label: "Contact", href: "/contact", icon: FaEnvelope },
  ],
  Support: [
    { label: "Help Center", href: "/help", icon: FaHeadset },
    { label: "FAQ's", href: "/faq", icon: FaQuestionCircle },
    { label: "Terms of Service", href: "/terms", icon: FaFileContract },
    { label: "Privacy Policy", href: "/privacy-policy", icon: FaShieldAlt },
    { label: "Cookie Policy", href: "/cookies", icon: FaCookie },
  ],
};

const socialLinks = [
  // {
  //   icon: FaTwitter,
  //   href: "https://twitter.com",
  //   label: "Twitter",
  //   color: "hover:bg-[#1DA1F2]",
  // },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/company/sisglobalworkforcesolutions",
    label: "LinkedIn",
    color: "hover:bg-[#0077B5]",
  },
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/people/SIS-Global-Workforce-Solutions/61589420021952/",
    label: "Facebook",
    color: "hover:bg-[#4267B2]",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/sisglobalworkforce/",
    label: "Instagram",
    color: "hover:bg-[#E4405F]",
  },
];

export default function Footer() {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-grey-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Grid Layout - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Section - Full width on mobile, 2 cols on desktop */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="text-center">
              <Link href="/" className="inline-block">
                <img
                  src="/assets/LOGO-2-gray colour.png"
                  alt="SIS Global"
                  className="h-24 sm:h-28 md:h-32 lg:h-36 w-auto object-contain transition-transform hover:scale-105 duration-300"
                  style={{ maxHeight: "160px" }}
                />
              </Link>
            </div>

            <p className="text-brand-grey-400 text-sm leading-relaxed mb-6">
              The world&apos;s leading job board connecting talented
              professionals with world-class companies.
            </p>

            {/* Social Links with Icons */}
            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-brand-grey-800 flex items-center justify-center text-brand-grey-300 hover:text-white transition-all duration-300 ${social.color} hover:scale-110`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections - Responsive Grid */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="sm:col-span-1">
              <h4 className="text-xs font-semibold text-brand-grey-300 uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-brand-grey-400 hover:text-white text-sm transition-colors duration-200"
                    >
                      <link.icon className="w-3.5 h-3.5 text-brand-grey-500 group-hover:text-brand-red transition-colors" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar - Responsive */}
      <div className="border-t border-brand-grey-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            {/* Copyright */}
            <p className="text-brand-grey-500 text-xs sm:text-sm order-2 md:order-1">
              © {new Date().getFullYear()} SIS Global Workforce Solutions. All
              rights reserved.
            </p>

            {/* Footer Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 order-1 md:order-2">
              {["Privacy Policy", "Terms of Use", "Cookie Policy"].map(
                (label) => (
                  <Link
                    key={label}
                    href="/privacy-policy"
                    className="text-brand-grey-500 hover:text-white text-xs sm:text-sm transition-colors duration-200"
                  >
                    {label}
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button - Optional but nice to have */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-brand-red text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 hover:scale-110 z-50 md:hidden"
        aria-label="Back to top"
      >
        <FaChevronRight className="w-5 h-5 transform -rotate-90" />
      </button>
    </footer>
  );
}
