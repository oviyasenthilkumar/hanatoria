import React from "react";
import { Link } from "react-router-dom";
import { TypewriterEffectSmoothDemo } from "./Type";
const HeroSection = () => {
  return (
    <section
      className="relative py-16 px-6 bg-custom-gradient z-0"
      style={{
        backgroundImage: "url('/assets/svg/plain_dot.svg')",
      }}
    >
      <img
        src="./assets/png/gradient.png"
        alt="gradient"
        className="z-0 absolute top-[0%] w-full h-full md:top-[2%] lg:top-[0%]  left-[0%] "
      />
      <div className="container mx-auto h-[75vh] text-center flex flex-col justify-center align-center z-20">
        {/* Static Text */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-normal text-gray-900 md:leading-[116px] font-inter z-20">
          Premium Designs That Transform <br />
          <span className="text-orange-500">
            {/* Typing Animation */}
            <TypewriterEffectSmoothDemo />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-gray-600 text-lg md:text-xl lg:text-[2rem]  leading-8 font-normal font-inter z-20">
          Affordable, Unique, and Tailored to Your Vision.
        </p>

        {/* Button */}
        <div className="mt-20 z-20">
          <Link to="/contact">
            <button className="bg-black sm:w-[50%] lg:w-[15%] hover:bg-[#F15A28] text-white px-6 py-4 rounded-full text-base leading-8 font-bold transition font-inter">
              LET'S TALK
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
