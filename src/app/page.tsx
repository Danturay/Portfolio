import { NeuronsBackground } from "@/components/NeuronsBackground";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { Navbar } from "@/sections/Navbar";
import { ProjectsSection } from "@/sections/Projects";


export default function Home() {
  return (
    <div className="relative overflow-hidden">

      <NeuronsBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80 -z-10"></div>
      <Navbar />
      <Header />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
