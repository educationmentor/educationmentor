import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import ConsultationForm from "../../components/ConsultationForm";

const AboutCTA = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  return (
    <>
      <section className="relative py-20 sm:py-28 bg-[#172033] overflow-hidden">

        {/* Background */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-[#5964B5]/30 blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-5 sm:px-6 text-center">

          <p className="text-[#F07C62] font-semibold text-sm uppercase tracking-[0.18em]">
            Your next chapter
          </p>

          <h2 className="text-4xl sm:text-6xl font-semibold text-[#F7F5F0] mt-5 leading-tight">
            Not sure where
            <br />
            to begin?
          </h2>

          <p className="text-[#A9A7D8] text-lg mt-6 max-w-xl mx-auto leading-relaxed">
            That's exactly why Education Saathi exists.
            Start with a conversation and figure out your next step.
          </p>

          <button
            onClick={() => setShow(true)}
            className="group inline-flex items-center gap-3 bg-[#F07C62] text-[#172033] px-7 py-4 rounded-full font-semibold mt-9 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Talk to a mentor

            <ArrowRight
              size={19}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>

        </div>

      </section>

      {/* Consultation Popup */}
      {show && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
          
          <ConsultationForm
            onClose={() => setShow(false)}
          />

        </div>
      )}
    </>
  );
};

export default AboutCTA;