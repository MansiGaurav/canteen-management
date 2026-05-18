import { useState } from "react";
import "../css/AdminStocks.css";
import bgImage from "../../assets/chillilogo-bg.png";

function AdminStocks() {

  const [stocks, setStocks] = useState([

    //  HOT DRINK
    { id: 1, name: "Tea", quantity: 20 },
    { id: 2, name: "Tea in Kulhar", quantity: 15 },
    { id: 3, name: "Tea in Paper Cup", quantity: 10 },
    { id: 4, name: "Hot Milk", quantity: 8 },
    { id: 5, name: "Coffee", quantity: 12 },
    { id: 6, name: "Soup", quantity: 5 },
  
    //  SNACKS
    { id: 7, name: "Aalu Paratha", quantity: 10 },
    { id: 8, name: "Paneer Paratha", quantity: 8 },
    { id: 9, name: "Sattu Paratha", quantity: 6 },
    { id: 10, name: "Puri Sabji", quantity: 7 },
    { id: 11, name: "Masala Dosa", quantity: 5 },
    { id: 12, name: "Boiled Egg", quantity: 12 },
    { id: 13, name: "Omlet", quantity: 10 },
    { id: 14, name: "Bread Omlet", quantity: 9 },
    { id: 15, name: "Samosa", quantity: 5 },
    { id: 16, name: "Kachori", quantity: 6 },
    { id: 17, name: "Sandwich", quantity: 10 },
    { id: 18, name: "Burger", quantity: 12 },
    { id: 19, name: "Idli", quantity: 8 },
    { id: 20, name: "Patties", quantity: 7 },
    { id: 21, name: "Cream Roll", quantity: 6 },
  
    //  RICE & DAL
    { id: 22, name: "Plain Rice", quantity: 20 },
    { id: 23, name: "Jeera Rice", quantity: 15 },
    { id: 24, name: "Plain Dal", quantity: 18 },
  
    //  ROTI & PARATHA
    { id: 25, name: "Tawa Roti", quantity: 30 },
    { id: 26, name: "Plain Paratha", quantity: 20 },
    { id: 27, name: "Laccha Paratha", quantity: 10 },
  
    //  MAIN COURSE
    { id: 28, name: "Mix Veg", quantity: 12 },
    { id: 29, name: "Matar Paneer", quantity: 10 },
    { id: 30, name: "Matar Mushroom", quantity: 8 },
    { id: 31, name: "Paneer Kadhai", quantity: 7 },
    { id: 32, name: "Paneer Do Pyaza", quantity: 6 },
    { id: 33, name: "Paneer Butter Masala", quantity: 9 },
    { id: 34, name: "Mushroom Kadhai", quantity: 5 },
    { id: 35, name: "Mushroom Do Pyaza", quantity: 4 },
    { id: 36, name: "Mushroom Butter Masala", quantity: 3 },
    { id: 37, name: "Chicken Kadhai", quantity: 6 },
    { id: 38, name: "Chicken Do Pyaza", quantity: 5 },
    { id: 39, name: "Chicken Butter Masala", quantity: 4 },
    { id: 40, name: "Egg Kadhai", quantity: 8 },
    { id: 41, name: "Egg Do Pyaza", quantity: 7 },
    { id: 42, name: "Egg Butter Masala", quantity: 6 },
  
    //  CHINESE & ROLL
    { id: 43, name: "Veg Noodles", quantity: 10 },
    { id: 44, name: "Paneer Noodles", quantity: 8 },
    { id: 45, name: "Egg Noodles", quantity: 6 },
    { id: 46, name: "Chicken Noodles", quantity: 5 },
    { id: 47, name: "Mix Noodles", quantity: 7 },
    { id: 48, name: "Veg Manchurian", quantity: 9 },
    { id: 49, name: "Paneer Chilli", quantity: 6 },
    { id: 50, name: "Mushroom Chilli", quantity: 4 },
    { id: 51, name: "Chicken Chilli", quantity: 5 },
    { id: 52, name: "Baby Corn", quantity: 6 },
    { id: 53, name: "Paneer Roll", quantity: 10 },
    { id: 54, name: "Egg Roll", quantity: 8 },
    { id: 55, name: "Chicken Egg Roll", quantity: 6 },
  
    //  THALI
    { id: 56, name: "Veg Thali", quantity: 10 },
    { id: 57, name: "Special Thali", quantity: 6 },
    { id: 58, name: "Egg Thali", quantity: 5 },
    { id: 59, name: "Chicken Thali", quantity: 4 },
  
    //  SALAD
    { id: 60, name: "Onion Salad", quantity: 15 },
    { id: 61, name: "Green Salad", quantity: 12 },
  
  ]);

  //  STATUS LOGIC
  const getStatus = (qty) => {
    if (qty === 0) return "Out of Stock";
    if (qty <= 5) return "Low Stock";
    return "In Stock";
  };

  //  INCREASE
  const increaseStock = (id) => {
    setStocks(stocks.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  //  DECREASE
  const decreaseStock = (id) => {
    setStocks(stocks.map(item =>
      item.id === id && item.quantity > 0
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  //  LOW STOCK ALERT
  const lowStockItems = stocks.filter(
    item => item.quantity > 0 && item.quantity <= 5
  );

  return (
    <div
      className="admin-stocks-page"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >

      <h1 className="stock-heading">Stock Management</h1>

      {/*  ALERT */}
      {lowStockItems.length > 0 && (
        <div className="alert-box">
          ⚠ Low Stock: {lowStockItems.map(i => i.name).join(", ")}
        </div>
      )}

      {/*  TABLE */}
      <table className="stock-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {stocks.map((item) => (
            <tr key={item.id}>

              <td>{item.name}</td>

              <td>{item.quantity}</td>

              <td>
                <span
                  className={`stock-status ${getStatus(item.quantity)
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {getStatus(item.quantity)}
                </span>
              </td>

              <td>
                <div className="btn-group">
                  <button onClick={() => decreaseStock(item.id)}>-</button>
                  <button onClick={() => increaseStock(item.id)}>+</button>
                </div>
              </td>

            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default AdminStocks;
