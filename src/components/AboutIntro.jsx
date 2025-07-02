import React from "react";
import ImageCarousal from "./ImageCarousal";

const AboutIntro = () => {
  return (
    <div className="flex flex-col items-center overflow-hidden">
      {/* Main Content */}
      <img
        src="./assets/png/gradient.png"
        alt="gradient"
        className="z-0 absolute top-[0%] w-full h-full left-[0%] "
      />
      <div className="flex flex-col items-center px-4 sm:px-10 lg:px-20 py-10 gap-5">
        <h1 className="text-3xl sm:text-5xl text-center font-inter lg:text-6xl font-medium leading-extra-loose">
          About <span className="text-[#F15A28]">HanaToria</span>
        </h1>
        <div>
          <p className="text-center text-base sm:text-lg lg:text-xl leading-8 font-light font-lexend max-w-2xl">
            At Hanatoria, we don’t just design—we craft stories, create
            experiences, and shape ideas into reality. Guided by creativity,
            innovation, and an unwavering commitment to quality, we help brands
            build lasting impressions in a competitive world.
          </p>
        </div>
      </div>
      {/* Carousel */}
      <ImageCarousal />
    </div>
  );
};

export default AboutIntro;
