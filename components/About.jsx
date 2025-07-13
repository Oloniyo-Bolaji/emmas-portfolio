"use client";

import { PortableText } from "next-sanity";
import React from "react";
import { DM_Serif_Display } from "next/font/google";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});


const About = ({about}) => {



  return (
    <div className={`${dmSerif.className} lg:min-h-screen`}>
      <h2>{about[0].title}</h2>
      <PortableText value={about[0].about}/>
    </div>
  );
};

export default About;
