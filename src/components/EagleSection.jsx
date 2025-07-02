import React from "react";
import { Link } from "react-router-dom";

const EagleSection = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-[80vh] px-4 bg-gradient-to-b from-white to-gray-100"
      style={{
        backgroundImage: "url('/assets/svg/plain_dot.svg')",
      }}
    >
      {/* Bird Image with Background */}
      <div
        className="relative flex items-center justify-center w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
        style={{
          backgroundImage: "url('/assets/png/lets connect.png')", // Background image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "50%",
        }}
      >
        <img
          src="/assets/png/bird.png"
          alt="Eagle"
          className="object-contain w-72 h-72 md:w-80 md:h-80 lg:w-full lg:h-full"
        />
      </div>

      {/* Text Section */}
      <h1 className="mt-6 text-center text-2xl font-medium md:text-[4rem] leading-[3.75rem] 2xl:text-5xl font-inter max-w-7xl">
        500+ People like you Trust <br />
        Hanatoria for
        <span className="text-[#F15A28]"> Design Excellence</span>
      </h1>

      <p className="mt-4 text-center text-gray-600 text-sm md:text-base lg:text-xl max-w-3xl leading-[1.875rem] font-lexend font-light">
        Join hundreds of businesses creating impactful identities and
        unforgettable experiences with our innovative design solutions. Let’s
        bring your vision to life!
      </p>

      {/* Button */}
      <button className="mt-6 px-6 py-3 text-white bg-black rounded-full leading-8 shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black mb-3 md:mb-5 2xl:w-[14%] h-16 text-base font-bold font-inter">
        <Link to="/contact">GET STARTED NOW</Link>
      </button>
    </div>
  );
};

export default EagleSection;
