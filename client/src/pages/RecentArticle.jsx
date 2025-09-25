import React from 'react'
import image4 from '../assets/images/image4.png';
import teamDiscussionImg from '../assets/images/image5.png';

const RecentArticle = () => {
  const articles = [
    {
      id: 1,
      title: "Top 5 Mistakes Students Make in University Applications",
      excerpt: "Admissions Students Make and How to Avoid Them",
      author: "Full name",
      date: "11 Jan 2022",
      image: "business-meeting",
      hasImage: true
    },
    {
      id: 2,
      title: "Blog title heading will go here",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      author: "Full name",
      date: "12 Jan 2022",
      image: "team-discussion",
      hasImage: true
    },
    {
      id: 3,
      title: "Blog title heading will go here",
      date: "11 Jan 2022",
      hasImage: false
    },
    {
      id: 4,
      title: "Blog title heading will go here",
      author: "Full name",
      date: "11 Jan 2022",
      hasImage: false
    }
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative wave pattern on the right */}
      <div className="absolute top-20 right-10">
        <svg width="120" height="200" viewBox="0 0 120 200" className="text-blue-300 opacity-30">
          <path d="M20 0 Q60 40 20 80 T20 160 Q60 200 20 200" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path d="M40 0 Q80 40 40 80 T40 160 Q80 200 40 200" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path d="M60 0 Q100 40 60 80 T60 160 Q100 200 60 200" stroke="currentColor" strokeWidth="3" fill="none"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <span className="bg-purple-100 text-purple-700 px-6 py-2 rounded-full font-medium text-sm">
              Our Blogs
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Don't miss our recent articles
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with expert advice, student stories, and the latest trends in higher education, career guidance, and global opportunities.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Main featured article - spans 2 columns */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 w-full flex items-center justify-center overflow-hidden relative">
              <img 
                src={image4} 
                alt="Business Meeting" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center mx-auto mb-2 shadow-md overflow-hidden">
                  <img 
                    src={image4} 
                    alt="Business Meeting" 
                    className="w-12 h-12 object-cover rounded-full" 
                  />
                </div>
                <p className="text-sm text-gray-500">Business Meeting</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                {articles[0].title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {articles[0].excerpt}
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>{articles[0].author}</span>
                <span className="mx-2">•</span>
                <span>{articles[0].date}</span>
              </div>
            </div>
          </div>

          {/* Second featured article - spans 2 columns */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 w-full flex items-center justify-center overflow-hidden relative">
              <img 
                src={teamDiscussionImg} 
                alt="Team Discussion" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center mx-auto mb-2 shadow-md overflow-hidden">
                  <img 
                    src={teamDiscussionImg} 
                    alt="Team Discussion" 
                    className="w-12 h-12 object-cover rounded-full" 
                  />
                </div>
                <p className="text-sm text-gray-500">Team Discussion</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                {articles[1].title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {articles[1].excerpt}
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>{articles[1].author}</span>
                <span className="mx-2">•</span>
                <span>{articles[1].date}</span>
              </div>
            </div>
          </div>

          {/* Small article cards */}
          {/* <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                </svg>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                {articles[2].title}
              </h3>
              <p className="text-sm text-gray-500">{articles[2].date}</p>
            </div>
          </div> */}

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                </svg>
              </div>
            </div> */}
            {/* <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                {articles[3].title}
              </h3>
              <div className="flex items-center text-sm text-gray-500">
                <span>{articles[3].author}</span>
                <span className="mx-2">•</span>
                <span>{articles[3].date}</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecentArticle
