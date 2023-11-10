import React from "react";
import Image from "next/image";
import Card from "./card";
import GarretCard from "./garret-card";
import SideInfo from "./side-info";

const ProductShowcase = () => {
  return (
    <div>
      <div className="pt-28 pl-[9rem]">
        <div className="flex flex-col justify-right">
          <div className="flex flex-row items-center space-x-5 border rounded-tl-md border-gray-400 border-r-white w-full p-4 pl-10">
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
          <div className="flex flex-row space-x-10 border-l border-gray-400 pt-10">
            <div className="flex flex-col pl-10">
              <Card />
              <div className="pl-7">
                <div className="flex items-center border-l border-gray-400 pt-10"></div>
                <div className="flex flex-row items-center -ml-5">
                  <div className="p-5 bg-gray-300 rounded-full"></div>
                  <div className="pl-3 text-sm font-medium">
                    Has installed dependencies during Q1 Hackathon, is part of
                    participant list.
                  </div>
                </div>
                <div className="flex items-center border-l border-gray-400 pt-10"></div>
              </div>
              <GarretCard subContext="wrote an email 90 days ago." />
              <SideInfo
                mainText="Positive response received; utilized OpenQ template, with follow-up activity underway"
                subText="80% activity in the first 3 months utilizing dependency"
                subTextIcon=""
              />
            </div>
            <div>
              <div className="text-4xl text-title-color font-extrabold w-2/3 font-custom">
                Enrich your developer accounts with precision and insight
              </div>
              <div className="text-gray-700 text-lg pt-5 w-2/3">
                Dive into actionable insights beyond surface-level metrics.
                OpenQ clarifies the impact of every developer account on your
                business objectives , empowering you to track, measure and prove
                ROI --transforming how you value investments from open source
                contributions to event engagements.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-[9rem] bg-green-100">
        <div className="flex flex-col justify-right">
          <div className="flex flex-row items-center space-x-5 border-l border-b rounded-bl-md border-gray-400  w-full pl-10">
            <div className="flex flex-col">
              <SideInfo
                mainText={
                  "Created an account for our commercial product, started on a paid tier"
                }
                subText={"Wrote a review on X (Twitter)"}
              />
              <SideInfo
                mainText={
                  "Tested competitor tool; discussed dependency issues in this GitHub issue"
                }
                subText={"10% activity on dependency-related project"}
              />
              <GarretCard subContext={"wrote email 14 days ago"} bg={true} />
              <SideInfo
                mainText={
                  "Feedback received; expecting churn--additional action required"
                }
                subText={"Forward feedback to product team"}
              />
            </div>
            <div className="pl-5">
              <div className="text-4xl text-title-color font-extrabold w-2/3 font-custom">
                Connecting the most important events together.
              </div>
              <div className="text-4xl text-title-color font-extrabold w-2/3 font-custom pt-5">
                Detecting churn and inactivity before its too late.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
