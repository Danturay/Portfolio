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
    {/* 🔮 Background */}
    <motion.div
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ opacity: fadeOpacity }}
    >
      <div className="absolute inset-0 blur-[2px] md:blur-[3px]">
        <NeuronsBackground />
      </div>
      <motion.div
        className="absolute inset-0 bg-black/10"
        style={{ opacity: fadeOpacity }}
      />
    </motion.div>

    {/* 🧭 Navbar not animated (no jumping) */}
    <Navbar />

    {/* 🎬 Animate content only */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </motion.div>
  </div>
);
}