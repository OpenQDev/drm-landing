import React from "react";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <div className="flex flex-col justify-center text-center pt-28">
      <div className="">
        <div className="text-4xl text-title-color font-extrabold font-custom">
          How it works
        </div>
        <div className="text-gray-700 text-lg pt-5">
          Streamline your outreach as easily as a CRM, tailored for
          developers-first companies and API-driven enterprises.
        </div>
      </div>
      <div className="flex flex-row justify-between items-center px-40 pt-12">
        <div className="flex flex-col px-3 items-center justify-center">
          <div>icon</div>
          <div className="font-bold text-xl">Connect data sources</div>
          <div className="text-lg">
            Import data effortlessly from CSVs and connect seamlessly to
            platforms like GitHub, Discord, and more.
          </div>
        </div>
        <div className="flex flex-col px-3 items-center justify-center">
          <div>icon</div>
          <div className="font-bold text-xl">Connect data sources</div>
          <div className="text-lg">
            Import data effortlessly from CSVs and connect seamlessly to
            platforms like GitHub, Discord, and more.
          </div>
        </div>
        <div className="flex flex-col px-3 items-center justify-center">
          <div>icon</div>
          <div className="font-bold text-xl">Connect data sources</div>
          <div className="text-lg">
            Import data effortlessly from CSVs and connect seamlessly to
            platforms like GitHub, Discord, and more.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
