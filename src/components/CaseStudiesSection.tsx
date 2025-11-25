import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const caseStudies = [
  {
    title: "The End of Ordinary Branding",
    excerpt: "Why conventional brand strategies fail in a culture-first world, and what comes next.",
    category: "Strategy",
    slug: "end-of-ordinary-branding",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
  },
  {
    title: "AI as Creative Co-Pilot",
    excerpt: "How we use artificial intelligence to enhance, not replace, human imagination.",
    category: "Technology",
    slug: "ai-creative-co-pilot",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop"
  },
  {
    title: "Cultural Mapping in Practice",
    excerpt: "A deep dive into how we decode cultural shifts to position brands effectively.",
    category: "Culture",
    slug: "cultural-mapping-practice",
    thumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop"
  }
];

export const CaseStudiesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-32 px-8 md:px-16 lg:px-24 bg-deep-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight">
            Case Studies
          </h2>
          <p className="text-foreground/60 font-light mt-6 text-lg">
            Insights from Akarsa Curious
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-8">
            {caseStudies.map((study, index) => (
              <CarouselItem key={index} className="pl-8 md:basis-1/2 lg:basis-1/3">
                <motion.article
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  whileHover={{ 
                    y: -15,
                    scale: 1.03,
                  }}
                  onClick={() => navigate(`/case-studies/${study.slug}`)}
                  className="cinematic-card rounded-sm cursor-pointer group spotlight-effect overflow-hidden h-[450px]"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={study.thumbnail} 
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 shine-hover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-black to-transparent opacity-80" />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs text-neon-aqua/80 tracking-widest font-light bg-deep-black/50 px-3 py-1 rounded-sm">
                        {study.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 space-y-4">
                    <h3 className="text-2xl font-light text-foreground group-hover:text-neon-aqua transition-colors duration-500 leading-snug">
                      {study.title}
                    </h3>
                    <p className="text-foreground/60 font-light leading-relaxed">
                      {study.excerpt}
                    </p>
                    <div className="pt-2">
                      <span className="text-sm text-neon-aqua/50 group-hover:text-neon-aqua transition-colors duration-500">
                        Read More →
                      </span>
                    </div>
                  </div>
                </motion.article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
      </div>
    </section>
  );
};
