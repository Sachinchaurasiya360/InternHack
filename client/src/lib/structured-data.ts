import { SITE_URL } from "./seo.utils";

type JsonLd = Record<string, unknown>;

export function jobPostingSchema(job: {
  title: string;
  description: string;
  company: string;
  location: string;
  salary?: string;
  deadline?: string | null;
  createdAt?: string;
  id: number;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    hiringOrganization: {
      "@type": "Organization",
      name: job.company,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location,
      },
    },
    ...(job.salary && { baseSalary: job.salary }),
    ...(job.deadline && { validThrough: job.deadline }),
    datePosted: job.createdAt || new Date().toISOString(),
    url: `${SITE_URL}/jobs/${job.id}`,
  };
}

export function blogPostingSchema(post: {
  title: string;
  excerpt?: string | null;
  content: string;
  slug: string;
  authorName: string;
  publishedAt?: string | null;
  updatedAt?: string;
  featuredImage?: string | null;
  tags?: string[];
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt || post.content.slice(0, 160),
    author: { "@type": "Person", name: post.authorName },
    publisher: {
      "@type": "Organization",
      name: "InternHack",
      url: SITE_URL,
    },
    ...(post.publishedAt && { datePublished: post.publishedAt }),
    ...(post.updatedAt && { dateModified: post.updatedAt }),
    ...(post.featuredImage && { image: post.featuredImage }),
    url: `${SITE_URL}/blog/${post.slug}`,
    ...(post.tags?.length && { keywords: post.tags.join(", ") }),
  };
}

export function eventSchema(event: {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  locationType: string;
  organizer: string;
  website?: string | null;
}): JsonLd {
  const isVirtual =
    event.locationType?.toLowerCase() === "virtual" ||
    event.locationType?.toLowerCase() === "online";

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    location: isVirtual
      ? { "@type": "VirtualLocation", url: event.website || SITE_URL }
      : {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: event.location,
          },
        },
    organizer: { "@type": "Organization", name: event.organizer },
    eventAttendanceMode: isVirtual
      ? "https://schema.org/OnlineEventAttendanceMode"
      : "https://schema.org/OfflineEventAttendanceMode",
  };
}

export function courseSchema(course: {
  name: string;
  description: string;
  url: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: "InternHack",
      url: SITE_URL,
    },
    url: course.url,
    isAccessibleForFree: true,
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[],
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(
  questions: { question: string; answer: string }[],
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "InternHack",
    url: SITE_URL,
    description:
      "AI-powered career platform for students, curated internships, ATS resume scoring, learning tracks, and direct recruiter connections.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/jobs?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function platformOrganizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "InternHack",
    url: SITE_URL,
    logo: `${SITE_URL}/og-image.png`,
    description:
      "AI-powered career platform for students and recruiters, internships, ATS resume scoring, learning tracks, open source, skill verification.",
    sameAs: [
      "https://twitter.com/internhack",
      "https://www.linkedin.com/company/internhack",
      "https://github.com/internhack",
    ],
  };
}

export function itemListSchema(items: { name: string; url: string; description?: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: item.url,
      ...(item.description && { description: item.description }),
    })),
  };
}

export function organizationSchema(org: {
  name: string;
  description: string;
  slug: string;
  website?: string | null;
  city?: string;
  industry?: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: org.name,
    description: org.description,
    url: org.website || `${SITE_URL}/companies/${org.slug}`,
    ...(org.city && {
      address: {
        "@type": "PostalAddress",
        addressLocality: org.city,
      },
    }),
    ...(org.industry && { industry: org.industry }),
  };
}
