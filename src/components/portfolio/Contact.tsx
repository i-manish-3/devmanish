"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "developer.iamanish@gmail.com",
    href: "mailto:developer.iamanish@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9700002206",
    href: "tel:+919700002206",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/iamanish3",
    href: "https://linkedin.com/in/iamanish3",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Delhi, India",
    href: null,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-14 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a project in mind or want to connect? I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {contactInfo.map((item, i) => (
              <motion.a
                key={i}
                href={item.href || "#"}
                className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-neon/40 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1 }}
                whileHover={{ x: 8 }}
              >
                <div className="p-2.5 rounded-lg bg-neon/10 text-neon group-hover:bg-neon/20 transition-colors">
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-sm font-medium group-hover:text-neon transition-colors">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="lg:col-span-3 glass-card neon-border rounded-2xl p-4 md:p-8"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                className="flex flex-col items-center justify-center py-12"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.1 }}
                >
                  <CheckCircle size={48} className="text-neon mb-4" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground text-sm">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-surface-lighter border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-neon/50 focus:ring-1 focus:ring-neon/20 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-surface-lighter border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-neon/50 focus:ring-1 focus:ring-neon/20 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-surface-lighter border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-neon/50 focus:ring-1 focus:ring-neon/20 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                </div>
                <motion.button
                  type="submit"
                  className="w-full px-6 py-3.5 bg-neon text-surface font-semibold rounded-xl hover:bg-neon-dim transition-colors flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0, 255, 136, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
