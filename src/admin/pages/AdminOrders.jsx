import "../css/AdminOrders.css";
import { useState } from "react";
import bgImage from "../../assets/chilli-bg.png";

function AdminOrders() {

  const [orders] = useState([
    {
      id: "ORD001",
      name: "Aman",
      payment: "Cash",
      status: "Pending",
      items: [
        { name: "Neapolitan Pizza", qty: 2, price: 399 },
        { name: "Rockin Burger", qty: 2, price: 199 },
        { name: "Juice", qty: 2, price: 80 },
        { name: "French Fries", qty: 1, price: 120 },
        { name: "Cold Coffee", qty: 1, price: 90 },
      ]
    },
    {
      id: "ORD002",
      name: "Riya",
      payment: "Online",
      status: "On the way",
      items: [
        { name: "Pizza", qty: 1, price: 399 },
        { name: "Burger", qty: 1, price: 199 },
        { name: "Coffee", qty: 2, price: 150 },
        { name: "Sandwich", qty: 1, price: 120 },
        { name: "Juice", qty: 1, price: 80 },
      ]
    },
    {
      id: "ORD003",
      name: "Rahul",
      payment: "Cash",
      status: "Delivered",
      items: [
        { name: "Momos", qty: 2, price: 160 },
        { name: "Noodles", qty: 1, price: 110 },
        { name: "Burger", qty: 1, price: 199 },
        { name: "Fries", qty: 1, price: 120 },
        { name: "Cold Coffee", qty: 1, price: 90 },
      ]
    },
    {
      id: "ORD004",
      name: "Neha",
      payment: "Online",
      status: "Pending",
      items: [
        { name: "Pizza", qty: 2, price: 399 },
        { name: "Juice", qty: 2, price: 80 },
        { name: "Burger", qty: 1, price: 199 },
        { name: "Sandwich", qty: 1, price: 120 },
        { name: "Coffee", qty: 1, price: 150 },
      ]
    },
    {
      id: "ORD005",
      name: "Arjun",
      payment: "Cash",
      status: "On the way",
      items: [
        { name: "Burger", qty: 3, price: 300 },
        { name: "Fries", qty: 1, price: 120 },
        { name: "Coffee", qty: 1, price: 150 },
        { name: "Juice", qty: 1, price: 80 },
        { name: "Pizza", qty: 1, price: 399 },
      ]
    },
    {
      id: "ORD006",
      name: "Priya",
      payment: "Online",
      status: "Delivered",
      items: [
        { name: "Sandwich", qty: 2, price: 240 },
        { name: "Coffee", qty: 1, price: 150 },
        { name: "Juice", qty: 1, price: 80 },
        { name: "Burger", qty: 1, price: 199 },
        { name: "Fries", qty: 1, price: 120 },
      ]
    },
    {
      id: "ORD007",
      name: "Karan",
      payment: "Cash",
      status: "Pending",
      items: [
        { name: "Pizza", qty: 1, price: 399 },
        { name: "Burger", qty: 2, price: 199 },
        { name: "Fries", qty: 1, price: 120 },
        { name: "Juice", qty: 2, price: 80 },
        { name: "Coffee", qty: 1, price: 150 },
      ]
    },
    {
      id: "ORD008",
      name: "Simran",
      payment: "Online",
      status: "On the way",
      items: [
        { name: "Momos", qty: 2, price: 160 },
        { name: "Noodles", qty: 1, price: 110 },
        { name: "Juice", qty: 1, price: 80 },
        { name: "Burger", qty: 1, price: 199 },
        { name: "Pizza", qty: 1, price: 399 },
      ]
    },
    {
      id: "ORD009",
      name: "Vikas",
      payment: "Cash",
      status: "Delivered",
      items: [
        { name: "Coffee", qty: 2, price: 150 },
        { name: "Sandwich", qty: 1, price: 120 },
        { name: "Juice", qty: 2, price: 80 },
        { name: "Burger", qty: 1, price: 199 },
        { name: "Fries", qty: 1, price: 120 },
      ]
    },
    {
      id: "ORD010",
      name: "Anjali",
      payment: "Online",
      status: "Pending",
      items: [
        { name: "Pizza", qty: 1, price: 399 },
        { name: "Coffee", qty: 1, price: 150 },
        { name: "Juice", qty: 2, price: 80 },
        { name: "Burger", qty: 1, price: 199 },
        { name: "Sandwich", qty: 1, price: 120 },
      ]
    }
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);

  return (
    <div
      className="admin-orders-page"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >

      {/* TOP CARDS */}
      <div className="orders-stats">
        <div className="stat-card">
          <div className="stat-icon purple">🛒</div>
          <div>
            <p>Food Delivered</p>
            <h2>12,000</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon gold">⭐</div>
          <div>
            <p>Customer Rate</p>
            <h2>4 / 5</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon pink">💲</div>
          <div>
            <p>Balance</p>
            <h2>76,800</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon red">🧾</div>
          <div>
            <p>Total Orders</p>
            <h2>12,800</h2>
          </div>
        </div>
      </div>

      <div className="orders-container">

        {/* LEFT TABLE */}
        <div className="orders-left">

          <h2 className="orders-heading">Food Orders</h2>

          <div className="orders-header">
            <span>#</span>
            <span>Name</span>
            <span>Order ID</span>
            <span>Payment</span>
            <span>Status</span>
          </div>

          {orders.map((order, index) => (
            <div
              className="order-row"
              key={order.id}
              onClick={() => setSelectedOrder(order)}
            >
              <span>{index + 1}</span>
              <span>{order.name}</span>
              <span>{order.id}</span>
              <span>{order.payment}</span>

              <span className={`status ${order.status.replace(" ", "")}`}>
                {order.status}
              </span>
            </div>
          ))}

        </div>

        {/* RIGHT PANEL */}
        <div className="orders-right">

          {selectedOrder ? (
            <>
              <h3 className="order-title">Food Order Team Detail</h3>

              <div className="order-id-box">
                Order No: {selectedOrder.id}
              </div>

              {selectedOrder.items.map((item, i) => (
                <div className="item-card" key={i}>
                  <div className="item-icon">🍔</div>

                  <div className="item-info">
                    <p>{item.qty}x {item.name}</p>
                    <span>₹ {item.price}</span>
                  </div>
                </div>
              ))}

              <div className="order-total">
                <p>Total</p>
                <h3>
                  ₹ {selectedOrder.items.reduce((a, b) => a + b.price, 0)}
                </h3>
              </div>

              {/* STATUS SECTION */}
              <div className="order-status">

  <div className="status-row">
    <div className="status-icon red">●</div>
    <div className="status-text">
      <p>Order Placed</p>
      <span>Done</span>
    </div>
  </div>

  <div className="status-row">
    <div className="status-icon orange">●</div>
    <div className="status-text">
      <p>Preparing</p>
      <span>In Progress</span>
    </div>
  </div>

  <div className="status-row">
    <div className="status-icon purple">✔</div>
    <div className="status-text">
      <p>Delivered</p>
      <span>Completed</span>
    </div>
  </div>

</div>

            </>
          ) : (
            <p>Select an order</p>
          )}

        </div>

      </div>

    </div>
  );
}

export default AdminOrders;