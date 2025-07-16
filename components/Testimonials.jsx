"use client";

import { urlFor } from "@/lib/imageBuilder";
import Image from "next/image";
import React from "react";


const Testimonials = ({ testimonials }) => {

  return (
    <div id="testimonials" className="text-white py-[20px] px-[20px] sm:px-[30px]">
      <h2 className="text-center uppercase font-bold my-[10px] text-gradient">
        Testimonials
      </h2>
      <p className="text-center text-[#ccc] text-[12px] italics">
        This what some of my clients are syaing
      </p>
      <div className=" w-full grid grid-cols-1 sm:grid-cols-2 px-[10px] my-[10px] gap-[10px]">
        {testimonials.map((testimonial) => (
          <div key={testimonial._id} className="relative w-full h-[150px] rounded-[15px]">
            <Image
              src={urlFor(testimonial.image).url()}
              alt={testimonial.title}
              fill
              sizes="auto"
              className="object-contain rounded-[15px]"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
