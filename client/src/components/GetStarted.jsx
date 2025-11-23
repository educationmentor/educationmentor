import image6 from "../assets/images/getStartedImg.png";
import { FaArrowRightLong } from "react-icons/fa6";
import React, { useState,useEffect } from "react";
import ConsultationForm from "./ConsultationForm";

const GetStarted = () => {
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  useEffect(() => {
    if (showConsultationForm) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [showConsultationForm]);
  return (
    <section className="pb-20 pt-50 bg-gray-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-16 left-56 w-16 h-16 border-8 border-green-200 rounded-full opacity-60"></div>
      <div className="absolute top-15 right-0 md:right-10 w-32 h-32 bg-purple-200 rounded-full opacity-50"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-30"></div>

      {/* Big parent div recreated */}
      <div className="relative mx-[8.33vw] rounded-2xl  bg-[#eae7e3]">
        {/* Flex container for main content */}
        <div className="md:flex grid items-center ">
          {/* Main box */}
          <div className="rounded-2xl w-full flex items-center font-poppins  px-10 py-12 min-h-[20rem] z-10 md:max-w-[420px] lg:max-w-[590px]">
            {/* Text and button */}
            <div className="max-w-lg">
              <h2 className="text-h4TextPhone md:text-h4Text font-bold text-[#060C61] mb-2  leading-[120%]">
                Are you ready to fly &<br />
                <span className="text-h5TextPhone md:text-h5Text text-[#060C61] leading-[120%] font-normal">
                  pursue your dreams?
                </span>
              </h2>
              <p className="text-smallTextPhone md:text-regularText  text-[#555] mb-7 mt-2">
                Your journey to world-class education starts here. Let our
                mentors help you unlock opportunities and shape your future.
              </p>
              <button onClick={()=>setShowConsultationForm(true)} className="mt-2 bg-white text-black font-semibold rounded-full px-7 py-3 flex items-center gap-2 shadow transition hover:bg-gray-100">
                Get Started
                <FaArrowRightLong className="w-5 h-5" />
              </button>
            </div>
            {/* Spacer for image overlap */}
          </div>
          <img
            src={image6}
            alt="Confident woman ready to pursue her dreams"
            className="hidden md:block md:absolute mx-auto md:right-[2vw] lg:right-[6vw] bottom-0 w-80 md:w-[250px] lg:w-[280px] h-auto object-contain z-20"
            style={{ maxHeight: "1080px" }}
          />
        </div>
      </div>  
      {showConsultationForm && (
        <div className="fixed top-0 left-0 w-full h-screen  bg-opacity-50 
                       flex items-center justify-center z-50 
                       animate-in fade-in duration-300">
          <ConsultationForm onClose={() => setShowConsultationForm(false)} />
        </div>
      )}
    </section>
  );
};

export default GetStarted;
