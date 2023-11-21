import React from "react";
import Nav from "../components/Sales/nav";
import DevRelHero from "../components/Sales/drm/devrel-hero";
import DevRelCore from "../components/Sales/drm/devrel-core";
import DevRelProblems from "../components/Sales/drm/devrel-problems";
import ProductShowcase from "../components/Sales/drm/product-showcase/product-showcase";
import Faq from "../components/Sales/drm/faq";
import LeadDiscovery from "@/components/Sales/drm/lead-discovery";
import HowItWorks from "@/components/Sales/drm/how-it-works";
import DeveloperDynamics from "@/components/Sales/drm/developer-dynamics";
import FooterBanner from "@/components/Sales/footer-banner";
import Footer from "@/components/Sales/footer";

const DRM = () => {
  return (
    <main className="bg-bg-primary-color explore">
      <Nav />
      <div className="bg-bg-primary-color">
        <DevRelHero />
        <DevRelCore />
        <DevRelProblems />
        <ProductShowcase />
        <LeadDiscovery />
        <HowItWorks />
        <DeveloperDynamics />
        <Faq />
        <FooterBanner />
        <Footer />
      </div>
    </main>
  );
};

export default DRM;
