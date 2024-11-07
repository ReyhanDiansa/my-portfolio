"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaStarOfLife, FaDeviantart } from "react-icons/fa6";
import api from "../../../../utils/api";

const TextRunner = () => {
  const [categories, setCategories] = useState([]);
  const [stacksData, setStacksData] = useState({});
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [totalImages, setTotalImages] = useState(0);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  useEffect(() => {
    const fetchCategoriesAndStacks = async () => {
      try {
        const categoryResponse = await api.get("/stack-category/get-data");
        const categoriesData = categoryResponse.data.data;
        setCategories(categoriesData);

        let imageCount = 0;
        const stackData = {};
        for (const category of categoriesData) {
          const stackResponse = await api.get(
            `/stack/get-data?category=${category.name}`
          );
          stackData[category.name] = stackResponse.data.data;
          imageCount += stackResponse.data.data.length;
        }
        setStacksData(stackData);
        setTotalImages(imageCount);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchCategoriesAndStacks();
  }, []);

  const handleImageLoad = () => {
    setImagesLoaded((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    if (imagesLoaded === totalImages && totalImages > 0) {
      setAllImagesLoaded(true);
    }
  }, [imagesLoaded, totalImages]);

  return (
    <div className="relative overflow-hidden whitespace-nowrap mt-3 bg-primary h-[6.3rem] w-full">
      {/* run the marquee if all images has loaded */}
      {allImagesLoaded ? (
        //render if all stack images has loaded
        <marquee scrollamount="12">
          <div className="flex items-center my-auto">
            {categories.map((category, categoryIndex) => (
              <React.Fragment key={categoryIndex}>
                <div>
                  <FaDeviantart className="w-20 text-5xl text-yellow-500" />
                </div>
                {stacksData[category.name]?.map((stack, stackIndex) => (
                  <React.Fragment key={stackIndex}>
                    <Image
                      src={stack.img}
                      width={200}
                      height={200}
                      className="w-[6rem] object-contain"
                      alt={stack.title || "Stack Image"}
                      onLoad={handleImageLoad}
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
        </marquee>
      ) : (
        //render just for load all stack image not show in web just for load of all stack images
        <div className="opacity-5">
          <div className="flex items-center my-auto">
            {categories.map((category, categoryIndex) => (
              <React.Fragment key={categoryIndex}>
                {allImagesLoaded && (
                  <div>
                    <FaDeviantart className="w-20 text-5xl text-yellow-500" />
                  </div>
                )}
                {stacksData[category.name]?.map((stack, stackIndex) => (
                  <React.Fragment key={stackIndex}>
                    <Image
                      src={stack.img}
                      width={200}
                      height={200}
                      className="w-[6rem] object-contain"
                      alt={stack.title || "Stack Image"}
                      onLoad={handleImageLoad}
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
            {allImagesLoaded && (
              <div>
                <FaDeviantart className="w-20 text-5xl text-yellow-500" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TextRunner;
