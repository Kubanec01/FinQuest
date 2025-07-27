import LevelsBarsSection from "./components/levelsbarsSection/LevelsBarsSection";
import Hero from "./components/Hero";
import StatsInfoSection from "./components/statsInfoSection.tsx/StatsInfoSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <LevelsBarsSection />
      <StatsInfoSection />
    </>
  );
};

export default HomePage;
