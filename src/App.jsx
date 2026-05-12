import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserDashboard from "./pages/UserDashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import AdminLayout from "./admin/pages/AdminLayout";
import AdminMenu from "./admin/pages/AdminMenu";
import AdminRegister from "./admin/pages/AdminRegister";
import AdminOrders from "./admin/pages/AdminOrders";
import AdminHome from "./admin/pages/AdminHome"; // ✅ ADD THIS

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* USER SIDE */}
        <Route path="/" element={<UserDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* ADMIN PANEL (FIXED) */}
        <Route path="/admin" element={<AdminLayout />}>

          {/* DEFAULT PAGE */}
          <Route index element={<AdminHome />} />

          <Route path="menu" element={<AdminMenu />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="register" element={<AdminRegister />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;