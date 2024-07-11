import Image from "next/image";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="bg-black left-0 top-0 fixed w-full">
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
            <p className="font-[500]">Home</p>
            <p className="font-[500]">About me</p>
            <p className="font-[500]">Portfolio</p>
            <p className="font-[500]">Contact</p>
          </div>
          <div>
            <button className="flex gap-2 items-center bg-primary py-2 px-4 rounded-md transform transition-transform duration-300 hover:scale-110">
              lets talk <MdArrowOutward />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
