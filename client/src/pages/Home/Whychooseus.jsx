import React, { useState } from "react";
import {
  Users,
  Compass,
  ShieldCheck,
  Globe2,
  Plane,
  ArrowRight,
} from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Personal Guidance",
    text: "Real people guiding your real decisions.",
  },
  {
    icon: Compass,
    title: "Right Direction",
    text: "Find opportunities that actually fit you.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Support",
    text: "Clear guidance without confusion.",
  },
  {
    icon: Globe2,
    title: "Global Opportunities",
    text: "Explore education beyond boundaries.",
  },
  {
    icon: Plane,
    title: "Beyond Admission",
    text: "Support even after your offer letter.",
  },
];

const WhyChooseUs = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 sm:py-28 bg-[#F7F5F0] overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">

          <div>
            <p className="text-sm font-semibold tracking-wider text-[#F07C62] uppercase">
              Why Education Saathi
            </p>

            <h2 className="mt-3 text-3xl sm:text-5xl font-semibold text-[#172033] max-w-2xl leading-tight">
              Big decisions need the right{" "}
              <span className="text-[#5964B5]">
                Saathi.
              </span>
            </h2>
          </div>

          <p className="text-[#172033]/60 max-w-md">
            Swipe through what makes your journey simpler.
          </p>

        </div>

        {/* Cards */}
        <div className="flex gap-5 overflow-x-auto pb-5 scrollbar-hide">

          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isActive = active === index;

            return (
              <button
                key={reason.title}
                onMouseEnter={() => setActive(index)}
                onClick={() => setActive(index)}
                className={`min-w-[270px] sm:min-w-[300px] text-left p-7 rounded-[2rem] transition-all duration-500 ${
                  isActive
                    ? "bg-[#172033] text-white scale-[1.02]"
                    : "bg-white text-[#172033] hover:-translate-y-2"
                }`}
              >

                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-7 ${
                    isActive
                      ? "bg-[#F07C62] text-[#172033]"
                      : "bg-[#A9A7D8]/40 text-[#5964B5]"
                  }`}
                >
                  <Icon size={27} />
                </div>

                <h3 className="text-xl font-semibold">
                  {reason.title}
                </h3>

                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    isActive
                      ? "text-white/70"
                      : "text-[#172033]/60"
                  }`}
                >
                  {reason.text}
                </p>

                <ArrowRight
                  size={20}
                  className={`mt-6 ${
                    isActive
                      ? "text-[#F07C62]"
                      : "text-[#5964B5]"
                  }`}
                />

              </button>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;