import { motion } from "framer-motion";

const offerings = [
  "Cultural Research & Insights",
  "Brand & Culture Mapping",
  "Trend Intelligence",
  "Cultural Positioning",
  "Community & Influence Design",
  "Cultural Storytelling"
];

const processSteps = ["Decode", "Define", "Design", "Distribute"];

export const CulturalStrategySection = () => {
  return (
    <section className="relative py-32 px-8 md:px-16 lg:px-24 bg-deep-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight">
            Cultural Strategy
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-lg md:text-xl text-foreground/70 font-light leading-loose">
              We don't just track trends — we decode the cultural forces that shape them. Our approach merges anthropology, data, and creative instinct to position brands within living cultural narratives.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  x: 10,
                  scale: 1.02,
                }}
                className="cinematic-card p-6 rounded-sm spotlight-effect cursor-pointer"
              >
                <p className="text-neon-aqua font-light tracking-wide">{offering}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Process Model */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="pt-16 border-t border-neon-aqua/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                }}
                className="flex items-center gap-4"
              >
                <div className="cinematic-card px-12 py-8 rounded-sm glow-pulse spotlight-effect">
                  <span className="text-2xl md:text-3xl font-light text-neon-aqua tracking-wider">
                    {step}
                  </span>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block w-12 h-[1px] bg-neon-aqua/30" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
