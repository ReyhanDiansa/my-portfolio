"use client";

import React, { useEffect, useState } from "react";
import Card from "../../Elements/Card/Card";
import api from "../../../../utils/api";
import { Pagination } from "@nextui-org/react";
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SpinnerLoading from "../../Elements/Loading/Spinner";

const MyProject = () => {
  const [projectData, setProjectData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectLoading, setProjectLoading] = useState(false);

  const getProjectData = () => {
    setProjectLoading(true);
    api
      .get(`/project/get-all?limit=6&page=${currentPage}`)
      .then((response) => {
        setProjectData(response.data);
        setProjectLoading(false);
      })
      .catch((error) => {
        setProjectLoading(false);
        toast.error(`Failed load portfolio project: ${error.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  useEffect(() => {
    getProjectData();
  }, [currentPage]);

  const changePage = (p) => {
    setCurrentPage(p);
  };

  return (
    <>
      <div className="my-10 flex justify-center">
        <p className="text-4xl text-center  w-fit">
          My <span className="border-b-4  border-primary">Portfolio</span>
        </p>
      </div>
      {projectLoading ? (
        <div>
          <SpinnerLoading />
        </div>
      ) : (
        <div className="flex flex-wrap flex-col md:flex-row justify-center items-center gap-2">
          {projectData ? (
            projectData?.data?.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                image={item.img}
                content={item.description}
                footer={
                  <div className="flex gap-3">
                    {item.demo && (
                      <Link href={item.demo} target="_blank">
                        <button className="bg-[#5C45FD] text-white px-4 py-2 rounded hover:bg-[#4a3bde]">
                          Demo
                        </button>
                      </Link>
                    )}
                    {item.code && (
                      <Link href={item.code} target="_blank">
                        <button className="bg-[#5C45FD] text-white px-4 py-2 rounded hover:bg-[#4a3bde]">
                          See Code
                        </button>
                      </Link>
                    )}
                  </div>
                }
                className="w-full max-w-sm"
              />
            ))
          ) : (
            <div>No data</div>
          )}
        </div>
      )}

      {projectData?.data && !projectLoading && (
        <div className="flex justify-center mt-10">
          <Pagination
            showControls
            total={projectData?.totalPages}
            initialPage={1}
            classNames={{
              item: "font-bold",
            }}
            page={currentPage}
            onChange={(p) => changePage(p)}
          />
        </div>
      )}
    </>
  );
};

export default MyProject;
