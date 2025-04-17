import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/images/logo.png";

function Footer() {
  return (
    <>
      <footer>
        <div className="container border-t border-gray-200 mx-auto py-6 px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
            <div className="mb-6 lg:mb-0 w-2/3">
              <div className="flex items-center">
                <Image alt="logo" src={logo} width={200} />
              </div>
              <p className="mt-2 text-gray-600 max-w-md">
                This is a digital agency that helps you make better experience
                iaculis cras in.
              </p>
            </div>

            <div className="flex gap-8 grow w-3/5">
              <div className="grow">
                <h2 className="text-xl mb-5">Product</h2>
                <nav className="flex flex-col space-y-2">
                  <Link
                    href="/products/whole-life"
                    className="text-gray-600 hover:text-gray-900 leading-[160%]"
                  >
                    Whole Life
                  </Link>
                  <Link
                    href="/products/term-insurance"
                    className="text-gray-600 hover:text-gray-900 leading-[160%]"
                  >
                    Term Insurance
                  </Link>
                  <Link
                    href="/products/life-insurance"
                    className="text-gray-600 hover:text-gray-900 leading-[160%]"
                  >
                    Life Insurance
                  </Link>
                  <Link
                    href="/products/health-insurance"
                    className="text-gray-600 hover:text-gray-900 leading-[160%]"
                  >
                    Health Insurance
                  </Link>
                </nav>
              </div>

              <div className="grow">
                <h2 className="text-xl font-semibold mb-4">Services</h2>
                <nav className="flex flex-col space-y-2">
                  <Link
                    href="/services/faq"
                    className="text-gray-600 hover:text-gray-900 leading-[160%]"
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/services/contact"
                    className="text-gray-600 hover:text-gray-900 leading-[160%]"
                  >
                    Call Us
                  </Link>
                  <Link
                    href="/services/blog"
                    className="text-gray-600 hover:text-gray-900 leading-[160%]"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/services/support"
                    className="text-gray-600 hover:text-gray-900 leading-[160%]"
                  >
                    Support
                  </Link>
                </nav>
              </div>
              <div className="grow">
                <h2 className="text-xl font-semibold mb-4">Articles</h2>
                <nav className="flex flex-col space-y-2">
                  <Link
                    href="/articles/blogs"
                    className="text-gray-600 hover:text-gray-900 leading-[160%]"
                  >
                    Blogs
                  </Link>
                  <Link
                    href="/articles/news"
                    className="text-gray-600 hover:text-gray-900 leading-[160%]"
                  >
                    News
                  </Link>
                  <Link
                    href="/articles"
                    className="text-gray-600 hover:text-gray-900 leading-[160%]"
                  >
                    Articles
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
