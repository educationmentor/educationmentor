import React from "react";
import {
  GraduationCap,
  Globe2,
  HeartHandshake,
} from "lucide-react";

const missions = [
  {
    number: "01",
    title: "Make guidance accessible",
    text: "High-quality education guidance should not only be available to students who can afford premium services.",
    icon: GraduationCap,
  },

  {
    number: "02",
    title: "Make choices clearer",
    text: "Students deserve reliable information before making important decisions about their future.",
    icon: Globe2,
  },

  {
    number: "03",
    title: "Stay with students",
    text: "Support should not disappear once an application is submitted.",
    icon: HeartHandshake,
  },
];

const VisionMission = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F7F5F0]">

      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28">

          {/* Vision */}
          <div>

            <p className="text-[#F07C62] font-semibold text-sm uppercase tracking-[0.18em]">
              Our vision
            </p>

            <h2 className="text-4xl sm:text-6xl font-semibold leading-tight text-[#172033] mt-5">

              A world where

              <span className="text-[#5964B5]">
                {" "}opportunity isn't limited
              </span>

              by information or affordability.

            </h2>

          </div>

          {/* Mission */}
          <div>

            <p className="text-[#F07C62] font-semibold text-sm uppercase tracking-[0.18em] mb-8">
              What we're doing about it
            </p>

            <div className="space-y-4">

              {missions.map((mission) => {

                const Icon = mission.icon;

                return (

                  <div
                    key={mission.number}
                    className="group bg-white rounded-2xl p-6 border border-[#A9A7D8]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >

                    <div className="flex gap-5">

                      <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-[#A9A7D8]/30 flex items-center justify-center text-[#5964B5] group-hover:bg-[#5964B5] group-hover:text-white transition-all">

                        <Icon size={23} />

                      </div>

                      <div>

                        <span className="text-xs font-bold text-[#F07C62]">
                          {mission.number}
                        </span>

                        <h3 className="text-xl font-semibold text-[#172033] mt-1">
                          {mission.title}
                        </h3>

                        <p className="text-sm text-[#5964B5] leading-relaxed mt-2">
                          {mission.text}
                        </p>

                      </div>

                    </div>

                  </div>

                );
              })}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default VisionMission;