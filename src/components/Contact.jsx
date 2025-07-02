import React from "react";
import { useForm } from "react-hook-form";
import Header from "../Header";
import LogoCarousel from "../Logo";
import OfficeDetails from "../OfficeDetails";
import FooterWithMenu from "../Footer";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm();

    const onSubmit = (data) => {
      const serviceID = "service_yvc2pum"; 
      const templateID = "template_9gpnzup"; 
      const publicKey = "Zty529R9kSfF_EW18"; 

      const templateParams = {
        fullName: data.fullName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        companyName:data.companyName,
        service: data.service,
        message: data.message,
      };

      emailjs
        .send(serviceID, templateID, templateParams, publicKey)
        .then((response) => {
          console.log("Email sent successfully!", response);
          alert("Form submitted successfully!");
          reset(); // Reset form
        })
        .catch((error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send form. Please try again.");
        });
    };
  return (
    <>
      <Header />
      <div
        className="py-12"
        style={{
          backgroundImage: "url('/assets/svg/plain_dot.svg')",
        }}
      >
        <img
          src="./assets/png/gradient.png"
          alt="gradient"
          className="z-0 absolute top-[0%] w-full h-full md:top-[2%] lg:top-[0%] left-[0%] opacity-80 "
        />
        <div className=" w-[95%] md:w-[80%] mx-auto bg-white p-8 lg:p-12 rounded-lg shadow-md relative  z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Section */}
            <div className="space-y-6 relative">
              <h1 className="text-2xl lg:text-3xl font-medium leading-9 font-inter text-[#1E1A1C]">
                Founders, business owners, innovators, creators... drop us a
                line, and let's make sparks fly.
              </h1>
              <p className="text-[#363435] font-lexend leading-6  font-light text-base">
                Maybe you have an idea that you want to develop further. Maybe
                you have a brand that hasn’t yet reached its full potential.
                Maybe you provide a service that you think would be invaluable
                to us. We’re all ears.
              </p>
            </div>

            {/* right section */}
            <div className="bg-[#FFFCF2] p-6 lg:p-8 rounded-lg shadow-inner">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Full Name and Phone Number */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-black font-inter">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      {...register("fullName", {
                        required: "Full Name is required",
                      })}
                      className={`mt-1 block w-full bg-[#fffcf2] border-b-[1px] focus:border-red-400 focus:ring-red-400 ${
                        errors.fullName ? "border-red-500" : ""
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-red-500 text-sm">
                        {errors.fullName.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your phone number"
                      {...register("phoneNumber", {
                        required: "Phone Number is required",
                      })}
                      className={`mt-1 block w-full bg-[#fffcf2] border-b-[1px] focus:border-red-400 focus:ring-red-400 ${
                        errors.phoneNumber ? "border-red-500" : ""
                      }`}
                    />
                    {errors.phoneNumber && (
                      <span className="text-red-500 text-sm">
                        {errors.phoneNumber.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Email and Service */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className={`mt-1 block w-full bg-[#fffcf2] border-b-[1px] focus:border-red-400 focus:ring-red-400 ${
                        errors.email ? "border-red-500" : ""
                      }`}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Select Interested Service
                    </label>
                    <select
                      {...register("service", {
                        required: "Please select a service",
                      })}
                      className={`mt-1 block w-full bg-[#fffcf2] border-b-[1px] focus:border-red-400 focus:ring-red-400 ${
                        errors.service ? "border-red-500" : ""
                      }`}
                    >
                      <option value="">Select a service</option>
                      <option value="Service 1">Service 1</option>
                      <option value="Service 2">Service 2</option>
                      <option value="Service 3">Service 3</option>
                    </select>
                    {errors.service && (
                      <span className="text-red-500 text-sm">
                        {errors.service.message}
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Company name"
                    {...register("companyName", {
                      required: "Company Name is required",
                    })}
                    className={`mt-1 block w-full bg-[#fffcf2] border-b-[1px] focus:border-red-400 focus:ring-red-400 ${
                      errors.companyName ? "border-red-500" : ""
                    }`}
                  />
                  {errors.companyName && (
                    <span className="text-red-500 text-sm">
                      {errors.companyName.message}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Your message"
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className={`mt-1 block w-full bg-[#fffcf2] border-b-[1px] focus:border-red-400 focus:ring-red-400 ${
                      errors.message ? "border-red-500" : ""
                    }`}
                  ></textarea>
                  {errors.message && (
                    <span className="text-red-500 text-sm">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <div className="mt-8 flex justify-start">
                  <button
                    type="submit"
                    className="bg-black sm:w-[50%] lg:w-[30%] hover:bg-[#F15A28] text-white px-6 py-2 rounded-full font-lg transition"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <LogoCarousel />
      <OfficeDetails />
      <FooterWithMenu />
    </>
  );
};

export default ContactForm;
