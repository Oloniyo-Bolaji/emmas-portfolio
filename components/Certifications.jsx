"use client";

import { urlFor } from "@/lib/imageBuilder";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

const Certifications = ({ certs }) => {
  const cardRefs = useRef([]);

  cardRefs.current = [];

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  const handleEnter = (index) => {
    gsap.to(cardRefs.current[index], {
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = (index) => {
    gsap.to(cardRefs.current[index], {
      scale: 1,
      duration: 0.3,
      ease: "power2.inOut",
    });
  };

  return (
    <div
      id="certification"
      style={{
        background: "var(--glass-bg)",
        borderRadius: "var(--glass-radius)",
        boxShadow: "var(--glass-shadow)",
        backdropFilter: "var(--glass-blur)",
        WebkitBackdropFilter: "var(--glass-blur)",
        border: "var(--glass-border)",
      }}
      className="text-text py-[20px] px-[20px] sm:px-[30px] "
    >
      <h2 className="text-center uppercase font-bold my-[10px] text-gradient">
        Certifications
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
        {certs.map((cert, index) => (
          <div
            key={cert._id}
            ref={addToRefs}
            onMouseEnter={() => handleEnter(index)}
            onMouseLeave={() => handleLeave(index)}
            className="shadow-[2px_2px_3px_#888] transition-transform flex gap-[20px] rounded-[5px] p-[10px]"
          >
            <div className="w-[30%] relative">
              <Image
                src={urlFor(cert.image).url()}
                alt={cert.title}
                fill
                priority
                sizes="auto"
                className="object-contain"
              />
            </div>
            <div className="w-[70%] flex flex-col gap-[10px]">
              <h1 className="text-[13px] font-bold text-[#00b4f0]">
                {cert.title}
              </h1>
              <span className="text-[12px] font-bold text-text">
                {cert.platform}
              </span>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] underline w-fit text-[blue] cursor-grabbing"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
