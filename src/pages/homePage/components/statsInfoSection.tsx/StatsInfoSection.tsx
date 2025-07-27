import MainStatsInfo from "./MainStatsInfo";
import StatsInfoTitle from "./StatsInfoTitle";

const StatsInfoSection = () => {
  return (
    <div className="w-full h-[4000px]">
      <StatsInfoTitle />
      <MainStatsInfo />
    </div>
  );
};

export default StatsInfoSection;
