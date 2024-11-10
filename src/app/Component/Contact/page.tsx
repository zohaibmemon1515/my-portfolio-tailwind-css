"use client";

import { useState } from "react";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleAlert = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Thank You for your response!");
    console.log("Button clicked");

    // Clear all input fields
    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="bg-[#170550] flex flex-col justify-center items-center h-auto lg:h-[700px] pb-20 font-sans px-4">
      <h1 className="text-[#FFFFFF] font-semibold text-2xl sm:text-3xl mb-10 sm:mb-16 border-b-2 border-[#FFFFFF] pt-20 sm:pt-20 lg:mt-14">
        Contact
      </h1>
      <div className="max-w-6xl w-full mt-4 grid grid-cols-1 sm:grid-cols-12 gap-y-10 items-center justify-center">
        <div className="sm:col-span-6 text-[#FFFFFF] flex flex-col gap-6 px-6 md:px-12 lg:px-16 pb-14 justify-center mt-10 lg:mt-0 md:mt-0 lg:ml-10 ml-2">
          <div className="flex items-center gap-3">
            <FaPhone className="text-2xl" />
            <p className="lg:text-lg md:text-base text-sm">+92 319-352479</p>
          </div>
          <div className="flex items-center gap-3">
            <MdEmail className="text-2xl" />
            <p className="lg:text-lg md:text-base text-sm">
              Zohaibmemon1515@gmail.com
            </p>
          </div>
          <div className="flex items-center gap-3">
            <FaLocationArrow className="text-2xl" />
            <p className="lg:text-lg md:text-base text-sm">
              Memon society, Qasimabad, Hyderabad
            </p>
          </div>
        </div>

        <div className="col-span-12 sm:col-span-6 flex flex-col gap-4 p-6 md:p-12 lg:p-16 rounded-lg lg:mr-11 md:mr-0">
          <form onSubmit={handleAlert} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-2xl bg-[#43366A] focus:outline-none focus:ring-2 focus:ring-[#F86F03] text-[#FFFFFF]"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-2xl bg-[#43366A] focus:outline-none focus:ring-2 focus:ring-[#F86F03] text-[#FFFFFF]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="lg:flex flex-col sm:flex-row sm:gap-3">
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-3 rounded-2xl bg-[#43366A] focus:outline-none focus:ring-2 focus:ring-[#F86F03] text-[#FFFFFF] md:mb-4 lg:mb-0 mb-4"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded-2xl bg-[#43366A] focus:outline-none focus:ring-2 focus:ring-[#F86F03] text-[#FFFFFF]"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="w-full p-3 h-28 rounded-2xl bg-[#43366A] focus:outline-none focus:ring-2 focus:ring-[#F86F03] text-[#FFFFFF]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="bg-[#43366A] text-[#FFFFFF] py-2 px-4 rounded-full font-semibold hover:bg-[#31065A] transition-transform duration-300 hover:scale-105 justify-center items-center flex"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
