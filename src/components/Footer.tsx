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
    <footer className="relative bg-void-black border-t border-neon-aqua/10 overflow-hidden py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-xl md:text-2xl font-light text-neon-aqua/70 mb-8 tracking-wide">
            Follow Akarsa
          </h3>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ y: -2 }}
                className="text-foreground/60 hover:text-neon-aqua transition-colors duration-300 font-light tracking-wide"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <div className="border-t border-neon-aqua/10 pt-8">
          <div className="text-center text-foreground/50 text-sm font-light space-y-2">
            <p>© 2024 Akarsa. All rights reserved.</p>
            <p className="text-xs">Where art meets intelligence.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
