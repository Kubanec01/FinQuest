import React, { useState } from "react";
import SectionTitle from "../../../../../../components/SectionTitle";

const StatusInfoSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  console.log(isHovered);

  return (
    <div className="border h-[1500px] w-[90%] max-w-[1400px] mx-auto mt-[130px]">
      <SectionTitle text="Status" />
      <div className="w-full text-[#174a51]">
        <h2 className="font-bold text-7xl text-center mt-[140px]">
          Track & Grow
        </h2>
      </div>
      {/* STATS INFO BAR */}
      <div
        className={`w-full max-w-[960px] h-[500px] ${
          isHovered ? "bg-[#b686c5]" : "bg-[#b793c2]"
        } duration-200 ease-in-out mt-[60px] overflow-hidden mx-auto flex justify-between items-center rounded-[14px]`}
      >
        <div className="w-[50%] h-full">
          <div className="mt-[90px] ml-[60px]">
            <h2 className="text-4xl font-semibold text-[#431f4e]">
              Your Stats, <br />
              Your Journey
            </h2>
            <p className="font-sans w-[90%] text-[#431f4e] text-2xl text-left font-medium mt-[10px]">
              Sign in to automatically save your game history — wins, losses,
              and progress. See how you're improving and stay motivated on your
              journey.
            </p>
            <div className="w-full mt-[30px]">
              {/* LINK BUTTON */}
              <button
                onMouseEnter={() => setIsHovered((v) => !v)}
                onMouseLeave={() => setIsHovered((v) => !v)}
                className="font-sans text-[21px] bg-[#431f4e] text-[#fffffff5] w-[160px] h-[50px] rounded-full cursor-pointer"
              >
                <span className="translate-x-1 hover:-translate-x-0.5 duration-150 ease-out h-full w-full flex justify-center items-center">
                  {"See Stats >"}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-[50%] h-full flex justify-center items-center">
          <div
            className={`w-[70%] h-[90%] ${
              isHovered ? "mt-[160px]" : "mt-[220px]"
            } duration-300 ease-out rounded-[14px] bg-[#ffffffed]`}
          ></div>
        </div>
      </div>
      <button className="mx-auto w-full font-sans text-xl text-[#8d3dbe] mt-[40px] hover:underline cursor-pointer">
        Create an account
      </button>
      {/* toto spravim ako normalny button, ked tam je lenk textovy link tak to vobec nieje dobre vidiet */}
    </div>
  );
};

export default StatusInfoSection;
