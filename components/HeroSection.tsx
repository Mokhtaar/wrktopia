import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="bg-[#8360C31A] w-screen">
      <div className="px-4 py-12 sm:px-24">
        <Navbar />
        <div className="relative overflow-hidden isolate">
          <div className="pt-10 pb-24 flex flex-col mx-auto sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:py-9">
            <div className="px-6 lg:px-10 lg:pt-4">
              <div className="max-w-2xl mx-auto">
                <div className="max-w-xl">
                  <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl sm:leading-[75px]">
                    SAY HELLO TO WRKTOPIA
                  </h1>
                  <p className="mt-6 text-2xl leading-9 text-gray-600 ">
                    Welcome to Wrktopia, the ultimate destination for clients
                    and freelancers seeking a seamless and efficient way to
                    collaborate. Our mission is to empower freelancers and
                    businesses alike by providing a user-friendly platform that
                    streamlines the process o hiring and finding work.
                  </p>
                  {/* <div className="flex items-center mt-10 gap-x-6">
                    <a
                      href="#"
                      className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 btn focus-visible:outline-indigo-600"
                    >
                      Get started
                    </a>
                    <div className="w-full sm:max-w-sm">
                      <label className="sr-only">Search</label>
                      <div className="relative">
                        <div className="absolute top-1 sm:top-2 right-[13%] pointer-events-none">
                          <svg
                            className="h-7 w-7 sm:w-12 sm:h-12 p-1 text-white rounded-full bg-[#2EBF91]"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <input
                          id="search"
                          name="search"
                          className="block w-full rounded-md border-0 bg-white py-1.5 pr-9 p-4 sm:pr-14 text-gray-900 ring-1 ring-inset ring-gray-300 sm:h-16 placeholder:text-base sm:placeholder:text-lg placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                          placeholder="BROWSE PORTFOLIOS"
                          type="search"
                        />
                      </div>
                    </div>
                  </div> */}
                  <div className="flex items-center mt-10 gap-x-2 sm:gap-x-6">
                    <button
                      type="button"
                      className="btn tracking-wide sm:w-64 w-36 p-2 text-sm sm:px-6 sm:py-4 sm:text-2xl font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get Started
                    </button>
                    <div className="w-full sm:max-w-sm">
                      <label className="sr-only">Search</label>
                      <div className="relative">
                        <div className="absolute top-1 sm:top-2 right-1 pointer-events-none">
                          <svg
                            className="h-7 w-7 sm:w-12 sm:h-12 p-1 text-white rounded-full bg-[#2EBF91]"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <input
                          id="search"
                          name="search"
                          className="block w-full rounded-md border-0 bg-white py-1.5 pr-9 p-4 sm:pr-14 text-gray-900 ring-1 ring-inset ring-gray-300 sm:h-16 placeholder:text-base sm:placeholder:text-lg placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
                          placeholder="BROWSE PORTFOLIOS"
                          type="search"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-0 order-first sm:order-last sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0">
              {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
              <img
                className="rotate-90 sm:w-[730px] sm:h-[730px] sm:object-fill"
                src="/heroImage.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
