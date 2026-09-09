import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import ActionAreaCard from "../../components/card";
import { destinationData } from "../../util/destinationData";

const categoriesMap = {
viewAll: "View all",
Destination: "Destinations",
university: "Universities",
general: "General",
};

const categories = Object.keys(categoriesMap);

const AllBlogs = () => {
const [selectedCategory, setSelectedCategory] = useState("viewAll");
const [showAll, setShowAll] = useState(false);

const INITIAL_BLOGS = 6;

// Same filtering logic as Blogs.jsx
const filteredBlogs =
selectedCategory === "viewAll"
? destinationData
: destinationData.filter(
(blog) => blog.category === selectedCategory
);

// Show only first 6 initially
const visibleBlogs = showAll
? filteredBlogs
: filteredBlogs.slice(0, INITIAL_BLOGS);

const handleCategoryChange = (category) => {
setSelectedCategory(category);

// Reset when changing category
setShowAll(false);


};

return ( <section
   id="blogs"
   className="py-20 sm:py-28 bg-[#F7F5F0] relative overflow-hidden"
 >
{/* Background decoration */} <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#A9A7D8]/20 blur-[100px]" />


  <div className="relative max-w-7xl mx-auto px-5 sm:px-6">

    {/* Heading */}
    <div className="text-center max-w-2xl mx-auto mb-12">

      <p className="text-[#F07C62] font-semibold text-sm uppercase tracking-[0.18em]">
        Blogs
      </p>

      <h2 className="text-3xl sm:text-5xl font-semibold text-[#172033] mt-3">
        Learn before
        <span className="text-[#5964B5]">
          {" "}you decide.
        </span>
      </h2>

      <p className="text-[#5964B5] mt-4 text-sm sm:text-base leading-relaxed">
        Educate yourself to make better and smarter career choices.
      </p>

    </div>

    {/* Categories */}
    <div className="flex justify-start md:justify-center gap-3 overflow-x-auto pb-3 mb-10">

      {categories.map((category) => {
        const isActive = selectedCategory === category;

        return (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`
              whitespace-nowrap
              px-5 py-2.5
              rounded-full
              text-sm font-semibold
              transition-all duration-300
              ${
                isActive
                  ? "bg-[#172033] text-[#F7F5F0] shadow-lg"
                  : "bg-white text-[#172033] border border-[#A9A7D8]/40 hover:bg-[#A9A7D8]/20"
              }
            `}
          >
            {categoriesMap[category]}
          </button>
        );
      })}

    </div>

    {/* Blog Cards */}
    <div
      className="
        grid
        grid-cols-2
        md:grid-cols-3
        gap-4
        md:gap-6
        lg:gap-8
      "
    >
      {visibleBlogs.map((blog, index) => (
        <div
          key={blog.id || index}
          className="animate-in fade-in slide-in-from-bottom-4 duration-500"
        >
          <ActionAreaCard
            href={blog.href}
            image={blog.image}
            title={blog.title}
            category={blog.category}
            description={blog.description}
          />
        </div>
      ))}
    </div>

    {/* See All / Show Less */}
    {filteredBlogs.length > INITIAL_BLOGS && (
      <div className="flex justify-center mt-12">

        <button
          onClick={() => setShowAll(!showAll)}
          className="
            group
            inline-flex
            items-center
            gap-3
            px-7
            py-3.5
            rounded-full
            font-semibold
            bg-[#172033]
            text-[#F7F5F0]
            transition-all
            duration-300
            hover:bg-[#5964B5]
            hover:-translate-y-1
            hover:shadow-xl
          "
        >
          {showAll ? "Show less" : "See all blogs"}

          {showAll ? (
            <ChevronUp
              size={18}
              className="transition-transform duration-300"
            />
          ) : (
            <ChevronDown
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-y-1
              "
            />
          )}

        </button>

      </div>
    )}

  </div>
</section>


);
};

export default AllBlogs;
