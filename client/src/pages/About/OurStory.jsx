import React from "react";

import aboutHeroImg from "../../assets/images/about-us/hero.png";

const OurStory = () => {
  return (
    <section className="py-20 sm:py-28 bg-white">

      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* Image */}
          <div className="relative">

            <div className="absolute -inset-5 rounded-[2rem] bg-[#A9A7D8]/30 rotate-3" />

            <img
              src={aboutHeroImg}
              alt="Education Saathi team"
              className="relative w-full rounded-[2rem] shadow-xl"
            />

            <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-[#F07C62] text-[#172033] p-5 rounded-2xl shadow-xl max-w-[230px]">

              <span className="text-3xl font-bold">
                Why?
              </span>

              <p className="mt-2 text-sm font-medium">
                Because important decisions deserve better information.
              </p>

            </div>

          </div>

          {/* Content */}
          <div>

            <p className="text-[#F07C62] font-semibold text-sm uppercase tracking-[0.18em]">
              Our story
            </p>

            <h2 className="text-3xl sm:text-5xl font-semibold text-[#172033] mt-4 leading-tight">

              We saw students making
              <span className="text-[#5964B5]">
                {" "}life-changing decisions
              </span>

              with incomplete information.

            </h2>

            <div className="mt-7 space-y-5 text-[#5964B5] text-base sm:text-lg leading-relaxed">

              <p>
                Study abroad guidance was often expensive, confusing and
                difficult to access.
              </p>

              <p>
                Students were making some of the biggest decisions of their
                lives without fully understanding their options.
              </p>

              <p>
                So we built Education Saathi — to make expert guidance,
                reliable information and personalised support more accessible.
              </p>

            </div>

            <div className="mt-9 border-l-4 border-[#F07C62] pl-5">

              <p className="text-xl sm:text-2xl font-semibold text-[#172033] leading-snug">

                “The guidance we wish every student had.”

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default OurStory;