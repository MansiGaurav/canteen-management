import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"; // ✅ NEW
import "../css/Payment.css";

function Payment() {

  // ✅ GET TOTAL FROM CART
  const location = useLocation();
  const total = location.state?.total || 0;

  // ✅ STATES
  const [selectedPlace, setSelectedPlace] = useState("Cafeteria");
  const [selectedPayment, setSelectedPayment] = useState("Cash");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const navigate = useNavigate();

  // ✅ BACK FUNCTION (NEW)
  const handleBack = () => {
    if (location.pathname === "/home") {
      navigate("/register"); // change if your route name is different
    } else {
      navigate(-1);
    }
  };

  // ✅ HANDLE ORDER
  const handleOrder = () => {
    const token = Math.floor(1000 + Math.random() * 9000);

    navigate("/token", {
      state: {
        token,
        total,
        place: selectedPlace,
        payment: selectedPayment,
        cartItems: location.state?.cart || [],
      },
    });
  };

  return (
    <div className="payment-page">

      {/* 🔥 BACK BUTTON (NEW) */}
      <button onClick={handleBack} className="back-btn">
        <FaArrowLeft />
      </button>

      <div className="payment-card">

        {/* 🔥 BEFORE ORDER */}
        {!orderPlaced ? (
          <>
            <h2>Checkout</h2>

            {/* LOCATION */}
            <div className="section">
              <p className="section-title">Deliver To</p>

              {["Cafeteria", "A Block", "B Block", "Admin Block"].map((place) => (
                <div
                  key={place}
                  className={`option-box ${selectedPlace === place ? "active" : ""}`}
                  onClick={() => setSelectedPlace(place)}
                >
                  {place}
                </div>
              ))}
            </div>

            {/* PAYMENT */}
            <div className="section">
              <p className="section-title">Payment Method</p>

              {["Cash", "UPI"].map((method) => (
                <div
                  key={method}
                  className={`option-box ${selectedPayment === method ? "active" : ""}`}
                  onClick={() => setSelectedPayment(method)}
                >
                  {method}
                </div>
              ))}
            </div>

            {/* TOTAL */}
            <div className="total-section">
              <p>Total Amount</p>
              <h2>₹ {total}</h2>
            </div>

            {/* BUTTON */}
            <button className="place-order-btn" onClick={handleOrder}>
              Place Order
            </button>
          </>
        ) : (
          <div className="success-box">
            <h2>🎉 Order Placed Successfully</h2>
            <p><strong>Pickup:</strong> {selectedPlace}</p>
            <p><strong>Payment:</strong> {selectedPayment}</p>
            <h3>₹ {total}</h3>
          </div>
        )}

      </div>

    </div>
  );
}

export default Payment;
