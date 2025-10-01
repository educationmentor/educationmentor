import React from 'react'
import Ellipse1 from '../assets/images/Ellipse1.png'
// Add your icon images here
import ProfileIcon from '../assets/images/Smile.png'
import JourneyIcon from '../assets/images/calendar.png'

const Feature = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Create Your Profile */}
          <div className="text-center group">
            <div className="mb-8 flex justify-center">
              <div className=" rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src={ProfileIcon}
                  alt="Create Profile"
                  className="w-32 h-32 object-contain"
                />
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
              <div className="rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src={JourneyIcon}
                  alt="Start Journey"
                  className="w-32 h-32 object-contain"
                />
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
