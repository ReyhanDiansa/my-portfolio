"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaStarOfLife, FaDeviantart } from "react-icons/fa6";
import api from "../../../../utils/api";

const TextRunner = () => {
  const [categories, setCategories] = useState([]);
  const [stacksData, setStacksData] = useState({});

  useEffect(() => {
    const fetchCategoriesAndStacks = async () => {
      try {
        const categoryResponse = await api.get("/stack-category/get-data");
        const categoriesData = categoryResponse.data.data;
        setCategories(categoriesData);

        const stackData = {};
        for (const category of categoriesData) {
          const stackResponse = await api.get(
            `/stack/get-data?category=${category.name}`
          );
          stackData[category.name] = stackResponse.data.data;
        }
        setStacksData(stackData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchCategoriesAndStacks();
  }, []);

  return (
    <div className="relative overflow-hidden whitespace-nowrap mt-3 bg-primary h-[6.3rem] w-full">
      <div className="animate-marquee h-full flex items-center my-auto">
        {/* load category */}
        {categories.map((category, categoryIndex) => (
          <React.Fragment key={categoryIndex}>
            <div>
              <FaDeviantart className="w-20 text-5xl text-yellow-500" />
            </div>
            {/* load stack by category */}
            {stacksData[category.name]?.map((stack, stackIndex) => (
              <React.Fragment key={stackIndex}>
                <Image
                  src={stack.img}
                  width={200}
                  height={200}
                  className="w-[6rem] object-contain"
                  alt={stack.title || "Stack Image"}
                />
                {stackIndex < stacksData[category.name].length - 1 && (
                  <div>
                    <FaStarOfLife className="w-20 text-xl text-yellow-500" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
         <div>
              <FaDeviantart className="w-20 text-5xl text-yellow-500" />
            </div>
      </div>
    </div>
  );
};

export default TextRunner;
