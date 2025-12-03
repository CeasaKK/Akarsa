import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function DigitalMarketing() {
  const navigate = useNavigate();

  const services = [
    {
      title: "SEO & Content Strategy",
      description: "Organic visibility through strategic content and technical optimization."
    },
    {
      title: "Social Media Management",
      description: "Engaging communities and building brand presence across platforms."
    },
    {
      title: "PPC & Paid Advertising",
      description: "Targeted campaigns that deliver measurable ROI and rapid growth."
    },
    {
      title: "Analytics & Reporting",
      description: "Data-driven insights that inform smarter marketing decisions."
    }
  ];

  const approach = [
    {
      number: "01",
      title: "Audit",
      description: "Comprehensive analysis of current performance, opportunities, and gaps."
    },
    {
      number: "02",
      title: "Plan",
      description: "Strategic roadmap with clear objectives, tactics, and KPIs."
    },
    {
      number: "03",
      title: "Execute",
      description: "Precision implementation across all channels and touchpoints."
    },
    {
      number: "04",
      title: "Measure",
      description: "Continuous tracking and analysis of campaign performance."
    },
    {
      number: "05",
      title: "Optimize",
      description: "Iterative improvements based on data and market feedback."
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
            Digital Marketing
          </h1>
          <p className="text-xl text-foreground/70 font-light leading-relaxed mb-20 max-w-3xl">
            Data-driven strategies that amplify your brand's reach and drive real business growth. We combine creativity with analytics to deliver campaigns that convert.
          </p>

          <div className="mb-20">
            <h2 className="text-3xl font-light text-neon-aqua mb-12 tracking-wide">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="cinematic-card p-8 rounded-sm spotlight-effect"
                >
                  <h3 className="text-2xl font-light text-neon-aqua mb-4 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 font-light leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-light text-neon-aqua mb-12 tracking-wide">5-Step Approach</h2>
            <div className="space-y-6">
              {approach.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="cinematic-card p-8 rounded-sm spotlight-effect flex items-start gap-6"
                >
                  <div className="text-4xl font-light text-neon-aqua/40 min-w-[80px]">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-light text-neon-aqua mb-3 tracking-wide">
                      {step.title}
                    </h3>
                    <p className="text-foreground/70 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
