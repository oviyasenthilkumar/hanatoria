import React from "react";

const HowWeWork = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 ">
      {/* Heading */}
      <h1 className="text-3xl font-medium font-inter  text-center md:text-5xl leading-extra-loose lg:text-6xl">
        How We Work
      </h1>
      <p className="mt-2 text-center text-[#363435] md:text-lg lg:text-2xl font-lexend font-light leading-7">
        A Methodical Process for Exceptional Design
      </p>

      {/* Full Image Section */}
      <div className="relative mt-10 w-full max-w-5xl">
        <img
          src="assets/SVG/we_work_dsk.svg"
          alt="How We Work Process"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default HowWeWork;
