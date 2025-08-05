import React, { useRef, useState } from "react";

const gameLevels = [
  {
    id: "easy",
  },
  {
    id: "medium",
  },
  {
    id: "hard",
  },
  {
    id: "hardcore",
  },
];

const GamesBars = () => {
  const [levelIndex, setLevelIndex] = useState<number>(0);

  const gameLevelsRef = useRef<HTMLUListElement>(null);

  const scrollToLevel = (index: number) => {
    const levelElement = gameLevelsRef.current?.children[index] as HTMLElement;
    if (levelElement) {
      levelElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
      setLevelIndex(index);
    }
  };

  return (
    <section className="w-[1000px] h-[600px] mx-auto mt-[100px]">
      <ul
        ref={gameLevelsRef}
        className="w-full h-[70%] flex gap-10 overflow-x-hidden rounded-[14px]
      "
      >
        {gameLevels.map((i) => (
          <li
            key={i.id}
            className="shrink-0 w-full h-full rounded-[14px] bg-[white]"
          ></li>
        ))}
      </ul>
      <div className="w-full flex justify-center">
        <div className="w-[180px] h-[52px] bg-[#383838] rounded-full mt-[34px] flex items-center justify-between px-7 select-none">
          {gameLevels.map((i, index) => (
            <button
              onClick={() => scrollToLevel(index)}
              key={i.id}
              className={`
                ${
                  levelIndex === index
                    ? "scale-150"
                    : "scale-100 cursor-pointer hover:scale-120"
                }
                w-[12px] aspect-square rounded-full bg-[#9d9d9de9] duration-200`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesBars;