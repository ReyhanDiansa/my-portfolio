"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSetting } from "../../../../utils/getSetting";

const Hero = () => {
  const [personalFoto, setFoto] = useState("");

  const getFoto = async () => {
    const getCVData = await getSetting('PERSONAL_FOTO');
    
    if(getCVData.status === "success" ){
      setFoto(getCVData.data.value);
    } else {
      toast.error(getCVData?.message, {
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
  }
  useEffect(()=>{
    getFoto();
  },[])
  return (
    <>
      <div className="h-[70vh] w-full flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="w-full md:w-7/12 pt-3 md:pt-0">
          <h1 className="font-bold mb-4">
            <span className="text-lg md:text-xl">Hello, I'm </span>{" "}
            <span className="text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-secondary via-primary to-primary-dark">
              Reyhan Marsalino Diansa
            </span>
          </h1>
          <p className="text-2xl mb-6">A Passionate Web Developer</p>
          <p className=" mx-auto mb-8">
            Crafting digital experiences through innovative design and robust
            development as a passionate web developer.{" "}
          </p>
          <div>
            <button className="flex gap-2 items-center bg-primary py-2 px-4 rounded-md transform transition-transform duration-300 hover:scale-110" onClick={()=>router.push('portfolio')}>
              View My Work
            </button>
          </div>
        </div>
        <div className="my-auto z-0">
          <Image
            src={personalFoto}
            width={350}
            height={350}
            alt="me"
            className="filter drop-shadow-custom w-[35%] md:w-full mx-auto md:mx-0 border-b-2 border-primary md:border-none"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
