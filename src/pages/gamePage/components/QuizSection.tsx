import React from "react";

const QuizSection = () => {
  return (
    <div className="w-full h-[500px] mt-[50px]">
      <div className="border w-full h-[50%] rounded-[10px]"></div>
      <div className="w-full h-[50%] py-4 grid grid-cols-2 gap-3">
        <button className="w-full h-full border rounded-lg">A</button>
        <button className="w-full h-full border rounded-lg">B</button>
        <button className="w-full h-full border rounded-lg">C</button>
        <button className="w-full h-full border rounded-lg">D</button>
      </div>
    </div>
  );
};

export default QuizSection;
