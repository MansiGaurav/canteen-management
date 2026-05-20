import { BrowserRouter, Routes, Route } from "react-router-dom";

//  AUTH
import AuthPage from "./auth/AuthPage";

//  USER
import UserDashboard from "./pages/UserDashboard";
import Orders from "./pages/Orders";
import Payment from "./pages/Payment";
import Token from "./pages/Token";
import UserSettings from "./pages/UserSettings";

//  ADMIN
import AdminLayout from "./admin/pages/AdminLayout";
import AdminMenu from "./admin/pages/AdminMenu";
import AdminOrders from "./admin/pages/AdminOrders";
import AdminHome from "./admin/pages/AdminHome";
import AdminStocks from "./admin/pages/AdminStocks";
import AdminSettings from "./admin/pages/AdminSettings";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* AUTH */}
        <Route path="/" element={<AuthPage />} />

        {/* USER */}
        <Route path="/home" element={<UserDashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/token" element={<Token />} />
        <Route path="/settings" element={<UserSettings />} />
        {/* ADMIN */}
        <Route path="/admin" element={<AdminLayout />}>

          <Route index element={<AdminHome />} />
          <Route path="menu" element={<AdminMenu />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="stocks" element={<AdminStocks />} />

          {/*  FIXED */}
          <Route path="settings" element={<AdminSettings />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}
export default App;
