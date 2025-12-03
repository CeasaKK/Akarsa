import { motion } from "framer-motion";

const services = [
  {
    title: "Branding & Strategy",
    description: "Building identities that resonate with culture and purpose through strategic brand development and positioning."
  },
  {
    title: "Digital Marketing",
    description: "Data-driven campaigns that blend creativity with performance across all digital channels."
  },
  {
    title: "Cultural Strategy",
    description: "Understanding and leveraging cultural insights to create authentic brand connections."
  },
  {
    title: "Web Maintenance",
    description: "Continuous support and optimization to keep your digital presence performing at its peak."
  },
  {
    title: "Websites",
    description: "Custom web experiences that merge aesthetic excellence with technical precision."
  },
  {
    title: "Video Composition",
    description: "Cinematic storytelling that captures emotion and drives engagement."
  },
  {
    title: "Graphics",
    description: "Visual design that communicates brand essence across all touchpoints."
  },
  {
    title: "Akarsa One (AI)",
    description: "Intelligent systems that enhance decision-making and creative processes."
  },
  {
    title: "The Act of Giving",
    description: "Purpose-driven initiatives that create positive impact beyond commercial goals."
  }
];

export const ServicescapesSection = () => {
  return (
    <section className="relative py-32 px-8 md:px-16 lg:px-24 bg-deep-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight" style={{ color: "white" }}>
            What We Do
          </h2>
        </motion.div>

        <div className="space-y-1">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ 
                x: 8,
                scale: 1.01,
              }}
              className="cinematic-card p-10 md:p-12 rounded-sm spotlight-effect cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <h3 className="text-2xl md:text-3xl font-light text-neon-aqua tracking-wide">
                  {service.title}
                </h3>
                <p className="text-foreground/60 font-light leading-relaxed md:text-right md:max-w-2xl">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
