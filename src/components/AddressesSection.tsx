import { motion } from "framer-motion";

const locations = [
  {
    city: "Dubai",
    address: "Business Bay, Dubai, UAE"
  },
  {
    city: "Indore",
    address: "Shagun Arcade, Indore, India"
  },
  {
    city: "New Palasia",
    address: "New Palasia, Indore, India"
  },
  {
    city: "Bhadoriya Nagar",
    address: "Bhadoriya Nagar, Indore, India"
  }
];

export const AddressesSection = () => {
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight">
            Our Locations
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03,
                y: -5,
              }}
              className="cinematic-card p-10 rounded-sm text-center spotlight-effect"
            >
              <h3 className="text-2xl font-light text-neon-aqua mb-4 tracking-wide">
                {location.city}
              </h3>
              <p className="text-foreground/60 font-light leading-relaxed">
                {location.address}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
