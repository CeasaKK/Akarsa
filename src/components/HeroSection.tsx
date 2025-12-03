import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroVideo from "../assets/hero-video.mp4";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], 
  });

  // Smooth cinematic transforms
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
  const yMove = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* BACKGROUND VIDEO */}
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-[0.20] scale-110"
      />

      {/* DARK LAYERS */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/80" />

      {/* CINEMATIC TEXT BLOCK */}
      <motion.div
        style={{ scale, y: yMove, opacity: fade }}
        className="relative z-10 text-center px-8 select-none"
      >
        <h1 className="text-6xl md:text-8xl font-light text-white tracking-tight">
          Akarsa
        </h1>

        <p className="text-2xl md:text-3xl text-neon-aqua mt-4">
          Where art meets intelligence.
        </p>

        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mt-6" >
          A creative studio where ideas evolve into experiences that shape culture.
        </p>

        <a
          href="#contact-form"
          className="inline-flex items-center gap-3 mt-12 px-12 py-4 border border-neon-aqua text-neon-aqua rounded-sm hover:bg-neon-aqua hover:text-black transition-all duration-300"
        >
          Work With Us
          <ArrowRight className="w-5 h-5" />
        </a>
      </motion.div>

      {/* Soft fade into next section */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
};
