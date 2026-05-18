import { HeroSplit } from "@/components/sections/home/HeroSplit";
import { TrustStripAnimated } from "@/components/sections/home/TrustStripAnimated";
import { WhatWeOffer } from "@/components/sections/home/WhatWeOffer";
import { WhyCareerQue } from "@/components/sections/home/WhyCareerQue";
import { FinalCTA } from "@/components/sections/home/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSplit />
      <TrustStripAnimated />
      <WhatWeOffer />
      <WhyCareerQue />
      <FinalCTA />
    </div>
  );
}
