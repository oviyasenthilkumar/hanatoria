import React from "react";
import Header from "../Header";
import HeroSection from "../HeroSection";
import Services from "../Services";
import Logo from "../Logo";
import TestimonialsCarousel from "../TestimonialsCarousel";
import OurWorks from "../Works";
import About from "../About";
import "../../index.css";
import EagleSection from "../EagleSection";
import FooterWithMenu from "../Footer";
// import "../Work.css"


const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <OurWorks />
      <About />
      <Services />
      <Logo />
      <TestimonialsCarousel />
      <EagleSection/>
      <FooterWithMenu/>
    </>
  );
};

export default Home;
