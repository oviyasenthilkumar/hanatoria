import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      name: "Mr. Paul Pandi",
      company: "VASANTHAM GROUP OF COMPANIES",
      feedback:
        "Very Nice team to be work with this year and very eager to work for the upcoming years also happy to work and happy to spend the time with the team also thank you team hanatoria.",
      campaign: "Our Successfully Completed Diwali Campaign - 2024",
      image: "./assets/png/testi1.png",
    },
    {
      name: "Ms. Megan Smith",
      company: "XYZ ENTERPRISES",
      feedback:
        "Very Nice team to be work with this year and very eager to work for the upcoming years also happy to work and happy to spend the time with the team also thank you team hanatoria.",
      campaign: "Digital Marketing Campaign - 2024",
      image: "./assets/png/testi2.png",
    },
    {
      name: "Mr. Paul Pandi",
      company: "VASANTHAM GROUP OF COMPANIES",
      feedback:
        "Very Nice team to be work with this year and very eager to work for the upcoming years also happy to work and happy to spend the time with the team also thank you team hanatoria.",
      campaign: "Our Successfully Completed Diwali Campaign - 2024",
      image: "./assets/png/client1.png", // Replace with correct paths
    },
    {
      name: "Ms. Megan Smith",
      company: "XYZ ENTERPRISES",
      feedback:
        "Very Nice team to be work with this year and very eager to work for the upcoming years also happy to work and happy to spend the time with the team also thank you team hanatoria.",
      campaign: "Digital Marketing Campaign - 2024",
      image: "./assets/png/client2.png",
    },
  ];

  const settings = {
    autoplay: false,
    centerMode: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <FontAwesomeIcon icon={faArrowLeft} className="prev-arrow" />,
    nextArrow: <FontAwesomeIcon icon={faArrowRight} className="next-arrow" />,
    responsive: [
      {
        breakpoint: 1700,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 1200,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 991,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 575,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div
      className="container mx-auto p-4 sm:p-6 md:p-8 rounded-xl relative mb-[4rem] max-w-[1900px] "
      style={{
        backgroundImage: "url('/assets/svg/plain_dot.svg')",
      }}
    >
      <img
        src="/assets/png/Ellipse_right.png"
        alt="gradient"
        className="absolute top-0 right-0 "
      />
      <div className="text-center">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 font-inter font-medium leading-extra-loose text-[#1E1A1C]">
          What Our Clients Say
        </p>
        <h1 className="text-[#363435] text-lg sm:text-xl md:text-2xl mb-5 font-lexend font-light leading-7 ">
          Discover the impact we’ve made through our clients’ words.
        </h1>
      </div>

      <Slider {...settings} className="w-full">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex justify-center testimonial-cards md:px-[10px] "
          >
            <div className="bg-[#FFF5DE] p-[1.5rem 1.5rem 0 1.5rem]  rounded-lg w-full max-w-sm md:max-w-[21rem] lg:max-w-xl flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">
              {/* Profile Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 sm:w-20 lg:w-52  object-cover rounded-lg px-1 py-1"
              />

              {/* Testimonial Content */}
              <div className="text-center lg:text-left pr-2">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold font-inter">
                  {testimonial.campaign}
                </h3>
                <p className="text-[#1E1A1C] mt-2 text-xs sm:text-sm md:text-base font-lexend font-light">
                  "{testimonial.feedback}"
                </p>

                {/* User Details */}
                <div className="mt-4">
                  <p className="font-semibold text-[#F15A28] text-xs sm:text-xl leading-7 font-lexend">
                    {testimonial.name}
                  </p>
                  <p className="text-black text-xs sm:text-sm font-lexend font-normal">
                    {testimonial.company}
                  </p>
                </div>

                {/* Star Rating */}
                <div className="flex mt-4 text-yellow-400 justify-center lg:justify-start">
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star-half-alt"></span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsCarousel;
