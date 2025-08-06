import React, { useState } from "react";

const RulesLinkBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered((v) => !v)}
      onMouseLeave={() => setIsHovered((v) => !v)}
      className={`
        ${
          isHovered
            ? "-translate-y-2 bg-[#f38d68] shadow-xl/20"
            : "bg-[#ea8872]"
        }
        duration-300 ease-in-out w-full h-[290px] rounded-[14px] flex justify-center items-center overflow-hidden cursor-pointer`}
    >
      <div className="w-[50%] h-full flex flex-col justify-center ml-[40px]">
        <h1 className="text-4xl text-[#323232]">Rules</h1>
        <p className="font-sans font-medium text-2xl text-[#323232] w-[90%]">
          Before your first game — or for a quick refresher — check out the
          rules. Knowing how it all works is the first step to winning. Play
          smart, track your journey, and level up with confidence.
        </p>
      </div>
      <div className="w-[50%] h-full flex justify-center items-center">
        <div
          className={`w-full h-[90%] translate-x-6 ${
            isHovered ? "mt-[160px]" : "mt-[220px]"
          } duration-300 ease-out rounded-[14px] bg-[#ffffffed]`}
        ></div>
      </div>
    </div>
  );
};

export default RulesLinkBar;
