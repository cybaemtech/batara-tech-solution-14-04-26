import type { CSSProperties } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import OurServicesSection from "@/components/OurServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const panelStyle = (zIndex: number, first = false): CSSProperties => ({
  position: "sticky",
  top: 0,
  zIndex,
  borderRadius: "1.5rem 1.5rem 0 0",
  boxShadow: "0 -24px 80px rgba(0,0,0,0.7), 0 -2px 0 rgba(255,255,255,0.06)",
  overflow: "hidden",
  ...(first ? { marginTop: "-1.5rem" } : {}),
});

const Index = () => {
  return (
    <div style={{ background: "#060c1a" }}>
      <Navbar />

      {/* Hero — pinned behind everything */}
      <div style={{ position: "sticky", top: 0, zIndex: 1 }}>
        <HeroSection />
      </div>

      {/* Panel 1 — Industries We Serve */}
      <div className="bg-background" style={panelStyle(10, true)}>
        <ServicesSection />
      </div>

      {/* Panel 2 — Our Services */}
      <div className="bg-background" style={panelStyle(20)}>
        <OurServicesSection />
      </div>

      {/* Panel 3 — Testimonials */}
      <div className="bg-background" style={panelStyle(30)}>
        <TestimonialsSection />
      </div>

      {/* Panel 4 — Contact + Footer (final, no sticky needed) */}
      <div
        className="bg-background"
        style={{
          position: "relative",
          zIndex: 40,
          borderRadius: "1.5rem 1.5rem 0 0",
          boxShadow: "0 -24px 80px rgba(0,0,0,0.7), 0 -2px 0 rgba(255,255,255,0.06)",
          overflow: "hidden",
        }}
      >
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
