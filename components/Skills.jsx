"use client";

import { urlFor } from "@/lib/imageBuilder";
import Image from "next/image";
import React from "react";

const Skills = ({ skills, tools }) => {


  return (
    <div className="text-[white] py-[20px] px-[20px] sm:px-[30px] ">
      <h2 className="text-center uppercase font-bold my-[10px] bg-gradient-to-t from-[#01007b] to-[#ffffff] via-[#00b4f0] bg-clip-text text-transparent">
        Tools & skills
      </h2>
      <div className="flex flex-col sm:flex-row gap-[10px] sm:gap-[20px]">
        <div className="sm:w-[50%] w-[100%]">
          <h3 className="uppercase font-bold my-[10px] underline">Tools</h3>
          <div className="my-[5px] grid gap-[10px] sm:grid-cols-2 grid-cols-3">
            {tools.map((tool) => (
              <div key={tool._id} className="flex items-center gap-[10px] flex-col rounded-[5px] bg-[#00b4f0] py-[5px] ">
                <h2 className="text-[13px]">{tool.title}</h2>
              </div>
            ))}
          </div>
        </div>

        <div className="sm:w-[50%] w-[100%]">
          <h3 className="uppercase font-bold my-[10px] underline">Skills</h3>
          <div className="grid gap-[10px] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] w-full max-w-[1200px] mx-auto">
            {skills.map((skill) => (
              <div
                key={skill._id}
                className="border border-solid rounded-[5px] flex items-centersm:text-[14px] text-[13px] px-[10px] py-[5px]]"
              >
                <p>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
