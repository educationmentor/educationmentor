import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import founder2 from "../../assets/images/about-us/team-1.png";
import founder3 from "../../assets/images/about-us/team-2.png";
import founder1 from "../../assets/images/about-us/team-3.png";
// Add third founder image
// import founder3 from "../../assets/images/about-us/team-3.png";

const founders = [
{
  name: "Rishav Singh",
  role: "Director",
  image: founder1,

  bio:
    "With 14 years of experience building businesses from the ground up, Rishav has built successful ventures across retail, distribution, manufacturing and edtech. From pioneering India's first Vans retail store to building a 30-store distribution network, he now brings his entrepreneurial experience and strategic vision to Education Saathi.",

  highlights: [
    "14+ Years of Building",
    "Business & Growth Strategy",
    "Entrepreneurial Leadership",
  ],
},
  {
    name: "Kunal Chauhan",
    role: "Director & Academic Head",
    image: founder2,

    bio:
      "A visionary educator with over 20 years of experience helping students achieve ambitious academic goals.",

    highlights: [
      "20+ Years Experience",
      "Global University Mentorship",
      "Student-First Approach",
    ],
  },

  {
    name: "Karishma",
    role: "Senior Study Abroad Counsellor",
    image: founder3,

    bio:
      "An experienced study abroad counsellor helping students navigate international education opportunities across Europe.",

    highlights: [
      "4+ Years Experience",
      "European Destinations",
      "Personalised Guidance",
    ],
  },

  
];

const Founders = () => {
  const [active, setActive] = useState(0);

  const founder = founders[active];

  return (
    <section
      id="founders"
      className="py-20 sm:py-28 bg-[#172033] relative overflow-hidden"
    >

      {/* Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#5964B5]/20 blur-[130px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">

        {/* Heading */}
        <div className="max-w-2xl mb-14">

          <p className="text-[#F07C62] font-semibold text-sm uppercase tracking-[0.18em]">
            The people behind Education Saathi
          </p>

          <h2 className="text-3xl sm:text-5xl font-semibold text-[#F7F5F0] mt-4">

            Three different journeys.

            <span className="text-[#A9A7D8] block">
              One shared mission.
            </span>

          </h2>

        </div>

        {/* Founder display */}
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 lg:gap-20 items-center">

          {/* IMAGE */}
          <div className="relative">

            <div className="absolute inset-0 bg-[#5964B5] rounded-[2rem] rotate-3 translate-x-3 translate-y-3" />

            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#5964B5]">

              {founder.image ? (

                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover transition-all duration-700"
                />

              ) : (

                <div className="w-full h-full flex items-center justify-center text-[#F7F5F0] text-xl">
                  Founder Image
                </div>

              )}

            </div>

          </div>

          {/* CONTENT */}
          <div>

            <p className="text-[#F07C62] text-sm font-bold">
              0{active + 1}
            </p>

            <h3 className="text-4xl sm:text-6xl font-semibold text-[#F7F5F0] mt-3">

              {founder.name}

            </h3>

            <p className="text-[#F07C62] font-semibold mt-3">

              {founder.role}

            </p>

            <p className="text-[#A9A7D8] text-lg leading-relaxed mt-7 max-w-xl">

              {founder.bio}

            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-3 mt-9">

              {founder.highlights.map((item) => (

                <div
                  key={item}
                  className="border border-white/10 rounded-xl p-4"
                >

                  <ArrowUpRight
                    size={18}
                    className="text-[#F07C62]"
                  />

                  <p className="text-[#F7F5F0] text-sm font-semibold mt-4">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Founder navigation */}
        <div className="flex flex-wrap gap-3 mt-14">

          {founders.map((person, index) => (

            <button
              key={person.name}
              onClick={() => setActive(index)}
              className={`
                px-5 py-3 rounded-full font-semibold transition-all duration-300
                ${
                  active === index
                    ? "bg-[#F07C62] text-[#172033]"
                    : "bg-white/5 text-[#A9A7D8] hover:bg-[#5964B5]"
                }
              `}
            >

              {person.name}

            </button>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Founders;