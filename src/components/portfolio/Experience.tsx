"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Rocket } from "lucide-react";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    role: "Founder & Full Stack Developer",
    company: "Vidhayalayam ERP",
    location: "India",
    period: "April 2025 - Present",
    tag: "Founder",
    icon: "rocket" as const,
    bullets: [
      "Solely architected and built an ERP-grade school management SaaS from scratch — covering fees, attendance, salary, transport, library, and exams — using Next.js, Prisma ORM, and Redis-backed BullMQ job queues.",
      "Engineered a WhatsApp-native billing engine: demand slips, receipts, and payment links are auto-sent to parents via Meta WhatsApp API + webhooks — the key differentiator that schools love over generic ERPs.",
      "Built the hardest module first — a fee engine handling monthly/term/hostel/transport billing, pro-rated fees, late fees, split payments, refunds, previous-session due rollups, and demand-slip runs as background jobs with a full audit trail on every rupee.",
      "Designed a multi-tenant white-label SaaS architecture: one platform serving many schools with per-school branding (logo, colors, favicon), super-admin controls, and complete data isolation.",
      "Integrated RFID and biometric hardware (ZKTeco iClock kiosks) for real-time student attendance — a rare capability in school startup ecosystems.",
      "Shipped a parent portal + mobile API with auth refresh tokens, digital receipts, report cards, and admit cards — cutting the fee collection flow from 15 min/student to under 2 minutes.",
    ],
    tech: ["Next.js", "Prisma", "PostgreSQL", "Redis", "BullMQ", "WhatsApp API", "TypeScript"],
  },
  {
    role: "Software Developer",
    company: "HyScaler",
    location: "Bhubaneswar",
    period: "Nov 2024 - April 2025",
    tag: null,
    icon: "briefcase" as const,
    bullets: [
      "Developed and deployed a chatbot using AWS Augmented AI, automating responses for the Artisan team, reducing manual workload by 60%.",
      "Optimized API performance by implementing background jobs for computational tasks, improving response time by 70%.",
      "Designed and maintained an admin panel with role-based access control (RBAC) for the Artisan project, enhancing system security and reducing unauthorized access incidents by 85%.",
      "Utilized Amazon Textract to extract and summarize PDF text, reducing document length by 60% while maintaining key contextual information.",
    ],
    tech: ["PHP", "Laravel", "AWS", "Filament", "MySQL"],
  },
];

function TimelineItem({
  exp,
  index,
  isInView,
  isLast,
}: {
  exp: (typeof experiences)[0];
  index: number;
  isInView: boolean;
  isLast: boolean;
}) {
  const isFounder = exp.icon === "rocket";

  return (
    <div className="relative pl-8 md:pl-14">
      {/* Vertical line segment */}      {!isLast && (
        <motion.div
          className="absolute left-[11px] md:left-[21px] top-12 bottom-0 w-px bg-gradient-to-b from-neon/30 via-border to-border"
          initial={{ scaleY: 0, transformOrigin: "top" }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 + index * 0.15 }}
        />
      )}

      {/* Timeline node */}
      <motion.div
        className={`absolute left-0 top-1 z-10 w-[24px] h-[24px] md:w-[42px] md:h-[42px] rounded-full flex items-center justify-center transition-all duration-500 ${
          isFounder
            ? "bg-neon/20 border-2 border-neon shadow-[0_0_20px_rgba(0,255,136,0.25)]"
            : "bg-surface border-2 border-neon/60"
        }`}
        initial={{ scale: 0, rotate: -90 }}
        animate={isInView ? { scale: 1, rotate: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 + index * 0.15, type: "spring" }}
      >
        {exp.icon === "rocket" ? (
          <Rocket size={16} className="md:w-5 md:h-5 text-neon" />
        ) : (
          <Briefcase size={16} className="md:w-5 md:h-5 text-neon" />
        )}
      </motion.div>

      {/* Card */}
      <motion.div
        className={`rounded-2xl p-4 md:p-7 transition-all duration-500 ${
          isFounder
            ? "glass-card border border-neon/25 hover:border-neon/50 hover:shadow-[0_0_40px_rgba(0,255,136,0.08)]"
            : "glass-card neon-border hover:border-neon/40"
        }`}
        initial={{ opacity: 0, x: 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
        whileHover={{ x: 4 }}
      >
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <h3 className={`font-bold ${isFounder ? "text-xl md:text-2xl" : "text-lg md:text-xl"}`}>
                {exp.role}
              </h3>
              {exp.tag && (
                <motion.span
                  className="px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider rounded-md bg-neon text-surface"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.15, type: "spring" }}
                >
                  {exp.tag}
                </motion.span>
              )}
            </div>
            <p className="text-neon/80 font-semibold text-sm">
              {exp.company}
              <span className="text-muted-foreground font-normal"> · {exp.location}</span>
            </p>
          </div>
          <span className="inline-flex items-center text-xs font-mono text-neon bg-neon/10 border border-neon/15 px-3 py-1.5 rounded-lg w-fit whitespace-nowrap">
            {exp.period}
          </span>
        </div>

        {/* Bullets */}
        <ul className="space-y-2.5 mb-5">
          {exp.bullets.map((b, i) => (
            <motion.li
              key={i}
              className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, x: 15 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.15 + i * 0.06 }}
            >
              <span className={`mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0 ${isFounder ? "bg-neon" : "bg-neon/50"}`} />
              {b}
            </motion.li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {exp.tech.map((t, i) => (
            <motion.span
              key={t}
              className="px-2.5 py-1 text-xs rounded-lg bg-surface-lighter text-muted-foreground border border-border hover:border-neon/30 hover:text-neon/80 transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 + index * 0.15 + i * 0.04 }}
            >
              {t}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="relative py-14 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey building real-world software solutions."
        />

        <div className="space-y-8 md:space-y-14">
          {experiences.map((exp, i) => (
            <TimelineItem
              key={i}
              exp={exp}
              index={i}
              isInView={isInView}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
