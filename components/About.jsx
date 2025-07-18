"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { PortableText } from "next-sanity";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const About = ({ about }) => {
  const staggerRef = useRef();

  useGSAP(() => {
    const boxes = gsap.utils.toArray(staggerRef.current.children);

    gsap.from(boxes, {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: staggerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <div
      id="about"
      style={{
        background: "var(--glass-bg)",
        borderRadius: "var(--glass-radius)",
        boxShadow: "var(--glass-shadow)",
        backdropFilter: "var(--glass-blur)",
        WebkitBackdropFilter: "var(--glass-blur)",
        border: "var(--glass-border)",
      }}
      className="py-[20px] px-[20px] sm:px-[30px] text-text"
    >
      <div>
        <h2 className="text-center uppercase font-bold my-[10px] text-gradient">
          {about[0].title}
        </h2>
        <div className="text-center leading-[25px] sm:text-[13px] text-[13px]">
          <PortableText value={about[0].about} />
        </div>

        <div
          ref={staggerRef}
          className="grid sm:grid-cols-3 grid-cols-1 gap-[10px] my-[10px]"
        >
          {about[0].services.map((service) => (
            <div
              key={service._key}
              className="text-center p-[10px] border border-double shadow-[2px_2px_3px_#ccc] rounded-[5px]"
            >
              <h2 className="text-[13px] uppercase font-bold">
                {service.title}
              </h2>
              <p className="text-[12px] my-[5px] text-[#ccc]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
