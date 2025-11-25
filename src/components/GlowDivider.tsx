import { motion } from "framer-motion";

export const GlowDivider = () => {
  return (
    <div className="relative w-full h-[1px] my-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-aqua/30 to-transparent" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-aqua/60 to-transparent"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
