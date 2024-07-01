import AboutUs from "@/components/AboutUs";
import { AceHero } from "@/components/AceHero";
import Benefits from "@/components/Benefits";
import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { SocialProof } from "@/components/SocialProof";
import Image from "next/image";

export default function Home() {
  return (
    <main
      id="root"
      className="realative bg-base-300 flex flex-col items-center"
    >
      <Navbar />
      <AceHero />
      <CaseStudies />
      <Benefits />
      <SocialProof />
      {/* <AboutUs /> */}
      <Footer />
    </main>
  );
}
