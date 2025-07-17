import Image from "next/image";
import Link from "next/link";

const OurVision = () => {
  return (
    <section className="px-6 lg:px-20 py-16 bg-gray-50">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Image Left */}
        <div className="flex-1">
          <Image
            src="/images/OurVision.png"
            alt="Vision illustration"
            width={700}
            height={500}
            className="rounded-2xl object-cover w-full h-auto shadow-md"
          />
        </div>

        {/* Content Right */}
        <div className="flex-1">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-800 mb-6">
            Our Vision
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-2xl">
            Our vision is to become Nepal’s most trusted digital hub for all
            insurance-related services. We envision{" "}
            <strong>Policy Parlour</strong> as a platform where innovation meets
            peace of mind—where policyholders, agents, and providers connect
            with ease, clarity, and confidence.
            <br />
            <br />
            We aim to lead the transformation of the insurance industry by
            setting new standards for accessibility, customer experience, and
            technological excellence. As we grow, we remain committed to
            empowering communities through financial literacy, digital
            inclusion, and reliable protection for life’s uncertainties.
          </p>
          <Link href="/contact">
            <button className="bg-green-500 text-white py-3 px-6 rounded-full">
              Call Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
