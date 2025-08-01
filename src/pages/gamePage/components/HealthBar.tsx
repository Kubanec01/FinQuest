import React from "react";

// STYLES
const buttonStyle = "w-[40px] aspect-square rounded-full border";

const HealthBar = () => {
  return (
    <div className="relative w-full h-[28px] border rounded-[30px] mt-[140px]">
      <div className="absolute w-[90px] h-[50px] -top-[54px] left-0 flex items-center justify-between">
        <button className={buttonStyle}></button>
        <button className={buttonStyle}></button>
      </div>
      <div className="w-full h-full"></div>
    </div>
  );
};

export default HealthBar;
