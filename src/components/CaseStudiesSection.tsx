import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const caseStudies = [
  {
    title: "The End of Ordinary Branding",
    excerpt: "Why conventional brand strategies fail in a culture-first world, and what comes next.",
    category: "Strategy",
    slug: "end-of-ordinary-branding",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
  },
  {
    title: "AI as Creative Co-Pilot",
    excerpt: "How we use artificial intelligence to enhance, not replace, human imagination.",
    category: "Technology",
    slug: "ai-creative-co-pilot",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop"
  },
  {
    title: "Cultural Mapping in Practice",
    excerpt: "A deep dive into how we decode cultural shifts to position brands effectively.",
    category: "Culture",
    slug: "cultural-mapping-practice",
    thumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop"
  }
];

const SwipeableCaseStudyCard = ({ study, index }: { study: typeof caseStudies[0], index: number }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex-shrink-0 w-[340px] md:w-[400px] snap-center cursor-pointer"
      onClick={() => navigate(`/case-studies/${study.slug}`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.article
        className="relative h-[480px] rounded-sm overflow-hidden group"
        whileHover={{ scale: 1.03, y: -10 }}
        transition={{ duration: 0.4 }}
      >
        {/* Thumbnail */}
        <div className="absolute inset-0">
          <img 
            src={study.thumbnail} 
            alt={study.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void-black via-void-black/70 to-void-black/30" />
        </div>

        {/* Glass Overlay */}
        <div className="absolute inset-0 bg-deep-black/50 backdrop-blur-sm opacity-70 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Neon Border */}
        <motion.div 
          className="absolute inset-0 border-2 rounded-sm"
          animate={{
            borderColor: isHovered ? 'hsl(var(--neon-aqua) / 0.7)' : 'hsl(var(--neon-aqua) / 0.3)'
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Neon Glow */}
        <motion.div
          className="absolute inset-0 opacity-0 rounded-sm blur-2xl"
          animate={{ opacity: isHovered ? 0.5 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ background: 'hsl(var(--neon-aqua))' }}
        />

        {/* Content */}
        <div className="relative z-10 h-full p-8 flex flex-col justify-end">
          <motion.span 
            className="inline-block px-4 py-1 mb-4 text-xs font-light tracking-wider uppercase bg-neon-aqua/20 text-neon-aqua border border-neon-aqua/40 rounded-full w-fit"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {study.category}
          </motion.span>
          
          <h3 className="text-2xl md:text-3xl font-light text-foreground mb-4 leading-tight">
            {study.title}
          </h3>
          
          <p className="text-foreground/70 font-light leading-relaxed text-sm mb-4">
            {study.excerpt}
          </p>

          {/* Neon Underline with Hover Effect */}
          <motion.div className="relative">
            <span className="text-neon-aqua font-light text-sm tracking-wide">Read Case Study</span>
            <motion.div
              className="h-px bg-neon-aqua mt-2"
              initial={{ scaleX: 0.3 }}
              animate={{ scaleX: isHovered ? 1 : 0.3 }}
              style={{ originX: 0 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </div>
      </motion.article>
    </motion.div>
  );
};

export const CaseStudiesSection = () => {
  return (
    <section className="relative py-32 px-8 bg-gradient-to-b from-void-black via-deep-black/40 to-void-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight mb-6">
            Case Studies
          </h2>
          <p className="text-foreground/60 font-light text-lg max-w-2xl mx-auto">
            Insights from Akarsa Curious — Swipe to explore
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
          {caseStudies.map((study, index) => (
            <SwipeableCaseStudyCard key={index} study={study} index={index} />
          ))}
        </div>

        {/* Scroll Hint */}
        <motion.p
          className="text-center text-neon-aqua/50 text-sm font-light mt-8"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ← Drag to explore more →
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
