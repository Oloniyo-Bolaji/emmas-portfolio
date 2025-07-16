"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  const [guest, setGuest] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {};

  return (
    <div id="contact" className="text-white py-[20px] px-[20px] sm:px-[30px]">
      <h2 className="text-center uppercase font-bold my-[10px] text-gradient">
        Contact Me
      </h2>
      <p className="text-center text-[#ccc] text-[12px] italics">
        Fill out the form below and I will get back to you as soon as possible.
      </p>
      <div className="p-[20px] m-[10px] sm:p-0 sm:flex sm:items-center sm:justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[10px] w-full sm:w-[400px]"
        >
          <input
            type="text"
            placeholder="Name"
            value={guest.name}
            onChange={(e) => setGuest({ ...guest, name: e.target.value })}
            className="bg-transparent h-[40px] placeholder:text-[13px] text-[13px] p-[5px] border-2 border-[#01007b] rounded-[5px] outline-0"
          />
          <input
            type="text"
            placeholder="Email"
            value={guest.email}
            onChange={(e) => setGuest({ ...guest, email: e.target.value })}
            className="bg-transparent h-[40px] placeholder:text-[13px] text-[13px] p-[5px] border-2 border-[#01007b] rounded-[5px] outline-0"
          />
          <textarea
            placeholder="Message"
            value={guest.message}
            onChange={(e) => setGuest({ ...guest, message: e.target.value })}
            className="bg-transparent h-[100px] placeholder:text-[13px] text-[13px] p-[5px] border-2 border-[#01007b] rounded-[5px] outline-0"
          ></textarea>
          <button className="bg-[#01007b] hover:bg-white hover:text-[#01007b] border border-[#01007b] rounded-[5px] mx-auto w-[70px] flex items-center justify-center p-[5px] text-[20px] outline-0">
            {sending ? (
              <span className="size-5 animate-spin text-[#01007b] bg-white" />
            ) : (
              <IoIosSend />
            )}
          </button>
        </form>
      </div>

      <div
        style={{ margin: "10px 0" }}
        className="border-t-[1px] border-solid border-t-white py-[10px] text-desc text-center text-[12px]"
      >
        <p>&copy; 2025 BeejayCodes. All rights reserved</p>
      </div>
    </div>
  );
};

export default Contact;
