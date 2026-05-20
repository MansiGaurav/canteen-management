import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Category from "../components/Category";
import FoodCard from "../components/FoodCard";
import Cart from "../components/Cart";

import "../css/Dashboard.css";

function UserDashboard() {

  const navigate = useNavigate();
  const location = useLocation();

  const [category, setCategory] = useState("all");
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const [adminData, setAdminData] = useState([]);
  useEffect(() => {
    const savedMenu = JSON.parse(localStorage.getItem("adminMenu"));
    if (savedMenu) {
      setAdminData(savedMenu);
    }
  }, []);
  useEffect(() => {
    const status = localStorage.getItem("canteenStatus");
 
    if (status === "closed") {
      alert("🚫 Canteen is closed now");
    }
  }, []);
  /* ADD TO CART */
  const addToCart = (food) => {
    const existingItem = cart.find(
      (item) => item.id === food.id
    );

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        { ...food, quantity: 1 },
      ]);
    }
  };

  /* INCREASE */
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  /* DECREASE */
  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };
  const handleLogout = () => {
    localStorage.clear(); // clears user data
    navigate("/"); // go to Auth page
  };
  //  ADDED QUANTITY (IMPORTANT)
  const menuItems = [
    { id: 1, name: "Tawa Roti", price: 7, status: "Available" },
    { id: 2, name: "Plain Paratha", price: 10, status: "Available" },
    { id: 3, name: "Laccha Paratha", price: 20, status: "Available" },
    { id: 4, name: "Mix Veg", price: 80, status: "Available" },
    { id: 5, name: "Matar Paneer", price: 100, status: "Available" },
    { id: 6, name: "Paneer Butter Masala", price: 120, status: "Available" },
    { id: 7, name: "Veg Noodles", price: 60, status: "Available" },
    { id: 8, name: "Paneer Noodles", price: 90, status: "Available" },
    { id: 9, name: "Chicken Noodles", price: 110, status: "Available" },
    { id: 10, name: "Veg Manchurian", price: 80, status: "Available" },
    { id: 11, name: "Paneer Chilli", price: 120, status: "Available" },
    { id: 12, name: "Egg Roll", price: 50, status: "Available" },
    { id: 13, name: "Chicken Roll", price: 80, status: "Available" },
    { id: 14, name: "Veg Thali", price: 70, status: "Available" },
    { id: 15, name: "Special Thali", price: 120, status: "Available" },
    { id: 16, name: "Veg Biryani", price: 120, status: "Available" }
  ];

  return (
    <div className="dashboard">

<Sidebar onLogout={handleLogout} />

      <div className="dashboard-main">

        <Navbar />
        <Banner />

        <Category setCategory={setCategory} />

        <div className="dashboard-content">

          {/* LEFT SIDE */}
          {category === "allmenu" ? (

            <div className="menu-table">
              <h2 className="menu-heading">Canteen Menu</h2>

              <input
                type="text"
                placeholder="Search menu..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="menu-search"
              />

              <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                {menuItems.map((item) => {

const adminItem = adminData.find(
  (a) => a.id === item.id
);

const status = adminItem ? adminItem.status : item.status;

const cartItem = cart.find((c) => c.id === item.id);

                      return (
                        <tr key={item.id}>
                          <td>{item.name}</td>

                          <td>₹{item.price}</td>

                          {/*  STATUS COLUMN */}
                          <td>
                            <span className={`status-badge ${status.toLowerCase().replace(" ", "-")}`}>
                              {status}
                            </span>
                          </td>

                          <td>
                            {cartItem ? (
                              <div className="qty-box">
                                <button onClick={() => decreaseQty(item.id)}>-</button>
                                <span>{cartItem.quantity}</span>
                                <button onClick={() => increaseQty(item.id)}>+</button>
                              </div>
                            ) : (
                              <button
                                onClick={() => addToCart(item)}
                                disabled={status === "Out of Stock"}
                              >
                                Add
                              </button>
                            )}
                          </td>

                        </tr>
                      );
                    })}
                </tbody>

              </table>
            </div>

          ) : (

            <FoodCard
              selectedCategory={category}
              addToCart={addToCart}
            />

          )}

          {/* RIGHT SIDE */}
          <Cart
            cart={cart}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
          />

        </div>

      </div>
    </div>
  );
}

export default UserDashboard;
