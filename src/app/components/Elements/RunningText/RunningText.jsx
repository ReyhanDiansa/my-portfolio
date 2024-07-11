import Image from "next/image";
import React from "react";
import { FaStarOfLife, FaDeviantart } from "react-icons/fa6";

const TextRunner = () => {
  return (
    <div className="relative overflow-hidden whitespace-nowrap mt-3 bg-primary">
      <div className="animate-marquee flex items-center">
        
        {/* Frontend */}
        <div>
          <FaDeviantart className="w-20 text-5xl text-yellow-500" />
        </div>
        <Image
          src={"/asset/images/reactjs-logo.png"}
          width={200}
          height={200}
          className="w-[6rem] object-contain"
        />
        <div>
          <FaStarOfLife className="w-20 text-xl text-yellow-500" />
        </div>
        <Image
          src={"/asset/images/nextjs-logo.png"}
          width={200}
          height={200}
          className="w-[6rem] object-contain"
        />
        <div>
          <FaStarOfLife className="w-20 text-xl text-yellow-500" />
        </div>
        <Image
          src={"/asset/images/html-logo.png"}
          width={200}
          height={200}
          className="w-[6rem] object-contain"
        />
        <div>
          <FaStarOfLife className="w-20 text-xl text-yellow-500" />
        </div>
        <Image
          src={"/asset/images/css-logo.png"}
          width={200}
          height={200}
          className="w-[6rem] object-contain"
        />
        <div>
          <FaDeviantart className="w-20 text-5xl text-yellow-500" />
        </div>

        {/* Backend */}
        <Image
          src={"/asset/images/nodejs-logo.png"}
          width={200}
          height={200}
          className="w-[6rem] object-contain"
        />
        <div>
          <FaStarOfLife className="w-20 text-xl text-yellow-500" />
        </div>
        <Image
          src={"/asset/images/php-logo.png"}
          width={200}
          height={200}
          className="w-[6rem] object-contain"
        />
        <div>
          <FaStarOfLife className="w-20 text-xl text-yellow-500" />
        </div>
        <Image
          src={"/asset/images/laravel-logo.png"}
          width={200}
          height={200}
          className="w-[6rem] object-contain"
        />

        <div>
          <FaDeviantart className="w-20 text-5xl text-yellow-500" />
        </div>

        <Image
          src={"/asset/images/git-logo.png"}
          width={200}
          height={200}
          className="w-[6rem] object-contain"
        />
        <div>
          <FaStarOfLife className="w-20 text-xl text-yellow-500" />
        </div>
        <Image
          src={"/asset/images/mysql-logo.png"}
          width={200}
          height={200}
          className="w-[6rem] object-contain"
        />
        <div>
          <FaStarOfLife className="w-20 text-xl text-yellow-500" />
        </div>
        <Image
          src={"/asset/images/mongodb-logo.png"}
          width={200}
          height={200}
          className="w-[6rem] object-contain"
        />
       <div>
          <FaDeviantart className="w-20 text-5xl text-yellow-500" />
        </div>
      </div>
    </div>
  );
};

export default TextRunner;
