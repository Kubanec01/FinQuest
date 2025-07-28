import React from "react";

const RulesSection = () => {
  return (
    <div className="w-full bg-quaternary">
      <div className="relative w-[90%] max-w-[1300px] mx-auto h-full p-1">
        <section className="sticky top-[180px] mb-[200px] mt-[150px] w-[500px] h-[400px]">
          {/* BUTTONS */}
          <div className="w-full flex justify-between items-center">
            <button className="border w-[140px] h-[50px] rounded-[40px] text-2xl">
              text 1
            </button>
            <button className="border w-[140px] h-[50px] rounded-[40px] text-2xl">
              text 1
            </button>{" "}
            <button className="border w-[140px] h-[50px] rounded-[40px] text-2xl">
              text 1
            </button>
          </div>
          <div className="w-full mt-[80px]">
            <h1 className="text-6xl ">Text about Rule</h1>
            <p className="font-sans text-2xl w-[90%] mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              ullam blanditiis in perferendis quis fugiat est beatae iure culpa
              deserunt quam corporis tenetur? Voluptas, sunt? Quos veniam saepe
              distinctio dolorum.
            </p>
          </div>
        </section>
        <ul className="w-full flex flex-col justify-between items-end pr-[90px] gap-[400px] mb-[220px]">
          <li className="border w-[440px] h-[500px] rounded-[20px] mt-[500px]"></li>
          <li className="border w-[440px] h-[500px] rounded-[20px]"></li>
          <li className="border w-[440px] h-[500px] rounded-[20px]"></li>
        </ul>
      </div>
    </div>
  );
};

export default RulesSection;
