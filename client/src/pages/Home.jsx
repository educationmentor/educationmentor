import React, { useState, useEffect } from "react";

import Hero from "./Home/Hero";
import TrustStats from "./Home/TrustStats";
import WhyChooseUs from "./Home/Whychooseus";
import StudentJourney from "./Home/StudentJourney";
import Destinations from "./Home/Destinations";
import AllBlogs from "./Home/Allblogs";
import FinalCTA from "./Home/Finalcta";

import ConsultationForm from "../components/ConsultationForm";

const Home = () => {
  const [showConsultationForm, setShowConsultationForm] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showConsultationForm
      ? "hidden"
      : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showConsultationForm]);

  return (
    <>
      <Hero onConsultation={() => setShowConsultationForm(true)} />

      <TrustStats />

      <WhyChooseUs />

      <StudentJourney />

      <Destinations />

      <AllBlogs />

      <FinalCTA
        onConsultation={() => setShowConsultationForm(true)}
      />

      {showConsultationForm && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#172033]/70 backdrop-blur-sm animate-fadeIn">
          <ConsultationForm
            onClose={() => setShowConsultationForm(false)}
          />
        </div>
      )}
    </>
  );
};

export default Home;