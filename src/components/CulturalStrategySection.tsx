import { motion } from "framer-motion";

const offerings = [
  "Cultural Research & Insights",
  "Brand & Culture Mapping",
  "Trend Intelligence",
  "Cultural Positioning",
  "Community & Influence Design",
  "Cultural Storytelling"];

export const CulturalStrategySection = () => {
  return (
    <section className="relative py-32 px-8 md:px-16 lg:px-24 bg-deep-black">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-light text-center text-white mb-12" style={{ color: "white" }}
        >
          Cultural Strategy
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-neutral-300 text-lg md:text-xl max-w-3xl mx-auto text-center mb-16"
        >
          We don't just track trends — we decode the cultural forces that shape
          them. Our approach merges anthropology, data, and creative instinct
          to position brands within living cultural narratives.
        </motion.p>

        {/* Offerings */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {offerings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-cyan-600/20 bg-black/40 hover:bg-black/60 
                         px-8 py-6 rounded-xl text-cyan-300 text-lg 
                         transition backdrop-blur-sm shadow-md"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>

        {/* No “Decode / Define / Design / Distribute” section — removed */}
      </div>
    </section>
  );
};
