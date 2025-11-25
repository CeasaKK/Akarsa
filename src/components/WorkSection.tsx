import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const workCategories = [
  {
    title: "Websites",
    slug: "websites",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    description: "Dynamic & Static Web Solutions"
  },
  {
    title: "Video Composition",
    slug: "video-composition",
    thumbnail: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=600&fit=crop",
    description: "Cinematic Brand Films"
  },
  {
    title: "Graphics",
    slug: "graphics",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    description: "Visual Identity & Design"
  },
  {
    title: "Web Maintenance",
    slug: "web-maintenance",
    thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
    description: "24/7 Support & Optimization"
  },
  {
    title: "Branding & Strategy",
    slug: "branding-strategy",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    description: "Strategic Brand Development"
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    thumbnail: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=600&fit=crop",
    description: "Data-Driven Growth"
  }
];

export const WorkSection = () => {
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
            Our Work
          </h2>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-8">
            {workCategories.map((category, index) => (
              <CarouselItem key={index} className="pl-8 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -15,
                    scale: 1.03,
                  }}
                  onClick={() => navigate(`/work/${category.slug}`)}
                  className="cinematic-card rounded-sm cursor-pointer overflow-hidden spotlight-effect cursor-magnetic group h-[450px]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={category.thumbnail} 
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 shine-hover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-black to-transparent opacity-60" />
                  </div>
                  
                  <div className="p-8 space-y-4">
                    <h3 className="text-2xl md:text-3xl font-light text-neon-aqua tracking-wide group-hover:text-neon-aqua/80 transition-colors duration-500">
                      {category.title}
                    </h3>
                    <p className="text-foreground/60 font-light leading-relaxed">
                      {category.description}
                    </p>
                    <div className="pt-4">
                      <span className="text-sm text-neon-aqua/50 group-hover:text-neon-aqua transition-colors duration-500">
                        View Details →
                      </span>
                    </div>
                  </div>
                </motion.div>
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
