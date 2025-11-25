import { motion } from "framer-motion";

const identityCards = [
  {
    title: "What is Akarsa?",
    content: "We build digital experiences, brands, and systems that blend human emotion with artificial precision… We exist to create what others hesitate to imagine."
  },
  {
    title: "What makes us different?",
    content: "Our work does not follow patterns; it creates them. We combine creativity, data, and intelligence to design systems that think, adapt, and perform."
  },
  {
    title: "How we think (Philosophy)",
    content: "Rule breaking, for us, is refinement. Every project begins with understanding. We question everything that feels ordinary."
  },
  {
    title: "Why rule-breaking matters",
    content: "We do not settle for what already exists… Rule breaking is a way to find new forms of beauty and truth. Not rebellion — refinement."
  },
  {
    title: "Emotion × AI Fusion",
    content: "We build where imagination meets engineering. AI supports our decision-making and design flow, but emotion and intuition always lead."
  },
  {
    title: "Who we collaborate with",
    content: "Creators, founders, and companies who want to push beyond conventional design."
  },
  {
    title: "How we work (Process)",
    content: "Every collaboration begins with understanding… design, storytelling, and technology merge into a single process of creation."
  }
];

export const IdentitySection = () => {
  return (
    <section className="relative py-32 px-8 md:px-16 lg:px-24 bg-void-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 tracking-tight">
            Akarsa Identity
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {identityCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                rotateX: 2,
                rotateY: 2,
              }}
              className="cinematic-card p-10 md:p-12 rounded-sm floating spotlight-effect parallax-tilt"
              style={{ 
                animationDelay: `${index * 0.5}s`,
              }}
            >
              <h3 className="text-xl md:text-2xl font-light text-neon-aqua mb-6 tracking-wide">
                {card.title}
              </h3>
              <p className="text-foreground/70 leading-loose text-base md:text-lg font-light">
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
