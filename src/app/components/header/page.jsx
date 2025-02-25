"use client";
import Image from "next/image";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import image from "@/app/assets/image.png";
import { TfiWorld } from "react-icons/tfi";
import { IoHeart } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import image2 from "@/app/assets/image2.png";
import BurgerMenu from "../burgerMenu/page";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className=" flex justify-between items-center ">
      <div className="flex items-center p-5 gap-2">
        <BurgerMenu />
        <div className="from-neutral-600 ">Traveller's Local Market</div>
      </div>
      <Image alt="Logo" src={image} width={50} height={50} />
      <div className="flex items-center p-5 gap-5 justify-center">
        <div className="flex gap-3 items-center  p-5 ">
          <TfiWorld size={20} />
          <IoHeart size={20} color="red" />
          <LuShoppingCart size={20} />
        </div>
        <Image alt="Profil" src={image2} width={50} height={50} />
      </div>
    </header>
  );
};

export default Header;
