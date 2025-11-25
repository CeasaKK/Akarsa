import { motion } from "framer-motion";
import { useState } from "react";

const identityCards = [
  {
    title: "What is Akarsa?",
    description: "A creative studio at the intersection of art and intelligence. We don't just create campaigns — we build cultural movements that shift how brands are perceived and remembered."
  },
  {
    title: "What makes us different?",
    description: "We treat brands as living narratives. Every touchpoint, every visual, every word is designed to feel intentional, resonant, and impossible to ignore."
  },
  {
    title: "How we think",
    description: "Strategy first. Creativity second. Execution third. We decode cultural patterns, map audience psychology, and design systems that work at scale."
  },
  {
    title: "Why rule-breaking matters",
    description: "Conformity is forgettable. We challenge conventions not for rebellion, but for relevance. The brands that lead culture are the ones that rewrite the rules."
  },
  {
    title: "Emotion × AI",
    description: "Human creativity amplified by intelligent systems. We use AI not to replace imagination, but to unlock it — faster insights, sharper precision, deeper impact."
  },
  {
    title: "Who we collaborate with",
    description: "Forward-thinking brands, bold founders, and teams ready to move beyond mediocrity. If you're willing to take creative risks, we're your studio."
  },
  {
    title: "How we work",
    description: "Transparent. Iterative. Obsessive. We involve you in the process, test relentlessly, and never settle for 'good enough.' Excellence is the only option."
  }
];

const SwipeableCard = ({ card, index }: { card: typeof identityCards[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex-shrink-0 w-[340px] md:w-[380px] snap-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative h-[320px] p-8 rounded-sm overflow-hidden cursor-pointer"
        whileHover={{ scale: 1.05, y: -10 }}
        transition={{ duration: 0.4 }}
      >
        {/* Glass Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-black/90 to-deep-black/70 backdrop-blur-xl" />
        
        {/* Neon Border */}
        <div className="absolute inset-0 border border-neon-aqua/30 rounded-sm" />
        
        {/* Neon Glow */}
        <motion.div
          className="absolute inset-0 opacity-0 rounded-sm blur-xl"
          animate={{ opacity: isHovered ? 0.3 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ background: 'hsl(var(--neon-aqua))' }}
        />

        {/* Shine Sweep */}
        <motion.div
          className="absolute inset-0 opacity-0"
          animate={{
            opacity: isHovered ? [0, 0.2, 0] : 0,
            x: isHovered ? ['-100%', '200%'] : '-100%',
          }}
          transition={{ duration: 1.5 }}
          style={{
            background: 'linear-gradient(90deg, transparent, hsl(var(--neon-aqua) / 0.3), transparent)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center">
          <h3 className="text-2xl font-light text-neon-aqua mb-6 tracking-wide">
            {card.title}
          </h3>
          <p className="text-foreground/70 font-light leading-relaxed text-base">
            {card.description}
          </p>
        </div>

        {/* Edge Highlight */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-aqua/50 to-transparent" />
      </motion.div>
    </motion.div>
  );
};

export const IdentitySection = () => {
  return (
    <section className="relative py-32 px-8 bg-gradient-to-b from-void-black via-deep-black/50 to-void-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight mb-6">
            Akarsa Identity
          </h2>
          <p className="text-foreground/60 font-light text-lg max-w-2xl mx-auto">
            Swipe to explore what makes us different
          </p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {identityCards.map((card, index) => (
            <SwipeableCard key={index} card={card} index={index} />
          ))}
        </div>

        {/* Scroll Hint */}
        <motion.p
          className="text-center text-neon-aqua/50 text-sm font-light mt-8"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ← Drag to explore →
        </motion.p>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
