import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";

import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";

import { Metadata } from "next";
import RepayLoan from "@/components/Blog";

export const metadata: Metadata = {
  title: "SimuLoan",
  description: "This is Home for decentralized applications",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <HowItWorks/>
    </>
  );
}
