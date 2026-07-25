import { Route, Routes } from "react-router-dom";
import IndexPage from "../pages/indexPage";
import CategoryPage from "../pages/CategoryPage";
// import ProductPage from "../pages/ProductPage";
import Signup from "../components/Signup/SignupPage/Signup";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />

      {/* <Route path="/products" element={<ProductPage />} />  */}

      <Route path="/Signup" element={<Signup />} />

      <Route path="/category/:categoryName" element={<CategoryPage />} />
    </Routes>
  );
}

export default AppRoutes;
