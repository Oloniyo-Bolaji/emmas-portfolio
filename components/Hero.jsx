"use client";

import { IoMdDownload } from "react-icons/io";
import { urlFor } from "@/lib/imageBuilder";
import { PortableText } from "next-sanity";
import Image from "next/image";
import React, { useEffect } from "react";
import { Michroma } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(useGSAP);

const michroma = Michroma({
  subsets: ["latin"],
  weight: ["400"],
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const Hero = ({ hero }) => {
  useGSAP(() => {
    gsap.from(".box", { x: 360 });
    gsap.to(".text", {
      type: "data analyst",
    });
  }, []);

  return (
    <div className="lg:min-h-screen text-[white] py-[20px] px-[20px] sm:px-[30px] flex justify-center items-center flex-col gap-[20px]">
      <div className="rounded-full w-[200px] h-[200px] p-[10px] border-solid border-[5px] border-[white]">
        <div className="relative pt-[10px] w-full h-full rounded-full overflow-hidden p-[10px]">
          {hero[0].profilePicture && (
            <Image
              src={urlFor(hero[0].profilePicture).url()}
              alt="logo"
              priority
              fill
              sizes="200px"
              className="object-cover"
            />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-[5px] items-center">
        <h1
          className={`${bebas.className} font-800 sm:text-[50px] text-[40px] bg-gradient-to-t from-[#01007b] to-[#ffffff] via-[#00b4f0] bg-clip-text text-transparent `}
        >
          {hero[0].name}
        </h1>
        <h3 className="text-[15px]">
          <Typewriter
            words={[hero[0].techField]}
            cursorStyle="_"
            loop={1}
            cursorBlinking={true}
          />
        </h3>
        <div className="text-[13px] text-center text-[#ccc]">
          <PortableText value={hero[0].introduction} />
        </div>
        <div className="flex gap-[15px]">
          <span className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-white">
            <a
              href={hero[0].instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E1306C] text-[20px]"
            >
              <FaInstagram />
            </a>
          </span>
          <span className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-white">
            <a
              href={hero[0].linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077B5] text-[20px]"
            >
              <FaLinkedinIn />
            </a>
          </span>
          <span className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-white">
            <a
              href={hero[0].x_twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1DA1F2] text-[20px]"
            >
              <FaTwitter />
            </a>
          </span>
        </div>
        <div className="flex gap-[20px]">
          <button className="w-[100px] rounded-[10px] bg-[white] text-[#01007b] p-[10px] text-[13px]">
            <a
              href={hero[0].resume}
              download="Emmanuel_Odewole.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              Resume
            </a>
          </button>
          <button className="w-[100px] rounded-[10px] bg-[#01007b] text-[white] p-[10px] text-[13px]">
            <Link href="">Contact</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
