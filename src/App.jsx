import { BrowserRouter, Routes, Route } from "react-router-dom";

// ✅ AUTH
import AuthPage from "./auth/AuthPage";

// ✅ USER
import UserDashboard from "./pages/UserDashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Orders from "./pages/Orders";

// ✅ 🔥 ADD THESE
import Payment from "./pages/Payment";
import Token from "./pages/Token";

// ✅ ADMIN
import AdminLayout from "./admin/pages/AdminLayout";
import AdminMenu from "./admin/pages/AdminMenu";
import AdminOrders from "./admin/pages/AdminOrders";
import AdminHome from "./admin/pages/AdminHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ✅ AUTH PAGE */}
        <Route path="/" element={<AuthPage />} />

        {/* ✅ USER SIDE */}
        <Route path="/home" element={<UserDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/orders" element={<Orders />} />
        {/* 🔥 ADD THESE ROUTES */}
        <Route path="/payment" element={<Payment />} />
        <Route path="/token" element={<Token />} />

        {/* ✅ ADMIN PANEL */}
        <Route path="/admin" element={<AdminLayout />}>

          <Route index element={<AdminHome />} />
          <Route path="menu" element={<AdminMenu />} />
          <Route path="orders" element={<AdminOrders />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;