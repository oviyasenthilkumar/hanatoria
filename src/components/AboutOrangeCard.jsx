import React from "react";
const AboutOrangeCard = () => {
  return (
    <div className="flex justify-center items-center md:h-[50vh] ">
      <div className="bg-[#F15A28] text-white flex flex-row  w-[85%] md:w-[80%] mx-auto  rounded-md relative h-[90%] ">
        <div className=" absolute top-0 left-0 w-[38%]   ">
          <img
            src="/assets/png/orangecardImage.png"
            alt="orange card image"
            className="w-[40%]"
          />
        </div>

        <div className="flex flex-col items-center gap-5 justify-center w-full">
          <h1 className="text-3xl lg:text-6xl font-medium font-inter leading-extra-loose">
            Who We Are
          </h1>
          <p className="text-center text-sm md:text-lg lg:text-xl p-2 w-[75%] font-lexend font-light leading-8 md:max-w-2xl ">
            We are a passionate team of designers, creators, and strategists
            dedicated to delivering impactful, high-quality solutions. With
            expertise spanning branding, UI/UX, digital design, and more, we
            thrive on turning visions into compelling realities that connect
            with audiences and drive success.
          </p>
        </div>

        <div className="absolute bottom-0 right-0 w-[38%]  flex flex-row-reverse  ">
          <img
            src="assets/png/orangecardassetTwo.png"
            alt="orange card image"
            className="w-[40%]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutOrangeCard;
