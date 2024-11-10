"use client";

import Link from "next/link";
import Image from "next/image";
import { TiSocialFacebook } from "react-icons/ti";
import { RiLinkedinFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <>
      <section className="bg-purple-950 md:h-[600px] h-auto flex items-center">
        <div className="container mx-auto px-3 max-w-6xl">
          <div className="grid grid-cols-12 gap-y-8 md:gap-10 items-center lg:pt-20 md:pt-20 pt-0 pb-20 md:pb-0 lg:pb-0">
            <div className="col-span-12 md:col-span-6 lg:col-span-6 lg:pl-24 md:pl-10 pl-8 lg:mr-5 md:mr-2 mr-14 md:pt-4 lg:pt-4 pt-24 md:h-[22rem] lg:h-[24rem] flex flex-col justify-between">
              <div>
                <h2 className="text-[#F86F03] font-semibold lg:text-2xl md:text-xl text-lg font-emoji">
                  Hi, It's me
                </h2>
                <h1 className="text-[#FFFFFF] font-bold lg:text-4xl md:text-3xl text-3xl font-roboto md:font-bold mt-0.5">
                  MD ZOHAIB MEMON
                </h1>
                <h2 className="text-[#FFFFFF] font-semibold lg:text-2xl md:text-xl text-lg font-emoji mt-2 inline-flex items-center">
                  And I'm a
                  <span className="text-[#F86F03] ml-2">
                    <Typewriter
                      options={{
                        strings: ["Frontend Developer"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </h2>
                <p className="text-[#FFFFFF] font-medium lg:text-base md:text-sm text-sm font-emoji mt-3 w-full max-w-full break-words leading-normal whitespace-normal">
                  I combine design with clean code to craft visuals and smooth,
                  user-friendly websites that are both beautiful and effective.
                </p>
                <div className="flex justify-start items-center gap-x-5 mt-5">
                  <Link
                    href="https://www.facebook.com/zohaib.memon.961"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TiSocialFacebook className="border-white border-2 border-solid rounded-full text-white lg:text-3xl md:text-3xl text-3xl p-0.5 transition-all duration-300 hover:bg-[#F86F03] hover:text-black hover:shadow-lg cursor-pointer" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/zohaib-memon-625b8928b/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiLinkedinFill className="border-white border-2 border-solid rounded-full text-white lg:text-3xl md:text-3xl text-3xl p-0.5 transition-all duration-300 hover:bg-[#F86F03] hover:text-black hover:shadow-lg cursor-pointer" />
                  </Link>
                  <Link
                    href="https://github.com/zohaibmemon1515"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="border-white border-2 border-solid rounded-full text-white lg:text-3xl md:text-3xl text-3xl p-0.5 transition-all duration-300 hover:bg-[#F86F03] hover:text-black hover:shadow-lg cursor-pointer" />
                  </Link>
                  <Link
                    href="https://api.whatsapp.com/send?phone=923193852479"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="border-white border-2 border-solid rounded-full text-white lg:text-3xl md:text-3xl text-3xl p-0.5 transition-all duration-300 hover:bg-[#F86F03] hover:text-black hover:shadow-lg cursor-pointer" />
                  </Link>
                </div>
                <button className="bg-[#F86F03] rounded-full px-6 py-2 text-white font-semibold lg:text-lg md:text-lg text-base mt-7 justify-center items-center flex transition-all duration-300 hover:bg-[#FFFFFF] hover:text-[#F86F03] hover:shadow-lg hover:scale-105">
                  <Link
                    href="/assests/Cv/GraphicCv.pdf"
                    download="MD_Zohaib_Memon_CV"
                  >
                    Download CV
                  </Link>
                </button>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-6 mb-10 pt-4 flex justify-center items-center">
              <Image
                alt="hero"
                src="/assests/img/profilepicture.jpeg"
                width={800} 
                height={100}
                className="w-[16rem] h-[18rem] md:w-[18rem] md:h-[19rem] lg:w-[20rem] lg:h-[21rem] rounded-xl transition-transform duration-300 hover:scale-105 shadow-[8px_8px_15px_rgba(0,0,0,0.4)] object-cover mb-3 lg:mr-20 md:mr-5 mt-20 lg:mt-0 md:mt-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
