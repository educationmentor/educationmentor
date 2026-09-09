
import React from "react";

const flags = [
  {
    id: 1,
    country: "United Kingdom",
    img: "https://flagcdn.com/gb.svg",
  },
  {
    id: 2,
    country: "United States",
    img: "https://flagcdn.com/us.svg",
  },
  {
    id: 3,
    country: "India",
    img: "https://flagcdn.com/in.svg",
  },
  {
    id: 4,
    country: "France",
    img: "https://flagcdn.com/fr.svg",
  },
  {
    id: 5,
    country: "Japan",
    img: "https://flagcdn.com/jp.svg",
  },
  {
    id: 6,
    country: "Germany",
    img: "https://flagcdn.com/de.svg",
  },
  {
    id: 7,
    country: "Canada",
    img: "https://flagcdn.com/ca.svg",
  },
  {
    id: 8,
    country: "Australia",
    img: "https://flagcdn.com/au.svg",
  },
];

const duplicatedFlags = [...flags, ...flags, ...flags];

const Flags = () => {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24"
      style={{ backgroundColor: "#F7F5F0" }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        {/* Heading */}

        <div className="mx-auto mb-12 max-w-2xl text-center">

          <p
            className="mb-3 text-sm font-semibold tracking-[0.15em]"
            style={{ color: "#5964B5" }}
          >
            EXPLORE THE WORLD
          </p>

          <h2
            className="text-3xl leading-tight sm:text-5xl"
            style={{
              color: "#172033",
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 600,
            }}
          >
            Where can your education
            <br />

            <span style={{ color: "#5964B5" }}>
              take you?
            </span>
          </h2>

          <p
            className="mt-5 text-base leading-relaxed sm:text-lg"
            style={{ color: "#667085" }}
          >
            Explore opportunities, universities and education pathways
            across destinations around the world.
          </p>
        </div>

        {/* Carousel */}

        <div className="relative">

          {/* Fade */}

          <div
            className="absolute inset-y-0 left-0 z-10 w-16 sm:w-32"
            style={{
              background:
                "linear-gradient(to right, #F7F5F0, transparent)",
            }}
          />

          <div
            className="absolute inset-y-0 right-0 z-10 w-16 sm:w-32"
            style={{
              background:
                "linear-gradient(to left, #F7F5F0, transparent)",
            }}
          />

          <div className="flex gap-7 animate-scroll">

            {duplicatedFlags.map((flag, index) => (
              <div
                key={`${flag.id}-${index}`}
                className="group flex flex-shrink-0 flex-col items-center"
              >
                <div
                  className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-4 bg-white transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl sm:h-24 sm:w-24"
                  style={{
                    borderColor: "#A9A7D8",
                  }}
                >
                  <img
                    src={flag.img}
                    alt={flag.country}
                    className="h-full w-full object-cover"
                  />
                </div>

                <span
                  className="mt-3 text-center text-xs font-semibold sm:text-sm"
                  style={{ color: "#172033" }}
                >
                  {flag.country}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flags;

