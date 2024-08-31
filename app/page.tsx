"use client";
import "@/components/Home/HomeStyles.scss";
import { SmoothScrollProvider } from "@/components/SmoothScroll";
import AboutSection from "@/components/Home/AboutSection";
import HeroSection from "@/components/Home/HeroSection";
import Slide from "@/components/Slide";
import Container from "@/components/Container";
import clsx from "clsx";
import { fontFira } from "@/config/fonts";
import GradientText from "@/components/lib/GradientText";
import ShowCase from "@/components/Home/ShowCase";

export default function Home() {
   return (
      <SmoothScrollProvider>
         <HeroSection />
         <AboutSection />
         <ShowCase />
      </SmoothScrollProvider>
   );
}
