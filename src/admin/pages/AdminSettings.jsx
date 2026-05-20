import { useState, useEffect } from "react";
import "../css/AdminSettings.css";
import bgImage from "../../assets/chillilogo-bg.png";

function AdminSetting() {

  //  LOAD STATUS FROM LOCALSTORAGE
  const [canteenStatus, setCanteenStatus] = useState(
    localStorage.getItem("canteenStatus") || "open"
  );

  const [upiEnabled, setUpiEnabled] = useState(true);
  const [notifications, setNotifications] = useState(true);

  //  ENSURE DEFAULT VALUE EXISTS
  useEffect(() => {
    if (!localStorage.getItem("canteenStatus")) {
      localStorage.setItem("canteenStatus", "closed");
    }
  }, []);

  //  TOGGLE CANTEEN STATUS
  const toggleCanteen = () => {
  const newStatus = canteenStatus === "open" ? "closed" : "open";
  console.log("SETTING STATUS:", newStatus); // 👈 ADD THIS
  setCanteenStatus(newStatus);
  localStorage.setItem("canteenStatus", newStatus);
};

  //  CLEAR ORDERS
  const handleClearOrders = () => {
    localStorage.removeItem("orders");
    alert("All orders cleared!");
  };

  return (
    <div
      className="admin-settings-page"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="settings-card">

        <h2>⚙️ Settings</h2>

        {/*  CANTEEN STATUS */}
        <div className="setting-item">
          <span>Canteen Status</span>
          <button onClick={toggleCanteen}>
            {canteenStatus === "open" ? "Open" : "Closed"}
          </button>
        </div>

        {/*  UPI TOGGLE */}
        <div className="setting-item">
          <span>UPI Payment</span>
          <button onClick={() => setUpiEnabled(!upiEnabled)}>
            {upiEnabled ? "Enabled" : "Disabled"}
          </button>
        </div>

        {/*  NOTIFICATIONS */}
        <div className="setting-item">
          <span>Notifications</span>
          <button onClick={() => setNotifications(!notifications)}>
            {notifications ? "On" : "Off"}
          </button>
        </div>

        {/*  CLEAR ORDERS */}
        <div className="setting-item danger">
          <span>Clear All Orders</span>
          <button onClick={handleClearOrders}>
            Clear
          </button>
        </div>

      </div>
    </div>
  );
}

export default AdminSetting;
