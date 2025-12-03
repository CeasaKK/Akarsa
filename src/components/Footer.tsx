// src/components/Footer.tsx

import { motion } from "framer-motion";

export const Footer = () => {
  const socialLinks = [
    { name: "Instagram", href: "#" },
    { name: "YouTube", href: "#" },
    { name: "Pinterest", href: "#" },
    { name: "Facebook", href: "#" },
    { name: "X (Twitter)", href: "#" },
  ];

  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      {/* Left: copyright */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-[11px] text-foreground/60 space-y-1"
      >
        <p>© 2024 Akarsa. All rights reserved.</p>
        <p className="text-[10px] text-foreground/50">
          Where art meets intelligence.
        </p>
      </motion.div>

      {/* Right: social links */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="flex flex-wrap gap-3 text-[11px] text-foreground/70"
      >
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            className="hover:text-neon-aqua transition-colors"
          >
            {social.name}
          </a>
        ))}
      </motion.div>
    </div>
  );
};