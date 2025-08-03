import React from "react";
import GamesBars from "./components/GamesBars";

const PlaySection = () => {
  return (
    <section className="w-[90%] max-w-[1400px] mx-auto h-[3000px] mt-[160px] mb-[200px]">
      <div className="w-full">
        <h1 className="font-sans text-[43px] text-[#3333338d] relative">
          Play
        </h1>
      </div>
      <div className="w-full text-[#174a51]">
        <h2 className="font-bold text-7xl text-center mt-[140px]">
          Choose Your Path
        </h2>
        <h3 className="text-center mx-auto w-[36%] mt-4 font-medium font-sans text-xl">
          Choose from a range of levels.Gain confidence, grow your knowledge,
          and enjoy learning at your own pace.
        </h3>
      </div>
      <GamesBars />
    </section>
  );
};

export default PlaySection;
