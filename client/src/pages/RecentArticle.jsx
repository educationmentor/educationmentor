import React from "react";
import image4 from "../assets/images/image4.png";
import teamDiscussionImg from "../assets/images/image5.png";
import { Link } from "react-router-dom";

const RecentArticle = () => {
  const articles = [
    {
      id: 1,
      title: "Top 5 Mistakes Students Make in University Applications",
      excerpt: "Admissions Students Make and How to Avoid Them",
      author: "Full name",
      date: "11 Jan 2022",
      image: "business-meeting",
      hasImage: true,
    },
    {
      id: 2,
      title: "Blog title heading will go here",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      author: "Full name",
      date: "12 Jan 2022",
      image: "team-discussion",
      hasImage: true,
    },
    {
      id: 3,
      title: "Blog title heading will go here",
      date: "11 Jan 2022",
      hasImage: false,
    },
    {
      id: 4,
      title: "Blog title heading will go here",
      author: "Full name",
      date: "11 Jan 2022",
      hasImage: false,
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative wave pattern on the right */}
     

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
            Stay updated with expert advice, student stories, and the latest
            trends in higher education, career guidance, and global
            opportunities.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/study-in-usa"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition"
            >
              Explore Study in USA Guide
            </Link>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Main featured article - spans 2 columns */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-95 w-full flex items-center justify-center overflow-hidden relative">
              <img
                src={image4}
                alt="Business Meeting"
                className="absolute inset-0 w-full h-full object-cover"
              />
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
            <div className="h-95 w-full flex items-center justify-center overflow-hidden relative">
              <img
                src={teamDiscussionImg}
                alt="Team Discussion"
                className="absolute inset-0 w-full h-full object-cover"
              />
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
        </div>
      </div>
    </section>
  );
};

export default RecentArticle;
