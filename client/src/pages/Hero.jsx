import React from 'react'
import HeroImage from '../assets/images/hero1.png';
import avatar1 from '../assets/images/avatar1.png';
import avatar2 from '../assets/images/avatar2.png';
import avatar3 from '../assets/images/avatar3.png';
import avatar4 from '../assets/images/avatar4.png';


const Hero = () => {

  // bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 
  return (
    <section className="min-h-screen bg-white px-5 py-16 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 lg:pr-10">
            <p className="text-gray-600 text-sm font-semibold tracking-widest uppercase mb-5">OUR GOAL</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-900 leading-tight">
              Boost Your Career Journey With Us!
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Get real time mentorship through video chat from the best counsellors, alumni's and students of universities across the globe.
            </p>
            
            <div className="space-y-5 gap-5 flex">
              <div className="flex bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <input 
                  type="text" 
                  placeholder="Search for Countries or courses"
                  className="flex-1 px-8 py-4 text-gray-700 placeholder-gray-500 border-none outline-none"
                />
                <button className=" bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors">
                  🔍
                </button>
              </div>

              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 rounded-full font-semibold hover:from-purple-700 hover:to-indigo-700 transform hover:-translate-y-1 transition-all duration-200 shadow-lg">
                Book Free Consultation
              </button>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="flex -space-x-2">
                <img
                  src={avatar1}
                  alt="Student 1"
                  className="w-10 h-10 rounded-full border-2 object-cover shadow"
                  style={{ borderColor: '#3E05B080', borderStyle: 'solid' }}
                />
                <img
                  src={avatar2}
                  alt="Student 2"
                  className="w-10 h-10 rounded-full border-2 object-cover shadow"
                  style={{ borderColor: '#3E05B080', borderStyle: 'solid' }}
                />
                <img
                  src={avatar3}
                  alt="Student 3"
                  className="w-10 h-10 rounded-full border-2 object-cover shadow"
                  style={{ borderColor: '#3E05B080', borderStyle: 'solid' }}
                />
                <img
                  src={avatar4}
                  alt="Student 4"
                  className="w-10 h-10 rounded-full border-2 object-cover shadow"
                  style={{ borderColor: '#3E05B080', borderStyle: 'solid' }}
                />
              </div>
              <span className="text-[#290572] font-bold font-medium">Trusted by students worldwide</span>
            </div>
          </div>
          
          <div className="relative flex justify-center items-center">
            <img 
              src={HeroImage}
              alt="Students with global education background" 
              className="w-full max-w-xl h-135 rounded-2xl object-cover "
            />
                  </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;