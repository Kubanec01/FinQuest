import React from "react";

// STYLES
const barStyle = "w-[8.33%] h-full border rounded-[7px]";

const RoundsCountBar = () => {
  return (
    <div className="w-full h-[20px] mt-6">
      <ul className="h-full w-[90%] mx-auto flex justify-center items-center gap-3">
        <li className={barStyle}></li>
        <li className={barStyle}></li>
        <li className={barStyle}></li>
        <li className={barStyle}></li>
        <li className={barStyle}></li>
        <li className={barStyle}></li>
        <li className={barStyle}></li>
        <li className={barStyle}></li>
        <li className={barStyle}></li>
        <li className={barStyle}></li>
        <li className={barStyle}></li>
        <li className={barStyle}></li>
      </ul>
    </div>
  );
};

export default RoundsCountBar;
