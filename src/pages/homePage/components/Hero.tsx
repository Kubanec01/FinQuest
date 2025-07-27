import React from "react";

// STYLES
const boldFont =
  "relative z-50 before:absolute before:w-[100.6%] before:h-[80%] before:top-3 before:left-0 before:bg-neonYellow-500 before:-z-10";

const Hero = () => {
  return (
    <div className="mx-auto h-[100vh] w-full flex justify-start items-center bg-secondary">
      <section className="w-[90%] max-w-[1700px] mx-auto">
        <h1 className="text-9xl w-[80%]">
          <span className={boldFont}>Learn to invest</span>. No boredom, no
          stress – just <span className={boldFont}>fun</span> and{" "}
          <span className={`${boldFont} before:top-4`}>progress</span>. <br />{" "}
          <span className={boldFont}>With FinQuest</span>.
        </h1>
      </section>
    </div>
  );
};

export default Hero;
