import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import Features from "./components/Features";
import { Faq } from "./components/Faq";
import { Pricing } from "./components/Pricing";
import { Cta } from "./components/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="px-[20px] lg:container mx-auto lg:px-20">
        <Features />
        <Faq/>
        <Pricing/>
        <Cta/>
      </div>
      
    </>
  );
}
