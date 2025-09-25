import React from 'react'
import image6 from '../assets/images/image6.png';
const GetStarted = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-20 w-24 h-24 bg-green-200 rounded-full opacity-40"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-50"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Main Container with Gray Background */}
        <div className="bg-gray-200 rounded-3xl p-8 lg:p-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Content */}
            <div className="space-y-6 lg:pr-8">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                Are you ready to fly &
                <br />
                <span className="text-indigo-700">pursue your dreams?</span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Your journey to world-class education starts here. Let our mentors help you unlock opportunities and shape your future.
              </p>
              
              <div className="pt-4">
                <button className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg group">
                  Get Started
                  <svg 
                    className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main image placeholder */}
                <img 
                  src={image6} 
                  alt="Confident woman ready to pursue her dreams" 
                  className="w-80 h-96 bg-gradient-to-br from-orange-200 to-pink-200 rounded-2xl object-cover shadow-xl"
                />
                
                {/* Image overlay to simulate the actual photo */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-300 opacity-20 rounded-2xl"></div>
                
                {/* Placeholder content to represent the woman */}
                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <p className="text-sm font-medium">Professional Woman</p>
                    <p className="text-xs">Striped Shirt & Jeans</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetStarted
