"use client";

import { PortableText } from "next-sanity";
import React from "react";


const About = ({ about }) => {
  return (
    <div className="py-[20px] px-[20px] sm:px-[30px] bg-[rgba(105,90,90,0.2)] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm border border-[rgba(105,90,90,0.3)] text-[white] ">
      <h2 className="text-center uppercase font-bold my-[10px] bg-gradient-to-t from-[#01007b] to-[#ffffff] via-[#00b4f0] bg-clip-text text-transparent">
        {about[0].title}
      </h2>
      <div className="text-center leading-[25px] sm:text-[15px]  text-[13px]">
        <PortableText value={about[0].about} />
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-[10px] my-[10px]">
        {about[0].services.map((service) => (
          <div key={service._key} className="text-center p-[10px] border border-double rounded-[5px]">
            <h2 className="text-[15px]">{service.title}</h2>
            <p className="text-[13px] my-[5px]">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
