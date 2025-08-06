import React, { useState } from "react";

const PersonalWebLink = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered((v) => !v)}
      onMouseLeave={() => setIsHovered((v) => !v)}
      className={`
          ${
            isHovered
              ? "-translate-y-2 bg-[#83d3ce] shadow-xl/20"
              : "bg-[#8dd1cc]"
          }
          duration-300 ease-in-out w-[70%] h-[290px] rounded-[14px] flex justify-center items-center overflow-hidden cursor-pointer`}
    >
      <div className="w-[50%] h-full flex flex-col justify-center ml-[40px]">
        <h1 className="text-4xl text-[#323232]">About Me</h1>
        <p className="font-sans font-medium text-2xl text-[#323232] w-[90%]">
          Curious for more? Check out my portfolio to see other projects and
          learn more about me.
        </p>
      </div>
      <div className="w-[50%] h-full flex justify-center items-center">
        <div
          className={`w-full h-[90%] translate-x-6 ${
            isHovered ? "mt-[210px]" : "mt-[260px]"
          } duration-300 ease-out rounded-[14px] bg-[#ffffffed]`}
        ></div>
      </div>
    </div>
  );
};

export default PersonalWebLink;
