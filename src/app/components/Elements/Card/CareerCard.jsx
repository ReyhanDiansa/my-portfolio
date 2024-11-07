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
      className={`bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-[1px] border-blue-400 p-3 md:p-5 h-[12.5rem] md:h-[13.5rem] w-[30rem] ${className}`}
      {...props}
    >
      <div className="flex gap-5 items-center h-[65%]">
        <div className="bg-gray-200 px-2 py-1 rounded-md">
          <Image
            src={image}
            width={60}
            height={60}
            alt="company-foto"
            className="rounded-md object-contain"
          />
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-white">
            {title}
          </h3>
          <div className="flex gap-2 items-center mt-[2px] mb-2">
            <MdWork />
            <p className="text-xs">{type}</p>
          </div>
          <div className="flex gap-2 items-center mt-[2px] mb-2">
            <FaBuilding />
            <p className="text-xs md:text-sm">
              {company} | {year}
            </p>
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
