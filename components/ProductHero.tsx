"use client";
import { ArrowRight, TimerIcon } from "lucide-react";
import Faq from "./Faq";
import Link from "next/link";

const ProductHero = () => {
  return (
    <>
      {/* Intro Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-x-10 mt-10 mb-10 px-6 lg:px-20">
        <aside className="text-4xl text-gray-700 font-semibold leading-tight">
          <h2>Explore Our Solution</h2>
          <h2>We Provide It All</h2>
        </aside>
        <aside className="text-base text-gray-500 max-w-lg">
          <p>
            The Company was a wholly owned subsidiary of The Oriental Government
            Security Life Assurance Company.
          </p>
        </aside>
      </div>

      {/* Hero Image */}
      <div className="mx-auto px-6 lg:px-20">
        <img
          src="/images/ProductHero.png"
          alt="Business team planning insurance solutions"
          className="mx-auto rounded-lg max-w-7xl w-full"
        />
      </div>

      {/* Section 1 */}
      <section className="flex flex-col lg:flex-row items-center gap-16 px-6 lg:px-20 py-20 bg-white">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/images/OurSoln.png"
            alt="Our solution"
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-semibold text-gray-700 mb-6 leading-tight">
            Our Products Are Your <br />
            Solution
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-6">
            We are a trusted subsidiary of The Oriental Government Security Life
            Assurance Company Ltd., dedicated to delivering innovative life
            insurance products designed to protect what matters most. With
            decades of industry experience, our solutions are crafted to provide
            peace of mind and long-term financial security for individuals and
            families alike.
            <br />
            <br />
            Our focus is on customer-first service, transparent policies, and
            sustainable growth. Whether you are planning for your future or
            safeguarding your present, we are here to guide you every step of
            the way.
          </p>
          <Link href="/contact">
            <button className="bg-green-500 text-white py-3 px-6 rounded-full">
              Join Us
            </button>
          </Link>
        </div>
      </section>

      {/* Section 2 - Flipped Layout */}
      <section className="flex flex-col-reverse lg:flex-row items-center gap-16 px-6 lg:px-20 py-20 bg-white">
        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-semibold text-gray-700 mb-6 leading-tight">
            Our Products Are Your <br />
            Solution
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-6">
            As a proud subsidiary of The Oriental Government Security Life
            Assurance Company Ltd., we deliver life insurance solutions that are
            tailored to meet your evolving needs. Our products are designed to
            provide financial protection, peace of mind, and long-term security
            for individuals and families.
            <br />
            <br />
            With a customer-first approach and a commitment to transparency, we
            help clients make informed choices about their future. Explore our
            offerings and see how we can help safeguard what matters most.
          </p>
          <button className="border border-gray-800 text-gray-800 hover:bg-gray-100 font-medium py-2.5 px-6 rounded-full transition duration-300">
            See More
          </button>
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/images/OurProduct.png"
            alt="Insurance consultation"
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>
      </section>

      <section className="bg-white px-6 lg:px-20 py-20">
        {/* --- Our Products Section --- */}
        <section className="flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* Left: Heading and Button */}
          <div className="text-center lg:text-left max-w-md">
            <h2 className="text-4xl font-semibold text-gray-700 mb-4 leading-snug">
              Our Products Are <br /> Your Solution
            </h2>
            <p className="text-base text-gray-600">
              The Company was a wholly owned subsidiary of The Government
              Security Life Assurance Company Ltd.
            </p>
            <button className="mt-6 border border-gray-800 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-100 transition">
              View All Products
            </button>
          </div>

          {/* Right: Horizontally Scrollable Cards (3.5 visible) */}
          <div className="w-full xl:w-3/5 overflow-hidden">
            <div
              className="flex gap-6 py-2 pl-1"
              style={{
                overflowX: "auto",
                scrollbarWidth: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {[1, 2, 3, 4, 5, 6].map((_, i) => (
                <div
                  key={i}
                  className="w-[calc(100%/3.5)] bg-gray-100 p-6 rounded-2xl flex-shrink-0 hover:shadow-md transition duration-300"
                >
                  <TimerIcon className="mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Our Products Are
                  </h3>
                  <p className="text-sm text-gray-600">
                    Subsidiary of The Company Ltd.
                  </p>
                  <div className="mt-4 text-right">
                    <button className="text-gray-600 hover:text-black text-xl">
                      {<ArrowRight />}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FAQ Section --- */}
        <section className="mt-">
          <Faq />
        </section>
      </section>
    </>
  );
};

export default ProductHero;
