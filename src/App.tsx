import BackgroundImage from "./components/BackgroundImage";
import Navbar from "./pages/homePage/components/Navbar";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <>
      <Navbar />

      <BackgroundImage />
      <MainRoutes />
    </>
  );
}

export default App;
