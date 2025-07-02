import React from "react";

const ImageCarousal = () => {
  const imageArray = [
    { src: "../assets/jpg/about/about2.jpg" },
    { src: "../assets/jpg/about/about3.jpg" },
    { src: "../assets/jpg/about/about4.jpg" },
    { src: "../assets/jpg/about/about5.jpg" },
    { src: "../assets/jpg/about/about1.jpg" },
    { src: "../assets/jpg/about/about6.jpg" },
    { src: "../assets/jpg/about/about7.jpg" },
    { src: "../assets/jpg/about/about8.jpg" },
    { src: "../assets/jpg/about/about10.jpg" },
    { src: "../assets/jpg/about/about1.jpg" },
    { src: "../assets/jpg/about/about6.jpg" },
    { src: "../assets/jpg/about/about10.jpg" },
    { src: "../assets/jpg/about/about1.jpg" },
    { src: "../assets/jpg/about/about6.jpg" },
  ];

  return (
    <div className="pb-5 overflow-hidden relative">
      <div className="photo-slide flex">
        {/* Render images */}
        {imageArray.map((image, index) => (
          <div
            key={index}
            className="rounded-md h-[200px] w-[200px] md:h-[300px] md:w-[400px] lg:h-[400px] lg:w-[500px]"
          >
            <img
              src={image.src}
              alt={`Hanatoria image ${index + 1}`}
              className="h-full w-full object-cover p-3"
            />
          </div>
        ))}
        {/* Duplicate the same images for seamless looping */}
        {imageArray.map((image, index) => (
          <div
            key={index + imageArray.length}
            className="rounded-md h-[200px] w-[200px] md:h-[300px] md:w-[400px] lg:h-[400px] lg:w-[500px]"
          >
            <img
              src={image.src}
              alt={`Hanatoria image duplicate ${index + 1}`}
              className="h-full w-full object-cover p-3"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousal;
