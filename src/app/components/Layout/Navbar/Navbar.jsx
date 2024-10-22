"use client";

import Image from "next/image";
import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const [menuItems] = useState([
    { name: "Home", url: "/" },
    { name: "About me", url: "/about-me" },
    { name: "Portfolio", url: "/portfolio" },
    { name: "Contact", url: "/contact" },
  ]);

  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="bg-black left-0 top-0 fixed z-30 w-full">
      <div className="flex mx-auto py-5 px-40">
        <div className="flex justify-between items-center w-full">
          <div>
            <Image
              src={"/asset/logo/logo_second.svg"}
              width={50}
              height={50}
              alt="logo"
            />
          </div>
          <div className="flex gap-5 ">
            {menuItems.map((item, index) => (
              <p
                key={index}
                className={`font-[500] cursor-pointer ${
                  pathname === item.url ? "border-b-4 border-blue-500" : ""
                }`}
                onClick={() => router.push(item.url)}
              >
                {item.name}
              </p>
            ))}
          </div>
          <div>
            <button className="flex gap-2 items-center bg-primary py-2 px-4 rounded-md transform transition-transform duration-300 hover:scale-110" onClick={()=>router.push('contact')}>
              lets talk <MdArrowOutward />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
