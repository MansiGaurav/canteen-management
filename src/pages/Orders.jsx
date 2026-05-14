import { useEffect, useState } from "react";
import "../css/Orders.css";

function Orders() {

  const [currentOrders, setCurrentOrders] = useState([]);
  const [historyOrders, setHistoryOrders] = useState([]);

  useEffect(() => {
    const savedOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    // 🔥 Latest order → current
    if (savedOrders.length > 0) {
      setCurrentOrders([savedOrders[0]]);

      // 🔥 Rest → history
      setHistoryOrders(savedOrders.slice(1));
    }
  }, []);

  return (
    <div className="orders-page">

      <h1 className="orders-title">My Orders</h1>

      {/* 🔥 CURRENT ORDERS */}
      <div className="orders-section">
        <h2>Current Orders</h2>

        <table className="orders-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Token No</th>
              <th>Item</th>
              <th>Qty</th>
            </tr>
          </thead>

          <tbody>
            {currentOrders.length === 0 ? (
              <tr>
                <td colSpan="4">No current orders</td>
              </tr>
            ) : (
              currentOrders[0].items.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td> {/* ✅ FIXED SERIAL */}
                  <td>#{currentOrders[0].token}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* 🔥 ORDER HISTORY */}
      <div className="orders-section">
        <h2>Order History</h2>

        <table className="orders-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Token No</th>
              <th>Item</th>
              <th>Qty</th>
            </tr>
          </thead>

          <tbody>
            {historyOrders.length === 0 ? (
              <tr>
                <td colSpan="4">No order history</td>
              </tr>
            ) : (
              historyOrders.map((order, orderIndex) =>
                order.items.map((item, itemIndex) => (
                  <tr key={orderIndex + "-" + itemIndex}>
                    <td>{itemIndex + 1}</td> {/* ✅ RESET SERIAL PER ORDER */}
                    <td>#{order.token}</td>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                  </tr>
                ))
              )
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Orders;