"use client";

import React, { useEffect, useState } from "react";
import Input from "../../Elements/Form/Input";
import { MdEmail, MdMessage } from "react-icons/md";
import Textarea from "../../Elements/Form/Textarea";
import { FaUser } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";


const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [fail, setFail] = useState(false);

  function Success() {
    if (show === true) {
      toast.success('Your Message Success to send', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setShow(false);
    }
  }

  function Failed() {
    if (fail === true) {
      toast.error('Failed to send', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setFail(false);
    }
  }

  const resetForm = () => {
    setEmail("");
    setMessage("");
    setName("");
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hzp9wjs",
        "template_zclapto",
        e.target,
        "L56oF-6rZL2pLhGCv"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShow(true);
          Success();
          resetForm();
        },
        
        (error) => {
          console.log(error.text);
          setFail(true);
          Failed();
          resetForm();
        }
      );
  }

  return (
    <div className="flex w-full justify-center">
      <div className="w-full md:w-8/12 px-5 py-3 h-full bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-[1px] border-blue-400 text-sm">
        <div className="text-3xl my-5 text-center text-white font-semibold">
          <span className="border-b-4  border-primary">Contact</span> Me
        </div>
        <form onSubmit={sendEmail} >
          <div>
            <Input
              label="Name"
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              icon={<FaUser />}
            />
          </div>
          <div>
            <Input
              label="Email"
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={<MdEmail />}
            />
          </div>
          <div>
            <Textarea
              label="Message"
              type="message"
              id="message"
              name="message"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              icon={<MdMessage />}
            />
          </div>
          <div>
            <button type="submit" className="flex gap-2 items-center bg-primary py-2 px-4 rounded-md transform transition-transform duration-300 hover:scale-110">
            <IoIosSend /> Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
