import React from "react";

// STYLES
const buttonStyle =
  "w-[33%] h-[37px] flex items-center justify-center rounded-t-[4px] cursor-pointer bg-transparent hover:bg-neonYellow-500 duration-150 ease-in";

const Navbar = () => {
  return (
    <div className="fixed top-[60px] left-0 w-full">
      <div className="mx-auto w-[600px] border-b-2 border-black">
        <ul className="flex items-center justify-between gap-10 mx-auto w-[80%] text-xl uppercase">
          <li className={buttonStyle}>Stats</li>
          <li className={buttonStyle}>Play</li>
          <li className={buttonStyle}>Account</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
