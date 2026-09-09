import React from "react";
import { ArrowDownRight } from "lucide-react";

import founder1 from "../../assets/images/about-us/team-1.png";
import founder2 from "../../assets/images/about-us/team-2.png";
import founder3 from "../../assets/images/about-us/team-3.png";

const AboutHero = () => {
  const scrollToFounders = () => {
    document
      .getElementById("founders")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#F7F5F0] overflow-hidden">
      
      {/* Background */}
      <div className="absolute -top-40 -right-40 w-[650px] h-[650px] rounded-full bg-[#A9A7D8]/40 blur-[110px]" />

      <div className="absolute -bottom-32 -left-32 w-[450px] h-[450px] rounded-full bg-[#F07C62]/10 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 py-20 sm:py-28 w-full">
        
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#A9A7D8]/40 mb-6">
              
              <span className="w-2 h-2 rounded-full bg-[#F07C62] animate-pulse" />

              <span className="text-sm font-semibold text-[#5964B5]">
                ABOUT EDUCATION SAATHI
              </span>

            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] text-[#172033]">
              
              Global education
              <br />

              shouldn't feel

              <span className="block text-[#5964B5]">
                impossible.
              </span>

            </h1>

            <p className="mt-7 text-base sm:text-lg leading-relaxed text-[#5964B5] max-w-xl">
              Education Saathi helps students understand their options,
              make confident decisions and navigate their education journey
              with the right guidance.
            </p>

            <button
              onClick={scrollToFounders}
              className="group inline-flex items-center gap-3 bg-[#172033] text-[#F7F5F0] px-6 py-3.5 rounded-full font-semibold transition-all duration-300 hover:bg-[#5964B5] hover:-translate-y-1 mt-9"
            >
              Meet the team

              <ArrowDownRight
                size={18}
                className="group-hover:translate-y-1 group-hover:translate-x-1 transition-transform"
              />
            </button>

          </div>

          {/* RIGHT — TEAM COLLAGE */}
          <div className="relative min-h-[520px] sm:min-h-[620px] w-full">

            {/* =========================
                MAIN FOUNDER — FOUNDER 3
            ========================== */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[58%] sm:w-[55%] h-[78%] rounded-[2.5rem] overflow-hidden shadow-2xl z-10 animate-[float_7s_ease-in-out_infinite]">
              
              <img
                src={founder3}
                alt="Founder of Education Saathi"
                className="w-full h-full object-cover"
              />

              {/* subtle image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#172033]/25 via-transparent to-transparent" />

              {/* Main founder label */}
              <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg">
                <p className="text-xs font-semibold text-[#F07C62] uppercase tracking-wide">
                  Founder
                </p>

                <p className="text-[#172033] font-semibold text-sm mt-1">
                  Education Saathi
                </p>
              </div>

            </div>


            {/* =========================
                TEAM MEMBER 1
            ========================== */}
            <div className="absolute top-[12%] left-0 w-[38%] h-[38%] rounded-[2rem] overflow-hidden shadow-xl rotate-[-7deg] z-20 border-[6px] border-[#F7F5F0] animate-[float_6s_ease-in-out_infinite]">
              
              <img
                src={founder1}
                alt="Education Saathi team member"
                className="w-full h-full object-cover"
              />

            </div>


            {/* =========================
                TEAM MEMBER 2
            ========================== */}
            <div className="absolute bottom-[2%] right-0 w-[42%] h-[40%] rounded-[2rem] overflow-hidden shadow-xl rotate-[6deg] z-20 border-[6px] border-[#F7F5F0] animate-[float_8s_ease-in-out_infinite]">
              
              <img
                src={founder2}
                alt="Education Saathi team member"
                className="w-full h-full object-cover"
              />

            </div>


            {/* BELIEF CARD */}
            <div className="absolute bottom-[5%] left-[12%] z-30 bg-white rounded-2xl shadow-xl px-5 py-4 border border-[#A9A7D8]/20 animate-[float_5s_ease-in-out_infinite]">
              
              <p className="text-[#F07C62] font-bold text-xs">
                OUR BELIEF
              </p>

              <p className="text-[#172033] font-semibold mt-1 leading-snug">
                Better guidance.
                <br />
                Better futures.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutHero;