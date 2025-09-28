import React from "react";
import mentorsGrid from "../assets/images/image7.png";
import avatar5 from "../assets/images/avatar5.png";

const Mentorship = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-green-200 rounded-full opacity-30"></div>
      <div className="absolute top-20 right-20 w-24 h-24 bg-pink-200 rounded-full opacity-40"></div>

      {/* Wave pattern */}
      <div className="absolute bottom-20 left-10">
        <svg
          width="100"
          height="60"
          viewBox="0 0 100 60"
          className="text-blue-300 opacity-50"
        >
          <path
            d="M0 30 Q25 10 50 30 T100 30"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M0 40 Q25 20 50 40 T100 40"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M0 50 Q25 30 50 50 T100 50"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Dot pattern */}
      <div className="absolute bottom-40 right-32 w-32 h-32 opacity-20">
        <div className="grid grid-cols-8 gap-2">
          {[...Array(64)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-purple-400 rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {" "}
          {/* Search icon floating button */}
          <div className="absolute top-40 left-170 z-20">
            <div className="w-20 h-20  bg-[#6E29F5] rounded-lg flex items-center justify-center shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </div>
          </div>
          {/* Left Side - Mentors Grid */}
          <div className="relative flex flex-col items-center">
            {/* 1000+ Mentors text */}
            <div className="mb-4 w-full flex justify-center">
              <span className="text-gray-400 font-semibold text-xl text-center">
                1000+ Mentors across the globe
              </span>
            </div>
            {/* Mentors Grid */}
            <div className="relative w-full flex justify-center">
              <img
                src={mentorsGrid}
                alt="Mentors Group"
                className="w-full max-w-xl rounded-2xl"
              />
              {/* Floating Start Preparing Card */}
              <div className="absolute left-0 -bottom-16 bg-white rounded-2xl shadow-xl p-6 max-w-xs border border-gray-100 z-10 flex flex-col">
                <span className="font-bold text-lg text-gray-900 mb-2">
                  “Start Preparing”
                </span>
                <div className="flex items-center space-x-3">
                  <img
                    src={avatar5}
                    alt="Sakshi"
                    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow"
                  />
                  <div>
                    <span className="font-semibold text-gray-800 text-sm">
                      Sakshi
                    </span>
                    <div className="text-xs text-gray-500">
                      University of Berlin
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side - Content */}
          <div
            className="flex flex-col space-y-4 mt-8 sm:space-y-6 sm:mt-10 lg:pl-8 w-full max-w-2xl mx-auto lg:mx-0 px-2 xs:px-4 sm:px-0"
          >
            <h1
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-indigo-900 leading-tight text-center lg:text-left"
            >
              One on One Mentorship
              <br />
              <span className="text-indigo-700">from mentors across globe</span>
            </h1>

            <p
              className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed text-center lg:text-left"
            >
              Connect with mentors who've studied and worked at the universities
              and companies you dream about. Learn from their experiences, gain
              insider insights, and make informed decisions for your future.
            </p>

            <div className="pt-2 sm:pt-4 flex justify-center lg:justify-start">
              <button
                className="bg-white text-purple-600 px-5 xs:px-8 sm:px-10 py-2 xs:py-3 sm:py-4 rounded-full font-semibold border-2 border-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-lg text-xs xs:text-sm sm:text-base"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentorship;
