

import React from "react";
import mentorsGrid from "../../assets/images/home/image7.png";
import avatar5 from "../../assets/images/home/avatar5.png";
import JourneyStamp from "../../components/JourneyStamp";
 
const Mentorship = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden" style={{ backgroundColor: "#FBF6EE" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Image side */}
          <div className="relative flex flex-col items-center order-2 lg:order-1">
            <p className="mb-4 text-sm sm:text-base font-medium" style={{ color: "#2F6F62" }}>
              1000+ mentors across the globe
            </p>
 
            <div className="relative w-full flex justify-center">
              <img
                src={mentorsGrid}
                alt="Mentors group"
                className="w-full max-w-xl rounded-[2rem] shadow-lg border-4 border-white"
              />
              <div className="absolute -top-5 -right-2 sm:-top-6 sm:-right-6">
                <JourneyStamp label="1K+" sub="mentors" tone="marigold" rotate={7} size={72} />
              </div>
 
              <div className="absolute left-0 -bottom-10 sm:-bottom-14 bg-white rounded-2xl shadow-lg p-5 max-w-xs border" style={{ borderColor: "#F0EAD9" }}>
                <span className="block text-base font-semibold mb-2" style={{ color: "#14213D", fontFamily: "'Fraunces', 'Georgia', serif" }}>
                  "Start preparing"
                </span>
                <div className="flex items-center space-x-3">
                  <img src={avatar5} alt="Sakshi" className="w-10 h-10 rounded-full object-cover border-2 border-white shadow" />
                  <div>
                    <span className="font-semibold text-sm" style={{ color: "#14213D" }}>Sakshi</span>
                    <div className="text-xs" style={{ color: "#4B5165" }}>University of Berlin</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
 
          {/* Content side */}
          <div className="flex flex-col space-y-5 order-1 lg:order-2 mt-10 lg:mt-0 lg:pl-6">
            <p className="text-sm sm:text-base font-medium" style={{ color: "#2F6F62" }}>Throughout the journey</p>
            <h2
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl leading-tight"
              style={{ color: "#14213D", fontFamily: "'Fraunces', 'Georgia', serif", fontWeight: 600 }}
            >
              One-on-one mentorship from people who've done it
            </h2>
            <p className="text-base sm:text-lg leading-relaxed max-w-lg" style={{ color: "#4B5165" }}>
              Connect with mentors who've studied and worked at the
              universities and companies you're aiming for. Learn from their
              experience, not just the brochure.
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
 
export default Mentorship;
 
