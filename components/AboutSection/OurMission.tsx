import Image from "next/image";
import Link from "next/link";

const OurMission = () => {
  return (
    <section className="px-6 lg:px-20 py-16 bg-gray-50">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-800 mb-6">
            Our Mission
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
            At <strong>Policy Parlour</strong>, our mission is to simplify and
            streamline the way people access, understand, and manage insurance.
            We are dedicated to creating digital solutions that make insurance
            more transparent, user-friendly, and personalized. By combining
            technology with empathy, we aim to empower individuals and agents
            with the tools and support they need to make confident decisions.
            Whether it’s through our online portal, mobile applications, or CRM
            tools, we strive to ensure that every interaction adds value, saves
            time, and builds trust.
          </p>
          <Link href="/contact">
            <button className="bg-green-500 text-white py-3 px-6 rounded-full">
              Join Us
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <Image
            src="/images/OurMission.png"
            alt="Team collaboration"
            width={700}
            height={500}
            className="rounded-2xl object-cover w-full h-auto shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default OurMission;
