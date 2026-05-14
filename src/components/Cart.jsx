import "../css/Cart.css";
import { useNavigate } from "react-router-dom";

function Cart({ cart, increaseQty, decreaseQty }) {

  const navigate = useNavigate(); // ✅ added

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const total = subtotal;

  return (
    <div className="cart-wrapper">

      <div className="cart-section">
        <h2>My Cart</h2>

        {cart.length === 0 ? (
          <p className="empty-cart">No items selected</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">

              <div>
                <h4>{item.name}</h4>
                <p>₹ {item.price}</p>
              </div>

              <div className="quantity-box">
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>

            </div>
          ))
        )}
      </div>

      <div className="summary-section">
        <h2>My Order</h2>

        <div className="summary-row">
          <p>Sub Total</p>
          <p>₹ {subtotal}</p>
        </div>

        <div className="total-row">
          <h3>Grand Total</h3>
          <h3>₹ {total}</h3>
        </div>

        {/* ✅ FIXED BUTTON */}
        <button
          className="checkout-btn"
          onClick={() =>
            navigate("/payment", {
              state: {
                total,
                cart: cart, // 🔥 IMPORTANT ADD THIS
              },
            })
          }
        >
          Check Out
        </button>

      </div>

    </div>
  );
}

export default Cart;