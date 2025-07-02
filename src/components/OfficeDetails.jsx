import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const OfficeDetails = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 md:p-8 rounded-lg max-w-[1800px] mx-auto gap-2">
      {/* Address Section - 40% */}
      <div className="w-full md:w-1/5 p-4  rounded-md border-[1px] border-gray-400">
        <h2 className="text-xl font-inter lg:text-3xl font-semibold leading-5 text-orange-500 mb-4">
          Our Office
        </h2>
        <p className="text-[#1E1A1C] leading-6 font-semibold text-xl font-lexend">
          India
        </p>
        <p className="text-[#1E1A1C] font-lexend font-normal text-base leading-5 ">
          Nava India Rd, near Radisson Blu, <br />
          Coimbatore, Tamil Nadu 641004
        </p>
        <div className="mt-4 space-y-2">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-black" />
            <a
              href="mailto:info@hanatoria.com"
              className="text-black hover:underline font-poppins text-base font-normal leading-6"
            >
              info@hanatoria.com
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faPhone} className="text-black" />
            <a
              href="tel:+918122879321"
              className="text-black hover:underline font-poppins text-base font-normal leading-6"
            >
              +91 8122879321
            </a>
          </div>
        </div>
      </div>

      {/* Map Section - 60% */}
      <div className="w-full md:w-4/5 mt-6 md:mt-0 md:ml-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2067969866584!2d76.98607138492473!3d11.023105526612804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8598925d79289%3A0x80f064ab6a3d66b7!2sAalamaram!5e0!3m2!1sen!2sin!4v1733827318998!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: "300px" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default OfficeDetails;
