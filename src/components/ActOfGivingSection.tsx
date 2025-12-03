import { motion } from "framer-motion";

const mainLines = [
  "Because some ideas are meant to be shared, not sold.",
  "We believe creativity isn’t currency, it’s energy. And energy must flow.",
  "Akarsa’s next chapter begins with a simple idea: to give marketing as a gift, not as a service.",
  "To craft stories, visuals, and campaigns for those who deserve to be seen,",
  "not just those who can afford to be noticed.",
  "No contracts. No expectations. Only creation, offered freely, like light.",
  "A new kind of visibility is coming — one born from compassion, not commerce."
];

const tagline =
  "Soon, Akarsa will give what cannot be bought — attention with soul.";

export const ActOfGivingSection = () => {
  return (
    <section className="relative py-32 px-8 md:px-16 lg:px-24 bg-gradient-to-b from-void-black via-amber-950/5 to-void-black">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-amber-400/80 tracking-tight"
            style={{ color: "white" }}
          >
            The Act of Giving
          </h2>
        </motion.div>

        {/* Main Text */}
        <div className="space-y-12">
          {mainLines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: index * 0.2 }}
              className="text-base md:text-lg lg:text-xl text-white/70 font-light leading-relaxed tracking-wide"
              style={{ lineHeight: "2.2", color: "white" }} 
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: mainLines.length * 0.15 }}
          className="mt-16 text-sm md:text-base text-white/50 italic"
        >
          {tagline}
        </motion.p>
      </div>
    </section>
  );
};