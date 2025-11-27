import React from 'react'

const Flags = () => {
  const flags = [
    {
      id: 1,
      country: 'United Kingdom',
      code: 'GB',
      img: 'https://flagcdn.com/gb.svg'
    },
    {
      id: 2,
      country: 'United States',
      code: 'US',
      img: 'https://flagcdn.com/us.svg'
    },
    {
      id: 3,
      country: 'India',
      code: 'IN',
      img: 'https://flagcdn.com/in.svg'
    },
    {
      id: 4,
      country: 'France',
      code: 'FR',
      img: 'https://flagcdn.com/fr.svg'
    },
    {
      id: 5,
      country: 'Japan',
      code: 'JP',
      img: 'https://flagcdn.com/jp.svg'
    },
    {
      id: 6,
      country: 'Germany',
      code: 'DE',
      img: 'https://flagcdn.com/de.svg'
    },
    {
      id: 7,
      country: 'Canada',
      code: 'CA',
      img: 'https://flagcdn.com/ca.svg'
    },
    {
      id: 8,
      country: 'Australia',
      code: 'AU',
      img: 'https://flagcdn.com/au.svg'
    }
    // ...add more as needed...
  ]

  // Duplicate flags for infinite scroll effect
  const duplicatedFlags = [...flags, ...flags, ...flags]

  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Countries We Serve
        </h2>
        
        {/* Scrolling Container */}
        <div className="relative">
          <div className="flex animate-scroll space-x-8"
            style={{ transform: `translateX(-${flags.length-100}rem)` }} // shift initial scroll position
          >
            {duplicatedFlags.map((flag, index) => (
              <div
                key={`${flag.id}-${index}`}
                className="flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden  transition-shadow duration-300 border-2 border-gray-200 flex items-center justify-center bg-white"
              >
                <img
                  src={flag.img}
                  alt={flag.country}
                  className="object-contain w-full h-full"
                  title={flag.country}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

     
    </section>
  )
}

export default Flags
