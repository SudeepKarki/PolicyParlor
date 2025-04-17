import React from "react";
import image1 from "@/public/images/lic.png";
import image2 from "@/public/images/union.png";
import image3 from "@/public/images/jyoti.png";
import image4 from "@/public/images/met.png";
import Image from "next/image";

function Testimonials() {
  return (
    <>
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl  text-gray-800 text-center mb-10">
            What Our Client Has to Say
          </h2>
          <div className="flex gap-24">
            <div className="w-1/2 flex flex-col gap-10">
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <div className="mb-6">
                  <Image src={image1} height={44} alt="" />
                </div>

                <blockquote className="mb-6 flex gap-3">
                  <span className="text-4xl">
                    <svg
                      width="16"
                      height="13"
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.9298 2.03037C13.5439 3.15836 12.351 4.48372 12.351 6.00651C13.3679 6.11931 14.2088 6.5188 14.8738 7.20499C15.5387 7.89118 15.8712 8.68546 15.8712 9.58785C15.8712 10.5466 15.5485 11.355 14.9031 12.013C14.2577 12.671 13.4461 13 12.4683 13C11.3731 13 10.4246 12.5723 9.62279 11.7169C8.82096 10.8615 8.42005 9.82285 8.42005 8.60087C8.42005 4.93491 10.5517 2.06798 14.8151 0L15.9298 2.03037ZM7.50978 2.03037C5.10429 3.15836 3.90156 4.48372 3.90156 6.00651C4.93808 6.11931 5.78878 6.5188 6.45372 7.20499C7.11865 7.89118 7.45111 8.68546 7.45111 9.58785C7.45111 10.5466 7.12354 11.355 6.46838 12.013C5.81323 12.671 4.99675 13 4.0189 13C2.92372 13 1.98012 12.5723 1.18807 11.7169C0.39602 10.8615 0 9.82285 0 8.60087C0 4.93491 2.12188 2.06798 6.36571 0L7.50978 2.03037Z"
                        fill="#FFCC05"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="text-gray-700 text-lg mb-5">
                      To quickly start my startup landing page design, I was
                      looking for a landing page UI Kit. Landify is one of the
                      best landing page UI kit I have come across. It’s so
                      flexible, well organised and easily editable.
                    </p>
                    <h4 className="font-bold text-gray-900 text-lg">
                      Suman Silwal
                    </h4>
                    <p className="text-gray-600">
                      Vice President, Life Insurance
                    </p>
                  </div>
                </blockquote>
              </div>

              <div className="bg-green-500 rounded-3xl p-8 text-white">
                <div className="mb-6">
                  <Image src={image2} height={44} alt="" />
                </div>

                <blockquote className="mb-6 flex gap-3">
                  <span className="text-4xl">
                    <svg
                      width="16"
                      height="13"
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.9298 2.03037C13.5439 3.15836 12.351 4.48372 12.351 6.00651C13.3679 6.11931 14.2088 6.5188 14.8738 7.20499C15.5387 7.89118 15.8712 8.68546 15.8712 9.58785C15.8712 10.5466 15.5485 11.355 14.9031 12.013C14.2577 12.671 13.4461 13 12.4683 13C11.3731 13 10.4246 12.5723 9.62279 11.7169C8.82096 10.8615 8.42005 9.82285 8.42005 8.60087C8.42005 4.93491 10.5517 2.06798 14.8151 0L15.9298 2.03037ZM7.50978 2.03037C5.10429 3.15836 3.90156 4.48372 3.90156 6.00651C4.93808 6.11931 5.78878 6.5188 6.45372 7.20499C7.11865 7.89118 7.45111 8.68546 7.45111 9.58785C7.45111 10.5466 7.12354 11.355 6.46838 12.013C5.81323 12.671 4.99675 13 4.0189 13C2.92372 13 1.98012 12.5723 1.18807 11.7169C0.39602 10.8615 0 9.82285 0 8.60087C0 4.93491 2.12188 2.06798 6.36571 0L7.50978 2.03037Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="text-white text-lg mb-5">
                      this saved our time in designing my company page.
                    </p>
                    <h4 className="font-bold text-white text-lg">
                      Layel Silwal
                    </h4>
                    <p className="text-white opacity-90">CEO, Jyoti Life</p>
                  </div>
                </blockquote>
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-10">
              <div className="bg-green-500 rounded-3xl p-8 text-white">
                <div className="mb-6">
                  <Image src={image3} height={44} alt="" />
                </div>

                <blockquote className="mb-6 flex gap-3">
                  <span className="text-4xl">
                    <svg
                      width="16"
                      height="13"
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.9298 2.03037C13.5439 3.15836 12.351 4.48372 12.351 6.00651C13.3679 6.11931 14.2088 6.5188 14.8738 7.20499C15.5387 7.89118 15.8712 8.68546 15.8712 9.58785C15.8712 10.5466 15.5485 11.355 14.9031 12.013C14.2577 12.671 13.4461 13 12.4683 13C11.3731 13 10.4246 12.5723 9.62279 11.7169C8.82096 10.8615 8.42005 9.82285 8.42005 8.60087C8.42005 4.93491 10.5517 2.06798 14.8151 0L15.9298 2.03037ZM7.50978 2.03037C5.10429 3.15836 3.90156 4.48372 3.90156 6.00651C4.93808 6.11931 5.78878 6.5188 6.45372 7.20499C7.11865 7.89118 7.45111 8.68546 7.45111 9.58785C7.45111 10.5466 7.12354 11.355 6.46838 12.013C5.81323 12.671 4.99675 13 4.0189 13C2.92372 13 1.98012 12.5723 1.18807 11.7169C0.39602 10.8615 0 9.82285 0 8.60087C0 4.93491 2.12188 2.06798 6.36571 0L7.50978 2.03037Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="text-white text-lg mb-5">
                      I used landify and created a landing page for my startup
                      within a week. The Landify UI Kit is simple and highly
                      intuitive, so anyone can use it.
                    </p>
                    <h4 className="font-bold text-white text-lg">
                      Arun Shrestha
                    </h4>
                    <p className="text-white opacity-90">Co-Founder, Union</p>
                  </div>
                </blockquote>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <div className="mb-6">
                  <Image src={image4} height={44} alt="" />
                </div>

                <blockquote className="mb-6 flex gap-3">
                  <span className="text-4xl">
                    <svg
                      width="16"
                      height="13"
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.9298 2.03037C13.5439 3.15836 12.351 4.48372 12.351 6.00651C13.3679 6.11931 14.2088 6.5188 14.8738 7.20499C15.5387 7.89118 15.8712 8.68546 15.8712 9.58785C15.8712 10.5466 15.5485 11.355 14.9031 12.013C14.2577 12.671 13.4461 13 12.4683 13C11.3731 13 10.4246 12.5723 9.62279 11.7169C8.82096 10.8615 8.42005 9.82285 8.42005 8.60087C8.42005 4.93491 10.5517 2.06798 14.8151 0L15.9298 2.03037ZM7.50978 2.03037C5.10429 3.15836 3.90156 4.48372 3.90156 6.00651C4.93808 6.11931 5.78878 6.5188 6.45372 7.20499C7.11865 7.89118 7.45111 8.68546 7.45111 9.58785C7.45111 10.5466 7.12354 11.355 6.46838 12.013C5.81323 12.671 4.99675 13 4.0189 13C2.92372 13 1.98012 12.5723 1.18807 11.7169C0.39602 10.8615 0 9.82285 0 8.60087C0 4.93491 2.12188 2.06798 6.36571 0L7.50978 2.03037Z"
                        fill="#248fd2"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="text-gray-700 text-lg">
                      This saved our time in designing my company page.
                    </p>

                    <h4 className="font-bold text-gray-900 text-lg">
                      Kristin Watson
                    </h4>
                    <p className="text-gray-600">Co-Founder, Met Life</p>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
