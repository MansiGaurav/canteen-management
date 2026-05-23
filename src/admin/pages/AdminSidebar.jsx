import "../css/AdminSidebar.css";
import { NavLink, useNavigate } from "react-router-dom";

import {
  FaThLarge,
  FaClipboardList,
  FaHamburger,
  FaBoxes,
  FaCog,
  FaSignOutAlt
} from "react-icons/fa";

function AdminSidebar() {
  const navigate = useNavigate();

  return (
    <div className="admin-sidebar">

      {/* 🔙 BACK BUTTON */}
      <button
        className="sidebar-back-btn"
        onClick={() => navigate(-1)}
      >
        ← 
      </button>

      {/* LOGO */}
      <h1 className="admin-logo">
        CHILI'S <br /> FOOD POINT
      </h1>

      {/* MENU */}
      <ul className="admin-menu">

        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            isActive ? "sidebar-item active" : "sidebar-item"
          }
        >
          <FaThLarge />
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/orders"
          className={({ isActive }) =>
            isActive ? "sidebar-item active" : "sidebar-item"
          }
        >
          <FaClipboardList />
          Orders
        </NavLink>

        <NavLink
          to="/admin/menu"
          className={({ isActive }) =>
            isActive ? "sidebar-item active" : "sidebar-item"
          }
        >
          <FaHamburger />
          Menu
        </NavLink>

        <NavLink
          to="/admin/stocks"
          className={({ isActive }) =>
            isActive ? "sidebar-item active" : "sidebar-item"
          }
        >
          <FaBoxes />
          Stocks
        </NavLink>

        <NavLink
          to="/admin/settings"
          className={({ isActive }) =>
            isActive ? "sidebar-item active" : "sidebar-item"
          }
        >
          <FaCog />
          Settings
        </NavLink>

        <NavLink to="/" className="sidebar-item">
          <FaSignOutAlt />
          Logout
        </NavLink>

      </ul>
    </div>
  );
}

export default AdminSidebar;
