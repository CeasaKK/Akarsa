import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Branding & Strategy",
    description: "Building identities that resonate with culture and purpose through strategic brand development and positioning."
  },
  {
    title: "Digital Marketing",
    description: "Data-driven campaigns that blend creativity with performance across all digital channels."
  },
  {
    title: "Cultural Strategy",
    description: "Understanding and leveraging cultural insights to create authentic brand connections."
  },
  {
    title: "Web Maintenance",
    description: "Continuous support and optimization to keep your digital presence performing at its peak."
  },
  {
    title: "Websites",
    description: "Custom web experiences that merge aesthetic excellence with technical precision."
  },
  {
    title: "Video Composition",
    description: "Cinematic storytelling that captures emotion and drives engagement."
  },
  {
    title: "Graphics",
    description: "Visual design that communicates brand essence across all touchpoints."
  },
  {
    title: "Akarsa One (AI)",
    description: "Intelligent systems that enhance decision-making and creative processes."
  },
  {
    title: "The Act of Giving",
    description: "Purpose-driven initiatives that create positive impact beyond commercial goals."
  }
];

export const ServicescapesSection = () => {
  return (
    <section className="relative py-32 px-8 md:px-16 lg:px-24 bg-deep-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight" style={{ color: "white" }}>
            What We Do
          </h2>
        </motion.div>

        <Accordion
  type="single"
  collapsible
  className="space-y-3"
>
  {services.map((service, index) => (
    <AccordionItem
      key={service.title}
      value={service.title}
      className="border-none"
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.08 }}
        className="cinematic-card rounded-sm spotlight-effect cursor-pointer"
      >
        {/* CLICKABLE HEADER ROW */}
        <AccordionTrigger className="w-full px-10 md:px-12 py-6 md:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-left">
          <h3 className="text-2xl md:text-3xl font-light text-neon-aqua tracking-wide">
            {service.title}
          </h3>
          <p className="text-foreground/60 font-light leading-relaxed md:text-right md:max-w-2xl text-sm md:text-base">
            {service.description}
          </p>
        </AccordionTrigger>

        {/* DROPDOWN CONTENT (YOU’LL CUSTOMIZE THIS) */}
               {service.title === "Branding & Strategy" ? (
  // FULL DETAILED CONTENT ONLY FOR BRANDING
  <AccordionContent
    className="pl-16 pr-10 md:pl-32 md:pr-12 pb-12 pt-4 text-left border-l border-white/10"
  >
    <div className="pl-4 md:pl-6 space-y-12">

      {/* HEADER + INTRO */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-neon-aqua">
          <span>💡</span>
          <p className="uppercase text-[11px] tracking-[0.3em] text-neon-aqua">
            Branding & Strategy
          </p>
        </div>

        <h4 className="text-xl md:text-2xl font-light text-white leading-snug">
          Where vision turns into identity.
        </h4>

        <p className="text-sm md:text-base text-white/70 leading-relaxed">
          Your brand isn’t your logo. It’s your story, voice, and energy —
          translated into design, strategy, and experience. At Akarsa, we craft
          brands that don’t just look good — they mean something.
        </p>
      </div>

      {/* OUR APPROACH */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-neon-aqua">
          <span>🎯</span>
          <h5 className="text-lg font-medium text-white">Our Approach</h5>
        </div>

        <p className="text-sm md:text-base text-white/70 leading-relaxed">
          We start where others stop — at the why. Every brand has a heartbeat.
          Our job is to make people feel it.
        </p>
        <p className="text-sm md:text-base text-white/70 leading-relaxed">
          Think deeply. Design simply. Deliver powerfully. Our branding strategy
          blends intuition with data, helping businesses shape timeless
          identities that can adapt, scale, and inspire.
        </p>
      </div>

      {/* WHAT WE DO */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-neon-aqua">
          <span>🧭</span>
          <h5 className="text-lg font-medium text-white">What We Do</h5>
        </div>

        <ul className="space-y-4">
          <li>
            <p className="font-medium text-white">🔹 Brand Identity Design</p>
            <p className="text-sm text-white/70 leading-relaxed">
              Logos, color systems, typography, and visual language — crafted
              with purpose.
            </p>
          </li>
          <li>
            <p className="font-medium text-white">
              🔹 Brand Positioning & Story
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              Defining who you are, what you stand for, and why anyone should
              care.
            </p>
          </li>
          <li>
            <p className="font-medium text-white">
              🔹 Market Research & Strategy
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              Insights-driven branding aligned with audience psychology and
              market trends.
            </p>
          </li>
          <li>
            <p className="font-medium text-white">
              🔹 Digital Presence Planning
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              From website tone to social footprint — creating cohesive brand
              ecosystems.
            </p>
          </li>
          <li>
            <p className="font-medium text-white">
              🔹 Rebranding & Brand Refresh
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              Evolving existing identities while preserving core essence.
            </p>
          </li>
          <li>
            <p className="font-medium text-white">
              🔹 Brand Guidelines & Playbooks
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              Structured documentation for consistency and scalability.
            </p>
          </li>
        </ul>
      </div>

      {/* THE AKARSA WAY */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-neon-aqua">
          <span>🧠</span>
          <h5 className="text-lg font-medium text-white">The Akarsa Way</h5>
        </div>

        <p className="text-sm md:text-base text-white/70 leading-relaxed">
          We don’t decorate. We define. Branding is not an act of design — it’s
          an act of meaning-making. We mix strategy, art, and psychology to
          shape how people see and feel your brand.
        </p>

        <ul className="space-y-2 text-sm md:text-base text-white/70 leading-relaxed">
          <li>
            <span className="text-white font-medium">Discover —</span> purpose,
            audience, and edge.
          </li>
          <li>
            <span className="text-white font-medium">Define —</span>{" "}
            positioning & visual tone.
          </li>
          <li>
            <span className="text-white font-medium">Design —</span> identities
            that connect emotionally.
          </li>
          <li>
            <span className="text-white font-medium">Deploy —</span> roll out
            across digital & physical touchpoints.
          </li>
        </ul>
      </div>

      {/* BRANDS WE’VE TOUCHED */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-neon-aqua">
          <span>🌍</span>
          <h5 className="text-lg font-medium text-white">Brands We’ve Touched</h5>
        </div>

        <p className="text-xs md:text-sm text-white/60">
          (Add logos or case studies here.)
        </p>
        <ul className="space-y-1 text-xs md:text-sm text-white/70">
          <li>
            <span className="font-medium text-white">Startup →</span> recognition
            up by 40%.
          </li>
          <li>
            <span className="font-medium text-white">Real Estate →</span>{" "}
            identity overhaul, global presence boost.
          </li>
          <li>
            <span className="font-medium text-white">Fintech →</span> unified
            narrative & visual identity.
          </li>
        </ul>
      </div>

      {/* CTA */}
      <div className="space-y-4">
        <p className="text-sm md:text-base text-white/80">
          If your brand has a story to tell, we’ll turn it into something people
          remember, repeat, and believe in.
        </p>

        <div className="flex flex-wrap gap-3">
          <Button className="text-xs md:text-sm bg-neon-aqua text-black hover:bg-neon-aqua/90">
            Build My Brand
          </Button>
          <Button
            variant="outline"
            className="text-xs md:text-sm border-neon-aqua/60 text-neon-aqua hover:bg-neon-aqua/10"
          >
            Schedule Strategy Session
          </Button>
          <Button
            variant="ghost"
            className="text-xs md:text-sm text-white/70 hover:text-neon-aqua"
          >
            Explore Our Work
          </Button>
        </div>
      </div>
    </div>
  </AccordionContent>
) : (
  // SIMPLE, SMALL PLACEHOLDER FOR OTHER SERVICES
  <AccordionContent className="px-10 md:px-12 pb-6 pt-2 text-left">
    <p className="text-sm md:text-base text-white/60 leading-relaxed">
      Detailed breakdown for <span className="text-white">{service.title}</span>{" "}
      is coming soon.
    </p>
  </AccordionContent>
)}
      </motion.div>
    </AccordionItem>
  ))}
</Accordion>
      </div>
    </section>
  );
};
