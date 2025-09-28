import React from 'react';
import image2 from '../assets/images/image2.png';
import Frame from '../assets/images/Frame.png';
import aeroplane from '../assets/images/aeroplane.png';
const Visa = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Decorative Elements */}

      <div className="absolute top-20 right-10 w-24 h-24 bg-orange-200 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 bg-green-200 rounded-full opacity-40"></div>
      
      {/* Dot patterns */}
      <div className="absolute top-32 right-32 w-24 h-24 opacity-30">
        <div className="grid grid-cols-6 gap-1">
          {[...Array(36)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-16 left-20 w-24 h-24 opacity-30">
        <div className="grid grid-cols-6 gap-1">
          {[...Array(36)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
          ))}
        </div>
      </div>

      {/* Plane icon */}
      <div className="absolute top-3  left-36 rounded-full flex items-center justify-center z-40">
        <img src={aeroplane} alt="Plane" className="w-16 h-16" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-6 lg:pr-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-indigo-900 leading-tight">
              From Visa Consultancy
              <br />
              <span className="text-indigo-700">to Accommodation</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Beyond admissions, we guide you through visa applications, travel planning, 
              and securing accommodation—ensuring a smooth transition to your dream destination.
            </p>
            
            <div className="pt-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold border-2 border-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-lg">
                Get Started
              </button>
            </div>
          </div>

          {/* Right Side - Image with Floating Card */}
          <div className="relative">
            <div className="relative">
              <img 
                src={image2} 
                alt="Happy graduate student in cap and gown" 
                className="w-full max-w-md mx-auto h-96 bg-gradient-to-br from-orange-200 to-red-300 rounded-2xl object-cover shadow-xl"
              />
              
              {/* Floating Visa Help Card */}
              <div className="absolute bottom-8  -left-3 bg-white rounded-xl shadow-xl p-4 max-w-xs border border-gray-100 z-50">
                <div className="flex items-center space-x-3">
                  <div className="w-15 h-15 bg-purple-400 rounded-full flex items-center justify-center">
                    <img src={Frame} alt="" className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm mb-1">Visa Help?</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      US and visas will help you with your visa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Visa;
