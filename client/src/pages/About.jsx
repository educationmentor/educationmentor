import React from "react";

import AboutHero from "./About/AboutHero";
import OurStory from "./About/OurStory";
import Founders from "./About/Founders";
import VisionMission from "./About/VisionMission";
import Values from "./About/Values";
import AboutCTA from "./About/AboutCTA";

const About = () => {
  return (
    <main className="overflow-hidden">
      <AboutHero />
      <OurStory />
      <Founders />
      <VisionMission />
      <Values />
      <AboutCTA />
    </main>
  );
};

export default About;