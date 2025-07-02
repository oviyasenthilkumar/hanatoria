import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const items = [
  {
    title: "Celebrating Milestones at the AWS Event Conference!",
    description:
      "We’re excited to reflect on our journey of growth and success over the last two years. From supporting over 500 clients to enhancing digital presence for startups and enterprises, Hanatoria continues to deliver affordable, high-quality design solutions. A special thanks to Aalmaram Startup Incubator for their continued support, which made our participation in the AWS Event Conference possible. Grateful for the journey and looking forward to the future! 🚀",
    image: "assets/png/awsEventImage.png",
  },
  {
    title: "Another Amazing Event!",
    description:
      "This event highlighted the achievements of our team and how we’ve consistently delivered impactful results for our clients. Special thanks to all our partners and team members for making it possible.",
    image: "assets/png/awsEventImage.png",
  },
  {
    title: "Looking Ahead to New Opportunities",
    description:
      "With the success of the recent conference, we’re gearing up for the future with exciting new opportunities and projects to make a greater impact in the industry.",
    image: "assets/png/awsEventImage.png",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(newIndex);
  };

  const slideWidth = 100 / (window.innerWidth >= 700 ? 2 : 1); // Adjust slide width dynamically

  return (
    <div className="relative w-full max-w-[90%] mx-auto py-8">
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <ul
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}
        >
          {items.map((item, idx) => (
            <li
              key={idx}
              className="flex-shrink-0 w-full md:w-[50%] px-4 bg-[#fff8e6] rounded-xl shadow-md m-2 flex flex-col lg:flex-row"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 py-3 md:h-auto lg:w-1/2 object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
              />
              {/* Content */}
              <div className="flex flex-col justify-center items-start p-4 md:p-6 w-full lg:w-1/2">
                <h3 className="text-lg lg:text-2xl font-semibold text-black mb-2 font-inter leading-8">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base leading-6 text-[#1E1A1C] font-light font-lexend">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* Navigation Buttons */}
      <div className="absolute -bottom-[2rem] flex justify-center w-full px-4">
        <button
          className=" text-black border-2 border-solid px-3 py-1 rounded-full hover:bg-orange-500 hover:text-white text-[1.5rem] mr-2"
          onClick={prevSlide}
        >
         <FontAwesomeIcon icon={faArrowLeft}/>
        </button>
        <button
          className="text-black border-2 border-solid px-3 py-1 rounded-full hover:bg-orange-500 hover:text-white text-[1.5rem] ml-2"
          onClick={nextSlide}
        >
          <FontAwesomeIcon icon={faArrowRight}/>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
