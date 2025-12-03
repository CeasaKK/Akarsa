import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Graphics() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Brand Identity Design",
      description: "Complete visual identity systems that define your brand's presence across all touchpoints.",
      items: ["Logo Design", "Brand Guidelines", "Typography Systems", "Color Palettes"]
    },
    {
      title: "Social Media Content",
      description: "Scroll-stopping visuals designed for maximum engagement across all social platforms.",
      items: ["Instagram Posts", "Story Templates", "Carousel Designs", "Video Thumbnails"]
    },
    {
      title: "Print & Digital Collateral",
      description: "Professional marketing materials that bridge the physical and digital worlds seamlessly.",
      items: ["Business Cards", "Brochures", "Presentations", "Email Templates"]
    },
    {
      title: "Motion Graphics",
      description: "Dynamic animated content that brings your brand to life with movement and energy.",
      items: ["Logo Animations", "Explainer Graphics", "Lower Thirds", "Transitions"]
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
            Graphics
          </h1>
          <p className="text-xl text-foreground/70 font-light leading-relaxed mb-20 max-w-3xl">
            Visual communication that speaks volumes. We design graphics that capture attention, convey messages clearly, and leave lasting impressions across every medium.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.03, rotateZ: 1 }}
                className="cinematic-card p-10 rounded-sm spotlight-effect"
              >
                <h3 className="text-2xl font-light text-neon-aqua mb-4 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-foreground/60 font-light mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {service.items.map((item, i) => (
                    <div key={i} className="text-foreground/70 font-light text-sm py-2 px-4 bg-neon-aqua/5 rounded-sm border border-neon-aqua/10">
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
