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
import SiteFooter from "@/components/SiteFooter";
import { GlowDivider } from "@/components/GlowDivider";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ParticleBackground } from "@/components/ParticleBackground";   // IMPORTANT
import { CustomCursor } from "@/components/CustomCursor";              // KEEP CURSOR

const Index = () => {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />

      {/* ENTIRE PAGE WRAPPER */}
      <div className="min-h-screen w-full bg-black overflow-hidden">

        {/* 🔥 Particle Background MUST be under the Hero but above IdentitySection */}
        <HeroSection />
        <ParticleBackground />  {/* ← this is the correct position */}
        <GlowDivider />

        {/* IDENTITY (card section) */}
        <IdentitySection />
        <GlowDivider />

        {/* REST OF THE PAGE */}
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

<SiteFooter />
      </div>
    </>
  );
};

export default Index;
