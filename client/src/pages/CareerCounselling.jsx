import React from 'react'
import image1 from '../assets/images/image1.png';

const CareerCounselling = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-20">
        <div className="grid grid-cols-6 gap-2">
          {[...Array(36)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-red-400 rounded-full"></div>
          ))}
        </div>
      </div>
      {/* Large decorative circles */}
      <div className="absolute top-10 right-20 w-40 h-40 bg-yellow-200 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 right-40 w-32 h-32 bg-pink-200 rounded-full opacity-40"></div>
      <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-blue-200 rounded-full opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image on Top, Floating Cards Overlay */}
          <div className="relative flex flex-col items-center">
            <img 
              src={image1} 
              alt="Graduate student in cap and gown" 
              className="w-full max-w-md mx-auto h-96 bg-gradient-to-br from-green-200 to-blue-300 rounded-2xl object-cover shadow-xl"
            />
            {/* Floating Career Counselling Card */}
            <div className="absolute left-0 bottom-8 bg-white rounded-xl shadow-lg p-4 max-w-xs flex items-center">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM12 7C13.7 7 15 8.3 15 10V11.5C15 12.3 14.3 13 13.5 13S12 12.3 12 11.5V10C12 9.4 11.6 9 11 9S10 9.4 10 10V11.5C10 12.3 9.3 13 8.5 13S7 12.3 7 11.5V10C7 8.3 8.3 7 10 7H12Z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm">Career Counselling</h4>
                <p className="text-xs text-gray-600">We help you with every aspect about your career</p>
              </div>
            </div>
            {/* Floating Accommodation Card */}
            {/* <div className="absolute right-0 bg-white rounded-xl shadow-lg p-4 max-w-xs flex items-center">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold b-20 text-gray-800 text-sm">Accommodation</h4>
                <p className="text-xs  text-gray-600">The educational mentor will help you with accommodation</p>
              </div>
            </div> */}
          </div>
          {/* Right Side - Content */}
          <div className="space-y-6 lg:pl-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-indigo-900 leading-tight">
              From Career Counselling
              <br />
              <span className="text-indigo-700">to University Admissions</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Get expert advice at every stage of your journey—whether it's choosing the right degree, applying to top universities, or preparing admission documents. We make the process seamless and stress-free.
            </p>
            <div className="pt-4">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareerCounselling;
