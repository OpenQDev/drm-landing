import React from "react";
import Image from "next/image";
import LeadDiscoveryResult from "./productShowcase/lead-discovery-result";

const LeadDiscovery = () => {
  return (
    <div className="bg-[#EBFDF1] top-content-padding">
      <div className="px-content-padding">
        <div className="lg:hidden block pb-12">
          <div className="text-4xl text-title-color font-extrabold font-custom">
            Beyond Data Enrichment: OpenQ's AI-Driven Lead Discovery
          </div>
          <div className="text-gray-700 text-lg pt-5 ">
            Utilize OpenQ to enhance your CRM with robust lead discovery. Our AI
            uncovers not just engaged community members and rekindling
            opportunities, but also previously untapped developers profiles that
            align with your offerings—expanding your reach to the ideal
            audience.{" "}
          </div>
        </div>
        <div className="lg:flex lg:flex-row bottom-content-padding lg:justify-between lg:space-x-[15rem] items-center">
          {/*   Card start */}
          <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center px-5 py-2 w-full lg:w-[30rem] border rounded-tl-md rounded-tr-md border-gray-400 bg-gray-100">
              <div className="font-semibold">Lead discovery</div>
              <div className="p-5 bg-gray-300 rounded-full"></div>
            </div>
            <div className="bg-bg-primary-color border-l border-r border-b rounded-b-md border-gray-400 p">
              <div className="px-5 pt-5">
                <div className="font-semibold pb-2">Tracked dependencies</div>
                <div className="flex flex-row space-x-2 border p-2 border-gray-400 rounded-lg pb-2">
                  <div className="bg-gray-300 p-2 rounded-full w-1/4"></div>
                  <div className="bg-gray-300 p-2 rounded-full w-2/4"></div>
                </div>
                <div className="flex justify-end pt-3">
                  <div className="w-fit bg-gray-300 rounded-lg font-semibold px-2 text-gray-600">
                    completed
                  </div>
                </div>
                <div className="border-b border-gray-300 py-5"></div>
                <div className="flex flex-row justify-between items-center pt-5">
                  <div className="font-semibold">
                    Found 1337 new developer profiles
                  </div>
                  <div className="flex flex-row space-x-2 items-center">
                    <div className="font-medium text-sm">Select all</div>
                    <div className="p-1 border border-gray-500 rounded-sm"></div>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center pt-5">
                  <div className="flex flex-row space-x-3 items-center">
                    <div className="p-5 bg-gray-300 rounded-full"></div>
                    <div className="font-semibold">Kai Freno</div>
                  </div>
                  <div className="bg-green-100 rounded-full text-gray-600 font-semibold px-3 text-sm">
                    83% match
                  </div>
                  <div className="flex flex-row space-x-3">
                    <div className="p-5 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="p-1 border border-gray-500 rounded-sm"></div>
                </div>
                <LeadDiscoveryResult />
                <LeadDiscoveryResult />
                <LeadDiscoveryResult />
                <div className="border-b border-gray-400 pt-5"></div>
                <div className="flex flex-row justify-end space-x-[2px] pt-5 pb-5">
                  <div className="flex w-fit bg-q-purple p-1 rounded-tl-md rounded-bl-md font-semibold text-white px-2">
                    add
                  </div>
                  <div className="flex w-fit bg-q-purple p-1 rounded-tr-md rounded-br-md font-semibold text-white px-2">
                    .
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="text-4xl text-title-color font-extrabold font-custom">
              Beyond Data Enrichment: OpenQ's AI-Driven Lead Discovery
            </div>
            <div className="text-gray-700 text-lg pt-5">
              Utilize OpenQ to enhance your CRM with robust lead discovery. Our
              AI uncovers not just engaged community members and rekindling
              opportunities, but also previously untapped developers profiles
              that align with your offerings—expanding your reach to the ideal
              audience.{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadDiscovery;
