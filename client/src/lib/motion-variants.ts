import type { Variants } from "framer-motion";

/**
 * Shared Framer Motion animation variants.
 *
 * Centralized here to avoid duplication across page-level components.
 * Import these instead of redefining the same variants in each file.
 *
 * @example
 * import { fadeUp, stagger } from "@/lib/motion-variants";
 *
 * <motion.div variants={stagger} initial="hidden" animate="show">
 *   <motion.div variants={fadeUp}>Hello</motion.div>
 * </motion.div>
 */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export const stagger: Variants = {
  show: { transition: { staggerChildren: 0.07 } },
};