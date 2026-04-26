import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export function TestimonialsColumn({
  className,
  testimonials,
  duration = 10,
}: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) {
  return (
    <div className={cn(className)}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <div
                className="p-6 rounded-xl border border-stone-200 dark:border-white/10 max-w-xs w-full bg-white dark:bg-stone-900"
                key={i}
              >
                <div className="flex items-center gap-1 mb-4 text-lime-500">
                  {[0, 1, 2, 3, 4].map((n) => (
                    <svg
                      key={n}
                      className="w-3.5 h-3.5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  {text}
                </p>
                <div className="flex items-center gap-3 mt-5 pt-5 border-t border-stone-200 dark:border-white/10">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-md object-cover border border-stone-200 dark:border-white/10"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-stone-900 dark:text-stone-50 tracking-tight leading-5">
                      {name}
                    </span>
                    <span className="text-xs font-mono text-stone-500 tracking-tight leading-5">
                      {role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
