import React from "react";
import Hero from "./components/Hero";
import PlaySection from "./components/playSection/PlaySection";
import StatusInfoSection from "./components/playSection/components/statusInfoSection/StatusInfoSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <PlaySection />
      <StatusInfoSection />
    </>
  );
};

export default HomePage;
