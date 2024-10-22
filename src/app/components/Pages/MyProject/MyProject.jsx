import React from "react";
import Card, { GlassmorphismCard } from "../../Elements/Card/Card";

const MyProject = () => {

  

  return (
    <>
      <div className="my-10 flex justify-center">
        <p className="text-4xl text-center  w-fit">My <span className="border-b-4  border-primary">Portfolio</span></p>
      </div>
      <div className="flex justify-center items-center gap-2">
        <Card
          title="Portal Kedisiplinan Moklet"
          image = "https://reyhanportfolio.vercel.app/karya_images/cloud.png"
          content="This is the main content of the card. It can be anything you want, such as text, images, or other components."
          footer={
            <div className="flex gap-3">
            <button className="bg-[#5C45FD] text-white px-4 py-2 rounded hover:bg-[#4a3bde]">
              Demo
            </button>
            <button className="bg-[#5C45FD] text-white px-4 py-2 rounded hover:bg-[#4a3bde]">
              See Code
            </button>
            </div>
          }
          className="w-full max-w-sm"
        />
        <Card

          title="KonterAttack"
          image = "https://reyhanportfolio.vercel.app/karya_images/konter.png"
          content="KonterAttack adalah Website Penjualan Smartphone menggunakan Nextjs."
          footer={
            <button className="bg-[#5C45FD] text-white px-4 py-2 rounded hover:bg-[#4a3bde]">
              Action
            </button>
          }
          className="w-full max-w-sm"
        />
      </div>
    </>
  );
};

export default MyProject;
