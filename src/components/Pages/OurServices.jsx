import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import Header from "../Header";
import LogoCarousel from "../Logo";
import TestimonialsCarousel from "../TestimonialsCarousel";
import EagleSection from "../EagleSection";
import HowWeWork from "../HowWeWork";
import FooterWithMenu from "../Footer";
import { Link } from "react-router-dom";
const OurServices = () => {
  const cardData = [
    {
      id: 1,
      title: "Brand Identity",
      description:
        "Your brand identity is more than a logo; it's the soul of your business. From colours to typography, we build every element with precision and passion.",
      images: [
        {
          title: "Mahinsure",
          path: "/assets/jpg/services/brand identity-01.jpg",
          description:
            "We brought Mahinsure's ethos to life with a brand identity that reflects purity, sustainability, and care. From the logo to the palette, every element mirrors their promise.",
        },
        {
          title: "Kibbls",
          path: "/assets/jpg/services/brand identity-02.jpg",
          description:
            "We designed Kibbls' brand identity to embody trust, care, and nutrition, making every pet feel loved and nurtured.",
        },
        {
          title: "Vdhya",
          path: "/assets/jpg/services/brand identity-03.jpg",
          description:
            "We shaped VDHYA's brand identity to reflect innovation, inclusivity, and a passion for empowering every learner's journey.",
        },
        {
          title: "Vdhya",
          path: "/assets/jpg/services/brand identity-04.jpg",
          description:
            "We shaped VDHYA's brand identity to reflect innovation, inclusivity, and a passion for empowering every learner's journey.",
        },
      ],
    },
    {
      id: 2,
      title: "Publication Design",
      description:
        "From magazines to brochures, our publication design services ensure your content is presented beautifully and clearly. We focus on creating layouts that are both visually striking and easy to read, enhancing the overall user experience.",
      images: [
        {
          title: "Mahinsure",
          path: "/assets/jpg/services/Publications-01.jpg",
          description:
            "We brought Mahinsure's ethos to life with a brand identity that reflects purity, sustainability, and care. From the logo to the palette, every element mirrors their promise.",
        },
        {
          title: "Kibbls",
          path: "/assets/jpg/services/Publications-02.jpg",
          description:
            "We designed Kibbls' brand identity to embody trust, care, and nutrition, making every pet feel loved and nurtured.",
        },
        {
          title: "Vdhya",
          path: "/assets/jpg/services/Publications-03.jpg",
          description:
            "We shaped VDHYA's brand identity to reflect innovation, inclusivity, and a passion for empowering every learner's journey.",
        },
        {
          title: "Vdhya",
          path: "/assets/jpg/services/Publications-04.jpg",
          description:
            "We shaped VDHYA's brand identity to reflect innovation, inclusivity, and a passion for empowering every learner's journey.",
        },
      ],
    },
    {
      id: 3,
      title: "Packaging Design",
      description:
        "First impressions matter, especially in retail. We create custom packaging designs that not only attract attention but also communicate your brand’s story. Our designs ensure your product is packaged with care and creativity, setting it apart from the competition.",
      images: [
        {
          title: "Mahinsure",
          path: "/assets/jpg/services/Packaging-01.jpg",
          description:
            "We brought Mahinsure's ethos to life with a brand identity that reflects purity, sustainability, and care. From the logo to the palette, every element mirrors their promise.",
        },
        {
          title: "Kibbls",
          path: "/assets/jpg/services/Packaging-02.jpg",
          description:
            "We designed Kibbls' brand identity to embody trust, care, and nutrition, making every pet feel loved and nurtured.",
        },
        {
          title: "Vdhya",
          path: "/assets/jpg/services/Packaging-03.jpg",
          description:
            "We shaped VDHYA's brand identity to reflect innovation, inclusivity, and a passion for empowering every learner's journey.",
        },
        {
          title: "Vdhya",
          path: "/assets/jpg/services/Packaging-04.jpg",
          description:
            "We shaped VDHYA's brand identity to reflect innovation, inclusivity, and a passion for empowering every learner's journey.",
        },
      ],
    },
    {
      id: 4,
      title: "Digital Design",
      description:
        "In today’s fast-paced digital world, an engaging online presence is key. We design intuitive websites, mobile apps, and digital assets that are visually appealing and user-friendly. Our digital designs aim to enhance the user experience while driving measurable business results.",
      images: [
        {
          title: "Mahinsure",
          path: "/assets/jpg/services/degital design-01.jpg",
          description:
            "We brought Mahinsure's ethos to life with a brand identity that reflects purity, sustainability, and care. From the logo to the palette, every element mirrors their promise.",
        },
        {
          title: "Kibbls",
          path: "/assets/jpg/services/degital design-02.jpg",
          description:
            "We designed Kibbls' brand identity to embody trust, care, and nutrition, making every pet feel loved and nurtured.",
        },
        {
          title: "Vdhya",
          path: "/assets/jpg/services/degital design-03.jpg",
          description:
            "We shaped VDHYA's brand identity to reflect innovation, inclusivity, and a passion for empowering every learner's journey.",
        },
        {
          title: "Vdhya",
          path: "/assets/jpg/services/degital design-04.jpg",
          description:
            "We shaped VDHYA's brand identity to reflect innovation, inclusivity, and a passion for empowering every learner's journey.",
        },
      ],
    },
    {
      id: 5,
      title: "Video Making & Animation",
      description:
        "We offer dynamic video production and animation services that bring your brand to life. From explainer videos and commercials to social media content, we craft engaging visual stories that captivate your audience and deliver your message effectively.",
      images: [
        {
          title: "Mahinsure",
          path: "/assets/jpg/services/Video animation-01.jpg",
          description:
            "We brought Mahinsure's ethos to life with a brand identity that reflects purity, sustainability, and care. From the logo to the palette, every element mirrors their promise.",
        },
        {
          title: "Kibbls",
          path: "/assets/jpg/services/Video animation-02.jpg",
          description:
            "We designed Kibbls' brand identity to embody trust, care, and nutrition, making every pet feel loved and nurtured.",
        },
        {
          title: "Vdhya",
          path: "/assets/jpg/services/Video animation-03.jpg",
          description:
            "We shaped VDHYA's brand identity to reflect innovation, inclusivity, and a passion for empowering every learner's journey.",
        },
      ],
    },
    {
      id: 6,
      title: "Photography & Videography",
      description:
        "Our photography and videography services capture the essence of your brand through stunning imagery and cinematic videos. Whether it's product photography, corporate events, or promotional videos, we help you tell your story visually with professionalism and creativity.",
      images: [
        {
          title: "Mahinsure",
          path: "/assets/jpg/services/Photography-01.jpg",
          description:
            "We brought Mahinsure's ethos to life with a brand identity that reflects purity, sustainability, and care. From the logo to the palette, every element mirrors their promise.",
        },
        {
          title: "Kibbls",
          path: "/assets/jpg/services/Photography-02.jpg",
          description:
            "We designed Kibbls' brand identity to embody trust, care, and nutrition, making every pet feel loved and nurtured.",
        },
        {
          title: "Vdhya",
          path: "/assets/jpg/services/Photography-03.jpg",
          description:
            "We shaped VDHYA's brand identity to reflect innovation, inclusivity, and a passion for empowering every learner's journey.",
        },
        {
          title: "Vdhya",
          path: "/assets/jpg/services/Photography-04.jpg",
          description:
            "We shaped VDHYA's brand identity to reflect innovation, inclusivity, and a passion for empowering every learner's journey.",
        },
      ],
    },
    {
      id: 7,
      title: "UI/UX Design",
      description:
        "We focus on designing user interfaces that are both visually appealing and intuitive. Our UI/UX design services ensure a seamless experience for your users across websites, apps, and other digital platforms, creating designs that meet both your goals and your users' needs.",
      images: [
        {
          title: "Mahinsure",
          path: "/assets/jpg/services/UI design-01.jpg",
          description:
            "We brought Mahinsure's ethos to life with a brand identity that reflects purity, sustainability, and care. From the logo to the palette, every element mirrors their promise.",
        },
        {
          title: "Kibbls",
          path: "/assets/jpg/services/UI design-02.jpg",
          description:
            "We designed Kibbls' brand identity to embody trust, care, and nutrition, making every pet feel loved and nurtured.",
        },
        {
          title: "Vdhya",
          path: "/assets/jpg/services/UI design-03.jpg",
          description:
            "We shaped VDHYA's brand identity to reflect innovation, inclusivity, and a passion for empowering every learner's journey.",
        },
      ],
    },
    {
      id: 8,
      title: "Social Media Optimization (SMO)",
      description:
        "Maximize your brand’s reach with our SMO services. We help you build a strong social media presence by creating engaging content, optimizing profiles, and running targeted campaigns that increase visibility and foster stronger connections with your audience.",
      images: [
        {
          title: "Mahinsure",
          path: "/assets/jpg/services/SMO-01.jpg",
          description:
            "We brought Mahinsure's ethos to life with a brand identity that reflects purity, sustainability, and care. From the logo to the palette, every element mirrors their promise.",
        },
        {
          title: "Kibbls",
          path: "/assets/jpg/services/SMO-02.jpg",
          description:
            "We designed Kibbls' brand identity to embody trust, care, and nutrition, making every pet feel loved and nurtured.",
        },
        {
          title: "Vdhya",
          path: "/assets/jpg/services/SMO-03.jpg",
          description:
            "We shaped VDHYA's brand identity to reflect innovation, inclusivity, and a passion for empowering every learner's journey.",
        },
      ],
    },
  ];


  return (
    <>
      <Header />
      <div
        className="py-12 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: "url('/assets/svg/plain_dot.svg')",
        }}
      >
        <img
          src="./assets/png/gradient.png"
          alt="gradient"
          className="z-0 absolute top-[0%] w-full h-full left-[0%] "
        />
        {/* Image Content Above Cards */}
        <div
          className="text-center mb-12 "
          // style={{
          //   backgroundImage: "url('/assets/png/gradient.png') ",
          // }}
        >
          <h1 className="text-4xl md:text-7xl font-medium text-gray-800 font-inter">
            Our <span className="text-orange-500">Services</span>
          </h1>
          <p className="text-gray-600 mt-4 text-sm md:text-xl leading-relaxed lg:text-lg max-w-3xl mx-auto font-lexend font-light">
            At Hanatoria, we offer a wide range of creative services that cater
            to every aspect of your brand's design needs. Whether you're looking
            to create a striking brand identity, enhance your digital presence,
            or develop an intuitive user experience, we've got you covered.
          </p>
        </div>

        {/* Cards Section */}
        <div className="max-w-[1600px] mx-auto space-y-12 relative z-20">
          {cardData.map((card) => (
            <div
              className="bg-[#FFFCF2] rounded-lg shadow-lg p-6 lg:p-8 gap-6 lg:gap-8 z-20"
              key={card.id}
            >
              <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-[40%] text-center lg:text-left space-y-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 font-inter leading-9">
                    {card.title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-base text-gray-600 font-lexend font-light leading-7">
                    {card.description}
                  </p>
                </div>
                <div className="lg:w-[60%] w-full relative">
                  {/* Custom Navigation Buttons */}
                  {/* <div className="absolute top-[121%] md:top-[113%] left-[65%] md:left-[78%] md:mt-2 lg:left-[72%] xl:left-[78%] transform border-[1px] border-gray-600 -translate-y-1/2 z-10 cursor-pointer p-[10px] rounded-[50%]">
                    <BsArrowLeft
                      className="text-2xl text-black hover:text-gray-600 transition"
                      id={`custom-prev-${card.id}`}
                    />
                  </div>
                  <div className="absolute top-[121%] md:top-[113%] right-[0%] md:right-[8%] md:mt-2 transform border-[1px] border-gray-600 -translate-y-1/2 z-10 cursor-pointer p-[10px] rounded-[50%]">
                    <BsArrowRight
                      className="text-2xl text-black hover:text-gray-600 transition"
                      id={`custom-next-${card.id}`}
                    />
                  </div> */}
                  <div className="absolute top-[120%] md:top-[118%] left-[68%] sm:left-[70%] md:left-[73%] lg:left-[72%] xl:left-[77%] transform border border-gray-600 -translate-y-1/2 z-10 cursor-pointer p-2 sm:p-3 md:p-4 rounded-full">
                    <BsArrowLeft
                      className="text-xl md:text-2xl text-black hover:text-gray-600 transition"
                      id={`custom-prev-${card.id}`}
                    />
                  </div>
                  <div className="absolute top-[120%] md:top-[118%] right-[0%] sm:right-[5%] md:right-[6%] lg:right-[2%] xl:right-[5%] transform border border-gray-600 -translate-y-1/2 z-10 cursor-pointer p-2 sm:p-3 md:p-4 rounded-full">
                    <BsArrowRight
                      className="text-xl md:text-2xl text-black hover:text-gray-600 transition"
                      id={`custom-next-${card.id}`}
                    />
                  </div>

                  <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={{
                      prevEl: `#custom-prev-${card.id}`,
                      nextEl: `#custom-next-${card.id}`,
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={20}
                    breakpoints={{
                      768: { slidesPerView: 2 },
                      1024: { slidesPerView: 2 },
                    }}
                  >
                    {card.images.map((image, index) => (
                      <SwiperSlide
                        key={index}
                        className="relative group flex justify-center overflow-hidden"
                      >
                        {/* Image */}
                        <img
                          src={image.path}
                          alt={`Card ${card.id} Image ${index + 1}`}
                          className="w-full h-48 sm:h-60 md:h-72 lg:h-60 object-contain rounded-[5px]"
                        />

                        {/* Hover Overlay */}
                        <div
                          className="absolute bottom-0 left-0 w-full h-full md:h-3/4 lg:h-3/4 bg-gradient-to-t 
                        from-black to-transparent translate-y-full opacity-0 group-hover:translate-y-0 
                        group-hover:opacity-100 transition-all duration-500 flex flex-col md:flex-row px-4 md:px-5"
                        >
                          {/* Left Column: Title and Paragraph */}
                          <div className="w-full md:w-[60%] lg:w-[70%] p-4">
                            <h3 className="text-white text-sm lg:text-lg font-semibold mb-2 font-inter">
                              {image.title}
                            </h3>
                            <p className="text-gray-300 text-xs md:text-sm font-lexend">
                              {image.description}
                            </p>
                          </div>

                          {/* Right Column: Button */}
                          <div className="w-full md:w-[40%] lg:w-[30%] flex items-center justify-start md:justify-center mt-4 md:mt-0">
                            <button className="font-inter text-xs md:text-sm py-2 px-4 bg-transparent border-[1px] text-white text-center rounded-full hover:bg-gray-200 hover:text-black transition-all">
                              <Link to="/works">View Project</Link>
                            </button>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              {/* <div className="flex justify-start md:justify-center">
                <Link to="/works">
                  <button className="py-2 font-sm md:font-inter px-4 sm:py-3 sm:px-6 bg-transparent border-[1px] border-gray-800 text-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition-all mt-5">
                    VIEW ALL PROJECTS
                  </button>
                </Link>
              </div> */}
              <div className="flex justify-start md:justify-center">
                <Link to="/works">
                  <button className="py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 lg:py-3 lg:px-7 text-sm md:text-base font-inter lend font-bold bg-transparent border border-gray-800 text-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 mt-5">
                    VIEW ALL PROJECTS
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="my-8 flex justify-center">
        <button className="bg-black sm:w-[50%] lg:w-[11%] hover:bg-[#F15A28] text-white px-6 py-4 rounded-full font-bold transition font-inter text-base leading-8">
          <Link to="/contact">LET'S TALK</Link>
        </button>
      </div>
      <LogoCarousel />
      <HowWeWork />
      <TestimonialsCarousel />
      <EagleSection />
      <FooterWithMenu />
    </>
  );
};

export default OurServices;
