import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
    
    const year = new Date().getFullYear();

  return (
    <div className="bg-primary w-full h-50">
      <div className="flex justify-center">
        <div className="my-4 ">
          <div className="flex gap-5 justify-center items-center">
            <Link href="https://www.instagram.com">
              <FaInstagram className="text-4xl hover:bg-black hover:bg-opacity-70 hover:rounded-full hover:p-1" />
            </Link>
            <Link href="https://www.instagram.com">
              <FaGithub className="text-4xl hover:bg-black hover:bg-opacity-70 hover:rounded-full hover:p-1" />
            </Link>
            <Link href="https://www.instagram.com">
              <IoIosMail className="text-4xl hover:bg-black hover:bg-opacity-70 hover:rounded-full hover:p-1" />
            </Link>
          </div>
          <div className="flex gap-3 my-5 justify-center items-center">
            <Link href={"/"}>Home</Link>
            <Link href={"/about-me"}>About Me</Link>
            <Link href={"/portfolio"}>Portfolio</Link>
            <Link href={"/contact"}>Contact</Link>
          </div>
          <div className="flex gap-3 my-3 justify-center items-center">
            <p>Copyright © {year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
