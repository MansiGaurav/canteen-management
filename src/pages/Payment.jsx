import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaMoneyBillWave, FaQrcode } from "react-icons/fa";
import "../css/Payment.css";

import upiQR from "../assets/upi-qr.png";

function Payment() {

  const location = useLocation();
  const total = location.state?.total || 0;
  const cart = location.state?.cart || [];

  if (!cart || cart.length === 0) {
    return (
      <div className="payment-page">
        <h2 style={{ color: "white", textAlign: "center" }}>
          No items in cart
        </h2>
      </div>
    );
  }

  const [selectedPlace, setSelectedPlace] = useState("Cafeteria");
  const [selectedPayment, setSelectedPayment] = useState("Cash");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  //  FINAL FIXED FUNCTION
  const handleOrder = () => {

    const status = localStorage.getItem("canteenStatus");
    console.log("STATUS INSIDE FUNCTION:", status); // 👈 ADD THIS
  
    if (status === "closed") {
      alert("🚫 Canteen is currently closed");
      return;
    }

    const token = Math.floor(1000 + Math.random() * 9000);

    const existingOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      id: Date.now(),
      items: cart,
      total,
      place: selectedPlace,
      payment: selectedPayment,
      token,
      time: new Date().toLocaleString(),
      isRead: false,
    };

    const updatedOrders = [...existingOrders, newOrder];

    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    navigate("/token", {
      state: {
        token,
        total,
        place: selectedPlace,
        payment: selectedPayment,
        cartItems: cart,
      },
    });
  };

  return (
    <div className="payment-page">

      <button onClick={handleBack} className="back-btn">
        <FaArrowLeft />
      </button>

      <div className="payment-card">

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

              <div
                className={`payment-option ${
                  selectedPayment === "Cash" ? "active" : ""
                }`}
                onClick={() => setSelectedPayment("Cash")}
              >
                <FaMoneyBillWave className="payment-icon" />
                <span>Cash</span>
              </div>

              <div
                className={`payment-option ${
                  selectedPayment === "UPI" ? "active" : ""
                }`}
                onClick={() => setSelectedPayment("UPI")}
              >
                <FaQrcode className="payment-icon" />
                <span>UPI</span>
              </div>
            </div>

            {/* QR */}
            {selectedPayment === "UPI" && (
              <div className="upi-qr-section">
                <p className="section-title">Scan & Pay</p>

                <img
                  src={upiQR}
                  alt="UPI QR"
                  className="upi-qr-image"
                />

                <p className="upi-note">
                  Scan this QR using any UPI app
                </p>
              </div>
            )}

            {/* TOTAL */}
            <div className="total-section">
              <p>Total Amount</p>
              <h2>₹ {total}</h2>
            </div>

            {/* BUTTON */}
            <button
              className="place-order-btn"
              onClick={handleOrder}
            >
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
