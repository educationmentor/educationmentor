import React from "react";
import {
  ArrowRight,
  GraduationCap,
  Globe2,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import heroImage from "../../assets/images/home/image1.png";

const Hero = ({ onConsultation }) => {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-[#172033] flex items-center">

      {/* Background glow */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#5964B5] rounded-full blur-[150px] opacity-40 animate-pulseSlow" />

      <div className="absolute bottom-[-20%] left-[-10%] w-[450px] h-[450px] bg-[#F07C62] rounded-full blur-[160px] opacity-20" />

      {/* Decorative circles */}
      <div className="absolute top-28 left-[5%] w-3 h-3 rounded-full bg-[#F07C62] animate-float" />
      
      <div className="absolute bottom-24 right-[8%] w-5 h-5 rounded-full border border-[#A9A7D8] animate-floatSlow" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 w-full relative z-10 pt-28 pb-16">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-2xl">

            {/* Small badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-[#F7F5F0] text-sm mb-7 animate-slideUp">
              <Sparkles size={16} className="text-[#F07C62]" />
              Your trusted MBBS guidance partner
            </div>

            {/* Main Heading */}
            <h1 className="text-[2.8rem] sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-[#F7F5F0] animate-slideUp delay-100">
              Your MBBS Dream
              <span className="block text-[#F07C62] mt-2">
                Deserves a Global Beginning.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 text-base sm:text-lg md:text-xl leading-relaxed text-[#A9A7D8] max-w-xl animate-slideUp delay-200">
              Guiding future doctors towards the right universities and
              opportunities worldwide — with clarity, confidence, and support
              at every step of your journey.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mt-9 animate-slideUp delay-300">

              <button
                onClick={onConsultation}
                className="group px-7 py-4 rounded-full bg-[#F07C62] text-[#172033] font-semibold flex items-center justify-center gap-3 hover:scale-[1.03] transition-all duration-300 shadow-xl shadow-[#F07C62]/20"
              >
                Start Your MBBS Journey

                <ArrowRight
                  size={19}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button className="px-7 py-4 rounded-full border border-white/20 text-[#F7F5F0] font-medium hover:bg-white hover:text-[#172033] transition-all duration-300">
                Explore MBBS Options
              </button>

            </div>

            {/* Trust points */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-9 text-sm text-[#F7F5F0]/80 animate-slideUp delay-500">

              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#F07C62]" />
                Expert MBBS Guidance
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#F07C62]" />
                University Selection Support
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#F07C62]" />
                Global Opportunities
              </div>

            </div>

          </div>


          {/* RIGHT VISUAL */}
          <div className="relative flex justify-center animate-heroVisual">

            {/* Main image glow */}
            <div className="absolute inset-0 bg-[#5964B5] blur-[100px] opacity-40 rounded-full" />

            <div className="relative w-full max-w-[500px]">

              {/* Main image */}
              <div className="relative rounded-[2.5rem] overflow-hidden border border-white/15 shadow-2xl">

                <img
                  src={heroImage}
                  alt="Student beginning their MBBS journey abroad"
                  className="w-full h-[480px] sm:h-[560px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#172033]/50 via-transparent to-transparent" />

              </div>


              {/* Floating Card 1 */}
              <div className="absolute -left-6 sm:-left-14 top-12 bg-[#F7F5F0] rounded-2xl p-4 sm:p-5 shadow-2xl animate-float">

                <div className="w-11 h-11 rounded-xl bg-[#F07C62]/20 flex items-center justify-center mb-3">

                  <GraduationCap
                    size={23}
                    className="text-[#F07C62]"
                  />

                </div>

                <p className="text-xs text-[#5964B5] font-medium">
                  PLAN YOUR FUTURE
                </p>

                <h3 className="font-semibold text-[#172033] mt-1">
                  MBBS Guidance
                </h3>

              </div>


              {/* Floating Card 2 */}
              <div className="absolute -right-5 sm:-right-12 bottom-16 bg-[#5964B5] text-white rounded-2xl p-5 shadow-2xl animate-floatReverse">

                <Globe2 size={26} className="text-[#F07C62] mb-3" />

                <p className="text-xs text-white/70">
                  EXPLORE
                </p>

                <h3 className="text-lg font-semibold">
                  MBBS Abroad
                </h3>

              </div>


              {/* Badge */}
              <div className="absolute right-10 -top-5 w-20 h-20 rounded-full bg-[#F07C62] flex items-center justify-center text-center text-xs font-bold text-[#172033] rotate-12 animate-spinSlow">

                FUTURE
                <br />
                DOCTOR

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;