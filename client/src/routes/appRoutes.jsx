import { Route, Routes } from "react-router-dom";
import IndexPage from "../pages/indexPage";
import CategoryPage from "../pages/CategoryPage";
import Signup from "../components/Signup/SignupPage/Signup";
import Login from "../components/Signup/LoginPage/Login";
import UserAccountPage from "../pages/UserAccountPage";
import ProtectedRoute from "../pages/protectedRoute";
import ProductDetails from "../pages/ProductDetails";

function AppRoutes() {
  return (
    <Routes>
      {/* AUTHENTICATION HANDLING  ******************************/}
      <Route path="/Signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      {/* PROTECTED ROUTES  **************************************/}
      <Route element={<ProtectedRoute />}>
        <Route path="/user" element={<UserAccountPage />} />
      </Route>


      <Route path="/" element={<IndexPage />} />

      <Route path="/category/:categoryName" element={<CategoryPage />} />
      <Route path="/product/:product_id" element={<ProductDetails/>} />
    </Routes>
  );
}

export default AppRoutes;
