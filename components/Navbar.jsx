"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { MdHome, MdReviews } from "react-icons/md";
import { FaUser, FaEnvelope, FaBloggerB } from "react-icons/fa";
import { RiToolsFill } from "react-icons/ri";
import { GiNetworkBars, GiGraduateCap } from "react-icons/gi";
import { urlFor } from "@/lib/imageBuilder";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap";



gsap.registerPlugin(ScrollToPlugin);


const Navbar = ({hero}) => {
  const [showMenu, setShowMenu] = useState(false);
 

  const toggle = () => {
    setShowMenu(!showMenu);
  };
  
  return (
    <nav className="sm:h-[60px] h-[60px] sm:w-full text-[white] w-full lg:w-[25%] lg:flex-col lg:h-full lg:justify-start lg:items-start flex justify-between items-center fixed top-0 left-0 z-[1000] px-[40px] py-[0]">
      <div className="lg:py-[40px] sm:px-[10px]">
        {hero[0].logo && (
          <Image
            src={urlFor(hero[0].logo).url()}
            alt="logo"
            width={40}
            height={40}
            className="w-full h-auto object-contain"
          />
        )}
      </div>
      <div
        className="icon sm:hidden block lg:hidden text-[25px]"
        onClick={toggle}
      >
        {showMenu ? <IoIosClose /> : <IoMenu />}
      </div>
      <div
        className={`${showMenu ? "block absolute top-[60px] left-0 w-full z-[1000] overflow-hidden bg-transparent transition-[height] duration-500 ease-in-out" : "sm:block hidden"}`}
      >
        <ul
          className={`flex uppercase sm:capitalize lg:flex-col sm:flex-row sm:justify-between sm:gap-[10px] list-none text-[13px] sm:text-[13px] ${showMenu ? "flex flex-col gap-[10px] justify-center items-center p-[10px]" : ""}`}
        >
          <a href="#about" className="flex gap-[20px] items-center">
            <span className="hidden lg:block">
              <FaUser />
            </span>
            <span>About</span>
          </a>
          <a href="#tools" className="flex gap-[20px] items-center">
            <span className="hidden lg:block">
              <RiToolsFill />
            </span>
            <span>Skills</span>
          </a>
          <a href="#projects" className="flex gap-[20px] items-center">
            <span className="hidden lg:block">
              <GiNetworkBars />
            </span>
            <span>Projects</span>
          </a>
          <a href="#certification" className="flex gap-[20px] items-center">
            <span className="hidden lg:block">
              <GiGraduateCap />
            </span>
            <span>Certification</span>
          </a>
          <a href="#testimonials" className="flex gap-[20px] items-center">
            <span className="hidden lg:block">
              <MdReviews />
            </span>
            <span>Testimonials</span>
          </a>
          <a href="#contact" className="flex gap-[20px] items-center">
            <span className="hidden lg:block">
              <FaEnvelope />
            </span>
            <span>Contact</span>
          </a>
          <Link href="/" className="flex gap-[20px] items-center">
            <span className="hidden lg:block">
              <FaBloggerB />
            </span>
            <span>Blog</span>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
