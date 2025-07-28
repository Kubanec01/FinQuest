import MainStatsInfo from "./MainStatsInfo";
import StatsInfoTitle from "./StatsInfoTitle";

const StatsInfoSection = () => {
  return (
    <div className="w-full">
      <StatsInfoTitle />
      <MainStatsInfo />
    </div>
  );
};

export default StatsInfoSection;
