import { BefFoot } from "@/components/main_comps/BefFoot";
import { BlogHom } from "@/components/main_comps/BlogHom";
import { CardSect } from "@/components/main_comps/CardSect";
import Footerr from "@/components/main_comps/Footerr";
import { TimelineDemo } from "@/components/main_comps/Journeycomp";
import { Navbar } from "@/components/main_comps/Navbar";
import { MultiStepLoaderDemo } from "@/components/main_comps/NewCards";
import { AuroraBackgroundDemo } from "@/components/main_comps/random";
import { AppleCardsCarouselDemo } from "@/components/main_comps/Service";
import { Services } from "@/components/main_comps/Services";
import { InfiniteMovingCardsDemo } from "@/components/main_comps/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <AuroraBackgroundDemo />
      {/* <MultiStepLoaderDemo /> */}
      <div className="relative space-y-12">
            <TimelineDemo/>
      </div>
      {/* <AppleCardsCarouselDemo/> */}
      <Services/>
      <BlogHom/>
      <InfiniteMovingCardsDemo/>
      {/* <BefFoot/> */}
      <Footerr/>
      
    </>
  );
}
