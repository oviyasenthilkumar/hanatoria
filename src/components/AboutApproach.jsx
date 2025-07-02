
import React from "react";

const cardData = [
  {
    title: "Collaborative Partnership",
    image: "/assets/png/target.png",
    content:
      "Your vision is at the heart of what we do. We work closely with you to understand your goals and bring them to life.",
    altText: "Target Icon",
  },
  {
    title: "Tailored Solutions",
    image: "/assets/png/needle.png",
    content:
      "No two projects are the same. We deliver designs uniquely crafted to fit your brand and audience.",
    altText: "Needle Icon",
  },
  {
    title: "Focus on Impact",
    image: "/assets/png/trophy.png",
    content:
      "Every design we create is purposeful, meaningful, and aimed at achieving tangible results.",
    altText: "Trophy Icon",
  },
];

const OurApproach = () => {
  return (
    <div className="max-w-[1800px] mx-auto px-5 mt-14">
      <div className="text-center mb-10">
        <h1 className="font-medium text-4xl lg:text-6xl font-inter leading-extra-loose ">
          Our Approach
        </h1>
        <p className="text-lg lg:text-2xl font-light font-lexend mt-4 leading-8 ">
          We turn ideas into impactful, creative solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 max-w-5xl 2xl:max-w-6xl m-auto">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-[#FFFCF2] border-[1px] rounded-lg p-8 flex flex-col items-center text-center"
          >
            <img
              src={card.image}
              alt={card.altText}
              className="w-16 lg:w-20 mb-5"
            />
            <h2 className="font-medium text-xl lg:text-2xl font-inter leading-7 ">
              {card.title}
            </h2>
            <p className="text-sm lg:text-lg font-lexend font-light text-[#1E1A1C] leading-6 mt-3">
              {card.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurApproach;
