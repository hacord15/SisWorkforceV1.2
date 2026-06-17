import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  MapPin,
  Clock,
  DollarSign,
  Briefcase,
  Building2,
  CheckCircle,
  Star,
  ArrowRight,
  Share2,
  Bookmark,
  ChevronRight,
  Hash,
  Calendar,
  Layers,
  Users,
  Activity,
  BarChart2,
} from "lucide-react";

interface JobDetail {
  id: number;
  title: string;
  company: string;
  logo: string;
  logoColor: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  category: string;
  experience: number | string;
  urgent: boolean;
  featured: boolean;
  description: string;
  compensation: string;
  jobCode: string;
  status: string;
  vacancy: number;
  documents: Array<{
    id?: number;
    document_name: string;
    is_required: boolean;
  }>;
  jobSpecificDocuments: Array<{
    id?: number;
    document_name: string;
    is_required: boolean;
  }>;
  tags: string[];
}

async function getJob(id: string): Promise<{ job: JobDetail } | null> {
  try {
    const res = await fetch(
      `https://sisglobalapi.neuralinfo.co.in/public/jobs/${id}`,
      { cache: "no-store" },
    );
    if (!res.ok) return null;
    const data = await res.json();
    const j = data.job;

    const job: JobDetail = {
      id: j.job_id,
      title: j.job_title,
      company: j.category_name || "Company",
      logo: j.job_title?.charAt(0) || "J",
      logoColor: "#C8102E",
      location: data.locations?.[0]?.city_name || j.country_name || "—",
      type: j.employment_type_name || "Full Time",
      salary: `${j.salary_min} – ${j.salary_max}`,
      posted: new Date(j.created_at).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      category: j.category_name || "",
      experience: j.min_experience || "Not specified",
      urgent: false,
      featured: false,
      description: j.job_description || "",
      compensation: j.compensation_text || "",
      jobCode: j.job_code || "—",
      status: j.status || "Open",
      vacancy: j.vacancy || 1,
      documents: data.documents || [],
      jobSpecificDocuments: data.job_specific_documents || [],
      tags: [],
    };

    return { job };
  } catch {
    return null;
  }
}

const TYPE_COLORS: Record<string, { bg: string; color: string }> = {
  "Full Time": { bg: "#E7F9ED", color: "#0BA02C" },
  Remote: { bg: "#E8F1FB", color: "#0A65CC" },
  Hybrid: { bg: "#FFF8EC", color: "#FFB836" },
  Contract: { bg: "#F5F0FF", color: "#7B3FE4" },
};

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const result = await getJob(id);
  if (!result) notFound();

  const { job } = result;
  const tc = TYPE_COLORS[job.type] || TYPE_COLORS["Full Time"];
  const allDocs = [...job.documents, ...job.jobSpecificDocuments];

  const formatContent = (html: string) => {
    if (!html) return "<p>Description not available.</p>";
    return html;
  };

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero strip ── */}
        <div
          style={{
            background:
              "linear-gradient(135deg,#FFF5F6 0%,#FFF0F2 60%,#F9F9F9 100%)",
            borderBottom: "1px solid #E5E5E5",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-xs text-brand-grey-500 mb-4 md:mb-5">
              <Link href="/" className="hover:text-brand-red transition-colors">
                Home
              </Link>
              <ChevronRight size={12} />
              <Link
                href="/jobs"
                className="hover:text-brand-red transition-colors"
              >
                Find Jobs
              </Link>
              <ChevronRight size={12} />
              <span className="text-brand-grey-800 font-medium truncate max-w-[160px] md:max-w-[300px]">
                {job.title}
              </span>
            </div>

            {/* ── Job header card ── */}
            <div
              className="bg-white border border-brand-grey-200 rounded-2xl p-4 md:p-6 shadow-sm"
              style={{ borderTop: "4px solid #C8102E" }}
            >
              {/* Row 1: Logo + Badges + Apply button */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-start gap-3 min-w-0">
                  {/* Logo */}
                  <div
                    className="w-11 h-11 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center font-bold text-lg md:text-2xl flex-shrink-0"
                    style={{
                      background: job.logoColor + "12",
                      color: job.logoColor,
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {job.logo}
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {job.urgent && (
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={{ background: "#FFF0F2", color: "#C8102E" }}
                      >
                        🔥 URGENT
                      </span>
                    )}
                    <span
                      className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                      style={{ background: tc.bg, color: tc.color }}
                    >
                      {job.type}
                    </span>
                    <span
                      className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                      style={{ background: "#F0FFF4", color: "#0BA02C" }}
                    >
                      {job.status}
                    </span>
                  </div>
                </div>

                {/* Apply button — top right always */}
                <Link
                  href="/register"
                  className="btn-primary !py-2 !px-3 md:!px-5 text-xs md:text-sm flex items-center gap-1.5 whitespace-nowrap flex-shrink-0"
                >
                  Apply Now <ArrowRight size={12} />
                </Link>
              </div>

              {/* Job Title */}
              <h1
                className="text-xl md:text-3xl font-bold text-brand-grey-900 mb-3 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {job.title}
              </h1>

              {/* Info grid — 2 cols on mobile, inline on md+ */}
              <div className="grid grid-cols-2 md:flex md:flex-wrap gap-x-5 gap-y-2 text-sm text-brand-grey-600">
                <span className="flex items-center gap-1.5 min-w-0">
                  <Building2
                    size={14}
                    className="text-brand-red flex-shrink-0"
                  />
                  <span className="truncate">{job.company}</span>
                </span>
                <span className="flex items-center gap-1.5 min-w-0">
                  <MapPin size={14} className="text-brand-red flex-shrink-0" />
                  <span className="truncate">{job.location}</span>
                </span>
                <span className="flex items-center gap-1.5 min-w-0">
                  <DollarSign
                    size={14}
                    className="text-brand-red flex-shrink-0"
                  />
                  <span className="truncate">{job.salary}</span>
                </span>
                <span className="flex items-center gap-1.5 min-w-0">
                  <Clock size={14} className="text-brand-red flex-shrink-0" />
                  <span className="truncate">Posted {job.posted}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Main content ── */}
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8">
            {/* Left column */}
            <div className="flex flex-col gap-8">
              {/* Job Description */}
              <ContentCard
                title="Job Description"
                icon={<Briefcase size={16} className="text-brand-red" />}
              >
                <div className="job-description-content">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: formatContent(
                        job.description || "<p>Description not available.</p>",
                      ),
                    }}
                  />
                </div>
              </ContentCard>

              {/* Key Responsibilities */}
              {job.compensation && (
                <ContentCard
                  title="Key Responsibilities"
                  icon={<CheckCircle size={16} className="text-brand-red" />}
                >
                  <div className="job-description-content">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: formatContent(job.compensation),
                      }}
                    />
                  </div>
                </ContentCard>
              )}
            </div>

            {/* Right sidebar */}
            <div className="flex flex-col gap-5">
              {/* Job Overview */}
              <SidebarCard title="Job Overview">
                {[
                  {
                    label: "Job Code",
                    value: job.jobCode,
                    icon: <Hash size={13} className="text-brand-red" />,
                  },
                  {
                    label: "Posted On",
                    value: job.posted,
                    icon: <Calendar size={13} className="text-brand-red" />,
                  },
                  {
                    label: "Job Type",
                    value: job.type,
                    icon: <Briefcase size={13} className="text-brand-red" />,
                  },
                  {
                    label: "Salary",
                    value: job.salary,
                    icon: <DollarSign size={13} className="text-brand-red" />,
                  },
                  {
                    label: "Category",
                    value: job.category,
                    icon: <Layers size={13} className="text-brand-red" />,
                  },
                  {
                    label: "Experience",
                    value: String(job.experience),
                    icon: <BarChart2 size={13} className="text-brand-red" />,
                  },
                  {
                    label: "Location",
                    value: job.location,
                    icon: <MapPin size={13} className="text-brand-red" />,
                  },
                  {
                    label: "Vacancies",
                    value: String(job.vacancy),
                    icon: <Users size={13} className="text-brand-red" />,
                  },
                  {
                    label: "Status",
                    value: job.status,
                    icon: <Activity size={13} className="text-brand-red" />,
                  },
                ].map(({ label, value, icon }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between py-2.5 border-b border-brand-grey-100 last:border-0"
                  >
                    <span className="text-xs text-brand-grey-500 flex items-center gap-1.5">
                      {icon}
                      {label}
                    </span>
                    <span className="text-xs font-semibold text-brand-grey-800 text-right max-w-[140px] truncate">
                      {value || "—"}
                    </span>
                  </div>
                ))}
              </SidebarCard>

              {/* Required Documents */}
              {allDocs.length > 0 && (
                <SidebarCard title="Required Documents">
                  <div className="flex flex-wrap gap-2">
                    {allDocs.map((doc, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2.5 py-1 rounded-full border font-medium"
                        style={{
                          background: doc.is_required ? "#FFF0F2" : "#F5F5F5",
                          color: doc.is_required ? "#C8102E" : "#525252",
                          borderColor: doc.is_required
                            ? "rgba(200,16,46,0.2)"
                            : "#E0E0E0",
                        }}
                      >
                        {doc.document_name}
                      </span>
                    ))}
                  </div>
                </SidebarCard>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <style>
        {`
          .job-description-content { font-size: 0.95rem; line-height: 1.7; color: #333; }
          .job-description-content p { margin-bottom: 1rem; font-size: 0.95rem; line-height: 1.7; }
          .job-description-content ul { margin: 0.75rem 0; padding-left: 1.5rem; list-style-type: disc; }
          .job-description-content ol { margin: 0.75rem 0; padding-left: 1.5rem; list-style-type: decimal; }
          .job-description-content li { margin-bottom: 0.5rem; font-size: 0.95rem; line-height: 1.6; }
          .job-description-content strong, .job-description-content b { font-weight: 600; color: #1a1a1a; }
          .job-description-content h1, .job-description-content h2, .job-description-content h3 { margin: 1rem 0 0.5rem 0; font-weight: 600; color: #222; }
          .job-description-content h3 { font-size: 1.1rem; }
          .job-description-content h2 { font-size: 1.2rem; }
          .job-description-content h4 { margin: 0.75rem 0 0.5rem 0; font-weight: 600; font-size: 1rem; }
          .job-description-content br { display: block; margin: 0.25rem 0; }
        `}
      </style>
    </>
  );
}

function ContentCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-brand-grey-200 rounded-2xl overflow-hidden shadow-sm">
      <div className="flex items-center gap-2.5 px-6 py-4 border-b border-brand-grey-100">
        {icon}
        <h2
          className="font-bold text-brand-grey-900"
          style={{ fontFamily: "var(--font-display)", fontSize: 16 }}
        >
          {title}
        </h2>
      </div>
      <div className="px-6 py-5">{children}</div>
    </div>
  );
}

function SidebarCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-brand-grey-200 rounded-xl p-5 shadow-sm">
      <h3
        className="font-bold text-brand-grey-900 mb-4 pb-3 border-b border-brand-grey-100"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 14,
          letterSpacing: "0.03em",
        }}
      >
        {title.toUpperCase()}
      </h3>
      {children}
    </div>
  );
}
