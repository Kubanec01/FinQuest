import React, { useState } from "react";
import { VscGithub } from "react-icons/vsc";

const GithubLinkBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered((v) => !v)}
      onMouseLeave={() => setIsHovered((v) => !v)}
      className={`
         ${
           isHovered
             ? "-translate-y-2 bg-[#202020] shadow-xl/20"
             : "bg-[#292929]"
         }
        w-full h-[50%] duration-300 ease-in-out rounded-[14px] overflow-hidden relative text-[white] cursor-pointer`}
    >
      <div className="w-full h-full flex items-center">
        <h1 className="text-3xl -mt-4 ml-5">
          GitHub <br /> Page
        </h1>
      </div>
      <span
        className={`absolute
        ${isHovered ? "-bottom-8" : "-bottom-12"}
         -right-5 text-9xl text-[#ffffffe7] duration-300 ease-out`}
      >
        <VscGithub />
      </span>
    </div>
  );
};

export default GithubLinkBar;
