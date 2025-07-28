import LevelsBarsSection from "./components/levelsbarsSection/LevelsBarsSection";
import Hero from "./components/Hero";
import StatsInfoSection from "./components/statsInfoSection.tsx/StatsInfoSection";
import RulesSection from "./components/rulesSection/RulesSection";
import LinksSection from "./components/LinksSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <LevelsBarsSection />
      <StatsInfoSection />
      <RulesSection />
      <LinksSection />
    </>
  );
};

export default HomePage;
