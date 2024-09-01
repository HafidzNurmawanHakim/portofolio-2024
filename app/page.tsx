"use client";
import "@/components/Home/HomeStyles.scss";
import { SmoothScrollProvider } from "@/components/SmoothScroll";
import AboutSection from "@/components/Home/AboutSection";
import HeroSection from "@/components/Home/HeroSection";
import Slide from "@/components/Slide";
import Container from "@/components/Container";
import clsx from "clsx";
import { fontFira, fontSora } from "@/config/fonts";
import GradientText from "@/components/lib/GradientText";
import ShowCase from "@/components/Home/ShowCase";
import Marquee from "@/components/lib/Marquee";
import "@14islands/r3f-scroll-rig/css";
import { SmoothScrollbar } from "@14islands/r3f-scroll-rig";
import MarqueeSection from "@/components/Home/MarqueeSection";
import ContactSection from "@/components/Home/ContactSection";

export default function Home() {
   return (
      <SmoothScrollProvider>
         <HeroSection />
         <AboutSection />
         {/*  <ShowCase />
         <MarqueeSection />
         <ContactSection /> */}
      </SmoothScrollProvider>
   );
}
