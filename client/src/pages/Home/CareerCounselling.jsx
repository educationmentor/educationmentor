import React from "react";
import image1 from "../../assets/images/home/image1.png";
import smile from "../../assets/images/home/Smile.png";
import home from "../../assets/images/home/home.png";
import ornament from "../../assets/images/home/ornament.jpg";

const CareerCounselling = () => {
  return (
    <section className="py-10 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-8 left-6 sm:top-20 sm:left-40 w-32 h-32 sm:w-44 sm:h-44 opacity-20">
        <div className="grid grid-cols-6 grid-rows-8 gap-2">
          {[...Array(64)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-red-400 rounded-full"></div>
          ))}
        </div>
      </div>
      <img
        src={ornament}
        alt="Decorative"
        className="absolute top-4 right-6 sm:top-10 sm:right-3 w-10 h-10 sm:w-8 sm:h-8 object-cover rounded-full pointer-events-none select-none"
        style={{ zIndex: 1 }}
      />
   
      <img
        src={ornament}
        alt="Decorative"
        className="absolute top-4 right-4 sm:top-10 sm:right-20 w-20 h-20 sm:w-32 sm:h-32 object-cover rounded-full pointer-events-none select-none"
        style={{ zIndex: 1 }}
      />
      <div className="absolute bottom-10 right-6 sm:bottom-20 sm:right-40 w-20 h-20 sm:w-32 sm:h-32 bg-pink-200 rounded-full opacity-40"></div>
      <div className="absolute bottom-4 left-1/4 sm:bottom-10 sm:left-1/3 w-16 h-16 sm:w-24 sm:h-24 bg-blue-200 rounded-full opacity-30"></div>

      <div className="max-w-7xl mx-auto px-2 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          {/* Left Side - Image with Floating Cards */}
          <div className="relative flex flex-col items-center">
            <img
              src={image1}
              alt="Graduate student in cap and gown"
              className="w-full max-w-md mx-auto h-[25rem] sm:h-[26rem] md:h-[30rem] lg:h-[30rem] xl:h-[28rem] bg-gradient-to-br from-green-200 to-blue-300 rounded-2xl object-cover shadow-xl"
            />

            {/* Accommodation Card */}
            <div className="absolute -top-8 pe-6 -right-4 sm:-top-10 sm:-right-10 bg-white rounded-xl shadow-lg p-3 sm:p-4 max-w-[90vw] sm:max-w-xs flex items-center w-[90vw] sm:w-auto">
              <div className="flex items-center justify-center mr-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-200 rounded-full flex items-center justify-center">
                  <img
                    src={home}
                    alt="Accommodation Icon"
                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                  />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-xs sm:text-sm">
                  Accommodation
                </h4>
                <p className="text-[10px] sm:text-xs text-gray-600">
                  The educational mentor will help you with accommodation
                </p>
              </div>
            </div>

            {/* Career Counselling Card */}
            <div className="absolute ps-6 -bottom-8 -left-4 sm:-bottom-8 sm:-left-10 bg-white rounded-xl shadow-lg p-3 sm:p-4 max-w-[90vw] sm:max-w-xs flex items-center w-[90vw] sm:w-auto">
              <div className="flex items-center justify-center mr-3">
                <div className="sm:w-14 sm:h-14 rounded-full flex items-center justify-center">
                  <img src={smile} alt="smile" className="w-12 h-12  sm:w-12 sm:h-12" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-xs sm:text-sm">
                  Career Counselling
                </h4>
                <p className="text-[10px] sm:text-xs text-gray-600">
                  We help you with every aspect about your career
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            className="flex flex-col space-y-4 mt-8 sm:space-y-6 sm:mt-10 lg:pl-8 w-full max-w-2xl mx-auto lg:mx-0 px-2 xs:px-4 sm:px-0"
          >
            <h1
              className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-900 leading-tight text-center lg:text-left"
            >
              From Career Counselling
              <br />
              <span className="text-indigo-700">to University Admissions</span>
            </h1>
            <p
              className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed text-center lg:text-left"
            >
              Get expert advice at every stage of your journey—whether it's
              choosing the right degree, applying to top universities, or
              preparing admission documents. We make the process seamless and
              stress-free.
            </p>
            <div className="pt-2 sm:pt-4 flex justify-center lg:justify-start">
              <button
                className="bg-white text-indigo-600 px-5 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-4 rounded-full font-semibold border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-lg text-xs xs:text-sm sm:text-base"
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

export default CareerCounselling;
