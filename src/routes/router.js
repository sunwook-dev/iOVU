// src/routes/router.js
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import ReportLinkDomainPage from "../pages/ReportLinkDomainPage"; // 기존 페이지
import LandingPage from "../pages/LandingPage";
import SearchPage from "../pages/SearchPage";
import Report from "../pages/Report";
import ReportsLists from "../pages/lists/ReportsLists";
import DashBoard from "../pages/dashBoard/DashBoard";
import Consulting from "../pages/Consulting";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/report/link-domain/:id"
        element={<ReportLinkDomainPage />}
      />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/reports" element={<ReportsLists />} />
      <Route path="/report/:id/dashboard" element={<DashBoard />} />
      <Route path="/report/:id" element={<Report />} />
      <Route path="/report/:id/consulting" element={<Consulting />} />
    </Routes>
  );
};

export default Router;
