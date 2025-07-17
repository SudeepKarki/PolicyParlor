import Image from "next/image";

const OurProducts = () => {
  return (
    <section className="px-6 lg:px-20 py-14 bg-white">
      <div className="bg-gray-50 rounded-3xl p-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-800 mb-6">
            Our Products Are Your Only
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w2xl mx-auto lg:mx-0">
            The Company was a wholly owned subsidiary of The Government Security
            Life Assurance Company Ltd. The Company was a wholly owned
            subsidiary of The Government Security Life Assurance Company Ltd.
          </p>
        </div>

        {/* Right Illustration */}
        <div className="flex-1">
          <Image
            src="/images/OurProduct2.png" // Place your image here
            alt="Our Products Illustration"
            width={400}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
