"use client";

import { urlFor } from "@/lib/imageBuilder";
import Image from "next/image";
import React from "react";
import { FaDatabase } from "react-icons/fa";

const Projects = ({ projects }) => {
  console.log(projects);

  return (
    <div className="text-white py-[20px] px-[20px] sm:px-[30px]">
      <h2 className="text-center uppercase font-bold my-[10px] bg-gradient-to-t from-[#01007b] to-[#ffffff] via-[#00b4f0] bg-clip-text text-transparent">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px] ">
        {projects.map((project) => (
          <div
            key={project._id}
            className="rounded-[10px] p-[5px] bg-[rgba(105,90,90,0.2)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm border border-[rgba(105,90,90,0.3)]"
          >
            <div className="w-full bg-[#000000] rounded-[5px] flex flex-col  h-full p-[20px]">
              <div className="flex flex-start">
                <span className="border border-solid border-[#ccc] rounded-[5px] p-[5px] text-[#ccc]">
                  <FaDatabase />
                </span>
              </div>
              <div>
                <h1 className="text-center font-bold text-[15px]">
                  {project.title}
                </h1>
                <p className="text-center p-[5px] leading-[25px] text-[#ccc] text-[13px]">
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
