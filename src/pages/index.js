import React from "react";
import Nav from "../components/Sales/Nav";
import DevRelHero from "../components/Sales/drm/devrel-hero";
import DevRelCore from "../components/Sales/drm/devrel-core";
import DevRelProblems from "../components/Sales/drm/devrel-problems";
import TextImageSection from "../components/sales/drm/text-image-section";
import ProductShowcase from "../components/Sales/drm/ProductShowcase/product-showcase";
import StepOne from "../components/Sales/drm/step-one";
import StepTwo from "../components/Sales/drm/step-two";
import StepThree from "../components/Sales/drm/step-three";
import Cta from "../components/Sales/drm/cta";
import Faq from "../components/Sales/drm/faq";
import LeadDiscovery from "@/components/Sales/drm/lead-discovery";
import HowItWorks from "@/components/Sales/drm/how-it-works";
import DeveloperDynamics from "@/components/Sales/drm/developer-dynamics";
import FooterBanner from "@/components/Sales/footer-banner";
import Footer from "@/components/Sales/Footer";

const DRM = () => {
  return (
    <main className="bg-bg-primary-color explore">
      <Nav />
      <div className="bg-bg-primary-color">
        <DevRelHero />
        <DevRelCore />
        <div className="">
          <DevRelProblems />
          <ProductShowcase />
          <LeadDiscovery />
          <HowItWorks />
          <DeveloperDynamics />
          <Faq />
          <div className="relative">
            <div className="absolute top-0 w-full z-10">
              <FooterBanner />
            </div>
            <div className="absolute top-[14rem] w-full z-0">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DRM;
