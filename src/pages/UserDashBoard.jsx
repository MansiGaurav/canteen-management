import { useState } from "react";
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

  // 🔥 NEW SEARCH STATE
  const [search, setSearch] = useState("");

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

  const menuItems = [
    { id: "tea", name: "Tea", price: 8 },
    { id: "kulhar-tea", name: "Tea in Kulhar", price: 10 },
    { id: "paper-tea", name: "Tea in Paper Cup", price: 7 },
    { id: "milk", name: "Hot Milk", price: 30 },
    { id: "coffee", name: "Coffee", price: 25 },
    { id: "soup", name: "Soup", price: 80 },

    { id: "aalu-paratha", name: "Aalu Paratha", price: 15 },
    { id: "paneer-paratha", name: "Paneer Paratha", price: 25 },
    { id: "satu-paratha", name: "Satu Paratha", price: 20 },
    { id: "puri-sabji", name: "Puri Sabji", price: 30 },
    { id: "masala-dosa", name: "Masala Dosa", price: 100 },

    { id: "boiled-egg", name: "Boiled Egg", price: 15 },
    { id: "omlet", name: "Omlet", price: 35 },
    { id: "bread-omlet", name: "Bread Omlet", price: 40 },

    { id: "samosa", name: "Samosa", price: 10 },
    { id: "kachori", name: "Kachori", price: 10 },
    { id: "sandwich", name: "Sandwich", price: 30 },
    { id: "burger", name: "Burger", price: 50 },

    { id: "veg-noodles", name: "Veg Noodles", price: 60 },
    { id: "paneer-roll", name: "Paneer Roll", price: 50 },

    { id: "veg-thali", name: "Veg Thali", price: 70 },
    { id: "chicken-thali", name: "Chicken Thali", price: 140 },

    { id: "green-salad", name: "Green Salad", price: 50 }
  ];

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-main">

        <Navbar />
        <Banner />

        <Category setCategory={setCategory} />

        <div className="dashboard-content">

          {/* 🔥 LEFT SIDE */}
          {category === "allmenu" ? (

            <div className="menu-table">
              <h2 className="menu-heading">Canteen Menu</h2>

              {/* 🔥 SEARCH INPUT */}
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
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {menuItems
                    .filter((item) =>
                      item.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((item) => {
                      const cartItem = cart.find((c) => c.id === item.id);

                      return (
                        <tr key={item.id}>
                          <td>{item.name}</td>
                          <td>₹{item.price}</td>
                          <td>
                            {cartItem ? (
                              <div className="qty-box">
                                <button onClick={() => decreaseQty(item.id)}>-</button>
                                <span>{cartItem.quantity}</span>
                                <button onClick={() => increaseQty(item.id)}>+</button>
                              </div>
                            ) : (
                              <button onClick={() => addToCart(item)}>
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

          {/* 🔥 RIGHT SIDE */}
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
