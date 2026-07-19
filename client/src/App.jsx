import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/footer.jsx";
import "./App.css";
import Routing from "./routes/appRoutes.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Routing/>
      <Footer/>
    </>
  );
}

export default App;
