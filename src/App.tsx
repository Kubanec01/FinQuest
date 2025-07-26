import Footer from "./components/Footer";
import LightSwitchButton from "./components/LightSwitchButton";
import Navbar from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <>
      <Navbar />
      <LightSwitchButton />
      <MainRoutes />
      <Footer />
    </>
  );
}

export default App;
