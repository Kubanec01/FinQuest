import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-[60px] left-0 w-full">
      <div className="mx-auto w-[600px] h-[40px] border-b-2 border-black">
        <ul className="flex items-center justify-between mx-auto w-[80%] text-xl uppercase">
          <li
          className=""
          >Stats</li>
          <li>Play</li>
          <li>Account</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
