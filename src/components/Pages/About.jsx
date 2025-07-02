import React from "react";
import Header from "../Header";
import EagleSection from "../EagleSection";
import FooterWithMenu from "../Footer";
import AboutIntro from "../AboutIntro";
import AboutOrangeCard from "../AboutOrangeCard";
import AboutApproach from "../AboutApproach";
import AboutFounder from "../AboutFounder";

import AchivementsCarousal from "../AchivementsCarousal";

const About = () => {
  return (
    <div>
      <Header />
      <AboutIntro />
      <AboutOrangeCard />
      <AboutApproach />
      <AboutFounder />
      <AchivementsCarousal/>
      <FooterWithMenu />
    </div>
  );
};

export default About;
