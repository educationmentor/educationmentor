import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./hero";
import Feature from "./feature";
import CareerCounselling from "./CareerCounselling";
import Visa from "./Visa";
import Mentorship from "./Mentorship";
import Flags from "./Flags";
import RecentArticle from "./RecentArticle";
import GetStarted from "./GetStarted";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Feature />
      <CareerCounselling />
      <Visa />
      <Mentorship />
      <Flags />
      <RecentArticle />
      <GetStarted />
      <Footer />
    </>
  );
};

export default Home;
