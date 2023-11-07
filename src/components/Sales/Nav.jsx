import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Subnav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-12 md:px-16 lg:px-52 pt-2">
      <div
        className={`flex flex-row justify-between md:justify-start items-center py-4`}
      >
        <div className="flex flex-row items-center">
          <div className="w-1/3 xs:w-1/6 sm:w-1/8 md:w-1/6 lg:w-1/10">
            <Image
              src="/logo.png"
              alt="OpenQ"
              width={125} // Original width of the image
              height={75} // Original height of the image
              layout="responsive" // This will maintain the aspect ratio
            />
          </div>

          <div className="hidden md:block pl-10 pb-1">
            <Link
              href="/product"
              className="text-gray-900 px-3 text-xs lg:text-lg font-medium items-center space-x-2"
            >
              <span>Product</span>
            </Link>
            <Link
              href="/resources"
              className="text-gray-900 px-3 text-xs lg:text-lg font-medium items-center space-x-2"
            >
              <span>Resources</span>
            </Link>
            <Link
              href="/blog"
              className="text-gray-900 px-3 text-xs lg:text-lg font-medium"
            >
              Blog
            </Link>
            <Link
              href="/community"
              className="text-gray-900 px-3 text-xs lg:text-lg font-medium"
            >
              Community
            </Link>
          </div>
        </div>
        <div className="flex flex-row hidden md:flex space-x-4">
          <button className="whitespace-nowrap border rounded-lg p-2 px-4 border-[#A6A6A6] font-medium md:text-xs">
            Closed beta sign in
          </button>
          <button className="whitespace-nowrap bg-[#322EE9] p-2 px-4 text-white border rounded-lg font-medium md:text-xs">
            Join waitlist
          </button>
        </div>
        <div className="md:hidden self-end mb-2">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col text-left">
          <a href="#" className="text-gray-900  text-sm font-normal pb-5">
            Product
          </a>
          <a href="#" className="text-gray-900  text-sm font-normal pb-5">
            Resources
          </a>
          <a href="#" className="text-gray-900  text-sm font-normal">
            Community
          </a>
          <div className="flex flex-col pt-5 space-y-2">
            <button className="whitespace-nowrap border rounded-lg p-2 px-4 border-[#A6A6A6] font-medium text-xs">
              Closed beta sign in
            </button>
            <button className="whitespace-nowrap bg-[#322EE9] p-2 px-4 text-white border rounded-lg font-medium text-xs">
              Join waitlist
            </button>
          </div>
          <div className="border-b border-gray-300 pt-5"></div>
        </div>
      )}
    </div>
  );
};

export default Subnav;
