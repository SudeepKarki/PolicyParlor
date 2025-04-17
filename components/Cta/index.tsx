import ctaImage from "@/public/images/cta.png";
import Image from "next/image";

function Cta() {
  return (
    <>
      <div className="container mx-auto py-16 md:py-24 mt-64">
        <div className="flex flex-col md:flex-row items-center bg-gray-100  rounded-[30px] p-20 relative">
          {/* Left side content */}
          <div className="w-full md:w-1/2  mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl text-gray-800 mb-6">
              Our Products Are Your Only
            </h1>
            <p className="text-gray-600 leading-relaxed">
              The Company was a wholly owned subsidiary of The Government
              Security Life Assurance Company Ltd. The Company was a wholly
              owned subsidiary of The Government Security Life Assurance Company
              Ltd.
            </p>
          </div>
          <div className="w-full md:w-1/2 absolute bottom-[-55px] right-0">
            <Image src={ctaImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Cta;
