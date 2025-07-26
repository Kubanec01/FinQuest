import React from "react";

const LightSwitchButton = () => {
  return (
    <button className="fixed top-4 right-5 w-[60px] h-[30px] border-[2px] rounded-[20px] flex items-center justify-start">
      <span className="border-[2px] aspect-square w-[44%] rounded-[100%] ml-1" />
    </button>
  );
};

export default LightSwitchButton;
