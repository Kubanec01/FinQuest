import React from "react";
import AnimatedButton from "../../../../components/AnimatedButton";

const MainStatsInfo = () => {
  return (
    <div className="h-[1000px] bg-primary flex items-center justify-center p-3">
      <section className="w-[50%] h-full flex justify-center items-center">
        <div className="w-[500px] -mt-[130px] ml-[200px]">
          <h2 className="text-neonYellow-500 text-7xl">Performance Overview</h2>
          <p className="text-neonYellow-500 text-3xl font-sans mt-4">
            Keep track of your game performance — from wins to losses. If you're
            signed in, your stats will help you reflect, improve, and level up
            your strategy.
          </p>
          <div className="mt-8">
            <AnimatedButton
              text="See stats"
              className="bg-neonYellow-500 hover:bg-[white]"
            />
          </div>
        </div>
      </section>
      <section className="w-[50%] h-full flex items-center justify-center">
        <div className="border border-[white] rounded-[20px] w-[500px] h-[700px] mr-[100px]"></div>
      </section>
    </div>
  );
};

export default MainStatsInfo;
