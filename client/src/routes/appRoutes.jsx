import { Route, Routes } from "react-router-dom";
import IndexPage from "../pages/indexPage";

function appRoutes() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
    </Routes>
  );
}

export default appRoutes;
