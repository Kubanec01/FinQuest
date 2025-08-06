import React from "react";
import Hero from "./components/Hero";
import PlaySection from "./components/playSection/PlaySection";
import StatusInfoSection from "./components/playSection/components/statusInfoSection/StatusInfoSection";
import LinksCornerSection from "./components/linksCornerSection/LinksCornerSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <PlaySection />
      <StatusInfoSection />
      <LinksCornerSection />
    </>
  );
};

export default HomePage;
