"use client";
import Header from "./components/header";
import Banner from "./sections/banner";
import Contact from "./sections/contact";
import Faq from "./sections/faq";
import Footer from "./components/footer";
import KeyFeatures from "./sections/keyFeatures";
import OfferPricing from "./sections/offerPricing";
import Pricing from "./sections/pricing";
import ProblemSolutions from "./sections/problemSolutions";
import VideoSection from "./sections/videoSection";
import WhoUse from "./sections/whoUse";
import macOs from "@/public/images/svg/macOs.svg"
import appleIcon from "@/public/images/svg/appleIcon.svg"
import Image from 'next/image';
import { useEffect, useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll event to hide/show the icon
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust the threshold as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="bg-cs-gray50">
        <Header />
      </div>
      <main>
        <Banner />
        <ProblemSolutions />
        <KeyFeatures />
        <WhoUse />
        <VideoSection />
        <Pricing />
        <OfferPricing />
        <Contact />
        <Faq />
      </main>
      <Footer />


      {/* hide this icon when screen scrolls */}
      {!isScrolled && (
        <div className="w-full max-w-480 mx-auto">
          <div className="absolute bottom-5 right-5 3xl:bottom-8 3xl:right-8">
            <div className="relative size-20 3xl:size-25">
              <Image src={macOs} alt="icon" className='object-contain slow-spin' />
              <div className="absolute top-1/2 left-1/2 -translate-1/2 size-10 3xl:size-12.5">
                <Image src={appleIcon} alt="icon" className='object-contain' />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
