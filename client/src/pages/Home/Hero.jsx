import React, { useState, useEffect } from 'react'
import HeroImage from '../../assets/images/home/hero1.png';
import avatar1 from '../../assets/images/home/avatar1.png';
import avatar2 from '../../assets/images/home/avatar2.png';
import avatar3 from '../../assets/images/home/avatar3.png';
import avatar4 from '../../assets/images/home/avatar4.png';
import ConsultationForm from '../../components/ConsultationForm';
import seacrh from '../../assets/images/home/search.png';
import Vector from '../../assets/images/home/Vector.png';

const Hero = () => {
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  useEffect(() => {
    if (showConsultationForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showConsultationForm]);
  // bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 
  return (
    <section className="md:min-h-screen min-h-[85vh] bg-white px-4 sm:px-5 py-8 sm:py-16 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-5 sm:space-y-8 lg:pr-10">
            <div className="pt-0 sm:pt-0">
              <div className="flex items-center justify-start gap-2">
                <span className="text-gray-400 text-base sm:text-sm font-semibold tracking-widest uppercase">
                  OUR GOAL
                </span>
                <img src={Vector} alt="" className="w-12 h-3 object-contain" />
              </div>
            </div>
            <h1 className="mt-2 text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#050E62] leading-tight text-left">
              Boost Your Career Journey With Us!
            </h1>
            <p className="text-gray-600 text-sm xs:text-base sm:text-lg leading-relaxed text-left">
              Get real time mentorship through video chat from the best counsellors, alumni's and students of universities across the globe.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0 w-full">
              <div className="flex-1 flex items-center bg-[#D5CEE4] rounded-xl shadow-lg border border-gray-200 overflow-hidden w-full min-h-[48px] sm:min-h-[56px]">
                <input 
                  type="text" 
                  placeholder="Search for Courses or Courses"
                  className="flex-1 px-2 sm:px-4 py-2 sm:py-4 text-gray-900 placeholder-gray-700 border-none outline-none text-sm sm:text-sm bg-transparent"
                  style={{ minWidth: 0 }}
                />
                <img
                  src={seacrh}
                  alt="Search"
                  className="w-6 h-6 mx-3"
                />
              </div>
              <button
                onClick={() => setShowConsultationForm(true)}
                className="w-full sm:w-auto mt-2 sm:mt-0 bg-gradient-to-r cursor-pointer from-purple-600 to-indigo-600 text-white px-5 sm:px-8 py-2.5 sm:py-4 rounded-full font-semibold hover:from-purple-700 hover:to-indigo-700 transform hover:-translate-y-1 transition-all duration-200 shadow-lg text-base"
              >
                Book Free Consultation
              </button>
            </div>
            <div className="flex flex-col rounded-full sm:flex-row items-center mt-3">
              <div className="flex items-center justify-center sm:justify-start w-full">
                <div className="flex -space-x-2">
                  <img
                    src={avatar1}
                    alt="Student 1"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 object-cover shadow"
                    style={{ borderColor: '#3E05B080', borderStyle: 'solid' }}
                  />
                  <img
                    src={avatar2}
                    alt="Student 2"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 object-cover shadow"
                    style={{ borderColor: '#3E05B080', borderStyle: 'solid' }}
                  />
                  <img
                    src={avatar3}
                    alt="Student 3"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 object-cover shadow"
                    style={{ borderColor: '#3E05B080', borderStyle: 'solid' }}
                  />
                  <img
                    src={avatar4}
                    alt="Student 4"
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 object-cover shadow"
                    style={{ borderColor: '#3E05B080', borderStyle: 'solid' }}
                  />
                </div>
                <span className="ml-3 text-[#290572] font-bold text-xs sm:text-base whitespace-nowrap">
                  Trusted by students worldwide
                </span>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center items-center mt-8 lg:mt-0">
            <img 
              src={HeroImage}
              alt="Students with global education background" 
             className="w-[90%] max-w-lg h-48 xs:h-56 sm:h-96 md:h-[32rem] lg:h-[34rem] bg-white object-cover"

            />
          </div>
        </div>
      </div>
      {showConsultationForm && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex items-center justify-center z-50 animate-in fade-in duration-300">
          <ConsultationForm onClose={() => setShowConsultationForm(false)} />
        </div>
      )}
    </section>
  )
}

export default Hero;