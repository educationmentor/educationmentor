import React from "react";
import image1 from "../../assets/images/home/image1.png";
import smile from "../../assets/images/home/Smile.png";
import scholarship from "../../assets/images/home/scholarship.png";
import JourneyStamp from "../../components/JourneyStamp";

const CareerCounselling = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden" style={{ backgroundColor: "#FBF6EE" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Image side */}
          <div className="relative flex flex-col items-center order-2 lg:order-1">
            <img
              src={image1}
              alt="Graduate student in cap and gown"
              className="w-full max-w-md mx-auto h-[22rem] sm:h-[26rem] md:h-[28rem] rounded-[2rem] object-cover shadow-lg border-4 border-white"
            />

            <div className="absolute -top-6 -right-3 sm:-top-8 sm:-right-8">
              <JourneyStamp label="AID" sub="scholarships" tone="marigold" rotate={9} size={78} />
            </div>

            <div className="absolute -bottom-6 -left-3 sm:-bottom-8 sm:-left-8 bg-white rounded-2xl shadow-lg p-4 max-w-[85vw] sm:max-w-xs flex items-center w-[85vw] sm:w-auto border" style={{ borderColor: "#F0EAD9" }}>
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 flex-shrink-0" style={{ backgroundColor: "#FBF0DC" }}>
                <img src={smile} alt="" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h4 className="font-semibold text-sm" style={{ color: "#14213D" }}>Career counselling</h4>
                <p className="text-xs" style={{ color: "#4B5165" }}>Guidance on every choice, before you commit</p>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="flex flex-col space-y-5 order-1 lg:order-2 lg:pl-6">
            <p className="text-sm sm:text-base font-medium" style={{ color: "#2F6F62" }}>Stage one — admissions</p>
            <h2
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl leading-tight"
              style={{ color: "#14213D", fontFamily: "'Fraunces', 'Georgia', serif", fontWeight: 600 }}
            >
              From career counselling to university admissions
            </h2>
            <p className="text-base sm:text-lg leading-relaxed max-w-lg" style={{ color: "#4B5165" }}>
              Get expert advice at every stage of your journey — choosing the
              right degree, applying to top universities, or preparing
              admission documents. We make the process seamless and
              stress-free.
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
        </div>
      </div>
    </section>
  );
};

export default CareerCounselling;