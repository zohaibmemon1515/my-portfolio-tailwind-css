import Image from "next/image";
import Link from "next/link";

const AboutMe = () => {
  return (
    <>
      <div className="bg-[#170550] h-auto flex flex-col justify-center items-center pb-20 font-sans">
        <h1 className="flex justify-center items-center gap-2 font-semibold text-2xl sm:text-3xl mb-10 sm:mb-16 border-b-2 border-[#FFFFFF] pt-10 sm:pt-20">
          <span className="text-[#FFFFFF]">About</span>
          <span className="text-[#F86F03]">Me</span>
        </h1>

        <div className="max-w-6xl w-full mt-4 grid grid-cols-1 sm:grid-cols-12 gap-y-6 items-center justify-center">
          <div className="sm:col-span-6 flex justify-center items-center">
            <Image
              alt="hero"
              loading="lazy"
              width={800}
              height={100}
              decoding="async"
              className="w-[16rem] h-[18rem] md:w-[18rem] md:h-[19rem] lg:w-[20rem] lg:h-[21rem] rounded-xl transition-transform duration-300 hover:scale-105 shadow-[8px_8px_15px_rgba(0,0,0,0.4)] object-cover mb-3 mt-4 md:mt-0 lg:mt-0"
              src="/assests/img/profilepicture.jpeg"
            />
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-6 lg:pl-[5.5rem] md:pl-10 pl-14 lg:mr-20 md:mr-14 mr-14 md:pt-4 lg:pt-2 pt-20 md:h-[22rem] lg:h-[24rem] flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-[#F86F03] md:text-3xl sm:text-3xl transition-colors duration-300">
                Frontend Developer <br className="hidden sm:block" /> &amp;
                Graphic Designer
              </h2>

              <p className="text-sm lg:pt-7 md:pt-4 pt-7 font-medium md:text-sm lg:text-base transition-opacity duration-300 text-[#FFFFFF]">
                I'm MD Zohaib Memon, a graphic designer with a passion for
                crafting distinctive brand identities and visuals that tell
                engaging stories.
              </p>

              <p className="text-sm lg:pt-7 md:pt-4 pt-7 font-medium md:text-sm lg:text-base transition-opacity duration-300 text-[#FFFFFF]">
                As a frontend developer, I build clean, user-centric websites
                that seamlessly blend design aesthetics with functional
                performance.
              </p>

              <div className="lg:pt-7 md:pt-4 pt-7">
                <Link href="/assests/Cv/GraphicCv.pdf" passHref>
                  <button className="text-[#31065A] rounded-full bg-[#FFFFFF] px-6 py-2 font-semibold transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#F86F03] focus:ring-opacity-50 hover:bg-[#F86F03] hover:text-white">
                    Read More...
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
