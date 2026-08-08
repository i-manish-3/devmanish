"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUpRight } from "lucide-react";

const links = [
  { label: "LinkedIn", href: "https://linkedin.com/in/iamanish3" },
  { label: "Email", href: "mailto:developer.iamanish@gmail.com" },
  { label: "Phone", href: "tel:+919700002206" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border/30 bg-surface/60 backdrop-blur-md">
      {/* Neon glow line on top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-neon/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-lg font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-gradient">Dev</span>
            <span className="text-foreground"> Manish</span>
            <span className="text-neon">.</span>
          </motion.a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground/70 flex items-center gap-1.5">
            &copy; 2026 Manish Kumar. Built with{" "}
            <motion.span
              whileHover={{ scale: 1.3 }}
              className="inline-block"
            >
              <Heart size={13} className="text-neon" fill="currentColor" />
            </motion.span>{" "}
            love.
          </p>

          {/* Links */}
          <div className="flex items-center gap-4">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-1 text-sm text-muted-foreground hover:text-neon transition-colors"
                whileHover={{ y: -2 }}
              >
                {link.label}
                <ArrowUpRight
                  size={11}
                  className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
