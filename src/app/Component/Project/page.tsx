"use client";

import React, { useRef, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  link: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  link,
}) => {
  return (
    <div className="relative w-80 h-[11.5rem] overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 group">
      <div className="absolute inset-0 transform transition-transform duration-500 group-hover:-translate-y-full">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          width={500}
          height={300}
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-40 text-white flex flex-col items-center justify-center gap-3 p-4 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
        <h1 className="text-xl font-semibold text-[#F86F03] text-center">
          {title}
        </h1>
        <p className="text-[10px] text-center mx-3">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFFFFF] font-semibold hover:text-[#F86F03] transition-colors duration-200 bg-[#F86F03] hover:bg-[#FFFFFF] rounded px-2 py-1 text-sm"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<"web" | "graphic">(
    "web"
  );
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 3000 }),
  ]);

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (embla) {
      const prevButton = prevRef.current;
      const nextButton = nextRef.current;

      if (prevButton)
        prevButton.addEventListener("click", () => embla.scrollPrev());
      if (nextButton)
        nextButton.addEventListener("click", () => embla.scrollNext());

      return () => {
        if (prevButton)
          prevButton.removeEventListener("click", () => embla.scrollPrev());
        if (nextButton)
          nextButton.removeEventListener("click", () => embla.scrollNext());
      };
    }
  }, [embla]);

  const webProjects = [
    {
      title: "Amazon Clone Website",
      description:
        "A responsive one-page clone of the Amazon website built with HTML and CSS.",
      link: "https://amazon-clone-web-zohaib-memons-projects.vercel.app",
      image: "/assests/img/Amazon.jpg",
    },
    {
      title: "Rock, Paper, Scissor Game",
      description:
        "An interactive Rock-Paper-Scissors game built with HTML, CSS, and TypeScript.",
      link: "https://rock-paper-scissor-game-zohaib-memons-projects.vercel.app",
      image: "/assests/img/Rock,Paper,Scissor.png",
    },
    {
      title: "Currency Converter",
      description:
        "A currency converter for quick and accurate exchange calculations.",
      link: "https://currency-converter-zohaib-memons-projects.vercel.app",
      image: "/assests/img/Currency.jpg",
    },
    {
      title: "Portfolio Website",
      description: "Portfolio website built with Next.js and Tailwind CSS.",
      link: "https://portfolio-web-zohaib-memons-projects.vercel.app",
      image: "/assests/img/Portfolio.png",
    },
    {
      title: "Resume Builder",
      description:
        "A dynamic resume builder with customizable, PDF-ready output.",
      link: "https://resume-builder-milestone5-zohaib-memons-projects.vercel.app",
      image: "/assests/img/Resume.png",
    },
    {
      title: "COMING SOON.....",
      description: "",
      link: "",
      image: "/assests/img/Coming.jpg",
    },
  ];

  const graphicProjects = [
    {
      title: "Social Media Poster Design",
      description:
        "Fresh, dynamic social media posters designed to make your brand shine.",
      link: "https://www.behance.net/gallery/208458225/Social-Media-Design",
      image: "/assests/img/Social.png",
    },
    {
      title: "Logo Design",
      description:
        "Tailored logo designs that reflect your brand's identity and stand out in a crowd.",
      link: "https://www.behance.net/gallery/208460335/Logo-Design",
      image: "/assests/img/Logo.jpg",
    },
    {
      title: "Thumbnail Design",
      description:
        "Eye-catching thumbnail designs that drive clicks and boost your content's visibility.",
      link: "https://www.behance.net/gallery/208460947/Thumbnail-Design",
      image: "/assests/img/Thumbnail.jpg",
    },
    {
      title: "Vector Illustration",
      description:
        "Custom vector illustrations that bring your ideas to life with vibrant detail and style.",
      link: "https://www.behance.net/gallery/208461319/Vector-Cartoon",
      image: "/assests/img/Vector.jpg",
    },
    {
      title: "Icons Design",
      description:
        "Stylish icon designs that enhance your brand and improve user experience.",
      link: "https://www.behance.net/gallery/211619317/Icons-Design",
      image: "/assests/img/Icons.jpg",
    },
    {
      title: "COMING SOON.....",
      description: "",
      link: "",
      image: "/assests/img/Coming.jpg",
    },
  ];
  const projectsToDisplay =
    activeCategory === "web" ? webProjects : graphicProjects;

  return (
    <div className="bg-[#31065A] lg:h-auto md:h-auto h-[750px] flex flex-col justify-center items-center px-4 pb-24 font-sans overflow-hidden">
      <h1 className="flex justify-center items-center gap-2 font-semibold text-2xl sm:text-3xl mb-10 sm:mb-16 border-b-2 border-[#FFFFFF] pt-16 sm:pt-20">
        <span className="text-[#FFFFFF]">My</span>
        <span className="text-[#F86F03]">Projects</span>
      </h1>

      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setActiveCategory("web")}
          className={`px-4 py-2 rounded ${
            activeCategory === "web"
              ? "bg-[#F86F03] text-white"
              : "bg-white text-[#F86F03]"
          } font-semibold transition-colors duration-200`}
        >
          Web Development
        </button>
        <button
          onClick={() => setActiveCategory("graphic")}
          className={`px-4 py-2 rounded ${
            activeCategory === "graphic"
              ? "bg-[#F86F03] text-white"
              : "bg-white text-[#F86F03]"
          } font-semibold transition-colors duration-200`}
        >
          Graphic Design
        </button>
      </div>

      <div className="relative w-full lg:max-w-[53rem] md:max-w-[40rem] px-4 mx-auto mt-28">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex gap-x-8">
            {projectsToDisplay.map((project, index) => (
              <div
                className="embla__slide flex justify-center cursor-pointer min-w-full md:min-w-[20rem] lg:min-w-[16rem] mt-16 mb-8"
                key={index}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  image={project.image}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          ref={prevRef}
          className="absolute top-[-5rem] lg:left-[22rem] md:left-[22rem] left-[6rem] transform -translate-y-0 cursor-pointer z-10 text-white text-3xl rounded-xl p-1 !bg-[#f86f03]"
        >
          &lt;
        </button>
        <button
          ref={nextRef}
          className="absolute top-[-5rem] lg:right-[22rem] md:right-[22rem] right-[6rem] transform -translate-y-0 cursor-pointer z-10  text-white text-3xl rounded-xl p-1 !bg-[#f86f03]"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Projects;
