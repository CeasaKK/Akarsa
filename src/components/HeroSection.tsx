import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.4)' }}
        >
          <source src="https://cdn.pixabay.com/video/2023/09/15/180394-864764488_large.mp4" type="video/mp4" />
        </video>
        
        {/* Soft Black Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-void-black/60 via-void-black/40 to-void-black/80" />
        
        {/* Neon Aqua Glow Effect */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, hsl(var(--neon-aqua) / 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, hsl(var(--neon-aqua) / 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, hsl(var(--neon-aqua) / 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, hsl(var(--neon-aqua) / 0.3) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-8 max-w-5xl"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-foreground tracking-tighter mb-8">
            Akarsa
          </h1>
          
          <motion.p 
            className="text-2xl md:text-3xl lg:text-4xl text-neon-aqua font-light mb-12 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Where art meets intelligence.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-foreground/70 font-light max-w-3xl mx-auto mb-16 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            A creative studio blending human imagination with intelligent systems to craft brands, stories, and experiences that resonate beyond the ordinary.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <Button 
              size="lg"
              className="group relative px-12 py-8 text-lg font-light bg-transparent border-2 border-neon-aqua text-neon-aqua hover:bg-neon-aqua hover:text-void-black transition-all duration-500 rounded-sm magnetic-button"
            >
              <span className="relative z-10 flex items-center gap-3">
                Explore Our Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              
              {/* Neon Glow Effect */}
              <motion.div 
                className="absolute inset-0 rounded-sm blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                style={{ background: 'hsl(var(--neon-aqua))' }}
              />
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-neon-aqua/50 rounded-full p-1">
            <motion.div 
              className="w-1 h-2 bg-neon-aqua rounded-full mx-auto"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
