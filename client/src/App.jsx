import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/footer.jsx";
import AppRoutes from "./routes/appRoutes.jsx";
import "./App.css";
function App() {
  return (
    <>
      <Navbar />
      <AppRoutes/>
      <Footer/>
    </>
  );
}

export default App;
