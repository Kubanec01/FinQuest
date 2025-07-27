import React, { useState } from "react";

const StatsSection = () => {
  const [isAuth] = useState(true);

  return (
    <section className="w-full h-[900px] bg-[#c4c4c4] overflow-hidden">
      {isAuth ? (
        <div className="w-[90%] max-w-[900px] mx-auto mt-16 text-center">
          <h1 className="font-sans text-2xl font-light">Stats</h1>
          <h2 className="text-5xl">Win–Loss Tracker</h2>
          <p className="mx-auto w-[60%] text-2xl mt-2">
            Keep track of your game performance — from wins to losses. Use your
            stats to reflect, improve, and level up your strategy.
          </p>
          <div>
            <ul>{/* tu bude zoznam vyhier a prehrier */}</ul>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </section>
  );
};

export default StatsSection;
