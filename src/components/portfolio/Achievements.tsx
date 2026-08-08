"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Star, Code2, Medal } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import SectionHeading from "./SectionHeading";

const achievements = [
  {
    icon: Star,
    platform: "CodeChef",
    title: "3-Star Rating",
    description: "Achieved a highest rating of 1610 on CodeChef, demonstrating strong algorithmic problem-solving skills.",
    metric: 1610,
    metricLabel: "Highest Rating",
    color: "#f59e0b",
  },
  {
    icon: Code2,
    platform: "LeetCode",
    title: "140+ Problems Solved",
    description: "Consistently solving problems across various difficulty levels, building a strong grasp of data structures and algorithms.",
    metric: 140,
    metricLabel: "Problems Solved",
    color: "#06b6d4",
  },
  {
    icon: Medal,
    platform: "GeeksforGeeks",
    title: "100+ Problems Solved",
    description: "Practiced a wide range of coding problems, covering topics from arrays to dynamic programming.",
    metric: 100,
    metricLabel: "Problems Solved",
    color: "#00ff88",
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="achievements" className="relative py-14 md:py-28 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeading
          title="Achievements"
          subtitle="Competitive programming milestones and coding accomplishments."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((ach, i) => (
            <motion.div
              key={i}
              className="group glass-card rounded-2xl p-4 md:p-8 relative overflow-hidden hover:border-neon/40 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{
                y: -8,
                boxShadow: `0 0 40px ${ach.color}15`,
              }}
            >
              {/* Background glow */}
              <motion.div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px]"
                style={{ backgroundColor: `${ach.color}15` }}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative z-10">
                <motion.div
                  className="p-3 rounded-xl mb-5 w-fit"
                  style={{ backgroundColor: `${ach.color}15`, color: ach.color }}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <ach.icon size={24} />
                </motion.div>

                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                  {ach.platform}
                </p>
                <h3 className="text-lg font-bold mb-3 group-hover:text-neon transition-colors">
                  {ach.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {ach.description}
                </p>

                <div className="pt-4 border-t border-border">
                  <AnimatedCounter
                    end={ach.metric}
                    suffix={i === 0 ? "" : "+"}
                    label={ach.metricLabel}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
