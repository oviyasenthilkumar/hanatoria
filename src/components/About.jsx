import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const About = () => {
  // const marqueeRef = useRef(null);

  // useEffect(() => {
  //   const marquee = marqueeRef.current;

  //   let previousScrollY = window.scrollY;

  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;
  //     const direction = currentScrollY > previousScrollY ? -1 : 1; // Determine scroll direction
  //     previousScrollY = currentScrollY;

  //     gsap.to(marquee, {
  //       x: `+=${direction * 20}`, // Move left or right based on direction
  //       ease: "ease-out", // Linear easing for smooth transition
  //       duration: 0.05, // Short duration for smooth effect
  //       overwrite: true, // Overwrite any previous GSAP animations
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let previousScrollY = window.scrollY;

    // Initial GSAP animation for continuous scrolling effect
    gsap.to(marquee, {
      x: "-100%", // Move left completely
      duration: 10, // Adjust speed (higher = slower)
      ease: "linear",
      repeat: -1, // Infinite loop
      modifiers: {
        x: gsap.utils.wrap(["0%", "-100%"]), // Wrap the animation for seamless looping
      },
    });

    // Handle smooth interaction with scrolling
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > previousScrollY ? -1 : 1; // Determine scroll direction
      previousScrollY = currentScrollY;

      gsap.to(marquee, {
        x: `+=${direction * 30}`, // Move left or right based on scroll direction
        duration: 0.5, // Adjust timing for a smoother effect
        ease: "power1.out",
        overwrite: true, // Prevent overlapping animations
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const marqueeItems = [
    "UI/UX Designing",
    "Photography & Videography",
    "Brand Strategy & Identity",
    "Motion & Visual Storytelling",
    "UI/UX Designing",
    "Photography & Videography",
    "Brand Strategy & Identity",
    "Motion & Visual Storytelling",
    "UI/UX Designing",
    "Photography & Videography",
    "UI/UX Designing",
    "Photography & Videography",
    "Brand Strategy & Identity",
    "Motion & Visual Storytelling",
    "UI/UX Designing",
    "Photography & Videography",
    "Brand Strategy & Identity",
    "Motion & Visual Storytelling",
    "UI/UX Designing",
    "Photography & Videography",
    "UI/UX Designing",
    "Photography & Videography",
    "Brand Strategy & Identity",
    "Motion & Visual Storytelling",
    "UI/UX Designing",
    "Photography & Videography",
    "Brand Strategy & Identity",
    "Motion & Visual Storytelling",
    "UI/UX Designing",
    "Photography & Videography",
  ];

  return (
    <div
      className="bg-white text-gray-800 "
      style={{ backgroundImage: 'url("/assets/svg/plain_dot.svg")' }}
    >
      {/* Container */}
      <div className="max-w-5xl mx-auto px-4 py-10 text-center space-y-6">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] leading-[3.75rem] font-medium font-inter">
          Curious About Hanatoria?
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-light  text-gray-600 mt-4 font-lexend">
          Discover Who We Are and What Drives Our Creativity!
        </p>
        {/* Gradient Line */}
        <div
          className="h-[2px] leading-[0.125rem] w-[80%] mx-auto mt-4"
          style={{
            background: "linear-gradient(to right, #FFFCF2, #F15A29, #1D577E)",
          }}
        ></div>
        <p className="text-gray-700 text-xl font-light leading-[1.875rem] mt-4 font-lexend">
          At Hanatoria, we craft designs that inspire and connect, blending
          creativity with precision. Our skilled team transforms ideas into
          impactful, tailored solutions, from branding to web design.
        </p>
        <p className="font-medium leading-[1.875rem] text-xl font-lexend">
          Let’s create something extraordinary together.
        </p>
        <button className="px-6 py-4 md:w-[23%] mt-4 text-black border-[1px] border-black rounded-full font-inter font-bold text-base leading-8 hover:text-white hover:border-[#F15A28] hover:bg-[#F15A28] ">
          <Link to="/about"> KNOW MORE </Link>
        </button>
      </div>

      {/* Rotated Marquee Section */}
      {/* <div
        className="relative overflow-hidden bg-gradient-to-r from-orange-400 to-orange-600 py-4 w-[100%] mx-auto"
        style={{
          transform: "rotate(3deg)", // Rotate the entire background
          transformOrigin: "top left", // Ensure rotation starts from top left
        }}
      >
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap"
          style={{ willChange: "transform", paddingLeft: "15px" }}
        >
          {marqueeItems.map((item, index) => (
            <span
              key={index}
              className="text-white font-semibold text-lg mx-8 font-lexend"
            >
              {item}
            </span>
          ))}
        </div>
      </div> */}
      <div
        className="relative overflow-hidden bg-gradient-to-r from-orange-400 to-orange-600 py-4 w-[100%] mx-auto"
        style={{
          transform: "rotate(3deg)", // Rotate the entire background
          transformOrigin: "top left", // Ensure rotation starts from top left
        }}
      >
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap"
          style={{ willChange: "transform", paddingLeft: "15px" }}
        >
          {marqueeItems.concat(marqueeItems).map((item, index) => (
            <span
              key={index}
              className="text-white font-semibold text-lg mx-8 font-lexend"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Light Orange Horizontal Background */}
      <div
        className="bg-[#f15a2847] py-5" // Light orange background
        style={{
          width: "100%", // Ensure it spans the full width
        }}
      ></div>
    </div>
  );
};

export default About;
