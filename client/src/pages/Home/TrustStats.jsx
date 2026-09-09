import React, { useEffect, useState } from "react";

const stats = [
  {
    value: 1000,
    suffix: "+",
    label: "Students Guided",
  },
  {
    value: 12,
    suffix: "+",
    label: "Countries",
  },
  {
    value: 1,
    suffix: ":1",
    label: "Personal Guidance",
  },
  {
    value: 100,
    suffix: "%",
    label: "Support",
  },
];

const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = value / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
};

const TrustStats = () => {
  return (
    <section className="relative bg-[#A9A7D8] py-10 sm:py-14 overflow-hidden">

      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-80 h-80 rounded-full bg-white blur-3xl -top-40 left-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center ${
                index !== stats.length - 1
                  ? "lg:border-r lg:border-[#172033]/15"
                  : ""
              }`}
            >

              <h2 className="text-3xl sm:text-5xl font-semibold text-[#172033]">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                />
              </h2>

              <p className="mt-2 text-sm sm:text-base text-[#172033]/70">
                {stat.label}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default TrustStats;