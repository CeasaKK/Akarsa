// src/components/SiteFooter.tsx

import { AddressesSection } from "@/components/AddressesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const SiteFooter = () => {
  return (
    <footer className="bg-void-black text-white border-t border-neon-aqua/10 mt-20">
      {/* Main 3-column footer content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1: Get in touch / email */}
        <div className="space-y-4">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-foreground/60">
            Get in touch
          </p>
          <h2 className="text-lg font-medium text-white">
            Let’s talk about your next project.
          </h2>
          <p className="text-sm text-foreground/60">
            Studio for brand, culture and experience design.
          </p>
          <p className="text-sm font-medium text-neon-aqua">
            hello@akarsa.studio
          </p>
        </div>

        {/* Column 2: Locations – compact version */}
        <div className="space-y-4">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-foreground/60">
            Locations
          </p>
          <AddressesSection />
        </div>

        {/* Column 3: Contact form – compact version */}
        <div className="space-y-4">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-foreground/60">
            Contact form
          </p>
          <ContactSection />
        </div>
      </div>

      {/* Bottom strip: socials + copyright */}
      <div className="border-t border-neon-aqua/10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-4">
          <Footer />
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;