"use client";

import TextLoop from "react-text-loop";
import { urlFor } from "@/lib/imageBuilder";
import { PortableText } from "next-sanity";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaDownload } from "react-icons/fa6";
import { Michroma } from "next/font/google";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const michroma = Michroma({
  subsets: ["latin"],
  weight: ["400"],
});

import { DM_Serif_Display } from "next/font/google";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

const Hero = ({ hero }) => {

  return (
    <div
      className={`${dmSerif.className} lg:min-h-screen flex items-center lg:justify-center lg:flex-col sm:flex-row flex-col sm:px-[80px] sm:py-[100px] px-[40px] py-[100px] gap-[20px]`}
    >
      <div className="w-full sm:w-[50%] lg:w-full">
        <h2
          className={`${michroma.className} font-[800] lg:text-[35px] sm:text-[25px] text-[20px]`}
        >
          {hero[0].name}
        </h2>
        <span>{hero[0].techField}</span>
        <div className="tech">
          <PortableText value={hero[0].introduction} />
        </div>
        <button className="border-[1px] border-solid">
          <a
            href={hero[0].resume}
            download="Emmanuel_Odewole.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center"
          >
            <span>Resume</span>
            <span>
              <FaDownload />
            </span>
          </a>
        </button>
      </div>

      <div className="w-full sm:w-[50%] lg:w-full">
        {hero[0].profilePicture && (
          <Image
            src={urlFor(hero[0].profilePicture).url()}
            alt="logo"
            width={400}
            height={100}
            priority
            className="rounded-full object-contain"
          />
        )}
      </div>
    </div>
  );
};

export default Hero;
