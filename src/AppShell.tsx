import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";
import GalleryPage from "./pages/GalleryPage.tsx";
import ReviewsPage from "./pages/ReviewsPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import NotFound from "./pages/NotFound.tsx";
import CityPage from "./pages/CityPage.tsx";
import ServiceAreasPage from "./pages/ServiceAreasPage.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import DormersGuide from "./pages/DormersGuide.tsx";
import ReferralJoinPage from "./pages/ReferralJoinPage.tsx";
import ReferPage from "./pages/ReferPage.tsx";

const queryClient = new QueryClient();

// The router-agnostic application tree. The client wraps this in a
// BrowserRouter (src/App.tsx); the prerender/SSG step wraps it in a
// StaticRouter (src/entry-server.tsx). Keeping a single shared tree
// guarantees the server-rendered HTML matches what the client hydrates.
const AppShell = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/service-areas" element={<ServiceAreasPage />} />
        <Route path="/roofing/:slug" element={<CityPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/guides/roof-dormers" element={<DormersGuide />} />
        <Route path="/referral-join" element={<ReferralJoinPage />} />
        <Route path="/refer" element={<ReferPage />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default AppShell;
