import { Route, Routes } from "react-router-dom";
import IndexPage from "../pages/IndexPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
    </Routes>
  );
}

export default AppRoutes;