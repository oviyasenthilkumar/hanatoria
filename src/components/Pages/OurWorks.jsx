import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"; // React icons for arrows
import Header from "../Header";
import LogoCarousel from "../Logo";
import TestimonialsCarousel from "../TestimonialsCarousel";
import EagleSection from "../EagleSection";
import FooterWithMenu from "../Footer";

const OurWorks = () => {
  // Project data
  const projects = [
    {
      id: 1,
      title: "YouTube Short 1",
      category: "Video",
      youtube: "https://www.youtube.com/embed/9gb3Mqrq50Y",
      description:
        "Optimized social media visuals for financial wellness branding. ",
    },

    {
      id: 2,
      title: "Agri Inverse",
      category: "UI/UX",
      img: "/UI UX/ui1.jpg",
      description:
        " Cutting-edge UI/UX design for smart farm automation solutions. ",
    },
    {
      id: 3,
      title: "Stunning Events",
      category: "Publication",
      img: "/Publications/Publication-02.jpg",
      description:
        "Artistic event photography capturing unforgettable moments.",
    },
    {
      id: 4,
      title: "Jooju",
      category: "UI/UX",
      img: "/UI UX/ui2.jpg",
      description:
        "Seamless website design for online pet consultation services. ",
    },
    {
      id: 5,
      title: "Sky Cashews",
      category: "Publication",
      img: "/Publications/Publication-03.jpg",
      description: " Premium quality flyer designs for organic cashew brands.",
    },
    {
      id: 6,
      title: "SRS",
      category: "UI/UX",
      img: "/UI UX/ui3.jpg",
      description:
        " User-centric branding for solar-powered irrigation systems. ",
    },
    {
      id: 7,
      title: "Fincliniq",
      category: "Digital",
      img: "/assets/jpg/Digital growth/Digital growth-04.jpg",
      description:
        " Strategic social media growth for a financial wellness brand. ",
    },
    {
      id: 8,
      title: "Sugan Ram",
      category: "Publication",
      img: "/Publications/Publication-01.jpg",
      description:
        " Professionally crafted promotional flyers for diverse business needs.",
    },
    {
      id: 9,
      title: "Sivam Bakery",
      category: "Packaging",
      img: "/assets/jpg/Packaging/packaging-01.jpg",
      description: "Attractive and functional packaging for bakery products.",
    },
    {
      id: 10,
      title: "Farma Herencia",
      category: "Packaging",
      img: "/assets/jpg/Packaging/packaging-02.jpg",
      description: "Tradition-inspired packaging with modern aesthetics. ",
    },
    {
      id: 11,
      title: "YouTube Short 2",
      category: "Video",
      youtube: "https://www.youtube.com/embed/LCxdeD-8hIM",
      description:
        "Optimized social media visuals for financial wellness branding. ",
    },
    {
      id: 12,
      title: "Able Physio",
      category: "Publication",
      img: "/Publications/Publication-04.jpg",
      description:
        " Monthly physiotherapy clinic calendar designs for patient engagement.",
    },
    {
      id: 13,
      title: "Mapie",
      category: "UI/UX",
      img: "/UI UX/ui4.jpg",
      description:
        " Innovative web and app design for enhanced digital experiences. ",
    },

    {
      id: 14,
      title: "Varnika Jewellers",
      category: "Digital",
      img: "/assets/jpg/Digital growth/Digital growth-01.jpg",
      description: " Engaging content and optimization for a jewelry brand.",
    },
    {
      id: 15,
      title: "Dringo",
      category: "Publication",
      img: "/Publications/Publication-08.jpg",
      description: "Eye-catching banner designs for Dringo driving services. ",
    },
    {
      id: 16,
      title: "KU Container Lines",
      category: "Publication",
      img: "/Publications/Publication-09.jpg",
      description:
        " Professionally designed corporate letterheads for maritime logistics.",
    },
    {
      id: 17,
      title: "Hotel Gowri Shankar",
      category: "Publication",
      img: "/Publications/Publication-10.jpg",
      description: "Visually appealing restaurant menu card designs.",
    },
    {
      id: 18,
      title: "Mahinsure",
      category: "Branding",
      img: "/assets/jpg/Branding/Branding-01.jpg",
      description:
        "Sustainable and eco-friendly branding for organic sanitary products. ",
    },
    {
      id: 19,
      title: "Sativa",
      category: "Branding",
      img: "/assets/jpg/Branding/Branding-02.jpg",
      description:
        "Premium logo design and branding for a high-end coffee shop. ",
    },
    {
      id: 20,
      title: "Kibbls",
      category: "Branding",
      img: "/assets/jpg/Branding/Branding-03.jpg",
      description: "Distinctive brand packaging for home pet food products.",
    },
    {
      id: 21,
      title: "Magazine",
      category: "Publication",
      img: "/Publications/Publication-11.jpg",
      description:
        " Elegant and sophisticated cover designs for wedding publications.",
    },
    {
      id: 22,
      title: "Talkgram",
      category: "Publication",
      img: "/Publications/Publication-12.jpg",
      description:
        "Impactful flyer designs for modern communication services. ",
    },
    {
      id: 23,
      title: "SR Kalyana Mahal",
      category: "Publication",
      img: "/Publications/Publication-13.jpg",
      description: " Luxurious invitation design for grand celebrations. ",
    },
    {
      id: 24,
      title: "The CA Classroom",
      category: "Publication",
      img: "/Publications/Publication-14.jpg",
      description:
        "Expertly designed finance education books for professionals. ",
    },
    {
      id: 25,
      title: "Eye Shore",
      category: "Branding",
      img: "/assets/jpg/Branding/Branding-04.jpg",
      description: "Unique brand identity creation with a custom logo design",
    },
    {
      id: 26,
      title: "Phytonutics",
      category: "Packaging",
      img: "/assets/jpg/Packaging/packaging-03.jpg",
      description:
        "Targeted social media marketing for a nutrition supplement brand. ",
    },
    {
      id: 27,
      title: "Boutee Kadai",
      category: "Packaging",
      img: "/assets/jpg/Packaging/packaging-04.jpg",
      description: "Stylish packaging for a clothing and fashion brand.",
    },
    {
      id: 28,
      title: "Mahinsure",
      category: "Packaging",
      img: "/assets/jpg/Packaging/packaging-05.jpg",
      description: "Sustainable packaging solutions for organic products. ",
    },
    {
      id: 29,
      title: "Kerala Mills",
      category: "Packaging",
      img: "/assets/jpg/Packaging/packaging-06.jpg",
      description: "Elegant packaging design for premium food products.",
    },
    {
      id: 30,
      title: "Farma Herencia",
      category: "Packaging",
      img: "/assets/jpg/Packaging/packaging-07.jpg",
      description: "Tradition-inspired packaging with modern aesthetics.",
    },
    {
      id: 31,
      title: "Mild Magic",
      category: "Packaging",
      img: "/assets/jpg/Packaging/packaging-08.jpg",
      description: "Standout packaging for high-end consumer products.",
    },
    {
      id: 32,
      title: "Anadham Photography",
      category: "Publication",
      img: "/Publications/Publication-05.jpg",
      description: " Creative magazine and editorial design services. ",
    },
    {
      id: 33,
      title: "Flyers",
      category: "Publication",
      img: "/Publications/Publication-06.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },

    {
      id: 34,
      title: "Urbanitii",
      category: "Photography",
      img: "/assets/jpg/Photography/Photography-01.jpg",
      description:
        "High-end jewelry brand photography, content creation, and video editing.",
    },
    {
      id: 35,
      title: "Urbanitii",
      category: "Photography",
      img: "/assets/jpg/Photography/Photography-02.jpg",
      description:
        "High-end jewelry brand photography, content creation, and video editing.",
    },
    {
      id: 36,
      title: "Mealzy",
      category: "Photography",
      img: "/assets/jpg/Photography/Photography-03.jpg",
      description:
        " Tempting food photography for homemade balanced meal services. ",
    },
    {
      id: 37,
      title: "Mahinsure",
      category: "Photography",
      img: "/assets/jpg/Photography/Photography-04.jpg",
      description:
        "Aesthetic branding and packaging for organic sanitary pads.",
    },
    {
      id: 38,
      title: "Mahinsure",
      category: "Photography",
      img: "/assets/jpg/Photography/Photography-05.jpg",
      description:
        "Aesthetic branding and packaging for organic sanitary pads.",
    },
    {
      id: 39,
      title: "Fincliniq",
      category: "Photography",
      img: "/assets/jpg/Photography/Photography-06.jpg",
      description:
        "Optimized social media visuals for financial wellness branding.",
    },
    {
      id: 40,
      title: "Mahinsure",
      category: "Photography",
      img: "/assets/jpg/Photography/Photography-07.jpg",
      description:
        "Aesthetic branding and packaging for organic sanitary pads.",
    },
    {
      id: 41,
      title: "Mealzy",
      category: "Photography",
      img: "/assets/jpg/Photography/Photography-08.jpg",
      description:
        "Tempting food photography for homemade balanced meal services.",
    },
    {
      id: 42,
      title: "Mahinsure",
      category: "Digital",
      img: "/assets/jpg/Digital growth/Digital growth-02.jpg",
      description:
        " Brand-focused social media campaigns for organic wellness. ",
    },
    {
      id: 43,
      title: "ILO",
      category: "Publication",
      img: "/Publications/Publication-07.jpg",
      description:
        "Online Fish Store – Strategic branding and design for e-commerce seafood business",
    },
  ];

  // Filter state
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFiltered, setIsFiltered] = useState(false); // for transition effect
  const [startIndex, setStartIndex] = useState(0); // For showing filter categories in mobile and tablet view

  // Handle category selection
  const handleCategorySelect = (category) => {
    setIsFiltered(true);
    setTimeout(() => {
      setSelectedCategory(category);
      setIsFiltered(false); // Reset the transition
    }, 300); // Matching the transition duration
  };

  // Handle scrolling categories left and right
  const handleScroll = (direction) => {
    const categoriesToShow =
      window.innerWidth <= 768
        ? 2
        : window.innerWidth <= 1024
        ? 5
        : categories.length; // Mobile: 3, Tablet: 5, Desktop: all
    if (direction === "left" && startIndex > 0) {
      setStartIndex(startIndex - categoriesToShow);
    } else if (
      direction === "right" &&
      startIndex < categories.length - categoriesToShow
    ) {
      setStartIndex(startIndex + categoriesToShow);
    }
  };

  const categories = [
    "All",
    "Publication",
    "UI/UX",
    "Photography",
    "Branding",
    "Digital",
    "Packaging",
    "Video",
  ];

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <>
      <Header />

      <div
        className="container mx-auto px-4 md:px-20 py-12 z-0"
        style={{
          backgroundImage: "url('/assets/svg/plain_dot.svg')",
        }}
      >
        <img
          src="./assets/png/gradient.png"
          alt="gradient"
          className="z-0 absolute top-[0%] w-full h-full left-[0%] "
        />
        <h2 className=" text-5xl md:text-6xl text-center font-medium leading-extra-loose text-gray-800 pt-10 font-inter">
          Our <span className="text-[#F15A28]">Works</span>
        </h2>

        {/* Filter Buttons for Mobile, Tablet and Desktop */}
        <div className="text-center my-12 relative">
          {/* Arrows for mobile/tablet */}
          {window.innerWidth <= 1024 && (
            <>
              <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 z-10">
                <HiChevronLeft
                  className="text-3xl cursor-pointer"
                  onClick={() => handleScroll("left")}
                />
              </div>
              <div className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10">
                <HiChevronRight
                  className="text-3xl cursor-pointer"
                  onClick={() => handleScroll("right")}
                />
              </div>
            </>
          )}

          <div className="flex justify-between gap-2 overflow-hidden w-[96%] md:w-[87%] mx-auto border-[1px] border-gray-500 px-1 py-2 rounded-md md:rounded-3xl ">
            {/* Display 3 categories on mobile, 5 on tablet, and all on desktop */}
            {categories
              .slice(
                startIndex,
                startIndex +
                  (window.innerWidth <= 768
                    ? 3
                    : window.innerWidth <= 1024
                    ? 5
                    : categories.length)
              )
              .map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategorySelect(category)}
                  className={`px-5 py-1 md:px-6 md:py-5 mx-2 font-inter font-medium text-xl text-black rounded-xl transition-all duration-300 z-20 relative ${
                    selectedCategory === category
                      ? "bg-[#F15A28] text-white hover:bg-[#F15A28]"
                      : " hover:bg-[#F15A28]"
                  }`}
                >
                  {category}
                </button>
              ))}
          </div>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-10 transition-all duration-300  ${
            isFiltered ? "opacity-50" : "opacity-100"
          }`}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative group overflow-hidden rounded-lg border-[1px] bg-white"
            >
              {project.img ? (
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-60 object-cover transform transition-all duration-300 p-1 rounded-2xl"
                />
              ) : (
                <iframe
                  src={project.youtube}
                  title={project.title}
                  className="w-full h-60 p-1 rounded-2xl"
                  allow="autoplay; encrypted-media"
                  loading="lazy"
                ></iframe>
              )}
              <div className="px-4 py-3 bg-white">
                <h3 className="text-xl font-bold text-gray-800 font-poppins leading-10">
                  {project.title}
                </h3>
                <p
                  className="text-sm text-gray-600 font-poppins 
                font-normal leading-5 "
                >
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <LogoCarousel />
      <TestimonialsCarousel />
      <EagleSection />
      <FooterWithMenu />
    </>
  );
};

export default OurWorks;


