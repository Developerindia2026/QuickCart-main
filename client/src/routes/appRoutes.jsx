import { Route, Routes } from "react-router-dom";
import IndexPage from "../pages/indexPage";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
    </Routes>
  );
}

export default Routing;
