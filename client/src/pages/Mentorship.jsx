import React from 'react'
import mentorsGrid from '../assets/images/image3.png';


const Mentorship = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-green-200 rounded-full opacity-30"></div>
      <div className="absolute top-20 right-20 w-24 h-24 bg-pink-200 rounded-full opacity-40"></div>
      
      {/* Wave pattern */}
      <div className="absolute bottom-20 left-10">
        <svg width="100" height="60" viewBox="0 0 100 60" className="text-blue-300 opacity-50">
          <path d="M0 30 Q25 10 50 30 T100 30" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M0 40 Q25 20 50 40 T100 40" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M0 50 Q25 30 50 50 T100 50" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      {/* Dot pattern */}
      <div className="absolute bottom-40 right-32 w-32 h-32 opacity-20">
        <div className="grid grid-cols-8 gap-2">
          {[...Array(64)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-purple-400 rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Mentors Grid */}
          <div className="relative">
            {/* 1000+ Mentors text with search icon */}
            <div className="flex items-center mb-8 space-x-3">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
              </div>
         
            </div>

            {/* Mentors Grid */}
            <div className="mb-8 bg-white rounded-2xl p-6 shadow flex justify-center">
              <img
                src={mentorsGrid}
                alt="Mentors Group"
                className="w-full max-w-xl object-contain"
              />
            </div>

            {/* Start Preparing Notification */}
            <div className="bg-white rounded-xl shadow-lg p-4 max-w-xs border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-full border-2 border-white shadow-sm"></div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">"Start Preparing"</p>
                  <p className="text-xs text-gray-600 mt-1">Sakshi</p>
                </div>
              </div>
            </div>

            {/* People icon floating */}
           
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 lg:pl-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-indigo-900 leading-tight">
              One on One Mentorship
              <br />
              <span className="text-indigo-700">from mentors across globe</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Connect with mentors who've studied and worked at the universities and companies you dream about. Learn from their experiences, gain insider insights, and make informed decisions for your future.
            </p>
            
            <div className="pt-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold border-2 border-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mentorship
