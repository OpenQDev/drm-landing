import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#101010]">
      <div className="pt-[12rem] text-white">
        <div className="flex flex-row px-[10rem] pt-28 space-x-[3rem]">
          <div className="flex flex-row space-x-8">
            <div className="w-1/3">
              <div className="pb-3">OpenQ Logo</div>
              <div className="">
                The CRM for developer relations to connect community, product
                and customer data.
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <div className="pb-3 font-bold">Help me</div>
              <div>Contact Us</div>
              <div>Feature requests</div>
            </div>
            <div className="flex flex-col space-y-1">
              <div className="pb-3 font-bold">Company</div>
              <div>About</div>
              <div>Careers</div>
            </div>
            <div className="flex flex-col space-y-1">
              <div className="pb-3 font-bold">Resources</div>
              <div>Blog</div>
              <div>Docs</div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="pb-3 font-bold">Made by dev rels for dev rels</div>
            <div>in Germany, US, Canda, Austria & Spain</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
