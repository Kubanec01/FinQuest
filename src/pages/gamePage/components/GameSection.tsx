import { IoArrowBack } from "react-icons/io5";

import React from "react";
import GameDesk from "./GameDesk";
import { Link } from "react-router";

const GameSection = () => {
  return (
    <div className="relative h-[100vh] w-full bg-[white] flex justify-center items-center">
      <Link
        to="/"
        className="absolute cursor-pointer hover:scale-110 duration-150 ease-in active:scale-95 border-1 border-white bg-neonYellow-500 aspect-square w-[58px] rounded-full top-[38px] left-[90px] flex justify-center items-center text-2xl"
      >
        <IoArrowBack />
      </Link>
      <GameDesk />
    </div>
  );
};

export default GameSection;
