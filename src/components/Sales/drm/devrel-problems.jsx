import React from "react";
import Image from "next/image";

const DevRelProblems = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center space-x-64 pt-28 lg:pt-64">
      <div className="flex flex-col text-left px-7 lg:px-0 mb-6">
        <div className="font-bold text-q-purple text-md">THE PROBLEM</div>
        <div className="text-title-color font-custom text-3xl lg:text-4xl font-extrabold pt-3">
          Uncharted developer <br />
          dynamics
        </div>
        <div className="text-gray-700 text-lg pt-5 lg:w-[29rem]">
          For firms crafting the tech landscape with developer tools, APIs, or
          SDKs, true insight into developer activity is crucial yet elusive. The
          data is vast, scattered, and sometimes hidden in unknown repos — a
          complex puzzle of engagement across the digital expanse. <br /> <br />
          With OpenQ, you provide the tools; we reveal the hands that wield them
          — every unseen developer move, mapped and distilled into a precise
          developer fingerprint.
        </div>
      </div>
      <Image
        className="w-1/4 pt-1"
        src="/landingpage/drm/devrel/cards.png"
        alt="Right Float Image"
        width={1192}
        height={1232}
      />
    </div>
  );
};

export default DevRelProblems;
