"use client";

import { motion } from "framer-motion";
import { ChevronDown, MapPin, Mail, Linkedin } from "lucide-react";
import Image from "next/image";
import ParticleBackground from "./ParticleBackground";
import TypeWriter from "./TypeWriter";

const socials = [
  { icon: MapPin, label: "Delhi, India", href: null },
  { icon: Mail, label: "developer.iamanish@gmail.com", href: "mailto:developer.iamanish@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/iamanish3" },
];

export default function Hero() {
  const scrollToNext = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#050a15_70%)]" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-neon/5 blur-[80px] sm:blur-[100px]"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -30, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-cyan-500/5 blur-[80px] sm:blur-[120px]"
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 40, -20, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Particles */}
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-16">
          {/* Text Side */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-3"
            >
              Hi, I&apos;m{" "}
              <span className="text-gradient">Manish Kumar</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-2xl md:text-3xl font-light text-muted-foreground mb-4 h-8 sm:h-10"
            >
              <TypeWriter />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-4 sm:mb-6 leading-relaxed"
            >
              Crafting scalable SaaS platforms & backend systems. Founded Vidhayalayam ERP — a full school operations platform — while building enterprise tools at HyScaler.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-2.5 justify-center lg:justify-start mb-6"
            >
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 text-sm sm:text-base sm:px-8 sm:py-3.5 bg-neon text-surface font-semibold rounded-xl hover:bg-neon-dim transition-colors"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 136, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 text-sm sm:text-base sm:px-8 sm:py-3.5 border border-border rounded-xl text-foreground hover:border-neon/50 hover:bg-neon/5 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href || "#"}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-neon transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <social.icon size={16} />
                  <span className="hidden sm:inline">{social.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Avatar Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-32 h-32 sm:w-64 sm:h-64 lg:w-96 lg:h-96">
              {/* Spinning ring - hidden on mobile */}
              <div className="hidden sm:block absolute inset-0 rounded-full animate-spin-slow border-2 border-dashed border-neon/20" />
              {/* Orbiting dot - hidden on mobile */}
              <div className="hidden sm:block absolute inset-0 animate-spin-slow">
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-neon shadow-[0_0_15px_rgba(0,255,136,0.6)]" />
              </div>
              {/* Glow background */}
              <div className="absolute inset-3 sm:inset-4 rounded-full bg-gradient-to-br from-neon/10 via-transparent to-cyan-500/10 blur-xl" />
              {/* Image container */}
              <motion.div
                className="absolute inset-4 sm:inset-6 rounded-full overflow-hidden neon-border"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/avatar.jpg"
                  alt="Manish Kumar"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-neon transition-colors"
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
