import Image from "next/image";
import MainHeader from "./components/mainHeader";
import Sidebar from "./components/sidebar";
import HeroSection from "./components/landingPage/hero_section";
import FeatureSection from "./components/landingPage/features_section";
import WhySection from "./components/landingPage/why_section";
import PricingSection from "./components/landingPage/pricing_section";
import ContactSection from "./components/landingPage/contact_section";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
        <MainHeader/>
        <HeroSection/>
        <FeatureSection/>
        <WhySection/>
        <PricingSection/>
        <ContactSection/>
    </main>
  );
}
