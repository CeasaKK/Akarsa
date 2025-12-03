import { motion } from "framer-motion";
import AiImg from "@/assets/team/ai.png";
import BackendImg from "@/assets/team/backend.png";
import ChroImg from "@/assets/team/chro.png";
import CineImg from "@/assets/team/cine.png";
import EditImg from "@/assets/team/edit.png";
import HrImg from "@/assets/team/hr.png";
import PpcImg from "@/assets/team/ppc.png";

const teamMembers = [
  { name: "Bhupendra Yadav", role: "Cinematographer", img: CineImg },
  { name: "Mayank Banna", role: "Video Editor", img: EditImg },
  { name: "Abhay Thakur", role: "Backend Dev", img: BackendImg },
  { name: "Rishabh Mandal", role: "PPC Specialist", img: PpcImg },
  { name: "Renu Chaturvedi", role: "CHRO", img: ChroImg },
  { name: "Riya Karn", role: "HR", img: HrImg },
  { name: "Aryan Mishra", role: "AI Engineer", img: AiImg },
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight;" style={{ color: "white" }}>
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
              <div className="w-48 h-64 mx-auto mb-8 rounded-md overflow-hidden border border-white/10 shadow-md">
  <img
    src={member.img}
    alt={member.name}
    className="w-full h-full object-cover object-center"
  />
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
