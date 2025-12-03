import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "../pages/Index";
import NotFound from "../pages/NotFound";

// Work Pages
import Websites from "../pages/work/Websites";
import VideoComposition from "../pages/work/VideoComposition";
import Graphics from "../pages/work/Graphics";
import WebMaintenance from "../pages/work/WebMaintenance";
import BrandingStrategy from "../pages/work/BrandingStrategy";
import DigitalMarketing from "../pages/work/DigitalMarketing";

// Case Study Pages
import EndOfOrdinaryBranding from "../pages/case-studies/EndOfOrdinaryBranding";
import AiCreativeCoPilot from "../pages/case-studies/AiCreativeCoPilot";
import CulturalMappingPractice from "../pages/case-studies/CulturalMappingPractice";

// GLOBAL HEADER
import { Header } from "./Header";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <Routes>
          {/* HOME */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Index />
              </>
            }
          />

          {/* WORK PAGES */}
          <Route
            path="/work/websites"
            element={
              <>
                <Header />
                <Websites />
              </>
            }
          />

          <Route
            path="/work/video-composition"
            element={
              <>
                <Header />
                <VideoComposition />
              </>
            }
          />

          <Route
            path="/work/graphics"
            element={
              <>
                <Header />
                <Graphics />
              </>
            }
          />

          <Route
            path="/work/web-maintenance"
            element={
              <>
                <Header />
                <WebMaintenance />
              </>
            }
          />

          <Route
            path="/work/branding-strategy"
            element={
              <>
                <Header />
                <BrandingStrategy />
              </>
            }
          />

          <Route
            path="/work/digital-marketing"
            element={
              <>
                <Header />
                <DigitalMarketing />
              </>
            }
          />

          {/* CASE STUDIES */}
          <Route
            path="/case-studies/end-of-ordinary-branding"
            element={
              <>
                <Header />
                <EndOfOrdinaryBranding />
              </>
            }
          />

          <Route
            path="/case-studies/ai-creative-co-pilot"
            element={
              <>
                <Header />
                <AiCreativeCoPilot />
              </>
            }
          />

          <Route
            path="/case-studies/cultural-mapping-practice"
            element={
              <>
                <Header />
                <CulturalMappingPractice />
              </>
            }
          />

          {/* 404 */}
          <Route
            path="*"
            element={
              <>
                <Header />
                <NotFound />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
