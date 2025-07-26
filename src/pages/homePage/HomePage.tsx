import LevelsBarsSection from "./components/levelsbarsSection/LevelsBarsSection";
import Hero from "./components/Hero";

const HomePage = () => {
  return (
    <div className="w-full h-[100vh]">
      {/* TITLE */}
      <Hero />
      {/* levels section */}
      <LevelsBarsSection />
    </div>
  );
};

export default HomePage;
