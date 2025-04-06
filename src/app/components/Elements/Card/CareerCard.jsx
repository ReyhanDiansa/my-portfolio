// components/Card.js
import Image from "next/image";
import React from "react";
import { FaBuilding } from "react-icons/fa6";
import { MdWork } from "react-icons/md";

const CareerCard = ({
  title,
  company,
  image,
  content,
  footer,
  className,
  year,
  type,
  ...props
}) => {
  return (
    <div
      className={`bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-[1px] border-blue-400 p-3 md:p-5 h-fit md:h-[13.5rem] w-[30rem] ${className}`}
      {...props}
    >
      <div className="flex flex-col md:flex-row gap-5 md:items-center md:h-[65%] w-full">
        <div className="bg-gray-200  py-5 px-2 md:py-1 rounded-md">
          <Image
            src={image}
            width={60}
            height={60}
            alt="company-foto"
            className="rounded-md object-contain mx-auto md:mx-0"
          />
        </div>
        <div className="w-full">
          <h3 className="text-lg md:text-xl font-semibold text-white">
            {title}
          </h3>
          <div className="flex gap-1 items-center mt-[2px] mb-2">
            <MdWork className="w-1/12" />
            <p className="text-xs w-11/12">{type}</p>
          </div>
          <div className="flex gap-1 items-center mt-[2px] mb-2 w-full">
            <FaBuilding className="w-1/12" />
            <div className="w-11/12">
              <p className="text-xs md:text-sm">{company}</p>
              <p className="text-xs">{year}</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="my-4 h-[29%] md:h-[23%] text-white opacity-80 leading-5 text-xs">
        {content}
      </div> */}
      {footer && (
        <div className="mt-2 md:mt-4 border-t pt-2 md:pt-4 border-gray-200">
          {footer}
        </div>
      )}
    </div>
  );
};

export default CareerCard;
