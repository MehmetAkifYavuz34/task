"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";

import Button from "../button/page";
import Input from "../input/page";
import { Slider } from "@mui/material";
import SliderSizes from "../sliders/page";
import ResetButton from "../resetbutton/page";
import SearchButton from "../searchbutton/page";

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
        } fixed top-0 left-0 w-2/5 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out z-40 overflow-auto  `}
      >
        {" "}
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
          <div className="text-xl font-semibold">Location</div>
          <Input />
        </div>
        <div className=" px-5 flex flex-col gap-4 py-3   ">
          <div>
            <p className="text-xl font-semibold">Theme</p>
          </div>
          <div className="flex gap-5 flex-wrap">
            <Button text={"Island Tour"} />
            <Button text={"Land Tour"} />
            <Button text={"Safari"} />
          </div>
        </div>
        <div className="px-5 flex flex-col gap-4 py-3">
          <h2 className="text-xl font-semibold">Activity</h2>
          <div className="flex gap-5 flex-wrap ">
            <Button text={"Swimming"} />
            <Button text={"Runnig"} />
            <Button text={"Elephant care"} />
            <Button text={"Snorkelling"} />
          </div>
        </div>
        <div className="px-5 gap-4 py-3 flex flex-col justify-center">
          <div>
            <h2 className="text-xl font-semibold">Price</h2>
            <SliderSizes />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Start Time</h2>
            <SliderSizes />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Group Size</h2>
            <SliderSizes />
          </div>
        </div>
        <div className="px-5 flex flex-col  gap-4 py-3      ">
          <h2 className="text-xl font-semibold">Vehicle</h2>
          <div className="flex gap-5 flex-wrap">
            <Button text={"Yacht"} />
            <Button text={"Speedboat"} />
            <Button text={"Safari"} />
            <Button text={"Speedcatamaran"} />
            <Button text={"Catamaran"} />
          </div>
        </div>
        <div>
          <div className="px-5 flex flex-col  gap-4 py-3      ">
            <h2 className="text-xl font-semibold">Features</h2>
            <div className="flex gap-5 flex-wrap">
              <Button text={"Vegetarian food"} />
              <Button text={"Halal Food"} />
              <Button text={"Transfer"} />
            </div>
          </div>
        </div>
        <div className="flex justify-end p-5 gap-10 py-10 ">
          <ResetButton />
          <SearchButton />
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
