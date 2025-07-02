import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Brand Strategy & Identity",
    icon: "/assets/png/brand.png",
    details: ["Logo Design", "Visual Identity Systems", "Brand Guidelines"],
  },
  {
    title: "Print & Publication Design",
    icon: "/assets/png/print.png",
    details: ["Logo Design", "Visual Identity Systems", "Brand Guidelines"],
  },
  {
    title: "Packaging Design",
    icon: "/assets/png/package.png",
    details: ["Logo Design", "Visual Identity Systems", "Brand Guidelines"],
  },
  {
    title: "Social Media Optimization (SMO)",
    icon: "/assets/png/smo.png",
    details: ["Logo Design", "Visual Identity Systems", "Brand Guidelines"],
  },
  {
    title: "Digital Content Creation",
    icon: "/assets/png/digital-content.png",
    details: ["Logo Design", "Visual Identity Systems", "Brand Guidelines"],
  },
  {
    title: "Motion & Visual Storytelling",
    icon: "/assets/png/visual.png",
    details: ["Logo Design", "Visual Identity Systems", "Brand Guidelines"],
  },
  {
    title: "Photography & Videography",
    icon: "/assets/png/photography.png",
    details: ["Logo Design", "Visual Identity Systems", "Brand Guidelines"],
  },
  {
    title: "UI/UX Design",
    icon: "/assets/png/uiux.png",
    details: ["Logo Design", "Visual Identity Systems", "Brand Guidelines"],
  },
];

const Services = () => {
  return (
    <div
      className="py-12 "
      style={{ backgroundImage: "url('/assets/svg/plain_dot.svg')" }}
    >
      <div className="max-w-[95%] mx-auto text-center">
        <h2 className=" text-5xl md:text-[4rem] leading-[4rem] font-medium text-[#1E1A1C] pt-10 font-inter">
          Our Services
        </h2>
        <p className="mt-2 text-[#363435] text-2xl font-lexend font-light leading-[1.875rem]">
          We turn ideas into impactful, creative solutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 2xl:w-[85%] m-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-[#FFFCF2] rounded-[0.625rem] overflow-hidden group m-2 border-2 shadow-md z-20"
            >
              {/* Static Content */}
              <div className="p-6 flex flex-col items-center">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-18 h-18 object-contain "
                />
                <h3 className="mt-4 text-[1.375rem] leading-[1.649rem] font-medium  text-gray-700 text-center font-inter">
                  {service.title}
                </h3>
              </div>

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 w-full h-full bg-[#071b5eed] text-white p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-semibold text-center font-inter">
                  {service.title}
                </h3>
                <ul className="mt-2 text-sm text-center">
                  {service.details.map((detail, i) => (
                    <li key={i} className="font-lexend">
                      {detail}
                    </li>
                  ))}
                </ul>
                <button className="mt-4 px-4 py-2 border border-white rounded-full text-sm font-semibold font-inter">
                  <Link to="/services">KNOW MORE</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
