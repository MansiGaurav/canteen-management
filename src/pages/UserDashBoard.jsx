import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Category from "../components/Category";
import FoodCard from "../components/FoodCard";
import Cart from "../components/Cart";

import "../css/Dashboard.css";

function UserDashboard() {

  const [cart, setCart] = useState([]);




  /* ADD TO CART */
  const addToCart = (food) => {

    const existingItem = cart.find(
      (item) => item.id === food.id
    );



    if(existingItem){

      setCart(

        cart.map((item) =>

          item.id === food.id

            ? {
                ...item,
                quantity: item.quantity + 1,
              }

            : item
        )

      );

    }

    else{

      setCart([

        ...cart,

        {
          ...food,
          quantity: 1,
        },

      ]);

    }
  };




  /* INCREASE QUANTITY */
  const increaseQty = (id) => {

    setCart(

      cart.map((item) =>

        item.id === id

          ? {
              ...item,
              quantity: item.quantity + 1,
            }

          : item
      )

    );
  };




  /* DECREASE QUANTITY */
  const decreaseQty = (id) => {

    setCart(

      cart
        .map((item) =>

          item.id === id

            ? {
                ...item,
                quantity: item.quantity - 1,
              }

            : item
        )

        .filter((item) => item.quantity > 0)

    );
  };




  return (

    <div className="dashboard">

      {/* SIDEBAR */}
      <Sidebar />




      {/* MAIN SECTION */}
      <div className="dashboard-main">

        {/* NAVBAR */}
        <Navbar />




        {/* BANNER */}
        <Banner />




        {/* CATEGORY */}
        <Category />




        {/* FOOD + CART */}
        <div className="dashboard-content">

          {/* FOOD ITEMS */}
          <FoodCard addToCart={addToCart} />




          {/* CART */}
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