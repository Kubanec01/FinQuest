import React from "react";

const rulesData = [
  {
    id: "introduction",
    title: "Learn The Way",
    desc: "This game comes with a few key rules you’ll want to keep your eyes on — and maybe even guard with your life. To make sure your journey runs smoothly, let’s break them down and set you up for success.",
  },
  {
    id: "tasks-bars",
    title: "Learn The Way",
    desc: "This game comes with a few key rules you’ll want to keep your eyes on — and maybe even guard with your life. To make sure your journey runs smoothly, let’s break them down and set you up for success.",
  },
  {
    id: "time-bar",
    title: "Learn The Way",
    desc: "This game comes with a few key rules you’ll want to keep your eyes on — and maybe even guard with your life. To make sure your journey runs smoothly, let’s break them down and set you up for success.",
  },
  {
    id: "questions-and-answers",
    title: "Learn The Way",
    desc: "This game comes with a few key rules you’ll want to keep your eyes on — and maybe even guard with your life. To make sure your journey runs smoothly, let’s break them down and set you up for success.",
  },
  {
    id: "health-bar",
    title: "Learn The Way",
    desc: "This game comes with a few key rules you’ll want to keep your eyes on — and maybe even guard with your life. To make sure your journey runs smoothly, let’s break them down and set you up for success.",
  },
  {
    id: "help-spells",
    title: "Learn The Way",
    desc: "This game comes with a few key rules you’ll want to keep your eyes on — and maybe even guard with your life. To make sure your journey runs smoothly, let’s break them down and set you up for success.",
  },
  {
    id: "back-button",
    title: "Learn The Way",
    desc: "This game comes with a few key rules you’ll want to keep your eyes on — and maybe even guard with your life. To make sure your journey runs smoothly, let’s break them down and set you up for success.",
  },
];

const RulesExplainSection = () => {
  return (
    <section className="w-[90%] max-w-[1200px] mx-auto flex justify-between mt-[80px] mb-[300px]">
      <div className="w-[50%]">
        <div className="w-full h-[500px] flex justify-center items-center p-6 sticky top-50">
          <div className="border w-full h-full rounded-[20px]">
            {/* Tu sa bude menit obsah scrollovanim */}
          </div>
        </div>
      </div>
      <div className="w-[50%]">
        <ul className="w-full h-full flex flex-col justify-between items-center gap-[230px] pb-[40px]">
          {rulesData.map((i) => (
            <li className="w-full h-[500px] p-6">
              <div className="mt-[120px] ml-6">
                <h1 className="font-sans text-6xl font-semibold">
                  Learn The Way
                </h1>
                <p className="font-sans font-medium text-xl w-[70%] mt-[14px]">
                  This game comes with a few key rules you’ll want to keep your
                  eyes on — and maybe even guard with your life. To make sure
                  your journey runs smoothly, let’s break them down and set you
                  up for success.
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RulesExplainSection;
