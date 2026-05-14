import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../css/Token.css";

function Token() {

  const location = useLocation();
  const navigate = useNavigate();

  const token = location.state?.token || "----";
  const total = location.state?.total || 0;
  const place = location.state?.place || "";
  const payment = location.state?.payment || "";

  // 🔥 FIX: correct key name (cartItems OR cart)
  const cartItems = location.state?.cartItems || location.state?.cart || [];
  useEffect(() => {

    const existingOrders =
      JSON.parse(localStorage.getItem("orders")) || [];
  
    // 🔥 CHECK: if this token already exists, don't save again
    const alreadyExists = existingOrders.some(
      (order) => order.token === token
    );
  
    if (!alreadyExists) {
      const newOrder = {
        token,
        items: cartItems,
      };
  
      localStorage.setItem(
        "orders",
        JSON.stringify([newOrder, ...existingOrders])
      );
    }
  
    const timer = setTimeout(() => {
      navigate("/orders");
    }, 3000);
  
    return () => clearTimeout(timer);
  
  }, []);
  return (
    <div className="token-page">

      <div className="token-card">

        <h2>🎉 Order Confirmed</h2>

        <div className="token-box">
          <p>Your Token</p>
          <h1>#{token}</h1>
        </div>

        <div className="token-details">
          <p><strong>Pickup:</strong> {place}</p>
          <p><strong>Payment:</strong> {payment}</p>
          <p><strong>Total Paid:</strong> ₹ {total}</p>
        </div>

        <div className="status">
          <p>⏳ Preparing your order...</p>
        </div>

        <p className="note">
          Please collect your order when your token is called
        </p>

      </div>

    </div>
  );
}

export default Token;