import "../css/AdminNavbar.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBell, FaSearch } from "react-icons/fa";

import adminAvatar from "../../assets/avatar.png";

function AdminNavbar() {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [orders, setOrders] = useState([]);

  const userName = localStorage.getItem("userName");

  // CLOSE DROPDOWN
  useEffect(() => {
    const handleClickOutside = () => setShowMenu(false);
    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // LOAD ORDERS
  useEffect(() => {
    const interval = setInterval(() => {
      const data = JSON.parse(localStorage.getItem("orders")) || [];
      setOrders(data);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const unreadCount = orders.filter(order => !order.isRead).length;

  const handleNotificationClick = () => {
    const data = JSON.parse(localStorage.getItem("orders")) || [];

    const unreadOrders = data.filter(order => !order.isRead);

    if (unreadOrders.length > 0) {
      alert("🛎️ New Order Placed!");
    } else {
      alert("No new orders");
    }

    const updated = data.map(order => ({
      ...order,
      isRead: true
    }));

    localStorage.setItem("orders", JSON.stringify(updated));
    setOrders(updated);

    navigate("/admin/orders");
  };

  return (
    <div className="admin-navbar-wrapper">

      {/* MAIN NAVBAR */}
      <div className="admin-navbar">

        {/* LEFT */}
        <div className="admin-navbar-left">
          <h1>Admin Dashboard</h1>
          <p>Manage cafeteria operations easily</p>
        </div>

        {/* RIGHT */}
        <div className="admin-navbar-right">

          {/* SEARCH */}
          <div className="admin-search-box">
            <FaSearch className="admin-search-icon" />
            <input type="text" placeholder="Search here..." />
          </div>

          {/* NOTIFICATION */}
          <div
            className="admin-notification"
            onClick={handleNotificationClick}
          >
            <FaBell />

            {unreadCount > 0 && (
              <span className="notification-badge">
                {unreadCount}
              </span>
            )}
          </div>

          {/* PROFILE */}
          <div className="admin-profile-wrapper">

            <div
              className="admin-profile"
              onClick={(e) => {
                e.stopPropagation();
                setShowMenu(!showMenu);
              }}
            >
              <img src={adminAvatar} alt="profile" />

              <div>
                <h3>{userName || "Admin"}</h3>
                <p>Admin</p>
              </div>
            </div>

            {/* DROPDOWN */}
            {showMenu && (
              <div className="admin-profile-dropdown">

                <div className="admin-profile-header">
                  <img src={adminAvatar} alt="profile" />
                  <span>{userName || "Admin"}</span>
                </div>

                <hr />

                <p onClick={() => navigate("/admin/profile")}>
                  ✏ Edit Profile
                </p>

                <p
                  onClick={() => {
                    localStorage.clear();
                    navigate("/");
                  }}
                >
                  🚪 Logout
                </p>

              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}

export default AdminNavbar;
