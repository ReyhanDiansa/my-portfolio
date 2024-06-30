import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-[70vh] w-7/12 flex items-center">
      <div className="my-auto">
        <h1 className="font-bold mb-4">
          <span className="text-xl">Hello, I'm </span> <span className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-secondary via-primary to-primary-dark">Reyhan Marsalino Diansa</span>
        </h1>
        <p className="text-2xl mb-6">A Passionate Web Developer</p>
        <p className=" mx-auto mb-8">
          Crafting digital experiences through innovative design and robust
          development as a passionate web developer.{" "}
        </p>
        <div>
            <button className="flex gap-2 items-center bg-primary py-2 px-4 rounded-md transform transition-transform duration-300 hover:scale-110">
              View My Work
            </button>
          </div>
      </div>
    </div>
  );
};

export default Hero;
