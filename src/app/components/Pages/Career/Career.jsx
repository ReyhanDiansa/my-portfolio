"use client";

import React, { useEffect, useState } from "react";
import api from "../../../../utils/api";
import { Pagination } from "@nextui-org/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SpinnerLoading from "../../Elements/Loading/Spinner";
import CareerCard from "../../Elements/Card/CareerCard";
import Modal from "../../Elements/Modal/Modal";
import { MdWork } from "react-icons/md";
import { FaBuilding } from "react-icons/fa6";
import Image from "next/image";

const Career = () => {
  const [careerData, setCareerData] = useState(null);
  const [careerDetail, setCareerDetail] = useState(null);
  const [currentPageCareer, setCurrentPageCareer] = useState(1);
  const [careerLoading, setCareerLoading] = useState(false);
  const [careerDetailLoading, setCareerDetailLoading] = useState(false);
  const [careerModal, setCareerModal] = useState(false);

  const getCareerData = () => {
    setCareerLoading(true);
    api
      .get(`/career/get-all?limit=6&page=${currentPageCareer}`)
      .then((response) => {
        setCareerData(response.data);
        setCareerLoading(false);
      })
      .catch((error) => {
        setCareerLoading(false);
        toast.error(`Failed load career: ${error.message}`, {
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

  const findDetail = (id) => {
    setCareerDetailLoading(true);
    api
      .get(`/career/find/${id}`)
      .then((response) => {
        setCareerDetail(response.data.data);
        setCareerDetailLoading(false);
      })
      .catch((error) => {
        setCareerDetailLoading(false);
        toast.error(`Failed load career detail: ${error.message}`, {
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
    getCareerData();
  }, [currentPageCareer]);

  const changePage = (p) => {
    setCurrentPageCareer(p);
  };

  const openModal = (careerId) => {
    findDetail(careerId);
    setCareerModal(true);
  };

  const closeCareerModal = () => setCareerModal(false);

  return (
    <>
      <div className="my-10 flex justify-center">
        <p className="text-4xl text-center  w-fit">
          My <span className="border-b-4  border-primary">Career</span>
        </p>
      </div>
      {careerLoading ? (
        <div>
          <SpinnerLoading />
        </div>
      ) : (
        <div className="flex flex-wrap justify-center items-center gap-2">
          {careerData ? (
            careerData?.data?.map((item, index) => (
              <CareerCard
                key={index}
                title={item.title}
                company={item.company}
                year={item.year}
                image={item.img}
                // content={"Marketplace"}
                type={item.type}
                footer={
                  <div className="flex gap-3">
                    <button
                      className="bg-[#5C45FD] text-white px-4 py-2 rounded hover:bg-[#4a3bde]"
                      onClick={() => openModal(item._id)}
                    >
                      Detail
                    </button>
                  </div>
                }
              />
            ))
          ) : (
            <p className="text-center">No data</p>
          )}
        </div>
      )}

      {careerData?.data && !careerLoading && (
        <div className="flex justify-center mt-10">
          <Pagination
            showControls
            total={careerData?.totalPages}
            initialPage={1}
            classNames={{
              item: "font-bold",
            }}
            page={currentPageCareer}
            onChange={(p) => changePage(p)}
          />
        </div>
      )}
      <Modal
        isOpen={careerModal}
        onClose={closeCareerModal}
        title="Career Detail"
        withClose={false}
      >
        {careerDetailLoading ? (
          <div>
            <SpinnerLoading />
          </div>
        ) : careerDetail ? (
          <div>
            <div className="flex gap-5 items-center text-black">
              <div className="bg-gray-200 px-5 py-4 rounded-md">
                <Image
                  src={careerDetail.img}
                  width={60}
                  height={60}
                  alt="career-company-foto"
                  className="rounded-md object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-black">
                  {careerDetail.title}
                </h3>
                <div className="flex gap-2 items-center mt-[2px] mb-2">
                  <MdWork />
                  <p className="text-xs">{careerDetail.type}</p>
                </div>
                <div className="flex gap-2 items-center mt-[2px] mb-2">
                  <FaBuilding />
                  <p className="text-sm">
                    {careerDetail.company} | {careerDetail.year}
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-5">{careerDetail.description}</p>
            <div className="border-b-4 mt-6 mb-3"></div>
            <div className="flex flex-wrap gap-3">
              { careerDetail.stack &&
              JSON.parse(careerDetail.stack).map((stack, index) => (
                <div className="bg-gray-200 px-6 py-3 rounded-md" key={index}>
                  <p>{stack.name}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center">No data</p>
        )}
      </Modal>
    </>
  );
};

export default Career;
