import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../css/UserSettings.css";
import bgImage from "../assets/chillilogo-bg.png";

function UserSettings() {

  const navigate = useNavigate();

  const [canteenStatus, setCanteenStatus] = useState("open");
  const [notifications, setNotifications] = useState(
    localStorage.getItem("userNotifications") === "true"
  );
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // 🔥 LOAD STATUS
  useEffect(() => {
    const status = localStorage.getItem("canteenStatus") || "open";
    setCanteenStatus(status);
  }, []);

  // 🔥 BACK BUTTON
  const handleBack = () => {
    navigate("/home"); // go to dashboard
  };

  // 🔥 CLEAR CART
  const clearCart = () => {
    const confirmClear = window.confirm("Clear your cart?");
    if (confirmClear) {
      localStorage.removeItem("cart");
      alert("Cart cleared!");
    }
  };

  return (
    <div
      className="user-settings"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* 🔙 BACK BUTTON */}
      <button className="back-btn" onClick={handleBack}>
        <FaArrowLeft />
      </button>

      {/* 🔥 SETTINGS CARD */}
      <div className="settings-card">

        <h2>⚙️ User Settings</h2>

        {/* USER */}
        <div className="setting-box">
          <span>User</span>
          <button disabled>
            {localStorage.getItem("userName") || "User"}
          </button>
        </div>

        {/* CANTEEN STATUS */}
        <div className="setting-box">
          <span>Canteen Status</span>
          <button
            className={
              canteenStatus === "open"
                ? "status-open"
                : "status-closed"
            }
          >
            {canteenStatus === "open" ? "Open" : "Closed"}
          </button>
        </div>

        {/* NOTIFICATIONS */}
        <div className="setting-box">
          <span>Notifications</span>
          <button
            onClick={() => {
              const newVal = !notifications;
              setNotifications(newVal);
              localStorage.setItem("userNotifications", newVal);
            }}
          >
            {notifications ? "On" : "Off"}
          </button>
        </div>

        {/* THEME */}
        <div className="setting-box">
          <span>Theme</span>
          <button
            onClick={() => {
              const newTheme = darkMode ? "light" : "dark";
              setDarkMode(!darkMode);
              localStorage.setItem("theme", newTheme);
              document.body.className = newTheme;
            }}
          >
            {darkMode ? "Dark" : "Light"}
          </button>
        </div>

        {/* CLEAR CART */}
        <div className="setting-box danger">
          <span>Clear Cart</span>
          <button onClick={clearCart}>
            Clear
          </button>
        </div>

      </div>
    </div>
  );
}

export default UserSettings;