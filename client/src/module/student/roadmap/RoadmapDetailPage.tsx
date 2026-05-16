import { useEffect, useState, type ReactNode } from "react";
import { Link, useParams } from "react-router";
import { motion } from "framer-motion";
import { Clock, BookOpen, Target, ChevronRight, ArrowRight, Check, HelpCircle, Map as MapIcon } from "lucide-react";
import { SEO } from "../../../components/SEO";
import { Button } from "../../../components/ui/button";
import { Navbar } from "../../../components/Navbar";
import { useStudentSidebar } from "../../../components/StudentSidebar";
import { canonicalUrl, SITE_URL } from "../../../lib/seo.utils";
import api from "../../../lib/axios";
import { useAuthStore } from "../../../lib/auth.store";
import type { Roadmap, RoadmapEnrollmentListItem } from "../../../lib/types";

function Chrome({ children, isStudent, sidebarWidth, collapsed, sidebar }: {
  children: ReactNode;
  isStudent: boolean;
  sidebarWidth: number;
  collapsed: boolean;
  sidebar: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      <div className="hidden lg:block">
        <Navbar sidebarOffset={isStudent ? sidebarWidth : 0} />
      </div>
      <div className="lg:hidden">
        <Navbar />
      </div>
      {isStudent && sidebar}
      <div
        className={`transition-all duration-300 ${
          isStudent ? (collapsed ? "lg:ml-18" : "lg:ml-64") : ""
        }`}
      >
        <div className="pt-16 lg:pt-24">{children}</div>
      </div>
    </div>
  );
}

export default function RoadmapDetailPage() {
  const { slug = "" } = useParams();
  const { isAuthenticated, user } = useAuthStore();
  const isStudent = isAuthenticated && user?.role === "STUDENT";
  const { collapsed, sidebarWidth, sidebar } = useStudentSidebar();
  const [roadmap, setRoadmap] = useState<Roadmap | null>(null);
  const [loading, setLoading] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [enrollments, setEnrollments] = useState<RoadmapEnrollmentListItem[]>([]);

  useEffect(() => {
    let mounted = true;
    api.get<{ roadmap: Roadmap }>(`/roadmaps/${slug}`)
      .then((res) => mounted && setRoadmap(res.data.roadmap))
      .catch(() => mounted && setRoadmap(null))
      .finally(() => mounted && setLoading(false));
    return () => { mounted = false; };
  }, [slug]);

  useEffect(() => {
    if (!isStudent) return;
    let mounted = true;
    api.get<{ enrollments: RoadmapEnrollmentListItem[] }>("/roadmaps/me/enrollments")
      .then((res) => mounted && setEnrollments(res.data.enrollments))
      .catch(() => { /* ok if not enrolled in anything */ });
    return () => { mounted = false; };
  }, [isStudent]);

  const chromeProps = { isStudent, sidebarWidth, collapsed, sidebar };

  if (loading) {
    return (
      <Chrome {...chromeProps}>
        <div className="flex items-center justify-center py-32">
          <div className="h-8 w-8 border-2 border-stone-200 dark:border-stone-800 border-t-lime-500 rounded-full animate-spin" />
        </div>
      </Chrome>
    );
  }

  if (!roadmap) {
    return (
      <Chrome {...chromeProps}>
        <div className="flex items-center justify-center py-32">
          <div className="text-center">
            <p className="text-lg font-bold text-stone-950 dark:text-stone-50 mb-2">Roadmap not found</p>
            <Link to="/roadmaps" className="text-sm text-lime-600 hover:underline">Browse all roadmaps</Link>
          </div>
        </div>
      </Chrome>
    );
  }

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: roadmap.title,
    description: roadmap.description,
    provider: {
      "@type": "Organization",
      name: "InternHack",
      sameAs: SITE_URL,
    },
    url: `${SITE_URL}/roadmaps/${roadmap.slug}`,
    educationalLevel: roadmap.level,
    timeRequired: `PT${roadmap.estimatedHours}H`,
    teaches: roadmap.outcomes,
    coursePrerequisites: roadmap.prerequisites,
    isAccessibleForFree: !roadmap.isPremium,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
      courseWorkload: `PT${roadmap.estimatedHours}H`,
    },
  };

  const faqSchema = roadmap.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: roadmap.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

  const myEnrollment = enrollments.find((e) => e.roadmap.slug === roadmap.slug);
  const hasOtherEnrollments = enrollments.length > (myEnrollment ? 1 : 0);

  const enrollHref = isAuthenticated
    ? (myEnrollment ? `/learn/roadmaps/${roadmap.slug}` : `/roadmaps/${roadmap.slug}/enroll`)
    : `/login?next=${encodeURIComponent(`/roadmaps/${roadmap.slug}/enroll`)}`;

  const ctaLabel = myEnrollment ? "Resume this roadmap" : "Start this roadmap";

  return (
    <Chrome {...chromeProps}>
      <SEO
        title={`${roadmap.title} (Free)`}
        description={roadmap.shortDescription}
        canonicalUrl={canonicalUrl(`/roadmaps/${roadmap.slug}`)}
        ogImage={roadmap.ogImage || roadmap.coverImage || undefined}
        ogType="article"
        noIndex={!roadmap.isPublished}
        structuredData={faqSchema ? [courseSchema, faqSchema] : courseSchema}
      />

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-stone-200 dark:border-stone-900">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-200 h-200 bg-linear-to-br from-lime-100 via-transparent to-stone-100 dark:from-lime-900/20 dark:via-transparent dark:to-stone-900/30 rounded-full blur-3xl opacity-60" />
        </div>

        <div className="max-w-5xl mx-auto px-6 pt-6 pb-16">
          {/* "View my roadmaps" pill for students */}
          {isStudent && (myEnrollment || hasOtherEnrollments) && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6"
            >
              <Link
                to="/student/roadmaps"
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-lime-400 dark:hover:border-lime-600 rounded-md text-xs font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-50 transition-colors no-underline"
              >
                <MapIcon className="w-3.5 h-3.5 text-lime-500" />
                {myEnrollment ? "you're enrolled" : `${enrollments.length} active`}
                <span className="text-stone-300 dark:text-stone-700">/</span>
                view my roadmaps
                <ChevronRight className="w-3 h-3" />
              </Link>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-stone-500 mb-5">
              <span className="h-1.5 w-1.5 bg-lime-400" />
              roadmap · {roadmap.level.replace("_", " ").toLowerCase()}
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-stone-950 dark:text-stone-50 mb-5 leading-[1.05]">
              {roadmap.title}
            </h1>
            <p className="text-lg text-stone-600 dark:text-stone-400 max-w-3xl leading-relaxed mb-8">
              {roadmap.shortDescription}
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-stone-500 dark:text-stone-400 mb-8 font-mono">
              <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4" /> {roadmap.estimatedHours} hours</span>
              <span className="inline-flex items-center gap-2"><BookOpen className="w-4 h-4" /> {roadmap.topicCount} topics</span>
              <span className="inline-flex items-center gap-2"><Target className="w-4 h-4" /> Free</span>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="mono">
                <Link to={enrollHref}>
                  {ctaLabel}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#syllabus">View syllabus</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14 grid lg:grid-cols-3 gap-10">
        {/* Main */}
        <div className="lg:col-span-2 space-y-12">
          {/* What you'll learn */}
          <section>
            <h2 className="font-display text-2xl font-bold text-stone-950 dark:text-stone-50 mb-5">What you will learn</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {roadmap.outcomes.map((o, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  <Check className="w-4 h-4 text-lime-500 mt-0.5 shrink-0" />
                  {o}
                </li>
              ))}
            </ul>
          </section>

          {/* Syllabus */}
          <section id="syllabus">
            <h2 className="font-display text-2xl font-bold text-stone-950 dark:text-stone-50 mb-5">Syllabus</h2>
            <div className="space-y-3">
              {roadmap.sections.map((section, i) => (
                <details
                  key={section.id}
                  open={i === 0}
                  className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl group"
                >
                  <summary className="flex items-center justify-between gap-3 p-5 cursor-pointer list-none">
                    <div>
                      <p className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-1">
                        Section {i + 1}
                      </p>
                      <p className="text-base font-bold text-stone-950 dark:text-stone-50">{section.title}</p>
                      <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">{section.summary}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-stone-400 group-open:rotate-90 transition-transform shrink-0" />
                  </summary>
                  <div className="px-5 pb-5 space-y-2">
                    {section.topics.map((t) => (
                      <Link
                        key={t.id}
                        to={`/roadmaps/${roadmap.slug}/topics/${t.slug}`}
                        className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-stone-50 dark:bg-stone-800/50 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors no-underline"
                      >
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-stone-900 dark:text-stone-100 truncate">{t.title}</p>
                          <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5 truncate">{t.summary}</p>
                        </div>
                        <span className="text-xs font-mono text-stone-400 shrink-0">{t.estimatedHours}h</span>
                      </Link>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* FAQ */}
          {roadmap.faqs.length > 0 && (
            <section>
              <h2 className="font-display text-2xl font-bold text-stone-950 dark:text-stone-50 mb-5">Questions</h2>
              <div className="space-y-2">
                {roadmap.faqs.map((f, i) => (
                  <div
                    key={i}
                    className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between gap-3 p-4 text-left cursor-pointer bg-transparent border-0"
                    >
                      <span className="text-sm font-bold text-stone-950 dark:text-stone-50 inline-flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-lime-500" />
                        {f.q}
                      </span>
                      <ChevronRight className={`w-4 h-4 text-stone-400 transition-transform ${openFaq === i ? "rotate-90" : ""}`} />
                    </button>
                    {openFaq === i && (
                      <p className="px-4 pb-4 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                        {f.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-28 lg:self-start space-y-5">
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-5">
            <p className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-3">Prerequisites</p>
            {roadmap.prerequisites.length === 0 ? (
              <p className="text-sm text-stone-500">None.</p>
            ) : (
              <ul className="space-y-2">
                {roadmap.prerequisites.map((p, i) => (
                  <li key={i} className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">{p}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="bg-stone-950 text-stone-50 dark:bg-stone-50 dark:text-stone-950 rounded-2xl p-5">
            <p className="text-sm font-bold mb-2">{myEnrollment ? "Pick up where you left off" : "Ready to start?"}</p>
            <p className="text-xs opacity-80 mb-4 leading-relaxed">
              {myEnrollment
                ? "Open your interactive canvas, mark topics complete, and track progress."
                : "Tell us your hours per week, get a personalized weekly plan and a PDF you can keep."}
            </p>
            <Button asChild className="w-full" variant="primary">
              <Link to={enrollHref}>
                {ctaLabel}
              </Link>
            </Button>
            {isStudent && enrollments.length > 0 && (
              <Link
                to="/student/roadmaps"
                className="mt-3 block text-center text-xs font-mono uppercase tracking-widest opacity-70 hover:opacity-100 no-underline"
              >
                view my roadmaps
              </Link>
            )}
          </div>
        </aside>
      </div>
    </Chrome>
  );
}
