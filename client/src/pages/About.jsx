import React from "react";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";
import aboutHeaderImg from "../assets/images/about-us/header.png"
import aboutHeroImg from "../assets/images/about-us/hero.png"

import mission1 from "../assets/images/about-us/mission-1.png"
import mission2 from "../assets/images/about-us/mission-2.png"
import mission3 from "../assets/images/about-us/mission-3.png"

import team1 from "../assets/images/about-us/team-1.png"
import team2 from "../assets/images/about-us/team-2.png"
const About = () => {


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

                <div className="space-y-4 text-sm md:text-lg lg:text-xl leading-normal">
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
        <section className="py-[4vw] px-[6vw] md:py-[5.83vw] md:px-[8.33vw] bg-[#F8FCFF]">
          <div className="mx-auto">
            <div className="">
              <p className="font-semibold text-center mb-[1.5vw] text-sm">Our Vision & Mission</p>

              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
                Our Vision
              </h2>
              <p className="text-sm md:text-lg lg:text-xl leading-normal font-semibold text-center md:max-w-5xl  mx-auto pb-[4.1vw]">
                To create a world where no student is denied access to the best study abroad guidance and clear information due to financial constraints. breaking down geographical and informational barriers to make life-changing global education accessible to every aspiring student.
              </p>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
                Our Mission
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[2.5vw]">
                <div>
                  <img src={mission1} alt="mission img" className="w-[12.5vw] h-auto md:w-[4.23vw] mb-[2vw] md:mb-[1vw] mx-auto"/>
                  <p className="text-xs md:text-sm lg:text-lg text-center">
                    To provide the best and most affordable education guidance, ensuring every student receives premium, end-to-end support.
                  </p>
                </div>
                <div>
                  <img src={mission2} alt="mission img" className="w-[12.5vw] h-auto md:w-[4.23vw] mb-[2vw] md:mb-[1vw] mx-auto"/>
                  <p className="text-xs md:text-sm lg:text-lg text-center">
                    To make students truly aware by providing deep, unbiased insights into different countries, their education systems, cultures, and costs.
                  </p>
                </div>
                <div>
                  <img src={mission3} alt="mission img" className="w-[12.5vw] h-auto md:w-[4.23vw] mb-[2vw] md:mb-[1vw] mx-auto"/>
                  <p className="text-xs md:text-sm lg:text-lg text-center">
                    We achieve this through personalized guidance, strategic planning, and unwavering support at every step.
                  </p>
                </div>

              </div>
            </div>
        </div>
           
        </section>

         {/* Team Section */}
        <section className="py-[4vw] px-[6vw] md:py-[5.83vw] md:px-[8.33vw] ">
            <div className="">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-center text-[#050E62] mb-[4.1vw]">
                Introducing the Mentors
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[4.5vw]">
                <div>
                  <img src={team1} alt="team member" className="w-[30vw] h-auto md:w-[11.46vw] mb-[2vw] md:mb-[1vw] mx-auto"/>
                   <p className="text-sm md:text-lg lg:text-xl leading-normal font-bold text-center md:max-w-5xl  mx-auto \">
                    Kunal Chauhan sir
                  </p>
                  <p className="text-xs md:text-sm lg:text-lg text-center mb-[2vw] md:mb-[1vw]">
                    Director & Academic Head
                  </p>
                  <p className="text-xs md:text-sm lg:text-lg text-center font-semibold">
                    A visionary educator with over 20 years of experience, Kunal is the founder of the acclaimed Sterling Academy. He has a proven track record of mentoring students to top-tier global universities like Yale, Johns Hopkins, and UC Berkeley
                  </p>
                </div>
                <div>
                  <img src={team2} alt="team member" className="w-[30vw] h-auto md:w-[11.46vw] mb-[2vw] md:mb-[1vw] mx-auto"/>
                  <p className="text-sm md:text-lg lg:text-xl leading-normal font-bold text-center md:max-w-5xl  mx-auto \">
                    Karishma Mam
                  </p>
                  <p className="text-xs md:text-sm lg:text-lg text-center mb-[2vw] md:mb-[1vw]">
                    Senior Study Abroad Counsellor
                  </p>
                  <p className="text-xs md:text-sm lg:text-lg text-center font-semibold">
                    Karishma brings over 4 years of dedicated experience in guiding students to top universities across Europe, with a proven track record in destinations like Germany, Italy, and Georgia
                  </p>
                </div>
              </div>
        </div>
        </section>

        {/* Testimonials Section */}
        {/* <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">

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
        </section> */}

        {/* Our Core Values */}
        <section className="py-[4vw] px-[6vw] md:py-[5.83vw] md:px-[8.33vw] ">
          <div className="mx-auto">
            <div className="">

              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-center mb-[2.5vw]">
                Our Core Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2.5vw]">
                <div>
                  <p className="text-lg md:text-xl lg:text-2xl font-bold text-center mb-[1vw] leading-[130%]">
                    Excellence &<br/>Affordability
                  </p>
                  <p className="text-center text-sm">
                    We believe the best guidance should be accessible. We deliver maximum value without compromising on quality.
                  </p>
                </div>
                <div>
                  <p className="text-lg md:text-xl lg:text-2xl font-bold text-center mb-[1vw] leading-[130%]">
                    Clarity &<br/> Awareness
                  </p>
                  <p className="text-center text-sm">
                    We provide detailed information about countries and universities to make you truly informed
                  </p>
                </div>

                 <div>
                  <p className="text-lg md:text-xl lg:text-2xl font-bold text-center mb-[1vw] leading-[130%]">
                    Student-First<br/> Integrity
                  </p>
                  <p className="text-center text-sm">
                    Every decision we make is with your success and best interest at the core.
                  </p>
                </div>

                 <div>
                  <p className="text-lg md:text-xl lg:text-2xl font-bold text-center mb-[1vw] leading-[130%]">
                    Empowerment through<br/> Support
                  </p>
                  <p className="text-center text-sm">
                    We demystify the process, equipping you with the knowledge and support to succeed.
                  </p>
                </div>

              </div>
            </div>
        </div>
           
        </section>

        {/* Locations Section */}
        {/* <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              

              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                  Our locations
                </h2>
                <p className="text-lg text-gray-600 mb-12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <div className="space-y-8">
                  
                </div>
              </div>

              
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
        </section> */}
      </div>
    </>
  );
};

export default About;
