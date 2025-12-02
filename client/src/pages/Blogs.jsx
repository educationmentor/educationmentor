import React,{useEffect, useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import ActionAreaCard from "../components/card";
import MenuIcon from '@mui/icons-material/Menu';
import { TextField, InputAdornment } from '@mui/material';
import { useLocation } from "react-router-dom";
import { destinationData } from "../util/destinationData";

const categoriesMap = {viewAll:"View all", Destination:"Destinations", university:"Universities", general:"General"};
  const categories = Object.keys(categoriesMap);
 
  const StudyDestinations = ({ categoryDefault="viewAll" }) => {
      const location = useLocation();
      // useEffect(() => {
      //     setSelectedButton(0); // Select the first category by default
      // }, [categoryDefault]);
      categoryDefault = String(location.search.category)==="undefined"?categoryDefault:String(location.search.category);
      const [selectedButton, setSelectedButton] = useState(categories.indexOf(categoryDefault));
  
      const [selectedCategory, setSelectedCategory] = useState(categoryDefault);
      console.log(selectedCategory);
      const handleCategoryChange = (category) => {
        setSelectedCategory(category);
      };
      console.log(categoryDefault);
      const [searchTerm, setSearchTerm] = useState("");
  
    
      // Filter blogs based on the selected category and budget
      const filteredBlogs = selectedCategory === "viewAll"
        ? destinationData.filter(destination => destination.title.toLowerCase().includes(searchTerm.toLowerCase()))
        : destinationData.filter(destination => {
            let matchesCategory = destination.category === selectedCategory;
            const matchesSearch = destination.title.toLowerCase().includes(searchTerm.toLowerCase());
            
            // Add budget filtering for budget categories
            let matchesBudget = true;
            if (selectedCategory === "under25" && destination.budget) {
              matchesCategory = destination.category==="University";
              matchesBudget = destination.budget == 'under25'; // 25 lakhs in rupees
            } else if (selectedCategory === "under35" && destination.budget) {
              matchesCategory = destination.category==="University";
              matchesBudget = destination.budget == 'under35'; // 25-35 lakhs
            } else if (selectedCategory === "under40" && destination.budget) {
              matchesCategory = destination.category==="University";
              matchesBudget = destination.budget == 'under40'; // 35-40 lakhs
            } else if (selectedCategory === "above40" && destination.budget) {
              matchesCategory = destination.category==="University";
              matchesBudget = destination.budget == 'above40'; // above 40 lakhs
            }
            console.log(matchesCategory);
            return matchesCategory && matchesSearch && matchesBudget;
          });
    
      return (
          <div className="mx-[12px] sm:mx-[16px] md:mx-[32px] lg:mx-[64px] my-[60px] lg:my-[80px] xl:my-[120px]  ">
              <span className="flex justify-center  font-semibold text-[16px] md:text-[18px] lg:text-[20px] ">Blogs</span>
          <h2 className='mt-[8px]  lg:mt-[8px] text-buttonpurple  mb-[8px] md:mb-[16px]   flex justify-center font-bold text-[24px] md:text-[56px]' >Learning Section</h2>
          <span className='flex justify-center text-[12px] md:text-[18px] mb-[4vw]' >Educate yourself to make right career choices  </span>
          
          <section className="mb-[16px] md:mb-[32px] mx-[-12px] sm:mx-[-16px] md:mx-[0px] lg:mb-[32px] xl:mb-[48px] overflow-x-auto whitespace-nowrap md:overflow-x-visible md:whitespace-normal md:flex justify-center md:flex-row gap-[8px] md:gap-[20px] lg:gap-[24px] flex-wrap">
        {categories.map((name, index) => (
          <div
            key={index}
            onClick={() => handleCategoryChange(name)}
            className={`inline-flex  mx-[4px] md:mx-0 ${
              selectedButton === index ? 'border-1' : 'border-2 border-dotted'
            } rounded-[32px] items-center justify-center relative leading-[150%]`}
          >
            <button
              className={`min-w-[82px] text-[12px]  md:text-[1rem] leading-tight  rounded-[32px]   ${
                selectedButton === index ? '   py-[9px] px-[18px]' : 'hover:bg-gray-200 cursor-pointer py-[8px] px-[16px]'
              }`}
              onClick={() => setSelectedButton(index)}
            >
              {categoriesMap[name]}
            </button>
          </div>
        ))}
          </section>
  
          <div className="grid grid-cols-2 md:grid-cols-3 md:max-w-[1312px] max-w-[616px]  grid-flow-row justify-center mx-auto gap-[16px] md:gap-[16px] lg:gap-[24px] xl:gap-[32px] ">
        {filteredBlogs.map((blog, index) => (
          <div key={index}>
             <ActionAreaCard href={blog.href} image={blog.image} title={blog.title} category={blog.category}
        description= {blog.description}/>
  
          </div>
        ))}
      </div>
  
  
          </div>
  
  
  
      )
  }

  export default StudyDestinations;