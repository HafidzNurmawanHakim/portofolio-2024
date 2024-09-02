"use client";
import "@/components/Home/HomeStyles.scss";
import AboutSection from "@/components/Home/AboutSection";
import HeroSection from "@/components/Home/HeroSection";
import ShowCase from "@/components/Home/ShowCase";
import "@14islands/r3f-scroll-rig/css";
import MarqueeSection from "@/components/Home/MarqueeSection";
import ContactSection from "@/components/Home/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ShowCase />
      <MarqueeSection />
      <ContactSection />
    </>
  );
}
