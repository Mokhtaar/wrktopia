"use client";
import Footer from "../../components/Footer";
// import SimpleMap from "../../components/GoogleMaps";
import HeroSection from "../../components/HeroSection";
import Navbar from "../../components/Navbar";
import TalentCategories from "../../components/TalentCategories";
import Team from "../../components/Team";
import Testimonials from "../../components/Testmonials";
import WhyWrktopia from "../../components/WhyWrktopia";

export default function Home() {
  return (
    <main className="min-h-screen font-poppins">
      <HeroSection />
      <WhyWrktopia />
      <TalentCategories />
      <Testimonials />
      <Team />
      <Footer />
      {/* <SimpleMap /> */}
    </main>
  );
}
