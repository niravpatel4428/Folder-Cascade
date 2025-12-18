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

export default function Home() {
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
    </>
  );
}
