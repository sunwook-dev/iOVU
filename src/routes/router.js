import { Route, Routes, useNavigate } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
