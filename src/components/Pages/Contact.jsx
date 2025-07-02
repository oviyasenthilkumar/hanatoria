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
              <h1 className="text-2xl lg:text-3xl font-medium text-gray-800 font-inter">
                Founders, business owners, innovators, creators... drop us a
                line, and let's make sparks fly.
              </h1>
              <p className="text-gray-600 font-lexend">
                Maybe you have an idea that you want to develop further. Maybe
                you have a brand that hasn’t yet reached its full potential.
                Maybe you provide a service that you think would be invaluable
                to us. We’re all ears.
              </p>
            </div>

            {/* right section */}
           <div className="bg-[#FFFCF2] p-6 lg:p-8 rounded-lg shadow-inner">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Full Name and Phone Number */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="relative w-full">
                    <input
                      type="text"
                      {...register("fullName", {
                        required: "Full Name is required",
                      })}
                      className={`peer w-full bg-[#fffcf2] border-b-[1px] focus:border-red-400 focus:ring-red-400 outline-none pt-4 pb-2 px-2 text-base
                      ${errors.fullName ? "border-red-500" : ""}`}
                      placeholder=" "
                    />
                    <label className="absolute left-2 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-red-500">
                      Full Name
                    </label>
                    {errors.fullName && (
                      <span className="text-red-500 text-sm">
                        {errors.fullName.message}
                      </span>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="relative w-full">
                    <input
                      type="text"
                      {...register("phoneNumber", {
                        required: "Phone Number is required",
                      })}
                      className={`peer w-full bg-[#fffcf2] border-b-[1px] focus:border-red-400 focus:ring-red-400 outline-none pt-4 pb-2 px-2 text-base
                      ${errors.phoneNumber ? "border-red-500" : ""}`}
                      placeholder=" "
                    />
                    <label className="absolute left-2 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-red-500">
                      Phone Number
                    </label>
                    {errors.phoneNumber && (
                      <span className="text-red-500 text-sm">
                        {errors.phoneNumber.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Email and Service Selection */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Email Field */}
                  <div className="relative w-full">
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className={`peer w-full bg-[#fffcf2] border-b-[1px] focus:border-red-400 focus:ring-red-400 outline-none pt-4 pb-2 px-2 text-base
                      ${errors.email ? "border-red-500" : ""}`}
                      placeholder=" "
                    />
                    <label className="absolute left-2 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-red-500">
                      Email
                    </label>
                    {errors.email && (
                      <span className="text-red-500 text-sm">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  {/* Service Selection with Dropdown Icon */}
                  <div className="relative w-full">
                    <div className="relative">
                      <select
                        {...register("service", {
                          required: "Please select a service",
                        })}
                        className={`peer w-full bg-[#fffcf2] border-b-[1px] focus:border-red-400 focus:ring-red-400 outline-none pt-4 pb-2 px-2 text-base appearance-none
                        ${errors.service ? "border-red-500" : ""}`}
                        defaultValue=""
                      >
                        <option value="" disabled hidden></option>
                        <option value="Service 1">Service 1</option>
                        <option value="Service 2">Service 2</option>
                        <option value="Service 3">Service 3</option>
                      </select>
                      {/* Dropdown Icon */}
                      <div className="absolute right-2 top-5 text-gray-400 pointer-events-none">
                        ▼
                      </div>
                    </div>
                    <label className="absolute left-2 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-red-500">
                      Select Interested Service
                    </label>
                    {errors.service && (
                      <span className="text-red-500 text-sm">
                        {errors.service.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Company Name */}
                <div className="relative w-full">
                  <input
                    type="text"
                    {...register("companyName", {
                      required: "Company Name is required",
                    })}
                    className={`peer w-full bg-[#fffcf2] border-b-[1px] focus:border-red-400 focus:ring-red-400 outline-none pt-4 pb-2 px-2 text-base
                    ${errors.companyName ? "border-red-500" : ""}`}
                    placeholder=" "
                  />
                  <label className="absolute left-2 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-red-500">
                    Company Name
                  </label>
                  {errors.companyName && (
                    <span className="text-red-500 text-sm">
                      {errors.companyName.message}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="relative w-full">
                  <textarea
                    rows="4"
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className={`peer w-full bg-[#fffcf2] border-b-[1px] focus:border-red-400 focus:ring-red-400 outline-none pt-4 pb-2 px-2 text-base
                    ${errors.message ? "border-red-500" : ""}`}
                    placeholder=" "
                  ></textarea>
                  <label className="absolute left-2 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-red-500">
                    Message
                  </label>
                  {errors.message && (
                    <span className="text-red-500 text-sm">
                      {errors.message.message}
                    </span>
                  )}
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-[50%] bg-[#1E1A1C] leading-8 hover:bg-[#F15A28] text-white font-bold py-3 px-4 rounded-full transition text-base font-inter"
                >
                  SUBMIT
                </button>
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
