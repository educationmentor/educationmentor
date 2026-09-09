
import React, { useState } from "react";

import image1 from "../../assets/images/home/image1.png";
import image2 from "../../assets/images/home/image2.png";
import mentorsGrid from "../../assets/images/home/image7.png";

import scholarship from "../../assets/images/home/scholarship.png";
import Frame from "../../assets/images/home/Frame.png";
import avatar5 from "../../assets/images/home/avatar5.png";

const stages = [
  {
    key: "admissions",
    tab: "Admissions",
    kicker: "STAGE ONE",
    title: "Find the right path to your dream university",
    text: "Get guidance while choosing your course, university and admission path. Make important decisions with clarity instead of confusion.",
    image: image1,
    card: {
      icon: scholarship,
      title: "Scholarship support",
      text: "Find opportunities you may actually qualify for.",
    },
  },
  {
    key: "visa",
    tab: "Visa & Travel",
    kicker: "STAGE TWO",
    title: "Move forward with your visa and travel plans",
    text: "Beyond admissions, get support with visa preparation, travel planning and the important details involved in moving forward.",
    image: image2,
    card: {
      icon: Frame,
      title: "Visa guidance",
      text: "Understand the process before it becomes stressful.",
    },
  },
  {
    key: "mentorship",
    tab: "Mentorship",
    kicker: "THROUGHOUT THE JOURNEY",
    title: "Learn from people who have already done it",
    text: "Connect with mentors and experienced people who can help you understand the journey from real experience.",
    image: mentorsGrid,
    card: {
      avatar: avatar5,
      name: "Student Mentor",
      role: "Guidance when you need it",
      quote: "You're not figuring it out alone.",
    },
  },
];

const JourneyTabs = () => {
  const [active, setActive] = useState(0);

  const stage = stages[active];

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-28"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* Decoration */}

      <div
        className="absolute right-[-200px] top-[100px] h-[450px] w-[450px] rounded-full opacity-20"
        style={{ backgroundColor: "#A9A7D8" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">

        {/* Heading */}

        <div className="mb-12 max-w-2xl">
          <p
            className="mb-3 text-sm font-semibold tracking-[0.15em]"
            style={{ color: "#5964B5" }}
          >
            YOUR EDUCATION JOURNEY
          </p>

          <h2
            className="text-3xl leading-tight sm:text-5xl"
            style={{
              color: "#172033",
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 600,
            }}
          >
            Everything between
            <br />

            <span style={{ color: "#5964B5" }}>
              "Where do I start?"
            </span>

            <br />
            and moving forward.
          </h2>
        </div>

        {/* Tabs */}

        <div className="mb-12 flex gap-3 overflow-x-auto pb-2">
          {stages.map((item, index) => {
            const isActive = active === index;

            return (
              <button
                key={item.key}
                onClick={() => setActive(index)}
                className="whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 sm:text-base"
                style={{
                  backgroundColor: isActive
                    ? "#5964B5"
                    : "#F7F5F0",

                  color: isActive ? "#FFFFFF" : "#172033",

                  border: isActive
                    ? "1px solid #5964B5"
                    : "1px solid rgba(23,32,51,0.10)",
                }}
              >
                {item.tab}
              </button>
            );
          })}
        </div>

        {/* Content */}

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-24">

          {/* Image */}

          <div className="relative order-2 lg:order-1">

            <div
              className="absolute -left-5 -top-5 h-full w-full rounded-[2.5rem]"
              style={{ backgroundColor: "#A9A7D8" }}
            />

            <img
              key={stage.image}
              src={stage.image}
              alt={stage.title}
              className="relative h-[380px] w-full rounded-[2.5rem] border-[7px] border-white object-cover shadow-xl sm:h-[500px]"
            />

            {/* Floating card */}

            <div
              className="absolute -bottom-6 left-5 max-w-xs rounded-2xl bg-white p-5 shadow-xl sm:-left-8"
            >
              {stage.card.quote ? (
                <>
                  <p
                    className="mb-3 text-base font-semibold"
                    style={{ color: "#172033" }}
                  >
                    "{stage.card.quote}"
                  </p>

                  <div className="flex items-center gap-3">
                    <img
                      src={stage.card.avatar}
                      alt=""
                      className="h-10 w-10 rounded-full object-cover"
                    />

                    <div>
                      <p
                        className="text-sm font-semibold"
                        style={{ color: "#172033" }}
                      >
                        {stage.card.name}
                      </p>

                      <p className="text-xs text-gray-500">
                        {stage.card.role}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ backgroundColor: "#F7F5F0" }}
                  >
                    <img
                      src={stage.card.icon}
                      alt=""
                      className="h-7 w-7 object-contain"
                    />
                  </div>

                  <div>
                    <h4
                      className="text-sm font-semibold"
                      style={{ color: "#172033" }}
                    >
                      {stage.card.title}
                    </h4>

                    <p className="mt-1 text-xs text-gray-500">
                      {stage.card.text}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Text */}

          <div className="order-1 lg:order-2">

            <p
              className="text-sm font-semibold tracking-[0.15em]"
              style={{ color: "#F07C62" }}
            >
              {stage.kicker}
            </p>

            <h3
              className="mt-4 text-3xl leading-tight sm:text-5xl"
              style={{
                color: "#172033",
                fontFamily: "'Fraunces', Georgia, serif",
                fontWeight: 600,
              }}
            >
              {stage.title}
            </h3>

            <p
              className="mt-6 max-w-lg text-base leading-relaxed sm:text-lg"
              style={{ color: "#667085" }}
            >
              {stage.text}
            </p>

            <button
              className="group mt-8 rounded-full px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "#F07C62",
                boxShadow: "0 15px 30px rgba(240,124,98,0.20)",
              }}
            >
              Explore this step

              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTabs;

