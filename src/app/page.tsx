"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

import { NeuronsBackground } from "@/components/NeuronsBackground";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import { ProjectsSection } from "@/sections/Projects";

export default function Home() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const fadeOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.1]);

  return (
    <div ref={containerRef} className="relative">
      {/* 🔮 Background with linked opacity */}
      <motion.div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{ opacity: fadeOpacity }}
      >
        {/* Particles */}
        <div className="absolute inset-0 blur-[2px] md:blur-[3px]">
          <NeuronsBackground />
        </div>

        {/* Blur Layer (fades with particles) */}
        <motion.div
          className="absolute inset-0 bg-black/10"
          style={{ opacity: fadeOpacity }}
        />
      </motion.div>

      {/* Main Content */}
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
