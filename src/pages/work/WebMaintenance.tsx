import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function WebMaintenance() {
  const navigate = useNavigate();

  const services = [
    {
      title: "24/7 Monitoring & Support",
      description: "Round-the-clock website surveillance and instant response to any issues.",
      icon: "🔍"
    },
    {
      title: "Security Updates & Patches",
      description: "Regular security audits and timely updates to protect against vulnerabilities.",
      icon: "🔒"
    },
    {
      title: "Performance Optimization",
      description: "Continuous speed improvements and resource optimization for peak performance.",
      icon: "⚡"
    },
    {
      title: "Content Management",
      description: "Professional content updates and CMS administration to keep your site fresh.",
      icon: "📝"
    }
  ];

  return (
    <div className="min-h-screen bg-void-black">
      <div className="relative py-24 px-8 md:px-16 lg:px-24">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-12 text-neon-aqua hover:text-neon-aqua/80 cursor-magnetic"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-light text-foreground mb-8 tracking-tight">
            Web Maintenance
          </h1>
          <p className="text-xl text-foreground/70 font-light leading-relaxed mb-12 max-w-3xl">
            Your website is a living ecosystem. We ensure it stays healthy, secure, and performing at its best with comprehensive maintenance services.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="cinematic-card p-10 rounded-sm mb-12"
          >
            <div className="text-sm text-neon-aqua/60 mb-2 tracking-widest">CURRENT PORTFOLIO</div>
            <div className="text-3xl font-light text-neon-aqua mb-2">6 Active Client Sites</div>
            <p className="text-foreground/60 font-light">Under continuous monitoring and maintenance</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="cinematic-card p-10 rounded-sm spotlight-effect group"
              >
                <div className="text-4xl mb-6 glow-pulse">{service.icon}</div>
                <h3 className="text-2xl font-light text-neon-aqua mb-4 tracking-wide group-hover:text-neon-aqua/80 transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground/70 font-light leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
