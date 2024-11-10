"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <nav
        className="bg-[#170550] h-[85px] px-4 md:px-6 
    flex items-center justify-center shadow-2xl shadow-black box-border"
      >
        <div className="w-full max-w-5xl flex items-center justify-between lg:ml-9">
          <div className="flex-shrink-0">
            <Image
              alt="Logo"
              loading="lazy"
              width={200}
              height={80}
              className="h-full object-contain"
              src="/assests/img/Logo.png"
            />
          </div>
          <ul className="hidden lg:flex lg:gap-8 text-[#FFFFFF] font-semibold lg:text-base items-center">
            <li>
              <Link
                className="transition-all duration-300 ease-in transform hover:scale-105 hover:text-[#F86F03]"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="transition-all duration-300 ease-in transform hover:scale-105 hover:text-[#F86F03]"
                href="/Component/AboutMe"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                className="transition-all duration-300 ease-in transform hover:scale-105 hover:text-[#F86F03]"
                href="/Component/Service"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="transition-all duration-300 ease-in transform hover:scale-105 hover:text-[#F86F03]"
                href="/Component/Skill"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="transition-all duration-300 ease-in transform hover:scale-105 hover:text-[#F86F03]"
                href="/Component/Project"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                className="transition-all duration-300 ease-in transform hover:scale-105 hover:text-[#F86F03]"
                href="/Component/Contact"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="hidden lg:block flex-shrink-0">
            <Link href="https://api.whatsapp.com/send?phone=923193852479">
              <button className="text-[#31065A] bg-[#FFFFFF] rounded-full px-8 py-2 font-bold transition-all duration-300 ease-in hover:bg-[#F86F03] hover:text-white">
                Hire me
              </button>
            </Link>
          </div>
          <div className="lg:hidden md:mr-6 mr-3">
            <button
              type="button"
              aria-haspopup="dialog"
              aria-expanded={isSidebarOpen ? "true" : "false"}
              onClick={toggleSidebar}
            >
              <GiHamburgerMenu className="text-[#FFFFFF]" size={28} />
            </button>
          </div>

          <div
            role="dialog"
            aria-describedby="radix-:R4cqH2:"
            aria-labelledby="radix-:R4cqH1:"
            className={`fixed z-50 gap-4 shadow-lg transition-transform transform duration-700 ${
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            } inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm p-4 bg-[#170550] text-[#FFFFFF] font-extrabold`}
            style={{ pointerEvents: isSidebarOpen ? "auto" : "none" }}
          >
            <button
              type="button"
              onClick={toggleSidebar}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
            >
              <IoClose className="h-4 w-4 text-white" />
              <span className="sr-only">Close</span>
            </button>
            <ul className="flex flex-col gap-4 text-[#FFFFFF] font-medium text-lg mt-16 items-center justify-center">
              <li>
                <Link
                  className="transition-all duration-300 ease-in transform hover:scale-105 hover:text-[#F86F03]"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="transition-all duration-300 ease-in transform hover:scale-105 hover:text-[#F86F03]"
                  href="/Component/AboutMe"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  className="transition-all duration-300 ease-in transform hover:scale-105 hover:text-[#F86F03]"
                  href="/Component/Service"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="transition-all duration-300 ease-in transform hover:scale-105 hover:text-[#F86F03]"
                  href="/Component/Skill"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  className="transition-all duration-300 ease-in transform hover:scale-105 hover:text-[#F86F03]"
                  href="/Component/Project"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  className="transition-all duration-300 ease-in transform hover:scale-105 hover:text-[#F86F03]"
                  href="/Component/Contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="items-center justify-center flex mt-10">
              <Link href="https://api.whatsapp.com/send?phone=923193852479">
                <button className="bg-[#FFFFFF] text-[#31065A] font-semibold rounded-full px-6 py-1 text-lg transition-all duration-300 ease-in hover:bg-[#F86F03] hover:text-white">
                  Hire me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
