import React from "react";
import { FaPaintBrush, FaCode, FaVideo } from "react-icons/fa";

const GraphicDesignCard: React.FC = () => (
  <div className=" w-[16rem] h-[22rem] md:w-[18rem] md:h-[19rem] lg:w-[20rem] lg:h-[25rem] max-w-lg p-4 lg:p-8 md:p-6 bg-white rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-center flex flex-col justify-between">
    <div className="flex justify-center items-center text-6xl lg:text-6xl md:text-5xl text-[#F86F03] mb-10 sm:mb-7 mt-6 lg:mt-4 md:mt-6">
      <FaPaintBrush />
    </div>
    <div>
      <h3 className="text-2xl lg:text-3xl md:text-2xl font-bold text-[#170550] mb-4 sm:mb-4">
        Graphic Designing
      </h3>
      <p className="text-[#392970] text-xs lg:text-base leading-relaxed mb-4 sm:mb-6 font-semibold">
        Every pixel has a soul, a hidden depth waiting to be uncovered with each
        design, I strive to reveal that essence of transforming ideas into
        visual stories that speak to the viewer.
      </p>
    </div>
  </div>
);

const FrontendDevelopmentCard: React.FC = () => (
  <div className="  w-[16rem] h-[22rem] md:w-[18rem] md:h-[19rem] lg:w-[20rem] lg:h-[25rem] max-w-lg p-4 lg:p-8 md:p-6 bg-white rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-center flex flex-col justify-between">
    <div className="flex justify-center items-center text-6xl lg:text-6xl md:text-5xl text-[#F86F03] mb-4 sm:mb-5 mt-6 lg:mt-1 md:mt-0">
      <FaCode />
    </div>
    <div>
      <h3 className="text-2xl lg:text-3xl md:text-2xl font-bold text-[#170550] mb-4 sm:mb-4">
        Frontend Development
      </h3>
      <p className="text-[#392970] text-xs lg:text-base leading-relaxed mb-4 sm:mb-6 font-semibold">
        Building responsive, interactive websites that offer a smooth and
        engaging user experience using the latest front-end technologies,
        ensuring your site is both functional and visually stunning across all
        devices.
      </p>
    </div>
  </div>
);

const VideoEditingCard: React.FC = () => (
  <div className=" w-[16rem] h-[22rem] md:w-[18rem] md:h-[19rem] lg:w-[20rem] lg:h-[25rem] max-w-lg p-4 lg:p-8 md:p-6 bg-white rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-center flex flex-col justify-between">
    <div className="flex justify-center items-center text-6xl lg:text-6xl md:text-5xl text-[#F86F03] mb-2 sm:mb-6 mt-10 lg:mt-5 md:mt-3">
      <FaVideo />
    </div>
    <div>
      <h3 className="text-2xl lg:text-3xl md:text-2xl font-bold text-[#170550] mb-4 sm:mb-4">
        Video Editing
      </h3>
      <p className="text-[#392970] text-xs lg:text-base leading-relaxed mb-6 sm:mb-6 font-semibold">
        Transform your raw footage into captivating, high-quality videos that
        effectively tell your story, engage your audience, and elevate your
        brand with smooth edits, dynamic transitions, and professional-grade
        production.
      </p>
    </div>
  </div>
);

export { GraphicDesignCard, FrontendDevelopmentCard, VideoEditingCard };
