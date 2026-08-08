"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={`mb-8 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3">
        {title.split(" ").map((word, i) =>
          i === title.split(" ").length - 1 ? (
            <span key={i} className="text-gradient">
              {word}
            </span>
          ) : (
            <span key={i}>{word} </span>
          )
        )}
      </h2>
      <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
        {subtitle}
      </p>
      <motion.div
        className={`h-1 bg-gradient-to-r from-neon via-cyan-400 to-transparent rounded-full mt-4 ${align === "center" ? "mx-auto" : ""}`}
        initial={{ width: 0 }}
        animate={isInView ? { width: 80 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.div>
  );
}
