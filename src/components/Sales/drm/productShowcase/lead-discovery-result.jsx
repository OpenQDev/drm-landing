import React from "react";
import Image from "next/image";

const LeadDiscoveryResult = ({}) => {
  return (
    <div className="flex flex-row justify-between items-center pt-5">
      <div className="flex flex-row space-x-3 items-center">
        <div className="p-5 bg-gray-300 rounded-full"></div>
        <div className="text-gray-300 bg-gray-300 rounded-lg w-full">
          Kai Freno
        </div>
      </div>
      <div className="bg-green-100 rounded-full text-gray-600 font-semibold px-3 text-sm">
        83% match
      </div>
      <div className="flex flex-row space-x-3">
        <div className="p-5 bg-gray-300 rounded-full"></div>
      </div>
      <div className="p-1 border border-gray-500 rounded-sm"></div>
    </div>
  );
};

export default LeadDiscoveryResult;
