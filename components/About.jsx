"use client";

import { PortableText } from "next-sanity";
import React from "react";

const About = ({ about }) => {
  return (
    <div className="lg:min-h-screen">
      <h2 className="text-center uppercase font-bold">{about[0].title}</h2>
      <div className="text-center leading-[25px] text-[15px] px-[30px] py-[20px]">
        <PortableText value={about[0].about} />
      </div>
    </div>
  );
};

export default About;
