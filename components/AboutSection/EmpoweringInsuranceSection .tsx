import Image from "next/image";
import WhyChooseUs from "./WhyChooseUs";
import OurMission from "./OurMission";
import OurVision from "./OurVision";
import OurProducts from "./OurProducts";
import Link from "next/link";

const EmpoweringInsuranceSection = () => {
  return (
    <section className="px-6 lg:px-20 py-12 bg-white">
      {/* Header Row */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-12">
        {/* Left Title */}
        <div className="flex-1">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
            Empowering Insurance <br className="hidden lg:block" />
            for Everyone
          </h2>
        </div>

        {/* Right Paragraph & Button */}
        <div className="flex-1 max-w-lg text-gray-600">
          <p className="text-base mb-6">
            At <strong>Policy Parker</strong>, we believe that great ideas
            deserve great execution. Our multidisciplinary team includes
            designers, developers, strategists, and experts in execution and
            growth.
          </p>
          <Link href="/contact">
            <button className="bg-green-500 text-white py-3 px-6 rounded-full">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="rounded-xl overflow-hidden shadow-md">
        <Image
          src="/images/EmpoweringInsuranceHero.png"
          alt="Team presentation"
          width={1200}
          height={700}
          className="w-full h-180 object-cover"
        />
      </div>
      <WhyChooseUs />
      <OurMission />
      <OurVision />
      <OurProducts />
    </section>
  );
};

export default EmpoweringInsuranceSection;
