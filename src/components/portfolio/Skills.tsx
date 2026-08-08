"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";

interface SkillItem {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "PHP / Laravel", level: 90, color: "#00ff88" },
      { name: "C++", level: 75, color: "#06b6d4" },
      { name: "JavaScript", level: 78, color: "#f59e0b" },
      { name: "HTML / CSS", level: 85, color: "#ec4899" },
      { name: "jQuery / Ajax", level: 72, color: "#8b5cf6" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "AWS (EC2, S3, Textract)", level: 82, color: "#00ff88" },
      { name: "Git / GitHub", level: 88, color: "#06b6d4" },
      { name: "MySQL", level: 80, color: "#f59e0b" },
      { name: "Linux", level: 75, color: "#ec4899" },
      { name: "VS Code", level: 92, color: "#8b5cf6" },
    ],
  },
];

function SkillBar({ skill, delay, isInView }: { skill: SkillItem; delay: number; isInView: boolean }) {
  return (
    <motion.div
      className="space-y-2"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{skill.name}</span>
        <motion.span
          className="text-xs text-muted-foreground font-mono"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="h-2.5 bg-surface-lighter rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: skill.color }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="relative py-14 md:py-28 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeading
          title="My Skills"
          subtitle="Technologies and tools I work with daily to build great software."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              className="glass-card neon-border rounded-2xl p-6 md:p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neon" />
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    delay={catIdx * 0.2 + skillIdx * 0.1}
                    isInView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating tech badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {["OOP", "REST API", "RBAC", "CRUD", "Filament", "Background Jobs", "Git Flow", "Agile"].map(
            (tag, i) => (
              <motion.span
                key={tag}
                className="px-4 py-1.5 text-xs font-medium rounded-full border border-neon/20 text-neon/80 bg-neon/5"
                whileHover={{
                  scale: 1.1,
                  borderColor: "rgba(0, 255, 136, 0.5)",
                  backgroundColor: "rgba(0, 255, 136, 0.1)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + i * 0.05 }}
              >
                {tag}
              </motion.span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
