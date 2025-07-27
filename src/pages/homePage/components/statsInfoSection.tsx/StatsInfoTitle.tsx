import React from "react";
import { Parallax } from "react-scroll-parallax";

const StatsInfoTitle = () => {
  return (
    <section className="relative  w-full h-[780px] mx-auto flex flex-col items-center justify-center bg-[#ececec] overflow-hidden">
      <h1 className="text-9xl uppercase text-center z-20 text-[white]">
        More Than
      </h1>
      <Parallax
        speed={-30}
        className="absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]"
      >
        <h2 className="text-[200px] font-semibold uppercase text-center text-[#c2dcdcd7] z-50">
          Learning
        </h2>
      </Parallax>
    </section>
  );
};

export default StatsInfoTitle;
