import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="flex flex-col w-full md:w-[25rem] lg:w-[40rem]">
      <div className="border-l font-bold border-t border-r rounded-tl-md rounded-tr-md p-2 border-gray-400 bg-blue-500 bg-opacity-5 pl-5">
        Developer profile
      </div>
      <div className="border rounded-bl-md rounded-br-md border-gray-400">
        <div className="flex flex-row justify-between pt-5 px-5">
          <div className="flex flex-row space-x-5">
            <div className="bg-gray-300 p-6 rounded-full"></div>
            <div className="flex flex-col">
              <div className="font-semibold">Monika Russ</div>
              <div>5 events found</div>
            </div>
          </div>
          <div className="flex flex-row space-x-3">
            <div className="bg-gray-300 rounded-full px-1"></div>
            <div className="font-medium">New York</div>
          </div>
        </div>
        <div className="pt-32"></div>
      </div>
    </div>
  );
};

export default Card;
