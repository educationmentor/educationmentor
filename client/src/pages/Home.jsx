import React, { useState,useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./Home/Hero";
import Feature from "./Home/feature";
import CareerCounselling from "./Home/CareerCounselling";
import Visa from "./Home/Visa";
import Mentorship from "./Home/Mentorship";
import Flags from "./Home/Flags";
import RecentArticle from "./Home/RecentArticle";
import ConsultationForm from "../components/ConsultationForm";

const Home = () => {
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

useEffect(() => {
const timeouts= [];

const showFormAtIntervals = () => {
  timeouts.push(
    setTimeout(() => {
      setShowConsultationForm(true);
    }, 1 * 1000) // After 30 seconds
  );

  timeouts.push(
    setTimeout(() => {
      setShowConsultationForm(true);
    }, (1 * 60) * 1000) // After 5 minutes
  );

  timeouts.push(
    setTimeout(() => {
      setShowConsultationForm(true);
    }, (10 * 60) * 1000) // After 20 minutes
  );
};

showFormAtIntervals();

// Clean up on unmount
return () => {
  timeouts.forEach(clearTimeout);
};
}, []);
  return (
    <>
      <Hero />
      <Feature />
      <CareerCounselling />
      <Visa />
      <Mentorship />
      <Flags />
      <RecentArticle />
      {/* 💬 Show Consultation Form when triggered */}
      {showConsultationForm && (
        <div className="fixed top-0 left-0 w-full h-screen  bg-opacity-50 
                       flex items-center justify-center z-50 
                       animate-in fade-in duration-300">
          <ConsultationForm onClose={() => setShowConsultationForm(false)} />
        </div>
      )}
    </>
  );
};

export default Home;
