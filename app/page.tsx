import AboutUs from "@/components/AboutUs";
import Benefits from "@/components/Benefits";
import CaseStudies from "@/components/CaseStudies";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-base-300 flex flex-col items-center">
      <Navbar />
      <Hero />
      <CaseStudies />
      <Benefits />
      <AboutUs />
    </main>
  );
}
