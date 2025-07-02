import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import "./Work.css";

const OurWorks = () => {
  const projects = [
    {
      id: 1,
      img: "/assets/png/works/works1.png",
      title: "Farma Herencia",
      para: "We designed Farma Herencia’s packaging to blend tradition with modern appeal, capturing the rich essence of their authentic masalas.",
    },
    {
      id: 2,
      img: "/assets/png/works/works2.png",
      title: "Phytonutics",
      para: "Our label design and A+ content for Phytonutics showcase their dedication to delivering safe, effective, and high-quality botanical solutions.",
    },
    {
      id: 3,
      img: "/assets/png/works/works3.png",
      title: "Fincliniq",
      para: "We enhanced Fincliniq's digital presence through impactful social media branding, showcasing their expertise in and financial solutions.",
    },
    {
      id: 4,
      img: "/assets/png/works/works4.png",
      title: "Eyeshore",
      para: "We crafted Eyeshore's brand identity to reflect clarity, style, and innovation, ensuring a sharp presence across social media platforms",
    },
    {
      id: 5,
      img: "/assets/png/works/works5.png",
      title: "FOCAS",
      para: "We designed logos, website banners, and social media posters for Focas an Edtech Platform, capturing their vision of innovative and engaging education.",
    },
  ];

  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,

    prevArrow: (
      <FontAwesomeIcon icon={faArrowLeft} className="prev-arrow-work" />
    ),
    nextArrow: (
      <FontAwesomeIcon icon={faArrowRight} className="next-arrow-work" />
    ),
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      className="py-10 "
      style={{
        backgroundImage: "url('/assets/svg/plain_dot.svg')",
      }}
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl lg:text-[4rem] leading-[4rem] font-medium text-gray-800 font-inter">
          Explore Our Work
        </h2>
        <p className="text-gray-600 text-2xl leading-[1.875rem] mt-6 mb-8 font-lexend font-light">
          See the Difference Professional Design Can Make
        </p>
      </div>
      <div className="container mx-auto px-4 relative max-w-full mt-10">
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="px-2">
              <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay that appears on hover */}
                <div
                  className="absolute bottom-0 left-0 w-full h-3/4 lg:h-4/5 bg-gradient-to-t 
                             from-black to-transparent translate-y-full opacity-0 group-hover:translate-y-0 
                             group-hover:opacity-100 transition-all duration-500 flex flex-col px-5"
                >
                  {/* Left Column: Title and Paragraph */}
                  <div className="w-[100%]  p-4">
                    <h3 className="text-white text-lg font-semibold mb-2 font-inter">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm font-lexend">
                      {project.para}
                    </p>
                  </div>
                  {/* Right Column: Button */}
                  <div className="w-[100%]  flex items-center lg:justify-center">
                    <button className="font-inter text-sm py-2 px-6 bg-transparent border-2 text-white text-center rounded-full hover:bg-gray-200 hover:text-black transition-all">
                      <Link to="/works">View Project</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-start md:justify-end mt-4">
          <Link to="/works">
            <button className="bg-black text-white py-2 md:py-4 px-6 rounded-full font-bold text-base leading-8 hover:bg-gray-800 font-inter">
              VIEW ALL PROJECTS
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
