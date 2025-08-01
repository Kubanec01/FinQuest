import React from "react";

// STYLES
const boldFont =
  "relative z-50 before:absolute before:w-[100.6%] before:h-[84%] before:top-3 before:left-0 before:bg-neonYellow-500 before:-z-10";

const Hero = () => {
  return (
    <div className="mx-auto h-[100vh] w-full flex justify-start items-center bg-neonPurple">
      <section className="w-[90%] max-w-[1700px] mx-auto">
        <h1 className="text-9xl w-[80%]">
          <span className={boldFont}>Ready to play smart?</span>. No lectures,
          <span className={boldFont}>no limits</span> – just{" "}
          <span className={boldFont}>practice</span> and{" "}
          <span className={`${boldFont} before:top-4`}>progress</span>. <br />{" "}
          <span className={boldFont}>With FinQuest</span>.
        </h1>
      </section>
    </div>
  );
};

export default Hero;
