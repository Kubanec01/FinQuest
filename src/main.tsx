import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HashRouter } from "react-router";
import { ParallaxProvider } from "react-scroll-parallax";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ParallaxProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </ParallaxProvider>
  </StrictMode>
);
