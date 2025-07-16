"use client";

import { urlFor } from "@/lib/imageBuilder";
import Image from "next/image";
import React from "react";

const Certifications = ({ certs }) => {
  return (
    <div id="certification" className="text-white py-[20px] px-[20px] sm:px-[30px] bg-[rgba(105,90,90,0.2)] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm border border-[rgba(105,90,90,0.3)]">
      <h2 className="text-center uppercase font-bold my-[10px] text-gradient">
        Certifications
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
        {certs.map((cert) => (
          <div key={cert._id} className="border border-solid shadow-[2px_2px_3px_#00b4f0] ">
            <div className="w-full h-[200px] relative">
              <Image
                src={urlFor(cert.image).url()}
                alt={cert.title}
                fill
                priority
                sizes="auto"
                className="object-contain" 
              />
            </div>
            <div className="flex flex-col gap-[10px] items-center justify-center my-[10px]">
              <h3 className="text-[15px] font-bold text-[#00b4f0]">{cert.title}</h3>
              <p className="text-[13px]">Skill: {cert.skill}</p>
              <button className="bg-[#01007b] rounded-[5px] text-[13px] p-[10px]">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  View
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
