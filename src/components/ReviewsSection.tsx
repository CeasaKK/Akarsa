import { motion } from "framer-motion";
import { useState } from "react";

const reviews = [
  {
    brand: "Starbucks",
    testimonial: "Akarsa transformed our brand narrative with a cinematic approach that captured our essence perfectly. Their attention to cultural nuance is unmatched."
  },
  {
    brand: "Adidas",
    testimonial: "Working with Akarsa felt like collaborating with artists who understand business. They don't just execute — they elevate."
  },
  {
    brand: "Decathlon",
    testimonial: "Their strategic thinking combined with flawless execution made our campaign a standout success. Truly next-generation creative partners."
  },
  {
    brand: "Olympia Gym",
    testimonial: "Akarsa brought our vision to life with a level of sophistication we didn't think possible. They create, not just design."
  },
  {
    brand: "Nomad Pizza",
    testimonial: "From concept to delivery, Akarsa exceeded every expectation. Their work speaks for itself — distinctive, bold, and effective."
  },
  {
    brand: "The Park Hotel",
    testimonial: "They understand luxury and translate it into digital experiences that feel premium at every touchpoint."
  }
];

export const ReviewsSection = () => {
  const [selectedReview, setSelectedReview] = useState<number | null>(null);

  return (
    <section className="relative py-32 px-8 md:px-16 lg:px-24 bg-void-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight" style={{ color: "white" }}>
            Client Experiences
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedReview(selectedReview === index ? null : index)}
              whileHover={{ 
                y: -8,
                scale: 1.05,
                rotateZ: 2,
              }}
              className="cinematic-card p-8 rounded-sm cursor-pointer text-center soft-glow cursor-magnetic ripple-effect"
            >
              <span className="text-lg font-light text-neon-aqua tracking-wider">
                {review.brand}
              </span>
            </motion.div>
          ))}
        </div>

        {selectedReview !== null && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="cinematic-card p-12 md:p-16 rounded-sm max-w-4xl mx-auto"
          >
            <p className="text-xl md:text-2xl text-foreground/80 font-light leading-loose text-center mb-8">
              "{reviews[selectedReview].testimonial}"
            </p>
            <p className="text-neon-aqua text-center font-light tracking-wider">
              — {reviews[selectedReview].brand}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};
