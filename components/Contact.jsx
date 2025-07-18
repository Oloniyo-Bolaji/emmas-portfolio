"use client";

import gsap from "gsap";
import Image from "next/image";
import React, { useState } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Contact = () => {
  const [guest, setGuest] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({
    msg: "",
    colour: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const res = await fetch("https://formspree.io/f/mblkjzek", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(guest),
    });

    if (res.ok) {
      setSending(false);
      setStatus({
        msg: "Message sent successfully!",
        colour: "green",
      });
      setGuest({ name: "", email: "", message: "" });
    } else {
      setStatus({
        msg: "Something went wrong. Try again later.",
        colour: "red",
      });
    }

    setTimeout(() => {
      setStatus({ msg: "", colour: "" });
    }, 3000);
  };

  return (
    <div id="contact" className="text-white py-[20px] px-[20px] sm:px-[30px]">
      <h2 className="text-center uppercase font-bold my-[10px] text-gradient">
        Contact Me
      </h2>
      <p className="text-center text-desc text-[12px]">
        Fill out the form below and I will get back to you as soon as possible.
      </p>
      <div className="p-[20px] m-[10px] sm:p-0 sm:flex sm:items-center sm:justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[10px] w-full sm:w-[400px]"
        >
          <input
            type="text"
            name="Name"
            placeholder="Name"
            value={guest.name}
            onChange={(e) => setGuest({ ...guest, name: e.target.value })}
            className="bg-transparent text-text h-[40px] placeholder:text-[13px] placeholder:text-desc text-[13px] p-[5px] border-2 border-[#01007b] rounded-[5px] outline-0"
          />
          <input
            type="text"
            name="Email"
            placeholder="Email"
            value={guest.email}
            onChange={(e) => setGuest({ ...guest, email: e.target.value })}
            className="bg-transparent text-text h-[40px] placeholder:text-[13px] placeholder:text-desc text-[13px] p-[5px] border-2 border-[#01007b] rounded-[5px] outline-0"
          />
          <textarea
            name="Message"
            placeholder="Message"
            value={guest.message}
            onChange={(e) => setGuest({ ...guest, message: e.target.value })}
            className="bg-transparent text-text h-[100px] placeholder:text-[13px] placeholder:text-desc text-[13px] p-[5px] border-2 border-[#01007b] rounded-[5px] outline-0"
          ></textarea>
          <button className="bg-[#01007b] hover:bg-white hover:text-[#01007b] border border-[#01007b] rounded-[5px] mx-auto w-[70px] flex items-center justify-center p-[5px] text-[20px] outline-0">
            {sending ? (
              <span className="size-5 animate-spin text-[#01007b] bg-white" />
            ) : (
              <IoIosSend />
            )}
          </button>
          {status.msg && (
            <p
              className={`text-[13px] text-center mt-2 px-3 py-1 rounded ${
                status.colour === "green" ? "text-[green]" : "text-[red]"
              }`}
            >
              {status.msg}
            </p>
          )}
        </form>
      </div>

      <div
        style={{ margin: "10px 0" }}
        className="flex-column gap-[10px] border-t-[1px] border-solid border-t-text py-[10px] text-[12px] text-text"
      >
        <button
          onClick={() => {
            gsap.to(window, { duration: 1, scrollTo: 0 });
          }}
          className="flex flex-col items-center"
        >
          <span className="text-[24px] animate-bounce">
            <MdKeyboardDoubleArrowUp />
          </span>
          <span>Back to Top</span>
        </button>
        <p>&copy; 2025 BeejayCodes. All rights reserved</p>
      </div>
    </div>
  );
};

export default Contact;
