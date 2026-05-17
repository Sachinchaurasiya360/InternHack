import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router";
import { SITE_URL } from "../lib/seo.utils";

interface SEOProps {
  title?: string;
  description?: string;
  /** @deprecated Google ignores keywords meta tag since 2009. Kept for compat. */
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_NAME = "InternHack";
const DEFAULT_DESCRIPTION =
  "InternHack is an AI-powered career platform for students. Browse curated internships, score your resume with ATS AI, follow career roadmaps, and connect directly with recruiters.";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords: _keywords,
  canonicalUrl,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  noIndex = false,
  structuredData,
}: SEOProps) {
  const { pathname } = useLocation();
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} - AI-Powered Career Platform for Students`;
  const effectiveCanonical = canonicalUrl || `${SITE_URL}${pathname}`;
  const absoluteOgImage = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Primary Meta Tags */}
      <meta name="title" content={fullTitle} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={effectiveCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={effectiveCanonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteOgImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={effectiveCanonical} />

      {/* Robots */}
      <meta
        name="robots"
        content={noIndex ? "noindex,nofollow" : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"}
      />

      {/* Structured Data (JSON-LD) */}
      {structuredData &&
        (Array.isArray(structuredData)
          ? structuredData.map((sd, i) => (
              <script key={i} type="application/ld+json">
                {JSON.stringify(sd)}
              </script>
            ))
          : (
            <script type="application/ld+json">
              {JSON.stringify(structuredData)}
            </script>
          ))}
    </Helmet>
  );
}
