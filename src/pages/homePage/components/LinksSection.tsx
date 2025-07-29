import React from "react";

const LinksSection = () => {
  return (
    <div className="w-full h-[300px] bg-neonYellow flex items-center justify-center">
      <div className="w-[90%] max-w-[600px] flex justify-center items-center mb-[60px]">
        <a
          href="https://www.linkedin.com/in/jakub-roman-4b1664338/"
          target="_blank"
          className="relative text-2xl w-[270px] h-[90px] rounded-[100px] bg-primary text-[white] font-sans cursor-pointer"
        >
          <span className="absolute w-full h-full flex justify-center items-center top-0 left-0 hover:-left-1.5 duration-150 ease-linear">
            Contact me here <span className="ml-2">{">"}</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default LinksSection;
