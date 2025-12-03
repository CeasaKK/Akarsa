import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-magnetic") ||
        target.classList.contains("magnetic-button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main Cursor Glow with Trail */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen"
        style={{
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div 
          className="w-full h-full rounded-full bg-neon-aqua/40 blur-2xl"
          animate={{
            scale: isHovering ? 1.3 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Secondary Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen"
        style={{
          width: isHovering ? 80 : 60,
          height: isHovering ? 80 : 60,
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div 
          className="w-full h-full rounded-full border border-neon-aqua/20 blur-sm"
          animate={{
            scale: [1, 1.1, 1],
            opacity: isHovering ? 0.6 : 0.3,
          }}
          transition={{ 
            scale: { duration: 2, repeat: Infinity },
            opacity: { duration: 0.3 }
          }}
        />
      </motion.div>

      {/* Core Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 35,
        }}
      >
        <div className="w-full h-full rounded-full bg-neon-aqua shadow-[0_0_10px_hsl(var(--neon-aqua))]" />
      </motion.div>

      {/* Magnetic Hover Indicator */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9999]"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          style={{
            width: 100,
            height: 100,
            x: mousePosition.x,
            y: mousePosition.y,
            translateX: '-50%',
            translateY: '-50%',
          }}
        >
          <div className="w-full h-full rounded-full border-2 border-neon-aqua/30 animate-pulse" />
        </motion.div>
      )}
    </>
  );
};
