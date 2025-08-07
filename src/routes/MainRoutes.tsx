import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

const HomePage = lazy(() => import("../pages/homePage/HomePage"));
const RulesPage = lazy(() => import("../pages/rulesPage/RulesPage"));

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
        <Route path="rules" element={<RulesPage />} />
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
