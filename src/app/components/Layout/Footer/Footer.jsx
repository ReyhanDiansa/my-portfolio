"use client";

import { getSetting } from "@/utils/getSetting";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  const [link, setLink] = useState(null);
  const year = new Date().getFullYear();
  const getLink = async () => {
    const getLinkData = await getSetting("SOSMED-LINK");

    if (getLinkData.status === "success") {
      setLink(JSON.parse(getLinkData.data.value));
    } else {
      toast.error(getLinkData?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  useEffect(() => {
    getLink();
  }, []);

  return (
    <div className="bg-primary w-full h-50">
      <div className="flex justify-center">
        <div className="my-4 ">
          <div className="flex gap-5 justify-center items-center">
            {link && (
              <>
                <Link href={link?.ig}>
                  <FaInstagram className="text-4xl hover:bg-black hover:bg-opacity-70 hover:rounded-full hover:p-1" />
                </Link>
                <Link href={link?.github}>
                  <FaGithub className="text-4xl hover:bg-black hover:bg-opacity-70 hover:rounded-full hover:p-1" />
                </Link>
                <Link href={link?.email}>
                  <IoIosMail className="text-4xl hover:bg-black hover:bg-opacity-70 hover:rounded-full hover:p-1" />
                </Link>
                <Link href={link?.linkedin}>
                  <FaLinkedin className="text-4xl hover:bg-black hover:bg-opacity-70 hover:rounded-full hover:p-1" />
                </Link>
              </>
            )}
          </div>
          <div className="flex gap-3 my-5 justify-center items-center">
            <Link href={"/"}>Home</Link>
            <Link href={"/about-me"}>About Me</Link>
            <Link href={"/portfolio"}>Portfolio</Link>
            <Link href={"/contact"}>Contact</Link>
          </div>
          <div className="flex gap-3 my-3 justify-center items-center">
            <p className="text-center">Copyright © {year} | Build by Reyhan Marsalino Diansa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
