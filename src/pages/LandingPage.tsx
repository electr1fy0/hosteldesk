import React from "react";
import { Header } from "./landing/components/Header";
import { Hero } from "./landing/components/Hero";
import { ProductPreview } from "./landing/components/ProductPreview";
import { FeatureGrid } from "./landing/components/FeatureGrid";
import { HowItWorks } from "./landing/components/HowItWorks";
import { Performance } from "./landing/components/Performance";
import { Footer } from "./landing/components/Footer";

const HostelDesk = () => {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const top = targetElement.offsetTop - 80;
      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#fafafa] text-zinc-900 selection:bg-zinc-900 selection:text-white font-sans antialiased">
      {/* The Layering */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_50%)] pointer-events-none" />
      
      <Header handleScroll={handleScroll} />

      <main className="container mx-auto max-w-7xl px-6 pt-24 pb-40">
        <Hero />
        <ProductPreview />
        <FeatureGrid />
        <HowItWorks />
        <Performance />
      </main>

      <Footer />
    </div>
  );
};

export default HostelDesk;