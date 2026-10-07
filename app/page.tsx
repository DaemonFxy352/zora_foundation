import { Hero } from "@/components/Hero";
import { WhyItMatters } from "@/components/WhyItMatters";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Programs } from "@/components/Programs";
import { ResearchImpact } from "@/components/ResearchImpact";
import { Partnerships } from "@/components/Partnerships";
import { SupportCTA } from "@/components/SupportCTA";
export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <div id="top" />
      <Hero />
      <WhyItMatters />
      <WhatWeDo />
      <Programs />
      <ResearchImpact />
      <Partnerships />
      <SupportCTA />
    </main>
  );
}
