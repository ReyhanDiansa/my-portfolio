"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Modal from "../../Elements/Modal/Modal";
import PdfViewer from "../../Elements/PdfViewer/PdfViewer";
import { getSetting } from "@/utils/getSetting";
import { toast } from "react-toastify";

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cv, setCv] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const getCV = async () => {
    const getCVData = await getSetting('CV');
    
    if(getCVData.status === "success" ){
      setCv(getCVData.data.value);
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
    getCV();
  },[])

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center w-full ">
        <div className="md:w-7/12">
          <div className="flex flex-col   gap-2 drop-shadow-custom my-7 md:my-0">
            <Image
              src={"/asset/images/illustration.svg"}
              width={200}
              height={200}
              alt="illustration"
              className="mx-auto md:mx-0 w-8/12"
            />
            <div className="w-8/12 mx-auto md:mx-0">
              <hr className="bg-primary border-2 border-primary rounded-full animate-pulse " />
            </div>
          </div>
        </div>
        <div className="md:w-8/12 px-5 py-3 h-full bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-[1px] border-blue-400 text-sm">
          <div className="text-3xl my-5 text-primary font-semibold">
            So Who am I?
          </div>
          <div>
            I am a young and enthusiastic programmer and a fresh graduate of SMK
            Telkom Malang. I am honored to introduce myself through this
            portfolio website, where I will be showcasing my journey as a
            programmer and my projects. My passion for coding began at a young
            age, and it has only grown stronger over the years. I am fascinated
            by the limitless possibilities that coding offers, and I am always
            looking for new challenges and opportunities to improve my skills.
          </div>
          <div className="my-1">
            I have learned various programming languages such as Javascript
            (Reactjs, Nextjs, and Nodejs), and PHP (Laravel) and I have also
            been involved in various projects, both individually and in a team.
            My goal is to not only learn the fundamentals of programming but
            also to apply my knowledge to real-world problems and contribute to
            the growth of the technology industry. I believe that with my
            passion and dedication, I can make a difference in the world of
            coding. Thank you for visiting my page, and I look forward to
            sharing my journey with you.
          </div>
          <div className="my-3">
            <button
              className="flex gap-2 items-center bg-primary py-2 px-4 rounded-md transform transition-transform duration-300 hover:scale-110"
              onClick={openModal}
            >
              Download/See My Cv
            </button>{" "}
          </div>
        </div>
      </div>
      <div className="w-full">
        <Modal isOpen={isModalOpen} onClose={closeModal} title="My Modal" withClose={false}>
          {/* <PdfViewer pdfUrl={pdfUrl} /> */}
          <iframe src={cv} width="640" height="530" allow="autoplay"></iframe>
        </Modal>
      </div>
    </>
  );
};

export default AboutUs;
