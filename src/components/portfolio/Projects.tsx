"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "BooknStay",
    subtitle: "Room Booking Platform",
    description:
      "A comprehensive room booking management system with CRUD operations, advanced search/filter by date, room number, and type. Features automated email confirmations and a scalable admin dashboard.",
    image: "/booknstay.png",
    tech: ["PHP", "Laravel", "Filament", "HTML/CSS", "MySQL"],
    highlights: [
      "Robust CRUD for bookings",
      "Date & room type filtering",
      "Automated email confirmations",
    ],
    date: "October 2024",
  },
  {
    title: "Sorting Visualizer",
    subtitle: "Interactive Algorithm Tool",
    description:
      "An interactive visualization tool that dynamically demonstrates sorting algorithms step-by-step. Users can customize array size, speed, and choose from 5 different algorithms.",
    image: "/sorting-viz.png",
    tech: ["HTML", "CSS", "JavaScript", "Sorting Algorithms"],
    highlights: [
      "5 sorting algorithms supported",
      "Real-time step visualization",
      "Customizable array & speed",
    ],
    date: "August 2022",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-14 md:py-28 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeading
          title="Featured Projects"
          subtitle="Some of the projects I've built that showcase my skills and approach to problem-solving."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="group glass-card neon-border rounded-2xl overflow-hidden hover:border-neon/40 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{
                y: -8,
                boxShadow: "0 0 40px rgba(0, 255, 136, 0.1)",
              }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Image */}
              <div className="relative h-40 sm:h-56 overflow-hidden">
                <motion.div
                  className="w-full h-full"
                  animate={
                    hoveredIdx === i ? { scale: 1.05 } : { scale: 1 }
                  }
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-mono text-neon bg-neon/10 backdrop-blur-sm rounded-full border border-neon/20">
                    {project.date}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-xl font-bold mb-1 group-hover:text-neon transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-neon/60 font-medium mb-3">
                  {project.subtitle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-5">
                  {project.highlights.map((h, hi) => (
                    <motion.div
                      key={hi}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + i * 0.2 + hi * 0.1 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-neon flex-shrink-0" />
                      {h}
                    </motion.div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 text-xs rounded-full bg-surface-lighter text-muted-foreground border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
