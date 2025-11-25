import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Websites() {
  const navigate = useNavigate();

  const projects = [
    {
      name: "Dynamic Websites",
      description: "React, Vue, Node.js backends",
      features: ["Real-time data updates", "Complex user interactions", "API integrations", "Custom dashboards"]
    },
    {
      name: "Static Websites",
      description: "Landing pages, portfolios",
      features: ["Ultra-fast loading", "SEO optimized", "Mobile responsive", "Clean modern design"]
    },
    {
      name: "E-commerce Platforms",
      description: "Full-featured online stores",
      features: ["Payment gateway integration", "Inventory management", "Customer accounts", "Order tracking"]
    },
    {
      name: "Custom Web Applications",
      description: "Tailored solutions for unique needs",
      features: ["Bespoke functionality", "Scalable architecture", "Security focused", "Performance optimized"]
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
            Websites
          </h1>
          <p className="text-xl text-foreground/70 font-light leading-relaxed mb-20 max-w-3xl">
            We craft digital experiences that seamlessly blend form and function. From lightning-fast static sites to complex web applications, every project is built with precision and purpose.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="cinematic-card p-10 rounded-sm spotlight-effect"
              >
                <h3 className="text-2xl font-light text-neon-aqua mb-4 tracking-wide">
                  {project.name}
                </h3>
                <p className="text-foreground/60 font-light mb-6 leading-relaxed">
                  {project.description}
                </p>
                <ul className="space-y-3">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-foreground/70 font-light flex items-start">
                      <span className="text-neon-aqua mr-3">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
