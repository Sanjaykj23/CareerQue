import { HeroSplit } from "@/components/sections/home/HeroSplit";
import { TrustStripAnimated } from "@/components/sections/home/TrustStripAnimated";
import { DualCore } from "@/components/sections/home/DualCore";
import { ReportCarousel } from "@/components/sections/home/ReportCarousel";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSplit />
      <TrustStripAnimated />
      <DualCore />
      <ReportCarousel />
    </div>
  );
}
