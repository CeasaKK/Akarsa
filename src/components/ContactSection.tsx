import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const contactInfo = [
  {
    label: "Head Office",
    value: "Shagun Arcade, Indore, India"
  },
  {
    label: "Phone",
    value: "+91 XXX XXX XXXX"
  },
  {
    label: "Email",
    value: "beakarsa@gmail.com"
  },
  {
    label: "Working Hours",
    value: "Mon - Fri: 9:00 AM - 6:00 PM"
  }
];

export const ContactSection = () => {
  return (
    <section className="relative py-32 px-8 md:px-16 lg:px-24 bg-void-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight mb-6">
            Let's Create Beyond Noise
          </h2>
          <p className="text-xl text-neon-aqua/60 font-light">
            Start a conversation about what you want to build.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.03,
                  x: 5,
                }}
                className="cinematic-card p-8 rounded-sm spotlight-effect"
              >
                <h3 className="text-neon-aqua/80 font-light mb-3 tracking-wider text-sm">
                  {info.label}
                </h3>
                <p className="text-foreground/80 font-light text-lg">
                  {info.value}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="cinematic-card p-10 rounded-sm glass-morphism"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-light text-neon-aqua/60 mb-3 tracking-wider">
                  NAME
                </label>
                <Input 
                  className="bg-void-black/50 border-neon-aqua/20 focus:border-neon-aqua/40 text-foreground font-light" 
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-light text-neon-aqua/60 mb-3 tracking-wider">
                  EMAIL
                </label>
                <Input 
                  type="email"
                  className="bg-void-black/50 border-neon-aqua/20 focus:border-neon-aqua/40 text-foreground font-light" 
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-light text-neon-aqua/60 mb-3 tracking-wider">
                  MESSAGE
                </label>
                <Textarea 
                  className="bg-void-black/50 border-neon-aqua/20 focus:border-neon-aqua/40 text-foreground font-light min-h-[150px]" 
                  placeholder="Tell us about your project..."
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-transparent border border-neon-aqua/40 text-neon-aqua hover:bg-neon-aqua/10 hover:border-neon-aqua/60 font-light text-lg py-6 tracking-wider transition-all duration-500 ripple-effect cursor-magnetic glow-pulse"
              >
                Send Message →
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
