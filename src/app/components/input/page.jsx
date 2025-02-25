import React from "react";
import { CiSearch } from "react-icons/ci";

const Input = () => {
  return (
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
  );
};

export default Input;
