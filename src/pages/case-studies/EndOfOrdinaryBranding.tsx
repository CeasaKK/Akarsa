import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function EndOfOrdinaryBranding() {
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
            <span className="text-sm text-neon-aqua/60 tracking-widest font-light">STRATEGY</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-foreground mb-8 tracking-tight leading-tight">
            The End of Ordinary Branding
          </h1>

          <p className="text-xl text-foreground/70 font-light leading-relaxed mb-16">
            Why conventional brand strategies fail in a culture-first world, and what comes next.
          </p>

          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            <div className="cinematic-card p-10 rounded-sm">
              <h2 className="text-2xl font-light text-neon-aqua mb-6 tracking-wide">The Problem with Traditional Branding</h2>
              <p className="text-foreground/70 font-light leading-relaxed mb-6">
                For decades, brands have followed a predictable formula: identify your target demographic, create a visual identity, push out messaging, and hope for recognition. This approach worked in a world with limited channels and captive audiences.
              </p>
              <p className="text-foreground/70 font-light leading-relaxed">
                But today's landscape is fundamentally different. Consumers don't just buy products—they join movements. They don't just choose brands—they align with values. The old playbook isn't just outdated; it's actively counterproductive.
              </p>
            </div>

            <div className="cinematic-card p-10 rounded-sm">
              <h2 className="text-2xl font-light text-neon-aqua mb-6 tracking-wide">The Culture-First Imperative</h2>
              <p className="text-foreground/70 font-light leading-relaxed mb-6">
                Modern brands must start with culture. Not company culture, but the broader cultural context in which they exist. What conversations are happening? What movements are emerging? What values are shifting?
              </p>
              <p className="text-foreground/70 font-light leading-relaxed">
                Culture-first branding means understanding these dynamics before crafting your position. It means listening before speaking, observing before creating, and participating before promoting.
              </p>
            </div>

            <div className="cinematic-card p-10 rounded-sm">
              <h2 className="text-2xl font-light text-neon-aqua mb-6 tracking-wide">What Comes Next</h2>
              <p className="text-foreground/70 font-light leading-relaxed mb-6">
                The future belongs to brands that can decode culture, identify emerging patterns, and position themselves as authentic participants rather than opportunistic observers.
              </p>
              <p className="text-foreground/70 font-light leading-relaxed mb-6">
                This requires new tools, new thinking, and new courage. It means embracing ambiguity, moving faster, and being willing to take creative risks that conventional brand strategies would never approve.
              </p>
              <p className="text-foreground/70 font-light leading-relaxed">
                The end of ordinary branding isn't a loss—it's an opportunity. For those brave enough to reimagine what branding can be.
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
