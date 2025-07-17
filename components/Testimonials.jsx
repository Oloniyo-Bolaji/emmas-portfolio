"use client";

import { urlFor } from "@/lib/imageBuilder";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Testimonials = ({ testimonials }) => {
  console.log(testimonials);

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
        className="w-full h-[200px] flex-center px-[30px] relative  mt-[10px] "
      >
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Autoplay, Pagination]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide>
              <div
                key={testimonial._id}
                className="relative h-full text-center p-[10px] overflow-hidden text-text"
              >
                <p className="text-text text-[13px] italic">
                  <span className="text-[#00b4f0] text-[16px] align-top mr-[2px]">
                    <FaQuoteLeft />
                  </span>
                  {testimonial.review}
                  <span className="text-[#00b4f0] text-[16px] align-bottom ml-[2px]">
                    <FaQuoteRight />
                  </span>
                </p>

                <h2 className="font-bold text-[13px]">
                  {testimonial.clientname}
                </h2>
                <p className="text-desc text-[11px] italic">
                  {testimonial.clienttitle}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
