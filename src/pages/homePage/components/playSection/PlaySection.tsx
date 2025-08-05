import React from "react";
import GamesBars from "./components/GamesBars";
import SectionTitle from "../../../../components/SectionTitle";

const PlaySection = () => {
  return (
    <section className="w-[90%] max-w-[1400px] mx-auto mt-[160px]">
      <SectionTitle text="Play" />
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
