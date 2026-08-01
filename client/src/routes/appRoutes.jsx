import { Route, Routes } from "react-router-dom";
import IndexPage from "../pages/indexPage";
import CategoryPage from "../pages/CategoryPage";
import Signup from "../components/Signup/SignupPage/Signup";
import Login from "../components/Signup/LoginPage/Login";
import UserAccountPage from "../pages/UserAccountPage";
import ProtectedRoute from "../pages/protectedRoute";
import ProductDetails from "../pages/ProductDetails";
import AddressPage from "../pages/addressPage/AddressPage";
import NewAddress from "../pages/addressPage/NewAddress/NewAddress";
import Payment from "../pages/Payment/Payment";
import CartDrawer from "../pages/CartDrawer/CartDrawer";

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
      <Route path="/product/:product_id" element={<ProductDetails />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/address" element={<AddressPage />} />
        <Route path="/address/new-Address" element={<NewAddress />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/cart" element={<CartDrawer />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
