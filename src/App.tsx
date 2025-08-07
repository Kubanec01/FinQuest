import BackgroundImage from "./components/BackgroundImage";
import Footer from "./components/Footer";
import Navbar from "./pages/homePage/components/Navbar";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <>
      <Navbar />
      <BackgroundImage />
      <MainRoutes />
      {/* <Footer /> */}
    </>
  );
}

export default App;
