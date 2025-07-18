"use client";

import { urlFor } from "@/lib/imageBuilder";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Scrollbar } from "swiper/modules";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = ({ testimonials }) => {
  return (
    <div
      id="testimonials"
      className="text-white py-[20px] px-[20px] sm:px-[30px]"
    >
      <h2 className="text-center uppercase font-bold my-[10px] text-gradient">
        Testimonials
      </h2>
      <p className="text-center text-desc text-[12px]">
        Swipe to see what some of my clients are syaing
      </p>
      <div
        style={{
          background: "var(--glass-bg)",
          borderRadius: "var(--glass-radius)",
          boxShadow: "var(--glass-shadow)",
          backdropFilter: "var(--glass-blur)",
          WebkitBackdropFilter: "var(--glass-blur)",
          border: "var(--glass-border)",
        }}
        className="w-full sm:h-[250px] h-[300px] flex flex-col justify-evenly items-center px-[30px] py-[10px] relative text-black"
      >
        <div>
          <span className="text-[#00b4f030] sm:text-[25px] text-[20px] ">
            <FaQuoteLeft />
          </span>
        </div>
        <div className="w-full">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide>
                <div
                  key={testimonial._id}
                  className="relative text-center overflow-hidden text-text gap-[5px]"
                >
                  <p className="text-text text-[15px]  font-bold">
                    {`"${testimonial.review}"`}
                  </p>
                  <h2 className="font-bold text-[13px] italic">
                    {testimonial.clientname}
                  </h2>
                  <p className="text-desc text-[11px]">
                    {testimonial.clienttitle}
                  </p>
                  <p className="my-[5px]"></p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
