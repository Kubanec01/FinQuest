import React from "react";
import RoundsCountBar from "./RoundsCountBar";
import TimeBar from "./TimeBar";
import QuizSection from "./QuizSection";
import HealthBar from "./HealthBar";

const GameDesk = () => {
  return (
    <div className="w-[90%] max-w-[1200px] h-[90%] max-h-[900px] -mt-13">
      <RoundsCountBar />
      <TimeBar />
      <QuizSection />
      <HealthBar />
    </div>
  );
};

export default GameDesk;
