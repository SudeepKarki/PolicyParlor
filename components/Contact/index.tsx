import Image from "next/image";
import React from "react";
import phoneImage from "@/public/images/conf.png";

function Contact() {
  return (
    <>
      <div className="container mx-auto px-4 my-24 flex flex-col lg:flex-row items-center justify-between w-[1140px]">
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
          <h2 className="text-4xl font-medium text-gray-800 mb-16">
            <span className="text-gray-600 ">
              Any Confusion? <br />
              We Are a Call Away...
            </span>
          </h2>
          <div className="mb-14">
            <div className="bg-gray-50 rounded-full py-4 px-6 mb-4 shadow-sm">
              <input
                type="text"
                placeholder="How does something works by t he moon?"
                className="bg-transparent w-full text-gray-700 outline-none"
              />
            </div>

            <div className="bg-green-500 rounded-full py-4 px-6 mb-10 text-white">
              <input
                type="text"
                placeholder="How does something t he moon?"
                className="bg-transparent w-full text-white outline-none placeholder-white"
              />
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-full transition duration-300">
              Get Started
            </button>

            <button className="flex items-center gap-2 text-gray-800 hover:text-gray-600 transition duration-300">
              <div className="flex items-center justify-center bg-white w-8 h-8 rounded-full border border-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span>Watch Video</span>
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative flex justify-center">
          <Image
            src={phoneImage}
            alt="3D Character illustration of a woman with orange hair"
          />
        </div>
      </div>
    </>
  );
}

export default Contact;
