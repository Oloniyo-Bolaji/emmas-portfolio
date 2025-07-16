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
function getSamePageAnchor(link) {
  const { protocol, host, pathname, search } = window.location;
  return (
    link.protocol === protocol &&
    link.host === host &&
    link.pathname === pathname &&
    link.search === search &&
    link.hash
  )
    ? link.hash
    : null;
}


function scrollToHash(hash, e) {
  const elem = hash ? document.querySelector(hash) : null;
  if (elem) {
    if (e) e.preventDefault();
    gsap.to(window, { duration: 1, scrollTo: elem });
  }
}

const Navbar = () => {
 useEffect(() => {
  const anchorHandler = (e) => {
    const target = e.currentTarget;
    const hash = getSamePageAnchor(target);
    if (hash) {
      scrollToHash(hash, e);
    }
  };

  const allLinks = Array.from(document.querySelectorAll("a[href^='#']"));
  allLinks.forEach((link) => {
    link.addEventListener("click", anchorHandler);
  });

  scrollToHash(window.location.hash);

  return () => {
    allLinks.forEach((link) => {
      link.removeEventListener("click", anchorHandler);
    });
  };
}, []);


  const [showMenu, setShowMenu] = useState(false);

  const toggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="sm:h-[60px] h-[60px] sm:w-full text-[white] w-full lg:w-[25%] lg:flex-col lg:h-full lg:justify-start lg:items-start flex justify-between items-center fixed top-0 left-0 z-[1000] px-[40px] py-[0] shadow-[2px_2px_3px_#01007b]">
      <div className="lg:py-[40px] sm:px-[10px]">
        <Image
          src="/logo.png"
          alt="logo"
          width={40}
          height={40}
          priority
          className="w-full h-auto object-contain"
        />
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
          <a href="#certification" className="flex gap-[20px] items-center">
            <span className="hidden lg:block">
              <GiGraduateCap />
            </span>
            <span>Certification</span>
          </a>
          <a href="#projects" className="flex gap-[20px] items-center">
            <span className="hidden lg:block">
              <GiNetworkBars />
            </span>
            <span>Projects</span>
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
