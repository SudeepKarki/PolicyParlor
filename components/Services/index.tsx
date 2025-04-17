import React from "react";
import servicesImage from "@/public/images/services.png";
import Image from "next/image";

function Services() {
  return (
    <div className="bg-white shadow-[6px_6px_16px_rgba(0,0,0,.12)] p-8 rounded-[70px] mt-[-125px] pt-14 px-36 pb-28 w-[1140px] mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-5xl font-medium text-gray-800 mb-2">
          Explore Our Services
        </h2>
        <p className="text-gray-600 text-sm">
          The Company was a wholly owned subsidiary of The Oriental
          <br />
          Government Security Life Assurance Company Ltd.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-10">
        <div className="bg-green-500 rounded-4xl p-7 flex-1">
          <div className="flex mb-4">
            <Image src={servicesImage} alt="services" width={96} height={78} />
          </div>

          <h3 className="text-white text-3xl font-medium mb-4">
            Insurance Plan
          </h3>

          <p className="text-white  mb-4">
            The Company was a wholly owned subsidiary of The Oriental Government
            Security Life Assurance Company Ltd. adasij ddioasd adiasdsad jsdisd
            siddsiodasdasodad sdad asdasidas d asdjasi
          </p>

          <div className="flex">
            <button className="bg-white rounded-full p-4 hover:bg-gray-100 transition duration-300">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4L19 12L12 20M5 12H19"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="bg-gray-50 rounded-4xl p-7 flex-1">
          <div className="flex mb-4">
            <Image src={servicesImage} alt="services" width={96} height={78} />
          </div>

          <h3 className="text-gray-800 text-3xl font-medium mb-4">
            Insurance Plan
          </h3>

          <p className="text-gray-600  mb-4">
            The Company was a wholly owned subsidiary of The Oriental Government
            Security Life Assurance Company Ltd. adasij ddioasd adiasdsad jsdisd
            siddsiodasdasodad sdad asdasidas d asdjasi
          </p>

          <div className="flex">
            <button className="bg-white rounded-full p-4 hover:bg-gray-100 transition duration-300">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4L19 12L12 20M5 12H19"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
