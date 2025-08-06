import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";

const LinkedInBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered((v) => !v)}
      onMouseLeave={() => setIsHovered((v) => !v)}
      className={`
          ${
            isHovered
              ? "-translate-y-2 bg-[#7ebde3] shadow-xl/20"
              : "bg-[#92c4e3]"
          }
         w-full h-[50%] duration-300 ease-in-out rounded-[14px] overflow-hidden relative text-[#04395a] cursor-pointer`}
    >
      <div className="w-full h-full flex items-center">
        <h1 className="text-3xl -mt-4 ml-5">
          LinkedIn <br /> Page
        </h1>
      </div>
      <span
        className={`absolute
         ${isHovered ? "-bottom-9" : "-bottom-12"}
          -right-5 text-9xl text-[#04395a] duration-300 ease-out`}
      >
        <FaLinkedin />
      </span>
    </div>
  );
};

export default LinkedInBar;
