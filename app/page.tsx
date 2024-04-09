import Cta from "@/components/Cta";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Team />
      <Features />
      <Cta />
    </>    
  );
}
