import React from "react";

const SectionTitle = ({ text }: { text: string }) => {
  return (
    <div className="w-full">
      <h1 className="font-sans text-[43px] text-[#3333338d] relative">
        {text}
      </h1>
    </div>
  );
};

export default SectionTitle;
