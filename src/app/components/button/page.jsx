import React, { useState } from "react";

const Button = ({ text }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="flex gap-5">
      <button
        onClick={() => setActive(!active)}
        className={`border p-2 px-10 rounded-lg transition-colors duration-200 ${
          active ? "bg-[#F78410]" : "bg-white"
        }`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
