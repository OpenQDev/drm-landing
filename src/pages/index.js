import React from "react";
import Nav from "../components/Sales/Nav";
import DevRelHero from "../components/Sales/drm/devrel-hero";
import DevRelCore from "../components/Sales/drm/devrel-core";
import DevRelProblems from "../components/Sales/drm/devrel-problems";
import ProductIntro from "../components/Sales/drm/product-intro";
import StepOne from "../components/Sales/drm/step-one";
import StepTwo from "../components/Sales/drm/step-two";
import StepThree from "../components/Sales/drm/step-three";
import Cta from "../components/Sales/drm/cta";
import Faq from "../components/Sales/drm/faq";

const DRM = () => {
  return (
    <main className="bg-bg-primary-color explore">
      <Nav />
      <div className="bg-bg-primary-color pb-96">
        <DevRelHero />
        <DevRelCore />
      </div>
    </main>
  );
};

export default DRM;
