
import React from "react";

import Ellipse1 from "../../assets/images/home/Ellipse1.png";
import ProfileIcon from "../../assets/images/home/Smile.png";
import JourneyIcon from "../../assets/images/home/calendar.png";

const steps = [
  {
    n: "01",
    title: "Explore your options",
    text: "Discover courses, universities and destinations that match your interests, goals and future plans.",
    icon: ProfileIcon,
  },
  {
    n: "02",
    title: "Get the right guidance",
    text: "Connect with experienced counsellors and mentors who help you understand your best options.",
    icon: Ellipse1,
  },
  {
    n: "03",
    title: "Move forward confidently",
    text: "From applications to admissions and beyond, take your next step with clarity and confidence.",
    icon: JourneyIcon,
  },
];

const Feature = () => {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-28"
      style={{ backgroundColor: "#F7F5F0" }}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-2xl text-center sm:mb-20">
          <p
            className="mb-3 text-sm font-semibold tracking-[0.15em]"
            style={{ color: "#5964B5" }}
          >
            HOW IT WORKS
          </p>

          <h2
            className="text-3xl leading-tight sm:text-5xl"
            style={{
              color: "#172033",
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 600,
            }}
          >
            From where you are
            <br />

            to where you want to go.
          </h2>

          <p
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed sm:text-lg"
            style={{ color: "#667085" }}
          >
            Your education journey does not need to feel complicated.
            Start with the right information and move forward one
            confident step at a time.
          </p>
        </div>

        {/* Steps */}

        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">

          {/* Connecting line */}

          <div
            className="absolute left-[16%] right-[16%] top-8 hidden border-t-2 border-dashed md:block"
            style={{ borderColor: "#A9A7D8" }}
          />

          {steps.map((step, index) => (
            <div
              key={step.n}
              className="group relative z-10 text-center"
            >
              {/* Number */}

              <div
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-[6px] font-bold text-white transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor:
                    index === 1 ? "#F07C62" : "#5964B5",
                  borderColor: "#F7F5F0",
                  boxShadow: "0 10px 30px rgba(89,100,181,0.18)",
                }}
              >
                {step.n}
              </div>

              {/* Icon */}

              <div
                className="mx-auto mt-8 flex h-20 w-20 items-center justify-center rounded-3xl transition-all duration-300 group-hover:-translate-y-2"
                style={{
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 12px 35px rgba(23,32,51,0.08)",
                }}
              >
                <img
                  src={step.icon}
                  alt=""
                  className="h-12 w-12 object-contain"
                />
              </div>

              <h3
                className="mt-6 text-xl font-semibold"
                style={{ color: "#172033" }}
              >
                {step.title}
              </h3>

              <p
                className="mx-auto mt-3 max-w-xs text-sm leading-relaxed sm:text-base"
                style={{ color: "#667085" }}
              >
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;

