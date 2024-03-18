"use client"
import Image from "next/image";
import MainHeader from "./components/mainHeader";
import Sidebar from "./components/sidebar";
import HeroSection from "./components/landingPage/hero_section";
import FeatureSection from "./components/landingPage/features_section";
import WhySection from "./components/landingPage/why_section";
import PricingSection from "./components/landingPage/pricing_section";
import FAQSection from "./components/landingPage/faq_section";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = 'https://embed.tawk.to/65f690df9317c5437128b427/1hp5ibqlg';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <main className="bg-white min-h-screen">
        <MainHeader/>
        <HeroSection/>
        <FeatureSection/>
        <WhySection/>
        <PricingSection/>
        <FAQSection/>
    </main>
  );
}
