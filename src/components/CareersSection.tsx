import { motion } from "framer-motion";

export const CareersSection = () => {
  return (
    <section className="relative py-32 px-8 md:px-16 lg:px-24 bg-void-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight">
              Careers
            </h2>
            <p className="text-xl md:text-2xl text-foreground/70 font-light leading-loose">
              We're looking for people who think differently. Who see patterns others miss. Who believe that creativity and intelligence can coexist.
            </p>
            <p className="text-lg text-foreground/60 font-light leading-relaxed">
              If you're a strategist, designer, developer, filmmaker, or writer who wants to work at the intersection of art and AI — we want to hear from you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="cinematic-card p-12 rounded-sm glass-morphism"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-neon-aqua mb-8">Get in Touch</h3>
              <p className="text-foreground/70 font-light leading-loose">
                Send your resume and portfolio to:
              </p>
              <a 
                href="mailto:beakarsa@gmail.com"
                className="text-neon-aqua text-xl font-light hover:text-neon-aqua/70 transition-colors duration-300 block"
              >
                beakarsa@gmail.com
              </a>
              <p className="text-foreground/60 font-light text-sm leading-relaxed pt-4">
                Include a brief note about why you want to work with us, and what you bring to the table that others don't.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
