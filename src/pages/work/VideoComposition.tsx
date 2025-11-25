import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function VideoComposition() {
  const navigate = useNavigate();

  const projects = [
    {
      client: "Starbucks",
      title: "Commercial Campaign",
      description: "A cinematic journey through coffee culture, blending intimate moments with brand storytelling.",
      deliverables: ["30s TV Spot", "Social Media Cuts", "Behind the Scenes", "Color Grading"]
    },
    {
      client: "Adidas",
      title: "Brand Film",
      description: "High-energy visual narrative celebrating athletic excellence and human determination.",
      deliverables: ["60s Brand Film", "Instagram Reels", "YouTube Pre-roll", "Motion Graphics"]
    },
    {
      client: "Decathlon",
      title: "Product Showcase",
      description: "Dynamic product demonstrations that highlight innovation and performance in outdoor gear.",
      deliverables: ["Product Videos", "Tutorial Content", "Lifestyle Footage", "Post-Production"]
    },
    {
      client: "Olympia Gym",
      title: "Motivational Series",
      description: "Inspirational video series capturing transformation stories and fitness journeys.",
      deliverables: ["Documentary Style", "Testimonial Edits", "Social Campaigns", "Sound Design"]
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
            Video Composition
          </h1>
          <p className="text-xl text-foreground/70 font-light leading-relaxed mb-20 max-w-3xl">
            We create cinematic narratives that move audiences. From concept to final cut, every frame is crafted to tell compelling brand stories that resonate and inspire.
          </p>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ x: 10 }}
                className="cinematic-card p-10 rounded-sm spotlight-effect"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                  <div className="flex-1">
                    <div className="text-sm text-neon-aqua/60 mb-2 tracking-widest">{project.client}</div>
                    <h3 className="text-3xl font-light text-neon-aqua mb-4 tracking-wide">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 font-light leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>
                  <div className="md:w-64">
                    <div className="text-sm text-foreground/50 mb-4 tracking-wide">Deliverables</div>
                    <ul className="space-y-2">
                      {project.deliverables.map((item, i) => (
                        <li key={i} className="text-foreground/70 font-light text-sm">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
