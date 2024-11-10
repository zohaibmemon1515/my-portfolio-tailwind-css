"use client";

import React, { useRef, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ServiceCard from "../ServiceCard/page";

const Service = () => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 3000 }),
  ]);

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!embla) return;

    const handlePrevClick = () => embla.scrollPrev();
    const handleNextClick = () => embla.scrollNext();

    const prevButton = prevRef.current;
    const nextButton = nextRef.current;

    prevButton?.addEventListener("click", handlePrevClick);
    nextButton?.addEventListener("click", handleNextClick);

    return () => {
      prevButton?.removeEventListener("click", handlePrevClick);
      nextButton?.removeEventListener("click", handleNextClick);
    };
  }, [embla]);

  return (
    <>
      <div className="bg-[#31065A] lg:h-auto md:h-auto h-[750px] flex flex-col justify-center items-center px-4 pb-24 font-sans overflow-hidden">
        <h1 className="flex justify-center items-center gap-2 font-semibold text-2xl sm:text-3xl mb-10 sm:mb-16 border-b-2 border-[#FFFFFF] pt-16 sm:pt-20">
          <span className="text-[#FFFFFF]">My</span>
          <span className="text-[#F86F03]">Services</span>
        </h1>

        <div className="sm:block">
          <div
            className="embla container lg:max-w-[53rem] md:max-w-[38rem]  mt-4 px-10 lg:px-[6rem] md:px-6 pt-20 relative overflow-hidden rounded-xl"
            ref={emblaRef}
          >
            <ServiceCard />

            <button
              ref={prevRef}
              className="absolute top-0 -translate-y-0 left-[22rem] lg:left-[22rem] md:left-[22rem] cursor-pointer z-10 bg-[#F86F03] text-white text-3xl shadow-lg rounded-full p-2"
            >
              &lt;
            </button>

            <button
              ref={nextRef}
              className="absolute top-0 -translate-y-0 right-[22rem] lg:right-[22rem] md:right-[22rem] cursor-pointer z-10 bg-[#F86F03] text-white text-3xl shadow-lg rounded-full p-2"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
