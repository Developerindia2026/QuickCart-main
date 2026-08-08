import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/footer.jsx";
import Loading from "./LoadingPage/Loading.jsx";
import AppRoutes from "./routes/appRoutes.jsx";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const location = useLocation();

  const [loadingState, Setloading] = useState(false);

  useEffect(() => {
    Setloading(true);

    const timer = setTimeout(() => {
      Setloading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Navbar />

      {loadingState ? <Loading /> : <AppRoutes />}

      {/* <AppRoutes />  */}
      <Footer />
    </>
  );
}

export default App;
