import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function BrandingStrategy() {
  const navigate = useNavigate();

  const services = [
    "Brand Identity Development",
    "Market Positioning",
    "Visual Language Systems",
    "Brand Architecture",
    "Messaging Frameworks",
    "Competitive Analysis"
  ];

  const process = [
    {
      step: "01",
      title: "Research",
      description: "Deep dive into your market, audience, and competitive landscape to uncover unique opportunities."
    },
    {
      step: "02",
      title: "Define",
      description: "Crystallize your brand essence, values, and positioning to create a solid strategic foundation."
    },
    {
      step: "03",
      title: "Design",
      description: "Craft comprehensive visual and verbal identity systems that bring your brand to life."
    },
    {
      step: "04",
      title: "Deploy",
      description: "Launch your brand with precision across all touchpoints, ensuring consistency and impact."
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
            Branding & Strategy
          </h1>
          <p className="text-xl text-foreground/70 font-light leading-relaxed mb-20 max-w-3xl">
            Strategic thinking meets creative execution. We build brands that don't just look good—they mean something, connect deeply, and drive real business results.
          </p>

          <div className="mb-20">
            <h2 className="text-3xl font-light text-neon-aqua mb-12 tracking-wide">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="cinematic-card p-6 rounded-sm text-center spotlight-effect"
                >
                  <p className="text-foreground/80 font-light">{service}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-light text-neon-aqua mb-12 tracking-wide">4-Step Strategic Model</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -10 }}
                  className="cinematic-card p-8 rounded-sm spotlight-effect group"
                >
                  <div className="text-5xl font-light text-neon-aqua/30 mb-6 group-hover:text-neon-aqua/50 transition-colors">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-light text-neon-aqua mb-4 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-foreground/60 font-light leading-relaxed text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
