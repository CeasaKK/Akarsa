import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function AiCreativeCoPilot() {
  const navigate = useNavigate();

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

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <span className="text-sm text-neon-aqua/60 tracking-widest font-light">TECHNOLOGY</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-foreground mb-8 tracking-tight leading-tight">
            AI as Creative Co-Pilot
          </h1>

          <p className="text-xl text-foreground/70 font-light leading-relaxed mb-16">
            How we use artificial intelligence to enhance, not replace, human imagination.
          </p>

          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            <div className="cinematic-card p-10 rounded-sm">
              <h2 className="text-2xl font-light text-neon-aqua mb-6 tracking-wide">The AI Paradox</h2>
              <p className="text-foreground/70 font-light leading-relaxed mb-6">
                There's a growing fear that AI will replace human creativity. It's understandable—the technology is advancing rapidly, and its capabilities can seem almost magical. But this perspective misses the real opportunity.
              </p>
              <p className="text-foreground/70 font-light leading-relaxed">
                AI isn't here to replace human creativity; it's here to amplify it. The key is understanding how to work with AI as a creative partner, not a creative replacement.
              </p>
            </div>

            <div className="cinematic-card p-10 rounded-sm">
              <h2 className="text-2xl font-light text-neon-aqua mb-6 tracking-wide">Our Approach</h2>
              <p className="text-foreground/70 font-light leading-relaxed mb-6">
                At Akarsa, we use AI as a co-pilot in our creative process. It helps us explore more possibilities, iterate faster, and push beyond conventional thinking. But the vision, judgment, and emotional intelligence? That's all human.
              </p>
              <p className="text-foreground/70 font-light leading-relaxed">
                We use AI for rapid prototyping, pattern recognition, and generating alternatives. Our creative directors use their expertise to guide, refine, and ultimately decide what resonates.
              </p>
            </div>

            <div className="cinematic-card p-10 rounded-sm">
              <h2 className="text-2xl font-light text-neon-aqua mb-6 tracking-wide">The Human-AI Partnership</h2>
              <p className="text-foreground/70 font-light leading-relaxed mb-6">
                The most exciting creative work happens at the intersection of human intuition and machine capability. AI can process millions of data points, but it takes human creativity to know which insights matter.
              </p>
              <p className="text-foreground/70 font-light leading-relaxed">
                This partnership allows us to work faster without sacrificing quality, explore more ideas without losing focus, and push creative boundaries while staying strategically grounded. It's not about choosing between human or AI—it's about leveraging both.
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
