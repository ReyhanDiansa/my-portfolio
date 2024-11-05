"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaStarOfLife, FaDeviantart } from "react-icons/fa6";
import api from "../../../../utils/api";

const TextRunner = () => {
  const [categories, setCategories] = useState([]);
  const [stacksData, setStacksData] = useState({});
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    const fetchCategoriesAndStacks = async () => {
      try {
        const categoryResponse = await api.get("/stack-category/get-data");
        const categoriesData = categoryResponse.data.data;
        setCategories(categoriesData);

        const stackData = {};
        for (const category of categoriesData) {
          const stackResponse = await api.get(`/stack/get-data?category=${category.name}`);
          stackData[category.name] = stackResponse.data.data;
        }
        setStacksData(stackData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchCategoriesAndStacks();
  }, []);

  const handleImageLoad = (categoryName, stackIndex) => {
    setLoadedImages(prev => ({
      ...prev,
      [`${categoryName}-${stackIndex}`]: true,
    }));
  };

  return (
    <div className="relative overflow-hidden whitespace-nowrap mt-3 bg-primary h-[6.5rem]">
      <div className="animate-marquee flex h-full items-center">
        {categories.map((category, categoryIndex) => (
          <React.Fragment key={categoryIndex}>
            <div className="flex items-center">
              <FaDeviantart className="w-20 text-5xl text-yellow-500" />
            </div>

            {stacksData[category.name]?.map((stack, stackIndex) => (
              <React.Fragment key={stackIndex}>
                <div className={`w-[6rem] h-[6rem] flex items-center justify-center ${loadedImages[`${category.name}-${stackIndex}`] ? "" : "bg-primary"}`}>
                  <Image
                    src={stack.img}
                    width={200}
                    height={200}
                    className="object-contain"
                    alt={stack.title || "Stack Image"}
                    onLoadingComplete={() => handleImageLoad(category.name, stackIndex)}
                  />
                </div>

                {/* Hide the separator icon until the image has loaded */}
                {loadedImages[`${category.name}-${stackIndex}`] && stackIndex < stacksData[category.name].length - 1 && (
                  <div>
                    <FaStarOfLife className="w-20 text-xl text-yellow-500" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TextRunner;
