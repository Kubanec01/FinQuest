import React from "react";

interface AnimatedButtonProps {
  text: string;
  className?: string;
}

const AnimatedButton = ({ text, className }: AnimatedButtonProps) => {
  return (
    <button
      className={`relative font-sans text-2xl duration-150 ease-linear w-[150px] h-[50px] rounded-[30px] cursor-pointer ${className}`}
    >
      <span className="w-full h-full absolute left-[50%] -translate-x-[50%] top-1.5 hover:left-[45%] duration-150 ease-linear">
        {text}
      </span>
    </button>
  );
};

export default AnimatedButton;
