import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Carousel from "./Carousel";

const AchivementsCarousal = () => {
  const testimonials = [
    {
      feedback:
        "We're excited to reflect on our journey of growth and success over the last two years. From supporting over 500 clients to enhancing digital presence for startups and enterprises, Hanatoria continues to deliver affordable, high-quality design solutions. A special thanks to Aalamaram Startup Incubator for their continued support, which made our participation in the AWS Event Conference possible. Grateful for the journey and looking forward to the future! 🚀",
      campaign: "Celebrating Milestones at the AWS Event Conference!",
      image: "../assets/png/awsEventImage.png",
    },
    {
      feedback:
        "We're excited to reflect on our journey of growth and success over the last two years. From supporting over 500 clients to enhancing digital presence for startups and enterprises, Hanatoria continues to deliver affordable, high-quality design solutions. A special thanks to Aalamaram Startup Incubator for their continued support, which made our participation in the AWS Event Conference possible. Grateful for the journey and looking forward to the future! 🚀",
      campaign: "Celebrating Milestones at the AWS Event Conference!",
      image: "../assets/png/awsEventImage.png",
    },
  ];

  const settings = {
    autoplay: true,
    centerMode: false,
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <FontAwesomeIcon icon={faArrowLeft} />,
    nextArrow: <FontAwesomeIcon icon={faArrowRight} />,
    responsive: [
      {
        breakpoint: 1500,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 1300,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 991,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 575,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8 rounded-xl relative mb-[6rem] max-w-[1900px] ">
      <div className="text-center mb-10">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-inter leading-extra-loose text-[#1E1A1C]">
          The Latest Buzz
        </p>
        <h1 className="text-[#363435] text-lg sm:text-xl md:text-2xl font-lexend font-light leading-8">
          Stay updated with our latest achievements
        </h1>
      </div>
      <Carousel />
    </div>
  );
};

export default AchivementsCarousal;
