import React from 'react'
import Ellipse1 from '../assets/images/Ellipse1.png';

const Feature = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Create Your Profile */}
          <div className="text-center group">
            <div className="mb-8 flex justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9M15 10.5V19L13.5 17.5V14.5C13.5 13.1 12.4 12 11 12S8.5 13.1 8.5 14.5V17.5L7 19V10.5L15 10.5Z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Create Your Profile</h3>
            <p className="text-gray-600 leading-relaxed">
              Showcase your career goals, skills, and aspirations to connect with the right mentors.
            </p>
          </div>

          {/* Find Mentors */}
          <div className="text-center group">
            <div className="mb-8 flex justify-center">
              <div className="w-32 h-32 bg-[#F9EFE9] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src={Ellipse1}
                  alt="Find Mentors"
                  className="w-40 h-40 object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Find Mentors</h3>
            <p className="text-gray-600 leading-relaxed">
              Access our global network of verified mentors who match your profile and career needs.
            </p>
          </div>

          {/* Start Your Journey */}
          <div className="text-center group">
            <div className="mb-8 flex justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M19 19H5V8H19V19M7 10H9V12H7V10M15 10H17V12H15V10M11 14H13V16H11V14M7 14H9V16H7V14"/>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Start Your Journey</h3>
            <p className="text-gray-600 leading-relaxed">
              Engage in mentorship sessions designed to accelerate your academic and professional growth.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Feature
