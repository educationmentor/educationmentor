import React from "react";
import {
  Sparkles,
  Eye,
  Heart,
  HandHeart,
} from "lucide-react";

const values = [
  {
    number: "01",
    title: "Excellence & Affordability",
    text: "Great guidance should deliver maximum value without compromising on quality.",
    icon: Sparkles,
  },

  {
    number: "02",
    title: "Clarity & Awareness",
    text: "Students deserve clear information to make informed decisions.",
    icon: Eye,
  },

  {
    number: "03",
    title: "Student-First Integrity",
    text: "Every recommendation should put the student's best interest first.",
    icon: Heart,
  },

  {
    number: "04",
    title: "Support That Empowers",
    text: "We help students understand the process instead of simply doing it for them.",
    icon: HandHeart,
  },
];

const Values = () => {
  return (
    <section className="py-20 sm:py-28 bg-white">

      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">

          <div className="max-w-2xl">

            <p className="text-[#F07C62] font-semibold text-sm uppercase tracking-[0.18em]">
              What guides us
            </p>

            <h2 className="text-4xl sm:text-5xl font-semibold text-[#172033] mt-4">

              Values aren't posters.

              <span className="text-[#5964B5]">
                {" "}They're decisions.
              </span>

            </h2>

          </div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {values.map((value) => {

            const Icon = value.icon;

            return (

              <div
                key={value.number}
                className="group min-h-[300px] rounded-[1.5rem] p-7 border border-[#A9A7D8]/30 transition-all duration-500 hover:-translate-y-3 hover:bg-[#5964B5] hover:shadow-2xl"
              >

                <div className="flex justify-between items-start">

                  <span className="text-[#F07C62] font-bold">
                    {value.number}
                  </span>

                  <Icon
                    size={25}
                    className="text-[#5964B5] group-hover:text-[#F07C62] transition-colors"
                  />

                </div>

                <div className="mt-20">

                  <h3 className="text-xl font-semibold text-[#172033] group-hover:text-[#F7F5F0] transition-colors">

                    {value.title}

                  </h3>

                  <p className="text-sm leading-relaxed text-[#5964B5] group-hover:text-[#F7F5F0]/80 mt-4 transition-colors">

                    {value.text}

                  </p>

                </div>

              </div>

            );
          })}

        </div>

      </div>

    </section>
  );
};

export default Values;