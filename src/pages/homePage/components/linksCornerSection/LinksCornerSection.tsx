import React from "react";
import SectionTitle from "../../../../components/SectionTitle";
import RulesLinkBar from "./components/RulesLinkBar";
import PersonalWebLink from "./components/PersonalWebLink";
import GithubLinkBar from "./components/GithubLinkBar";
import LinkedInBar from "./components/LinkedInBar";

const LinksCornerSection = () => {
  return (
    <section className="mt-[200px] mb-[150px] w-[90%] max-w-[1400px] mx-auto">
      <SectionTitle text="More Info" />
      <div className="w-full text-[#174a51]">
        <h2 className="font-bold text-7xl text-center mt-[140px]">
          Explorer’s Corner
        </h2>
      </div>
      <div className="w-[70%] mx-auto mt-[80px]">
        <RulesLinkBar />
        <div className="mt-[40px] flex justify-between items-center gap-6">
          <PersonalWebLink />
          <div className="w-[30%] h-[290px] flex flex-col justify-between items-center gap-6">
            <GithubLinkBar />
            <LinkedInBar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinksCornerSection;
