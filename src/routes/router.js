import { Route, Routes, useNavigate } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Report from "../pages/Report";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/report" element={<Report />} />
    </Routes>
  );
};

export default Router;
