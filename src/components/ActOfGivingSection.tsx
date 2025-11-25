import { motion } from "framer-motion";

const poeticLines = [
  "Commerce built this world.",
  "But meaning sustains it.",
  "We reserve a part of our work for causes that matter beyond margins.",
  "Not charity. Not publicity.",
  "Acts of giving — where creativity serves purpose,",
  "and brands support movements that shift culture forward.",
  "Because some work isn't measured in revenue.",
  "It's measured in resonance."
];

export const ActOfGivingSection = () => {
  return (
    <section className="relative py-32 px-8 md:px-16 lg:px-24 bg-gradient-to-b from-void-black via-amber-950/5 to-void-black">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-amber-400/80 tracking-tight">
            The Act of Giving
          </h2>
        </motion.div>

        <div className="space-y-12">
          {poeticLines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: index * 0.2 }}
              className="text-xl md:text-2xl lg:text-3xl text-foreground/80 font-light leading-loose tracking-wide"
              style={{ lineHeight: '2.2' }}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};
