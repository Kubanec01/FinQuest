import React, { useState } from "react";

const StatsSection = () => {
  const [isAuth] = useState(true);


//   ! toto sa bude musiet dat vedla seba, pod sebou to vyzer auplne na hovno
  return (
    <section className="w-full h-[900px] bg-tertiary-500 overflow-hidden">
      {isAuth ? (
        <div className="w-[90%] max-w-[900px] mx-auto mt-16 text-center">
          <h1 className="font-sans text-2xl font-light text-[white]">Stats</h1>
          <h2 className="text-5xl text-[white]">Win–Loss Tracker</h2>
          <p className="mx-auto w-[54%] text-xl mt-2 text-[#ffffff] font-sans">
            Keep track of your game performance — from wins to losses. Use your
            stats to reflect, improve, and level up your strategy.
          </p>
          <ul className="mx-auto w-[520px] h-[500px] mt-[50px] overflow-auto">
            <li className="w-full h-[80px] rounded-[14px] mb-4 bg-[white] shadow-xl/20 flex items-center justify-between px-8 text-2xl font-sans">
              <h1>International Investments</h1>
              <span>Defeat</span>
            </li>
          </ul>
        </div>
      ) : (
        <div></div>
      )}
    </section>
  );
};

export default StatsSection;
