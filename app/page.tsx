import Image from "next/image";
import Navbar from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";
import FourScreenShowcase from "@/components/home/four-screen-showcase";
import Join from "@/components/home/join";
import HowUzelWorks from "@/components/home/how-uzel-works";
import FAQ from "@/components/home/faq";
import Footer from "@/components/home/footer";
import SimpleSteps from "@/components/home/steps";
import EverythingYouNeed from "@/components/home/everything-you-need";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FourScreenShowcase />
      <SimpleSteps />
      <EverythingYouNeed />
      {/* <AppViewShowcase /> */}
      <HowUzelWorks />
      <FAQ />
      <Join />
      <Footer />
    </div>
  );
}
