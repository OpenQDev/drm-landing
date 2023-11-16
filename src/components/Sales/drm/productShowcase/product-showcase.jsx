import React from "react";
import Image from "next/image";
import Card from "./card";
import GarretCard from "./garret-card";
import SideInfo from "./side-info";
import TopSection from "./TopSection";
import BottomSection from "./bottomSection";

const ProductShowcase = () => {
  return (
    <div className="top-content-padding">
      <div className="pb-12 sm:block xl:hidden px-content-padding">
        <div className="md:text-lg lg:text-xl text-4xl text-title-color font-extrabold font-custom">
          Enrich your developer accounts with precision and insight
        </div>
        <div className="text-gray-700 text-lg pt-5">
          Dive into actionable insights beyond surface-level metrics. OpenQ
          clarifies the impact of every developer account on your business
          objectives , empowering you to track, measure and prove ROI
          --transforming how you value investments from open source
          contributions to event engagements.
        </div>
      </div>
      <div className="">
        <div className="justify-center px-content-padding">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-5 border lg:rounded-t-md border-gray-400 w-full p-4 px-2 lg:pl-10">
            <div className="bg-q-purple w-min p-1 rounded-full px-3 text-white">
              <span>Enhanced</span>
            </div>
            <div className="border border-gray-400 p-1 rounded-full px-3 text-gray-500">
              <span>Tasks</span>
            </div>
            <div className="text-gray-500">
              Uses dependencies since 03.04.2020
            </div>
          </div>
          {/*   Start */}
          <TopSection />
        </div>
      </div>
      {/*  Green */}
      <div className="bg-[#EBFDF1]">
        <div className="px-content-padding">
          {/*  Start */}
          <BottomSection />
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
