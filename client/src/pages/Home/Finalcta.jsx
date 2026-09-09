import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const FinalCTA = ({ onConsultation }) => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#172033] overflow-hidden">

      {/* Background shapes */}
      <div className="absolute w-[400px] h-[400px] bg-[#5964B5] rounded-full blur-[150px] opacity-40 top-[-200px] left-[10%]" />

      <div className="absolute w-[350px] h-[350px] bg-[#F07C62] rounded-full blur-[150px] opacity-20 bottom-[-200px] right-[10%]" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-6 text-center">

        <div className="w-14 h-14 mx-auto rounded-2xl bg-[#F07C62] flex items-center justify-center text-[#172033] rotate-6 mb-7">
          <Sparkles size={25} />
        </div>

        <h2 className="text-4xl sm:text-6xl font-semibold leading-tight text-[#F7F5F0]">

          Your future doesn't need
          <span className="block text-[#F07C62]">
            to be confusing.
          </span>

        </h2>

        <p className="mt-6 text-lg text-[#A9A7D8] max-w-xl mx-auto">

          Let's figure out your next step together.

        </p>

        <button
          onClick={onConsultation}
          className="group mt-9 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#F07C62] text-[#172033] font-semibold hover:scale-105 transition-all duration-300 shadow-xl"
        >
          Talk to an Education Expert

          <ArrowRight
            size={19}
            className="group-hover:translate-x-1 transition-transform"
          />

        </button>

      </div>

    </section>
  );
};

export default FinalCTA;