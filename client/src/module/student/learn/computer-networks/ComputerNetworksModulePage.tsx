import { Suspense, lazy, useEffect, type ComponentType, type LazyExoticComponent } from "react"
import { Link, Navigate, useParams } from "react-router"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { SEO } from "../../../../components/SEO"
import { canonicalUrl } from "../../../../lib/seo.utils"
import { LoadingScreen } from "../../../../components/LoadingScreen"
import { AccessibleVisualizer } from "../../../../components/shared/AccessibleVisualizer"
import { CN_MODULES, getCnModule } from "./curriculum"

/**
 * Static lazy registry of module content components. Paths must be literals so
 * Vite can code-split each module into its own chunk.
 */
const MODULE_PAGES: Record<string, LazyExoticComponent<ComponentType>> = {
  "module-1": lazy(() => import("./module-1/Module1Page")),
  "module-2": lazy(() => import("./module-2/Module2Page")),
  "module-3": lazy(() => import("./module-3/Module3Page")),
  "module-4": lazy(() => import("./module-4/Module4Page")),
  "module-5": lazy(() => import("./module-5/Module5Page")),
  "module-6": lazy(() => import("./module-6/Module6Page")),
}

/** Published modules in order, used to derive prev/next links. */
const PUBLISHED = CN_MODULES.filter((m) => m.available)

export default function ComputerNetworksModulePage() {
  const { moduleId } = useParams<{ moduleId: string }>()
  const meta = getCnModule(moduleId)
  const Content = moduleId ? MODULE_PAGES[moduleId] : undefined

  // Scroll back to top whenever the module changes.
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [moduleId])

  // Unknown or not-yet-published module: send back to the hub.
  if (!meta || !meta.available || !Content) {
    return <Navigate to="/learn/computer-networks" replace />
  }

  const idx = PUBLISHED.findIndex((m) => m.slug === meta.slug)
  const prev = idx > 0 ? PUBLISHED[idx - 1] : null
  const next = idx < PUBLISHED.length - 1 ? PUBLISHED[idx + 1] : null

  return (
    <AccessibleVisualizer>
      <div className="min-h-[calc(100vh-4rem)] bg-stone-50 dark:bg-stone-950">
        <SEO
          title={`${meta.title} - Computer Networks`}
          description={meta.desc}
          canonicalUrl={canonicalUrl(`/learn/computer-networks/${meta.slug}`)}
        />

        <div className="mx-auto max-w-5xl px-3 py-8 sm:px-8">
          <Suspense fallback={<LoadingScreen />}>
            <motion.div
              key={meta.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Content />
            </motion.div>
          </Suspense>

          {/* Prev / next module navigation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {prev ? (
              <Link
                to={`/learn/computer-networks/${prev.slug}`}
                className="group flex items-center gap-3 rounded-md border border-stone-200 bg-white px-4 py-3 no-underline transition-colors hover:border-stone-400 dark:border-white/10 dark:bg-stone-900 dark:hover:border-white/30"
              >
                <ArrowLeft className="h-4 w-4 shrink-0 text-stone-400 transition-all group-hover:-translate-x-0.5 group-hover:text-lime-600 dark:group-hover:text-lime-400" />
                <div className="min-w-0">
                  <div className="text-xs font-mono uppercase tracking-widest text-stone-500">
                    / previous · module {prev.num}
                  </div>
                  <div className="truncate text-sm font-bold text-stone-900 dark:text-stone-50">
                    {prev.title}
                  </div>
                </div>
              </Link>
            ) : (
              <Link
                to="/learn/computer-networks"
                className="group flex items-center gap-3 rounded-md border border-stone-200 bg-white px-4 py-3 no-underline transition-colors hover:border-stone-400 dark:border-white/10 dark:bg-stone-900 dark:hover:border-white/30"
              >
                <ArrowLeft className="h-4 w-4 shrink-0 text-stone-400 transition-all group-hover:-translate-x-0.5 group-hover:text-lime-600 dark:group-hover:text-lime-400" />
                <div className="min-w-0">
                  <div className="text-xs font-mono uppercase tracking-widest text-stone-500">
                    / back to
                  </div>
                  <div className="truncate text-sm font-bold text-stone-900 dark:text-stone-50">
                    Course overview
                  </div>
                </div>
              </Link>
            )}
            {next ? (
              <Link
                to={`/learn/computer-networks/${next.slug}`}
                className="group flex items-center justify-end gap-3 rounded-md border border-stone-200 bg-white px-4 py-3 text-right no-underline transition-colors hover:border-stone-400 dark:border-white/10 dark:bg-stone-900 dark:hover:border-white/30"
              >
                <div className="min-w-0">
                  <div className="text-xs font-mono uppercase tracking-widest text-stone-500">
                    / next · module {next.num}
                  </div>
                  <div className="truncate text-sm font-bold text-stone-900 dark:text-stone-50">
                    {next.title}
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-stone-400 transition-all group-hover:translate-x-0.5 group-hover:text-lime-600 dark:group-hover:text-lime-400" />
              </Link>
            ) : (
              <div className="rounded-md border border-dashed border-stone-300 px-4 py-3 text-center dark:border-white/10">
                <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
                  more modules coming soon
                </span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AccessibleVisualizer>
  )
}
