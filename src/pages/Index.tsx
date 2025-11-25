import { HeroSection } from "@/components/HeroSection";
import { IdentitySection } from "@/components/IdentitySection";
import { WorkSection } from "@/components/WorkSection";
import { TeamSection } from "@/components/TeamSection";
import { ServicescapesSection } from "@/components/ServicescapesSection";
import { AkarsaOneSection } from "@/components/AkarsaOneSection";
import { CulturalStrategySection } from "@/components/CulturalStrategySection";
import { ActOfGivingSection } from "@/components/ActOfGivingSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { CareersSection } from "@/components/CareersSection";
import { AddressesSection } from "@/components/AddressesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { ParticleBackground } from "@/components/ParticleBackground";
import { GlowDivider } from "@/components/GlowDivider";
import { ScrollProgress } from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen bg-void-black relative">
      <ScrollProgress />
      <CustomCursor />
      <ParticleBackground />
      <HeroSection />
      <GlowDivider />
      <IdentitySection />
      <GlowDivider />
      <WorkSection />
      <GlowDivider />
      <TeamSection />
      <GlowDivider />
      <ServicescapesSection />
      <GlowDivider />
      <AkarsaOneSection />
      <GlowDivider />
      <CulturalStrategySection />
      <GlowDivider />
      <ActOfGivingSection />
      <GlowDivider />
      <ReviewsSection />
      <GlowDivider />
      <CaseStudiesSection />
      <GlowDivider />
      <CareersSection />
      <GlowDivider />
      <AddressesSection />
      <GlowDivider />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

