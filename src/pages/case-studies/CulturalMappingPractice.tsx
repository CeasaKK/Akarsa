import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function CulturalMappingPractice() {
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
            <span className="text-sm text-neon-aqua/60 tracking-widest font-light">CULTURE</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-foreground mb-8 tracking-tight leading-tight">
            Cultural Mapping in Practice
          </h1>

          <p className="text-xl text-foreground/70 font-light leading-relaxed mb-16">
            A deep dive into how we decode cultural shifts to position brands effectively.
          </p>

          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            <div className="cinematic-card p-10 rounded-sm">
              <h2 className="text-2xl font-light text-neon-aqua mb-6 tracking-wide">Understanding Cultural Mapping</h2>
              <p className="text-foreground/70 font-light leading-relaxed mb-6">
                Cultural mapping is the practice of identifying, analyzing, and interpreting the cultural forces that shape consumer behavior and brand perception. It's not market research in the traditional sense—it's cultural anthropology applied to brand strategy.
              </p>
              <p className="text-foreground/70 font-light leading-relaxed">
                We look beyond demographics and psychographics to understand the underlying cultural currents: emerging values, shifting norms, evolving narratives, and the subtle changes in how people make meaning.
              </p>
            </div>

            <div className="cinematic-card p-10 rounded-sm">
              <h2 className="text-2xl font-light text-neon-aqua mb-6 tracking-wide">Our Methodology</h2>
              <p className="text-foreground/70 font-light leading-relaxed mb-6">
                Our cultural mapping process combines multiple data sources: social listening, trend analysis, ethnographic research, and semiotics. We're looking for patterns, tensions, and opportunities that others miss.
              </p>
              <p className="text-foreground/70 font-light leading-relaxed mb-6">
                We map these insights onto a framework that reveals where brands can authentically participate in cultural conversations. It's not about hijacking trends—it's about finding genuine connections between brand values and cultural movements.
              </p>
              <p className="text-foreground/70 font-light leading-relaxed">
                The result is a strategic positioning that feels both timely and timeless, culturally relevant without being opportunistic.
              </p>
            </div>

            <div className="cinematic-card p-10 rounded-sm">
              <h2 className="text-2xl font-light text-neon-aqua mb-6 tracking-wide">Real-World Impact</h2>
              <p className="text-foreground/70 font-light leading-relaxed mb-6">
                Cultural mapping has helped our clients identify emerging opportunities before they become obvious, reposition established brands for new audiences, and navigate cultural sensitivities with confidence.
              </p>
              <p className="text-foreground/70 font-light leading-relaxed">
                In a world where cultural context changes rapidly, cultural mapping provides the strategic foundation for agile, responsive brand building. It's not a one-time exercise—it's an ongoing practice that keeps brands culturally connected and commercially relevant.
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
