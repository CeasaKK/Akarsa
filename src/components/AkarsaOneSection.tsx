import { motion } from "framer-motion";

export const AkarsaOneSection = () => {
  return (
    <section className="relative py-32 px-8 md:px-16 lg:px-24 bg-void-black overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight mb-16" style={{ color: "white" }}>
            Akarsa One
          </h2>
        </motion.div>

        {/* Glowing sphere */}
        <motion.div
          className="relative w-48 h-48 mx-auto mb-20"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          whileHover={{ scale: 1.1, rotate: 180 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-neon-aqua/10 blur-2xl glow-pulse"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute inset-0 rounded-full border border-neon-aqua/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute inset-4 rounded-full border border-neon-aqua/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-8"
        >
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 font-light leading-relaxed">
            Central India's first Marketing AI.
          </p>
          <p className="text-lg md:text-xl text-foreground/70 font-light leading-loose max-w-3xl mx-auto">
            Built to think, not just execute. Akarsa One learns from cultural patterns, brand behaviours, and market shifts to recommend strategies that feel human but operate at machine speed.
          </p>
          <p className="text-lg md:text-xl text-foreground/70 font-light leading-loose max-w-3xl mx-auto">
            It doesn't replace creativity — it amplifies it.
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="pt-12"
          >
            <span className="text-neon-aqua/60 text-sm tracking-[0.3em] font-light">
              COMING SOON
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
