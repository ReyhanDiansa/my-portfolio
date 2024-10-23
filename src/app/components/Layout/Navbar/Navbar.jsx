"use client";

import Image from "next/image";
import React, { useState } from "react";
import { MdArrowOutward, MdMenu, MdClose } from "react-icons/md";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import data from "./data.json";

const Navbar = () => {
  const [menuItems] = useState(data);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="bg-black left-0 top-0 fixed z-30 w-full">
      <div className="flex justify-between items-center mx-auto py-5 px-5 md:px-20">
        <div>
          <Link href="/">
            <Image
              src={"/asset/logo/logo_second.svg"}
              width={50}
              height={50}
              alt="logo"
            />
          </Link>
        </div>
        {/* Menu Toggle Button for Mobile/Tablet (on the right) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            {isMenuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
          </button>
        </div>
        {/* Menu Items (Visible on desktop, sidebar on mobile) */}
        <div className="hidden md:flex gap-5">
          {menuItems.map((item, index) => (
            <p
              key={index}
              className={`font-[500] cursor-pointer text-white ${
                pathname === item.url ? "border-b-4 border-blue-500" : ""
              }`}
              onClick={() => router.push(item.url)}
            >
              {item.name}
            </p>
          ))}
        </div>
        <div className="hidden md:flex gap-5">
          <button
            className="flex gap-2 items-center bg-primary py-2 px-4 rounded-md transform transition-transform duration-300 hover:scale-110"
            onClick={() => router.push("/contact")}
          >
            let's talk <MdArrowOutward />
          </button>
        </div>
      </div>

      {/* Sidebar Menu for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full bg-black transition-transform duration-300 z-40 p-10 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col gap-5">
          <div className="md:hidden flex justify-end">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
            </button>
          </div>
          {menuItems.map((item, index) => (
            <p
              key={index}
              className={`font-[500] cursor-pointer text-white ${
                pathname === item.url ? "border-b-4 border-blue-500 w-fit" : ""
              }`}
              onClick={() => {
                setIsMenuOpen(false);
                router.push(item.url);
              }}
            >
              {item.name}
            </p>
          ))}
          <button
            className="flex gap-2 items-center bg-primary py-2 px-4 rounded-md transform transition-transform duration-300 hover:scale-110"
            onClick={() => {
              setIsMenuOpen(false);
              router.push("/contact");
            }}
          >
            let's talk <MdArrowOutward />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
