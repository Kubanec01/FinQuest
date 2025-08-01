import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

const HomePage = lazy(() => import("../pages/homePage/HomePage"));
const StatsPage = lazy(() => import("../pages/statsPage/StatsPage"));
const GamePage = lazy(() => import("../pages/gamePage/GamePage"));

const MainRoutes = () => {
  return (
    <Suspense
      fallback={
        <div>
          {/* This is temporary element, add Loading page later */}
          Loading ...
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
