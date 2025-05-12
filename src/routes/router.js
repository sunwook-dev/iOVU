import { Route, Routes, useNavigate } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Reports from "../pages/reports/Reports";
import DashBoard from "../pages/dashBoard/DashBoard";
import Report from "../pages/Report";


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/reports/1/dashboard" element={<DashBoard />} />
      <Route path="/report" element={<Report />} />
    </Routes>
  );
};

export default Router;
