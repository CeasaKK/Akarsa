import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const services = [
  {
    title: "Websites",
    description: "Responsive, fast, and designed to convert.",
    icon: "🌐",
    route: "/work/websites",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
  },
  {
    title: "Video Composition",
    description: "Cinematic storytelling that captivates.",
    icon: "🎬",
    route: "/work/video-composition",
    thumbnail: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&h=400&fit=crop"
  },
  {
    title: "Graphics",
    description: "Visual systems that speak louder than words.",
    icon: "🎨",
    route: "/work/graphics",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"
  },
  {
    title: "Branding & Strategy",
    description: "Identity systems that resonate and endure.",
    icon: "💎",
    route: "/work/branding-strategy",
    thumbnail: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop"
  },
  {
    title: "Digital Marketing",
    description: "Campaigns that drive results, not just impressions.",
    icon: "📊",
    route: "/work/digital-marketing",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
  },
  {
    title: "Web Maintenance",
    description: "Ongoing optimization to keep your digital presence sharp.",
    icon: "⚙️",
    route: "/work/web-maintenance",
    thumbnail: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop"
  }
];

const SwipeableServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex-shrink-0 w-[320px] md:w-[360px] snap-center cursor-pointer"
      onClick={() => navigate(service.route)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative h-[420px] rounded-sm overflow-hidden group"
        whileHover={{ scale: 1.03, y: -8 }}
        transition={{ duration: 0.4 }}
      >
        {/* Thumbnail Background */}
        <div className="absolute inset-0">
          <img 
            src={service.thumbnail} 
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void-black via-void-black/60 to-transparent" />
        </div>

        {/* Glass Overlay */}
        <div className="absolute inset-0 bg-deep-black/40 backdrop-blur-sm opacity-60 group-hover:opacity-30 transition-opacity duration-500" />

        {/* Neon Border */}
        <motion.div 
          className="absolute inset-0 border-2 rounded-sm"
          animate={{
            borderColor: isHovered ? 'hsl(var(--neon-aqua) / 0.6)' : 'hsl(var(--neon-aqua) / 0.2)'
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Neon Glow */}
        <motion.div
          className="absolute inset-0 opacity-0 rounded-sm blur-2xl"
          animate={{ opacity: isHovered ? 0.4 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ background: 'hsl(var(--neon-aqua))' }}
        />

        {/* Content */}
        <div className="relative z-10 h-full p-8 flex flex-col justify-end">
          <motion.div
            className="text-5xl mb-4"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {service.icon}
          </motion.div>
          
          <h3 className="text-2xl font-light text-neon-aqua mb-3 tracking-wide">
            {service.title}
          </h3>
          
          <p className="text-foreground/70 font-light leading-relaxed text-sm">
            {service.description}
          </p>

          {/* Underline Animation */}
          <motion.div
            className="mt-4 h-px bg-neon-aqua origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export const WorkSection = () => {
  return (
    <section className="relative py-32 px-8 bg-gradient-to-b from-void-black via-deep-black/30 to-void-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight mb-6">
            Our Work
          </h2>
          <p className="text-foreground/60 font-light text-lg max-w-2xl mx-auto">
            Swipe to explore our services — Click to see detailed work
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
          {services.map((service, index) => (
            <SwipeableServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Scroll Hint */}
        <motion.p
          className="text-center text-neon-aqua/50 text-sm font-light mt-8"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ← Swipe to explore more →
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
