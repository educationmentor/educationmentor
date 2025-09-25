import React from 'react'

const Flags = () => {
  const flags = [
    {
      id: 1,
      country: 'United Kingdom',
      code: 'GB',
      colors: ['bg-blue-600', 'bg-white', 'bg-red-600'],
      design: 'union-jack'
    },
    {
      id: 2,
      country: 'Guinea-Bissau',
      code: 'GW',
      colors: ['bg-red-600', 'bg-yellow-400', 'bg-green-600'],
      design: 'vertical-star'
    },
    {
      id: 3,
      country: 'Georgia',
      code: 'GE',
      colors: ['bg-white', 'bg-red-600'],
      design: 'cross'
    },
    {
      id: 4,
      country: 'Djibouti',
      code: 'DJ',
      colors: ['bg-blue-500', 'bg-green-600', 'bg-white'],
      design: 'triangle-star'
    },
    {
      id: 5,
      country: 'Uganda',
      code: 'UG',
      colors: ['bg-black', 'bg-yellow-400', 'bg-red-600'],
      design: 'horizontal-stripes'
    }
  ]

  // Duplicate flags for infinite scroll effect
  const duplicatedFlags = [...flags, ...flags, ...flags]

  const renderFlag = (flag) => {
    switch (flag.design) {
      case 'union-jack':
        return (
          <div className="relative w-full h-full bg-blue-600 overflow-hidden">
            {/* White background for crosses */}
            <div className="absolute inset-0 bg-white"></div>
            {/* Red cross vertical */}
            <div className="absolute left-1/2 top-0 w-2 h-full bg-red-600 transform -translate-x-1/2"></div>
            {/* Red cross horizontal */}
            <div className="absolute top-1/2 left-0 w-full h-2 bg-red-600 transform -translate-y-1/2"></div>
            {/* Blue corners */}
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-600"></div>
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-600"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-600"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-600"></div>
          </div>
        )
      
      case 'vertical-star':
        return (
          <div className="relative w-full h-full flex">
            <div className="w-1/3 bg-red-600 flex items-center justify-center">
              <div className="text-black text-lg">★</div>
            </div>
            <div className="w-1/3 bg-yellow-400"></div>
            <div className="w-1/3 bg-green-600"></div>
          </div>
        )
      
      case 'cross':
        return (
          <div className="relative w-full h-full bg-white">
            {/* Red cross vertical */}
            <div className="absolute left-1/2 top-0 w-3 h-full bg-red-600 transform -translate-x-1/2"></div>
            {/* Red cross horizontal */}
            <div className="absolute top-1/2 left-0 w-full h-3 bg-red-600 transform -translate-y-1/2"></div>
            {/* Small crosses in corners */}
            <div className="absolute top-2 left-2 w-2 h-2">
              <div className="absolute w-full h-0.5 bg-red-600 top-1/2 transform -translate-y-1/2"></div>
              <div className="absolute h-full w-0.5 bg-red-600 left-1/2 transform -translate-x-1/2"></div>
            </div>
            <div className="absolute top-2 right-2 w-2 h-2">
              <div className="absolute w-full h-0.5 bg-red-600 top-1/2 transform -translate-y-1/2"></div>
              <div className="absolute h-full w-0.5 bg-red-600 left-1/2 transform -translate-x-1/2"></div>
            </div>
            <div className="absolute bottom-2 left-2 w-2 h-2">
              <div className="absolute w-full h-0.5 bg-red-600 top-1/2 transform -translate-y-1/2"></div>
              <div className="absolute h-full w-0.5 bg-red-600 left-1/2 transform -translate-x-1/2"></div>
            </div>
            <div className="absolute bottom-2 right-2 w-2 h-2">
              <div className="absolute w-full h-0.5 bg-red-600 top-1/2 transform -translate-y-1/2"></div>
              <div className="absolute h-full w-0.5 bg-red-600 left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
        )
      
      case 'triangle-star':
        return (
          <div className="relative w-full h-full flex flex-col">
            <div className="h-1/2 bg-blue-500"></div>
            <div className="h-1/2 bg-green-600"></div>
            <div className="absolute left-0 top-0 w-0 h-0 border-t-[30px] border-t-blue-500 border-r-[40px] border-r-transparent border-b-[30px] border-b-green-600"></div>
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-sm">★</div>
          </div>
        )
      
      case 'horizontal-stripes':
        return (
          <div className="w-full h-full flex flex-col">
            <div className="flex-1 bg-black"></div>
            <div className="flex-1 bg-yellow-400"></div>
            <div className="flex-1 bg-red-600"></div>
            <div className="flex-1 bg-black"></div>
            <div className="flex-1 bg-yellow-400"></div>
            <div className="flex-1 bg-red-600"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-red-600 rounded-full"></div>
              </div>
            </div>
          </div>
        )
      
      default:
        return <div className="w-full h-full bg-gray-300"></div>
    }
  }

  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Countries We Serve
        </h2>
        
        {/* Scrolling Container */}
        <div className="relative">
          <div className="flex animate-scroll space-x-8">
            {duplicatedFlags.map((flag, index) => (
              <div
                key={`${flag.id}-${index}`}
                className="flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-gray-200"
              >
                {renderFlag(flag)}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default Flags
