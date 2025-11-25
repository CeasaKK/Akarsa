import { motion } from "framer-motion";

const teamMembers = [
  { name: "Bhupendra Yadav", role: "Cinematographer" },
  { name: "Mayank Banna", role: "Video Editor" },
  { name: "Abhay Thakur", role: "Backend Dev" },
  { name: "Rishabh Mandal", role: "PPC Specialist" },
  { name: "Renu Chaturvedi", role: "CHRO" },
  { name: "Riya Karn", role: "HR" },
  { name: "Aryan Mishra", role: "AI Engineer" },
];

export const TeamSection = () => {
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight">
            Meet the Team
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                rotateY: 2,
              }}
              className="cinematic-card p-12 rounded-sm text-center group spotlight-effect parallax-tilt"
            >
              <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-neon-aqua/10 to-ultramarine/10 flex items-center justify-center border border-neon-aqua/30">
                <span className="text-4xl font-light text-neon-aqua">
                  {member.name.charAt(0)}
                </span>
              </div>

              <h3 className="text-2xl font-light text-foreground mb-3 group-hover:text-neon-aqua transition-colors duration-500 tracking-wide">
                {member.name}
              </h3>
              <p className="text-neon-aqua/60 font-light tracking-wider">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
