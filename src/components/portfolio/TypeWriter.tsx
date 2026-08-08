"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  "SaaS Founder",
  "Full Stack Developer",
  "Laravel Specialist",
  "AWS Cloud Builder",
  "Product Engineer",
  "Backend Architect",
];

export default function TypeWriter() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const tick = useCallback(() => {
    const current = roles[currentIndex];

    if (isPaused) {
      setIsPaused(false);
      setIsDeleting(true);
      return 50;
    }

    if (!isDeleting) {
      const next = current.substring(0, displayText.length + 1);
      setDisplayText(next);
      if (next === current) {
        setIsPaused(true);
        return 2000;
      }
      return 80 + Math.random() * 40;
    } else {
      const next = current.substring(0, displayText.length - 1);
      setDisplayText(next);
      if (next === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % roles.length);
        return 400;
      }
      return 40;
    }
  }, [currentIndex, displayText, isDeleting, isPaused]);

  useEffect(() => {
    const timeout = setTimeout(tick, 60);
    return () => clearTimeout(timeout);
  }, [tick]);

  return (
    <span className="inline-flex items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={displayText}
          className="text-neon font-mono"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.8 }}
        >
          {displayText}
        </motion.span>
      </AnimatePresence>
      <motion.span
        className="text-neon ml-0.5"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
      >
        |
      </motion.span>
    </span>
  );
}
