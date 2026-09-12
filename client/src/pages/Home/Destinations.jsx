
import React from "react";
import { useNavigate } from "react-router-dom";

const destinations = [
  {
    country: "India",
    flag: "🇮🇳",
    path: "/mbbs-in-india",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80",
  },

  {
    country: "Nepal",
    flag: "🇳🇵",
    path: "/mbbs-in-nepal",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80",
  },

  {
    country: "Georgia",
    flag: "🇬🇪",
    path: "/mbbs-in-georgia",
    image:
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=900&q=80",
  },

  {
    country: "Germany",
    flag: "🇩🇪",
    path: "/study-in-germany",
    image:
      "https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&w=900&q=80",
  },

  {
    country: "USA",
    flag: "🇺🇸",
    path: "/study-in-usa",
    image:
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=900&q=80",
  },
];

const Destinations = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 sm:py-28 bg-[#5964B5] overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Heading */}
        <div className="mb-12">

          <p className="text-[#F07C62] text-sm font-semibold uppercase tracking-wider">
            Study destinations
          </p>

          <h2 className="text-3xl sm:text-5xl font-semibold text-white mt-3">
            Where do you want
            <br />
            to go next?
          </h2>

          <p className="mt-4 text-[#E8E7F5] text-sm sm:text-base max-w-lg">
            Explore opportunities and find the destination that fits your
            academic goals.
          </p>

        </div>


        {/* Destination Slider */}
        <div className="flex gap-5 overflow-x-auto pb-5 scrollbar-hide">

          {destinations.map((destination) => (
            <div
              key={destination.country}
              onClick={() => navigate(destination.path)}
              className="
                group relative
                min-w-[280px] sm:min-w-[320px]
                h-[400px]
                rounded-[2rem]
                overflow-hidden
                cursor-pointer
              "
            >

              {/* Image */}
              <img
                src={destination.image}
                alt={`Study in ${destination.country}`}
                className="
                  w-full h-full object-cover
                  transition-transform duration-700
                  group-hover:scale-105
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#172033]/90 via-[#172033]/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-7">

                {/* Flag */}
                <span className="text-3xl">
                  {destination.flag}
                </span>

                <div className="mt-4">

                  <p className="text-[#A9A7D8] text-sm font-medium mb-1">
                    Study in
                  </p>

                  <h3 className="text-3xl font-semibold text-white">
                    {destination.country}
                  </h3>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Destinations;

