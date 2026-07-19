import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/footer.jsx";
import appRoutes from "./routes/appRoutes.jsx";
import "./App.css";
function App() {
  return (
    <>
      <Navbar />
      <appRoutes/>
      <Footer/>
    </>
  );
}

export default App;
