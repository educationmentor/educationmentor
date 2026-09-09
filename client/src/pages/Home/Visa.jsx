import React from "react";
import image2 from "../../assets/images/home/image2.png";
import Frame from "../../assets/images/home/Frame.png";
import JourneyStamp from "../../components/JourneyStamp";

const Visa = () => {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Content side */}
          <div className="flex flex-col space-y-5 lg:pr-6">
            <p className="text-sm sm:text-base font-medium" style={{ color: "#2F6F62" }}>Stage two — visa &amp; travel</p>
            <h2
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl leading-tight"
              style={{ color: "#14213D", fontFamily: "'Fraunces', 'Georgia', serif", fontWeight: 600 }}
            >
              From visa consultancy to accommodation
            </h2>
            <p className="text-base sm:text-lg leading-relaxed max-w-lg" style={{ color: "#4B5165" }}>
              Beyond admissions, we guide you through visa applications,
              travel planning and securing accommodation — so the move itself
              never becomes the hard part.
            </p>
            <div className="pt-2">
              <button
                className="px-7 py-3 sm:py-4 rounded-full font-semibold border-2 transition-all duration-300 text-sm sm:text-base"
                style={{ borderColor: "#14213D", color: "#14213D" }}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = "#14213D"; e.currentTarget.style.color = "#fff"; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#14213D"; }}
              >
                Get started
              </button>
            </div>
          </div>

          {/* Image side */}
          <div className="relative flex flex-col items-center">
            <img
              src={image2}
              alt="Happy graduate student in cap and gown"
              className="w-full max-w-md mx-auto h-[22rem] sm:h-96 rounded-[2rem] object-cover shadow-lg border-4 border-white"
            />

            <div className="absolute -top-6 -left-3 sm:-top-8 sm:-left-8">
              <JourneyStamp label="VISA" sub="ready" tone="teal" rotate={-8} size={78} />
            </div>

            <div className="absolute -bottom-6 -right-3 sm:-bottom-8 sm:-right-8 bg-white rounded-2xl shadow-lg p-4 max-w-[85vw] sm:max-w-xs border" style={{ borderColor: "#F0EAD9" }}>
              <div className="flex items-center space-x-3">
                <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#E9F1EF" }}>
                  <img src={Frame} alt="" className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm" style={{ color: "#14213D" }}>Visa help?</h4>
                  <p className="text-xs" style={{ color: "#4B5165" }}>We handle the paperwork with you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visa;