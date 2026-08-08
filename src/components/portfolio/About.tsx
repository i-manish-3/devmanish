"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cloud, Server, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading";

const highlights = [
  {
    icon: Code2,
    title: "Backend Development",
    description: "Building robust, scalable APIs with PHP, Laravel, and modern backend patterns.",
  },
  {
    icon: Cloud,
    title: "Cloud & AWS",
    description: "Deploying and managing applications on AWS EC2, S3, and leveraging Textract for document intelligence.",
  },
  {
    icon: Server,
    title: "System Design",
    description: "Designing RBAC systems, background job queues, and optimized API architectures.",
  },
  {
    icon: Wrench,
    title: "Problem Solving",
    description: "140+ LeetCode problems solved, 3-star CodeChef rating — passion for algorithms and optimization.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-14 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeading
          title="About Me"
          subtitle="A passionate software developer who loves turning ideas into reality through clean, efficient code."
        />

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              className="group glass-card neon-border rounded-2xl p-6 hover:border-neon/40 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 0 30px rgba(0, 255, 136, 0.1)",
              }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-3 rounded-xl bg-neon/10 text-neon"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <item.icon size={24} />
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-neon transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
