import { BefFoot } from "@/components/main_comps/BefFoot";
import { BlogHom } from "@/components/main_comps/BlogHom";
import { CardSect } from "@/components/main_comps/CardSect";
import Footerr from "@/components/main_comps/Footerr";
import { Navbar } from "@/components/main_comps/Navbar";
import { MultiStepLoaderDemo } from "@/components/main_comps/NewCards";
import { AuroraBackgroundDemo } from "@/components/main_comps/random";
import { Services } from "@/components/main_comps/Services";
import { InfiniteMovingCardsDemo } from "@/components/main_comps/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <AuroraBackgroundDemo />
      <MultiStepLoaderDemo />
      <Services/>
      <BlogHom/>
      <InfiniteMovingCardsDemo/>
      <BefFoot/>
      <Footerr/>
      
    </>
  );
}
