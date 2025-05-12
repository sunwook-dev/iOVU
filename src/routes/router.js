import { Route, Routes, useNavigate } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import LandingPage from "../pages/LandingPage";
import SearchPage from "../pages/SearchPage";
import Report from "../pages/Report";
import Reports from "../pages/reports/Reports";
import DashBoard from "../pages/dashBoard/DashBoard";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/reports/1/dashboard" element={<DashBoard />} />
      <Route path="/report" element={<Report />} />
    </Routes>
  );
};

export default Router;
