"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Hamburger Butonu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 cursor-pointer z-50"
      >
        <RxHamburgerMenu size={40} />
      </button>

      {/* Menü İçeriği */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 w-2/5 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out z-40   `}
      >
        <div className="flex justify-between items-center  p-5">
          <div className="bg-[#F78410] text-white font-semibold rounded-lg   p-3">
            TOURS
          </div>
          <div className="text-xl border-b-2 border-black leading-tight font-semibold ">
            Filter
          </div>
          <div>
            <IoCloseCircleOutline size={35} />
          </div>
        </div>
        <div className=" px-5 flex flex-col gap-4 py-3">
          <div className="text-2xl font-semibold">Location</div>
          <div className="relative">
            <input
              className="border-2 border-black w-full p-2 rounded-lg  "
              type="text"
              placeholder="Where you wanna visit?"
            />

            <div className="absolute top-1 right-3 ">
              <CiSearch size={30} />
            </div>
          </div>
        </div>
        <div className=" px-5 flex flex-col gap-4 py-3 ">
          <div>
            <p className="text-2xl font-semibold">Theme</p>
          </div>
          <div className="flex  gap-5  ">
            <button className="border p-2 px-10 rounded-lg bg-[#E07516] ">
              Island Tour
            </button>
            <button className="border p-2 px-10 rounded-lg bg-[#E07516]">
              {" "}
              Land Tour
            </button>
            <button className="border p-2 px-10 rounded-lg bg-[#E07516]">
              Safari
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default BurgerMenu;
