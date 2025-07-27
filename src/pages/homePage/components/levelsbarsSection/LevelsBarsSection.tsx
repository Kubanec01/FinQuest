import React from "react";

const data = [
  {
    id: "1",
    title: "Basics Of Investment",
    level: "Easy",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "#",
  },
  {
    id: "1",
    title: "International Investments",
    level: "Medium",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "#",
  },
  {
    id: "1",
    title: "Market and Risk Rules",
    level: "Hard",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "#",
  },
  {
    id: "1",
    title: "Veteran Broker",
    level: "Legend",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "#",
  },
];

const LevelsBarsSection = () => {
  return (
    <section className="w-full h-[800px] bg-[#fafafa] overflow-hidden flex items-center justify-center">
      <div className="h-full w-[50%] flex items-center">
        <section className="mx-auto ml-[240px] -mt-[120px]">
          <h1 className="font-sans text-lg text-[#000000ce]">
            Explore. Learn. Progress.
          </h1>
          <h2 className="text-5xl">Choose Your Path</h2>
          <p className="text-2xl w-[67%] mt-2 text-[#000000b4]">
            Choose from a range of levels tailored to your skill and experience.
            Each path offers a different challenge, from beginner to advanced.
            Gain confidence, grow your knowledge, and enjoy learning at your own
            pace.
          </p>
          <button className="font-sans bg-secondary duration-100 ease-in hover:bg-primary text-[#000000] hover:text-[white] font-semibold w-[130px] h-[40px] text-lg rounded-[100px] mt-4 cursor-pointer">
            Read rules
          </button>
        </section>
      </div>
      <div className="h-full w-[60%]">
        <ul className="w-full h-full">
          {data.map((i) => (
            // Tuto bude jednoznacne animatia kde sa sfarbenie pri hover udeje z lkava do prava
            <div className="w-full h-[25%] flex items-center justify-between border-b border-secondary bg-transparent hover:bg-neonYellow-500 duration-200 ease-in cursor-pointer">
              <div className="w-[50%] h-full flex flex-col justify-center items-start p-4">
                <h1 className="text-4xl">{i.title}</h1>
                <h2 className="text-3xl flex items-center">
                  <span className="text-5xl">·</span>
                  {i.level}
                </h2>
              </div>
              <div className="w-[50%] h-full flex items-center justify-start p-4">
                <p className="text-xl w-[80%] font-sans">{i.desc}</p>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LevelsBarsSection;
