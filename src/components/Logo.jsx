import React, { useEffect } from "react";

const clients = [
  { id: 1, logo: "/assets/png/logo/Fit4 life-01.png" },
  { id: 2, logo: "/assets/png/logo/Fit4 life-02.png" },
  { id: 3, logo: "/assets/png/logo/Fit4 life-03.png" },
  { id: 4, logo: "/assets/png/logo/Fit4 life-04.png" },
  { id: 5, logo: "/assets/png/logo/Fit4 life-05.png" },
  { id: 6, logo: "/assets/png/logo/Fit4 life-06.png" },
  { id: 7, logo: "/assets/png/logo/Fit4 life-07.png" },
  { id: 8, logo: "/assets/png/logo/Fit4 life-08.png" },
  { id: 9, logo: "/assets/png/logo/Fit4 life-09.png" },
  { id: 10, logo: "/assets/png/logo/Fit4 life-10.png" },
  { id: 12, logo: "/assets/png/logo/Fit4 life-12.png" },
  { id: 13, logo: "/assets/png/logo/Fit4 life-13.png" },
  { id: 14, logo: "/assets/png/logo/Fit4 life-14.png" },
  { id: 15, logo: "/assets/png/logo/Fit4 life-15.png" },
  { id: 16, logo: "/assets/png/logo/Fit4 life-16.png" },
  { id: 17, logo: "/assets/png/logo/Fit4 life-17.png" },
  { id: 18, logo: "/assets/png/logo/Fit4 life-18.png" },
  { id: 19, logo: "/assets/png/logo/Fit4 life-19.png" },
];

const LogoCarousel = () => {
  useEffect(() => {
    // Clone the logos-slide element for infinite scrolling
    const logoSlide = document.querySelector(".logos-slide");

    if (logoSlide) {
      // Clone the slide
      const copy = logoSlide.cloneNode(true);

      // Append the cloned node immediately after the original one
      const parentElement = logoSlide.parentElement;

      // Ensure the parent uses flexbox and aligns items in a row
      parentElement.style.display = "flex"; // Ensure flex layout
      parentElement.style.alignItems = "center"; // Ensure align center
      parentElement.style.flexWrap = "nowrap"; // Prevent wrapping
      parentElement.style.overflow = "hidden"; // Prevent overflow

      // Set the original slide's styles to ensure proper alignment
      logoSlide.style.flexShrink = "0"; // Prevent wrapping
      logoSlide.style.whiteSpace = "nowrap";

      // Adjust cloned node styles
      copy.style.flexShrink = "0"; // Prevent wrapping
      copy.style.whiteSpace = "nowrap";
      copy.style.margin = "1px";
      copy.style.padding = "20px 10px";

      // Add a margin or gap to ensure no overlap
      copy.style.marginLeft = "0";

      parentElement.appendChild(copy);
    }
  }, []);

  return (
    <div
      className="relative py-8"
      style={{
        backgroundImage: "url('/assets/svg/plain_dot.svg')",
      }}
    >
      <img
        src="/assets/png/Ellipse_left.png"
        alt="gradient"
        className="absolute bottom-0 left-0"
      />
      <img
        src="/assets/png/Ellipse_right.png"
        alt="gradient"
        className="absolute top-0 right-0"
      />
      {/* Heading Section */}
      <div className="flex items-center justify-center flex-col text-center ">
        <h2 className="text-5xl md:text-[4rem] font-medium text-[#1E1A1C] font-inter leading-[4rem]">
          Our Trusted Clients
        </h2>
        <p className="text-[#363435] text-2xl mt-2 font-lexend font-light leading-[1.875rem] ">
          Proud partners in creating exceptional designs for <br />
          visionary brands.
        </p>
      </div>

      {/* Logo Slider */}
      <div className="logos overflow-hidden pb-8 relative">
        <div className="logos-slide flex whitespace-nowrap animate-slide hover:pause-animation cursor-pointer">
          {clients.map((client) => (
            <div className="shadow py-5 px-2.5 m-2 border-2 rounded-[10px]">
              <img
                key={client.id}
                src={client.logo}
                alt={`Client ${client.id}`}
                className="h-12 mx-10"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
