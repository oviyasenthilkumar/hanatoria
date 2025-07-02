// import React from "react";

// const AboutFounder = () => {
//   return (
//     <div className="max-w-[1800px] mx-auto px-5 py-10 my-12">
//       <div className="flex flex-col items-center gap-4 md:gap-6">
//         <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center font-inter">
//           From the Founder
//         </h1>
//         <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-center font-lexend">
//           Passionate about crafting designs that inspire and connect.
//         </p>
//       </div>

//       <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 mt-10">
//         {/* Founder Image */}
//         <img
//           src="/assets/png/founder.png"
//           alt="Founder"
//           className="w-[90%] sm:w-[80%] md:w-[50%] lg:w-[40%] max-w-[500px] rounded-lg "
//         />

//         {/* Founder Content */}
//         <div className="flex flex-col w-full gap-6">
//           {/* Quote Icon */}
//           <img
//             src="assets/png/quotes.png"
//             alt="Quote"
//             className="w-[15%] sm:w-[10%] md:w-[8%] lg:w-[6%] mx-auto md:mx-0"
//           />

//           {/* Founder Quote */}
//           <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-start font-lexend leading-relaxed order-2 md:order-1">
//             When I started this journey, my vision was simple yet powerful: to
//             create designs that inspire, connect, and make an impact. At
//             Hanatoria, we believe every brand has a story worth telling, and our
//             mission is to bring that story to life with creativity, precision,
//             and heart. Design, for us, is not just about visuals—it’s about
//             creating meaningful experiences that resonate with audiences and
//             deliver real value. We approach every project as a partnership,
//             collaborating closely with our clients to turn their vision into
//             reality. What drives us is our passion for excellence, our
//             commitment to innovation, and the trust of our clients who have
//             believed in us along the way. Together, we’ve built a space where
//             ideas flourish, and creativity knows no bounds.
//           </p>

//           {/* Founder Name and Role */}
//           <div className="text-center md:text-start order-1 md:order-2">
//             <h1 className="text-[#F15A28] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-inter">
//               Mohanadeepa
//             </h1>
//             <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold font-lexend">
//               Founder, Hanatoria
//             </h2>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutFounder;

import React from "react";

const AboutFounder = () => {
  return (
    <div className="max-w-[1800px] mx-auto px-5 py-10 my-12">
      {/* Heading Section */}
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium font-inter leading-extra-loose">
          From the Founder
        </h1>
        <p className="text-lg md:text-2xl font-light font-lexend leading-8">
          Passionate about crafting designs that inspire and connect.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-8 md:gap-12 mt-12 ">
        {/* Founder Image */}
        <div className="relative">
          <img
            src="/assets/png/founder.png"
            alt="Founder of Hanatoria"
            className="relative w-[80%] m-auto lg:w-full  lg:max-w-xl rounded-lg z-20"
          />
          <img
            src="assets/png/blue.png"
            alt="Colors"
            className="absolute top-[-18%] left-[20%] w-full max-w-xl z-0"
          />

          <img
            src="assets/png/orange.png"
            alt="Colors"
            className="absolute bottom-[-30%] left-[-18%] w-full max-w-xl z-0"
          />
        </div>
        {/* Founder Content */}
        <div className="flex flex-col lg:w-[50%] gap-6">
          {/* Quote Icon */}
          <img
            src="/assets/png/quotes.png"
            alt="Quote Icon"
            className="w-[15%] sm:w-[10%] md:w-[8%] lg:w-[10%] mx-auto md:mx-0"
          />

          {/* Founder Name and Role */}
          <div className="text-center md:text-start order-1 lg:order-2">
            <h1 className="text-[#F15A28] text-3xl leading-6 md:text-4xl  font-semibold font-lexend">
              Mohanadeepa
            </h1>
            <h2 className="text-lg md:text-2xl font-normal font-lexend pt-3 leading-6 ">
              Founder, Hanatoria
            </h2>
          </div>

          {/* Founder Quote */}
          <p className="text-base sm:text-lg md:text-xl leading-8 font-lexend font-light text-[#1E1A1C] order-2 lg:order-1">
            When I started this journey, my vision was simple yet powerful: to
            create designs that inspire, connect, and make an impact. At
            Hanatoria, we believe every brand has a story worth telling, and our
            mission is to bring that story to life with creativity, precision,
            and heart. Design, for us, is not just about visuals—it’s about
            creating meaningful experiences that resonate with audiences and
            deliver real value. We approach every project as a partnership,
            collaborating closely with our clients to turn their vision into
            reality. What drives us is our passion for excellence, our
            commitment to innovation, and the trust of our clients who have
            believed in us along the way. Together, we’ve built a space where
            ideas flourish, and creativity knows no bounds.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutFounder;


