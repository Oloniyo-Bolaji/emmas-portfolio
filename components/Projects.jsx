"use client";

import { urlFor } from "@/lib/imageBuilder";
import Image from "next/image";
import React from "react";
import { FaDatabase } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Projects = ({ projects }) => {
  useGSAP(() => {
    gsap.utils.toArray(".left").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    });

    gsap.utils.toArray(".right").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <div id="projects" className="text-white py-[20px] px-[20px] sm:px-[30px]">
      <h2 className="text-center uppercase font-bold my-[10px] text-gradient">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px] ">
        {projects.map((project, index) => (
          <div
            key={project._id}
            className={`${index % 2 === 0 ? "left" : "right"} rounded-[10px] p-[5px] bg-[rgba(105,90,90,0.2)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm border border-[rgba(105,90,90,0.3)]`}
          >
            <div className="w-full bg-dark rounded-[5px] flex flex-col gap-[5px] h-full p-[20px]">
              <div className="flex flex-start">
                <span className="border border-solid border-desc rounded-[5px] p-[5px] text-desc">
                  <FaDatabase />
                </span>
              </div>
              <div>
                <h1 className="text-center font-bold text-[15px] text-text">
                  {project.title}
                </h1>
                <p className="text-center p-[5px] leading-[25px] text-desc text-[13px]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <button
                      key={index}
                      className="p-[5px] font-bold text-[10px] flex items-center rounded-[5px] bg-[#00b4f030] text-[#00b4f0]"
                    >
                      {tech.title}
                    </button>
                  ))}
                </div>
              </div>
              <div className="w-full h-[200px] relative">
                <Image
                  src={urlFor(project.image).url()}
                  alt={project.title}
                  fill
                  sizes="auto"
                  className="object-contain"
                  priority
                  quality={60}
                />
              </div>
              <div className="mx-auto">
                <button className="bg-[#01007b] rounded-[5px] p-[10px] flex items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] text-white "
                  >
                    View Project
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
