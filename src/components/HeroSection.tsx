import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 1000),
      setTimeout(() => setPhase(2), 3000),
      setTimeout(() => setPhase(3), 4500),
      setTimeout(() => setPhase(4), 6000),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-void-black py-32 px-8">
      {/* Full-screen background video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="https://cdn.pixabay.com/video/2022/11/07/137866-768947088_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-void-black/50 via-transparent to-void-black/80" />
      </div>

      {/* Multi-layer parallax gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-aqua/5 to-transparent opacity-30"
        style={{ y: 0 }}
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-ultramarine/5 via-transparent to-transparent opacity-20"
        style={{ y: 0 }}
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-neon-aqua/5 opacity-25"
        style={{ y: 0 }}
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Soft light streaks */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-neon-aqua/20 to-transparent"
            style={{ top: `${30 + i * 20}%` }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 3,
            }}
          />
        ))}
      </div>

      {/* Slow particle drift */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-neon-aqua/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <motion.div 
        className="relative z-10 text-center max-w-6xl mx-auto space-y-16"
        style={{ y: 0 }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Phase 1 - Opening line */}
        {phase >= 1 && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="text-2xl md:text-3xl text-neon-aqua/80 font-light tracking-wide"
          >
            Where art meets intelligence.
          </motion.p>
        )}

        {/* Phase 2 - Main headline */}
        {phase >= 2 && (
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light text-foreground leading-tight tracking-tight"
          >
            We exist to create what others hesitate to imagine.
          </motion.h1>
        )}

        {/* Phase 3 - Subheadline */}
        {phase >= 3 && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="text-lg md:text-xl lg:text-2xl text-foreground/70 font-light leading-relaxed max-w-4xl mx-auto"
          >
            We build digital experiences, brands, and systems that blend human emotion with artificial precision.
          </motion.p>
        )}

        {/* Phase 4 - CTA */}
        {phase >= 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="pt-8"
          >
            <Button
              size="lg"
              className="bg-transparent border border-neon-aqua/40 text-neon-aqua hover:bg-neon-aqua/10 hover:border-neon-aqua/60 font-light text-lg px-12 py-7 tracking-wider transition-all duration-500 ripple-effect cursor-magnetic glow-pulse"
            >
              START YOUR JOURNEY →
            </Button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};
