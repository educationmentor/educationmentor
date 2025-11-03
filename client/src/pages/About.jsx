import React from "react";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";
import aboutHeaderImg from "../assets/images/about-us/header.png"
import aboutHeroImg from "../assets/images/about-us/hero.png"
const About = () => {
  const teamMembers = [
    {
      name: "Full name",
      role: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      name: "Full name",
      role: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      name: "Full name",
      role: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      name: "Full name",
      role: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
  ];

  const locations = [
    {
      city: "Sydney",
      address: "Level 1, 121 King Street, Sydney NSW 2000",
      hours: "Mon - Fri",
    },
    {
      city: "New York",
      address: "Level 1, 121 King Street, Sydney NSW 2000",
      hours: "Mon - Fri",
    },
    {
      city: "London",
      address: "Level 1, 121 King Street, Sydney NSW 2000",
      hours: "Mon - Fri",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-[4vw] px-[6vw] md:py-[5.83vw] md:px-[3.33vw] bg-cover bg-center flex flex-col justify-center mt-[15vw] md:mt-[4vw]" style={{backgroundImage: `url(${aboutHeaderImg})`}}>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-[1.5vw] text-center">
            Believing in Accessible Global Education
            </h1>
            <p className="text-sm md:text-lg text-white leading-relaxed text-center max-w-4xl mx-auto">
            At Educational Mentor, we are driven by a powerful belief: informed and affordable<br/> mentorship is the key to unlocking global education for every student.
            </p>
        </section>

        {/* About Company Section */}
        <section className="py-[4vw] px-[6vw] md:py-[5.83vw] md:px-[8.33vw] bg-white">
          <div className=" mx-auto ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Content */}
              <div className="space-y-6">
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-[#050E62] mb-[1.5vw]">
                  Our Story: Who We Are
                </h2>

                <div className="space-y-4 text-sm md:text-lg leading-normal">
                  <p>
                    Educational Mentor was founded by a team of international educators and alumni who saw a gap in the market: high-quality, end-to-end study abroad guidance was a luxury few could afford, and clear information about different countries was hard to find.
                  </p>

                  <p>
                    We started with a simple goal: to become the comprehensive and affordable mentor we wish we had. We combine deep expertise with a efficient model to provide premium services at an affordable price, while also making students truly aware of their global options.
                  </p>

                  


                </div>
              </div>

              {/* Right Side - Image */}
              <div className="flex justify-center">
                <img src={aboutHeroImg} alt="hero image"/>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-[4vw] px-[6vw] md:py-[5.83vw] md:px-[8.33vw] bg-whiwte">
          <div className="mx-auto">
            <div className="text-left mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Introduce your team
              </h2>
              <p className="text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{member.role}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center mt-12 space-x-2">
              <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            {/* Star Rating */}
            <div className="flex justify-center mb-8">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-8 h-8 text-yellow-400 mx-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
              "A customer testimonial that highlights features and answers
              potential customer concerns that you know are common objections or
              questions visitors have, but didn't have a chance to address up to
              this point."
            </blockquote>

            <div className="flex justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <p className="font-semibold text-gray-900">Name Surname</p>
                <p className="text-sm text-gray-500">Position, Company name</p>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left Side - Locations List */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                  Our locations
                </h2>
                <p className="text-lg text-gray-600 mb-12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <div className="space-y-8">
                  {locations.map((location, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-200 pb-6 last:border-b-0"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {location.city}
                      </h3>
                      <p className="text-gray-600 mb-2">{location.address}</p>
                      <p className="text-sm text-gray-500">{location.hours}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Map */}
              <div className="flex items-center justify-center">
                <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <p className="text-sm">Interactive Map</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <GetStarted />
      <Footer />
    </>
  );
};

export default About;
