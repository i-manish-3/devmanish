"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";

const education = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Chandigarh University",
    location: "Mohali, Punjab",
    period: "2020 - 2024",
    score: "CGPA: 7.92 / 10.0",
    highlights: [
      "Specialized in Computer Science and Engineering",
      "Strong foundation in data structures, algorithms, and software engineering",
      "Active competitive programming participant",
    ],
  },
  {
    degree: "Intermediate (Science - PCM)",
    institution: "Pt. DDUM College Bairgania",
    location: "Sitamarhi, Bihar",
    period: "2017 - 2019",
    score: "Percentage: 83.20 / 100.0",
    board: "BSEB",
    highlights: [
      "Science stream with Physics, Chemistry, Mathematics",
      "Strong analytical and mathematical foundation",
    ],
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="relative py-14 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeading
          title="Education"
          subtitle="My academic journey that built the foundation for my career in tech."
        />

        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="relative glass-card neon-border rounded-2xl p-4 md:p-8 hover:border-neon/40 transition-all duration-500"
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{
                x: 8,
                boxShadow: "0 0 30px rgba(0, 255, 136, 0.08)",
              }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="flex-shrink-0 p-3 rounded-xl bg-neon/10 text-neon"
                  initial={{ rotate: -10 }}
                  animate={isInView ? { rotate: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.2, type: "spring" }}
                >
                  <GraduationCap size={24} />
                </motion.div>
                <div className="flex-1">
                  <span className="inline-block text-xs font-mono text-neon bg-neon/10 px-3 py-1 rounded-full mb-3">
                    {edu.period}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-neon/80 font-medium text-sm mb-0.5">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    {edu.location}
                    {edu.board ? ` · ${edu.board}` : ""}
                  </p>

                  {/* Score badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neon/5 border border-neon/15 mb-4">
                    <span className="text-sm font-semibold text-neon">
                      {edu.score}
                    </span>
                  </div>

                  <ul className="space-y-1.5">
                    {edu.highlights.map((h, hi) => (
                      <motion.li
                        key={hi}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.5 + i * 0.2 + hi * 0.1 }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-neon mt-1.5 flex-shrink-0" />
                        {h}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
