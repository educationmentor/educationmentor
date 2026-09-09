import React, { useState } from "react";
import {
  Search,
  GraduationCap,
  FileText,
  FileCheck,
  PlaneTakeoff,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    text: "Understand your goals and possibilities.",
    icon: Search,
  },
  {
    number: "02",
    title: "Choose",
    text: "Find the course and university for you.",
    icon: GraduationCap,
  },
  {
    number: "03",
    title: "Apply",
    text: "Get your application right from the start.",
    icon: FileText,
  },
  {
    number: "04",
    title: "Prepare",
    text: "Navigate documents and visa support.",
    icon: FileCheck,
  },
  {
    number: "05",
    title: "Begin",
    text: "Start your next chapter confidently.",
    icon: PlaneTakeoff,
  },
];

const StudentJourney = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 sm:py-28 bg-[#172033] relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#5964B5]/20 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[#F07C62] font-semibold text-sm uppercase tracking-wider">
            Your journey
          </p>

          <h2 className="mt-3 text-3xl sm:text-5xl font-semibold text-[#F7F5F0]">
            One journey.
            <span className="text-[#A9A7D8]">
              {" "}Every step covered.
            </span>
          </h2>
        </div>

        {/* Journey Steps */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-6">

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = active === index;

            return (
              <button
                key={step.title}
                onMouseEnter={() => setActive(index)}
                onClick={() => setActive(index)}
                className="relative text-center group"
              >

                {/* Connecting line */}
                {index !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-white/10">

                    <div
                      className="h-full bg-[#F07C62] transition-all duration-700"
                      style={{
                        width: active > index ? "100%" : "0%",
                      }}
                    />

                  </div>
                )}

                {/* Icon */}
                <div
                  className={`relative z-10 mx-auto w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isActive
                      ? "bg-[#F07C62] text-[#172033] scale-110 shadow-xl"
                      : "bg-white/10 text-[#A9A7D8] group-hover:bg-[#5964B5] group-hover:text-white"
                  }`}
                >
                  <Icon size={30} strokeWidth={2} />
                </div>

                {/* Content */}
                <div className="mt-6">

                  <span className="text-xs text-[#F07C62] font-bold tracking-wider">
                    {step.number}
                  </span>

                  <h3 className="text-xl font-semibold text-[#F7F5F0] mt-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#A9A7D8] mt-3 leading-relaxed">
                    {step.text}
                  </p>

                </div>

              </button>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default StudentJourney;