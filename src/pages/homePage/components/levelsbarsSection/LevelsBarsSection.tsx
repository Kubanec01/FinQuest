import React from "react";

const LevelsBarsSection = () => {
  return (
    <section className="w-full h-[1000px] bg-pastelGreen-500 overflow-hidden">
      <div className="w-[90%] max-w-[900px] mx-auto mt-[100px]">
        <h1 className="mx-auto text-6xl text-center text-pastelGreen">
          Choose Your Path
        </h1>
        <p className="text-2xl text-center mx-auto w-[80%] text-pastelShadowGreen mt-2">
          Choose from a range of levels tailored to your skill and experience.
          Each path offers a different challenge, from beginner to advanced.
          <br />
          Want to learn how it works? Just{" "}
          <a className="text-[#ffffff]" href="#">
            click here
          </a>{" "}
          to view the rules.
        </p>
      </div>
      <div className="">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  );
};

export default LevelsBarsSection;
