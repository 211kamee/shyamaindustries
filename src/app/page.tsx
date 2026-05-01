import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-[100svh] flex flex-col justify-between items-center selection:bg-foreground selection:text-background">
      <main className="grow-1 w-full relative">
        <HeroSection />
        <hr />
        <AboutSection />
        <hr />
        <ProductsSection />
        <hr />
        <IndustriesSection />
        <hr />
        <ContactSection />
        {/* Maybe Testimonials Section */}
      </main>
      <hr />
      <Footer />
    </div>
  );
}
