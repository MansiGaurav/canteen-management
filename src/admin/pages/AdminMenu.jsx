import "../css/AdminMenu.css";
import { useState } from "react";
import bgImage from "../../assets/menu-bg.png";
/* ALL ITEMS */
import burger from "../../assets/burger.png";
import sandwich from "../../assets/sandwich.png";
import noodles from "../../assets/noodles.png";
import coldcoffee from "../../assets/coldcoffee.png";
import samosa from "../../assets/samosa.png";
import momos from "../../assets/momo.png";
import kachori from "../../assets/kachori.png";
import wrap from "../../assets/paneerwrap.png";

/* SNACKS */
import kurkure from "../../assets/kurkure.png";
import chips from "../../assets/chips.png";
import fruitcake from "../../assets/fruitcake.png";
import bhujiya from "../../assets/bhujiya.png";
import tadka from "../../assets/punjabitadka.png";
import oreo from "../../assets/oreo.png";
import croissant from "../../assets/croissant.png";
import biscuit from "../../assets/biscuit.png";

/* DRINKS */
import coca from "../../assets/cocacola.png";
import pepsi from "../../assets/pepsi.png";
import sprite from "../../assets/sprite.png";
import fanta from "../../assets/fanta.png";
import thumsup from "../../assets/thumsup.png";
import maaza from "../../assets/maaza.png";
import slice from "../../assets/slice.png";
import limca from "../../assets/limca.png";
/* BEVERAGES */
import chai2 from "../../assets/chai2.png";
import coffee2 from "../../assets/coffee2.png";
import cappuccino from "../../assets/cappuccino.png";
import coldcoffee2 from "../../assets/coldcoffee2.png";
import greentea from "../../assets/greentea.png";
import hotchocolate from "../../assets/hotchocolate.png";
import latte from "../../assets/latte.png";
import latteespresso from "../../assets/latteespresso.png";
function AdminMenu() {

  const [activeCategory, setActiveCategory] = useState("All");




  const [searchTerm, setSearchTerm] = useState("");
  const [menuItems, setMenuItems] = useState([

    /* ALL */
    {
      id: 1,
      name: "Veg Burger",
      category: "All",
      price: 70,
      image: burger,
      status: "Available"
    },

    {
      id: 2,
      name: "Sandwich",
      category: "All",
      price: 60,
      image: sandwich,
      status: "Available"
    },

    {
      id: 3,
      name: "Noodles",
      category: "All",
      price: 90,
      image: noodles,
      status: "Out of Stock"
    },

    {
      id: 4,
      name: "Cold Coffee",
      category: "All",
      price: 50,
      image: coldcoffee,
      status: "Available"
    },

    {
      id: 5,
      name: "Samosa",
      category: "All",
      price: 20,
      image: samosa,
      status: "Available"
    },

    {
      id: 6,
      name: "Momos",
      category: "All",
      price: 80,
      image: momos,
      status: "Out of Stock"
    },

    {
      id: 7,
      name: "Kachori",
      category: "All",
      price: 25,
      image: kachori,
      status: "Available"
    },

    {
      id: 8,
      name: "Paneer Wrap",
      category: "All",
      price: 120,
      image: wrap,
      status: "Available"
    },





    /* SNACKS */
    {
      id: 9,
      name: "Kurkure",
      category: "Snacks",
      price: 20,
      image: kurkure,
      status: "Available"
    },

    {
      id: 10,
      name: "Lays Chips",
      category: "Snacks",
      price: 20,
      image: chips,
      status: "Available"
    },

    {
      id: 11,
      name: "Britannia Fruit Cake",
      category: "Snacks",
      price: 35,
      image: fruitcake,
      status: "Available"
    },

    {
      id: 12,
      name: "Haldiram Bhujiya",
      category: "Snacks",
      price: 25,
      image: bhujiya,
      status: "Out of Stock"
    },

    {
      id: 13,
      name: "Punjabi Tadka",
      category: "Snacks",
      price: 20,
      image: tadka,
      status: "Available"
    },

    {
      id: 14,
      name: "Oreo Biscuit",
      category: "Snacks",
      price: 15,
      image: oreo,
      status: "Available"
    },

    {
      id: 15,
      name: "Croissant",
      category: "Snacks",
      price: 45,
      image: croissant,
      status: "Not Available"
    },

    {
      id: 16,
      name: "Good Day Biscuit",
      category: "Snacks",
      price: 10,
      image: biscuit,
      status: "Available"
    },





    /* DRINKS */
    {
      id: 17,
      name: "Coca Cola",
      category: "Drinks",
      price: 40,
      image: coca,
      status: "Available"
    },

    {
      id: 18,
      name: "Pepsi",
      category: "Drinks",
      price: 40,
      image: pepsi,
      status: "Available"
    },

    {
      id: 19,
      name: "Sprite",
      category: "Drinks",
      price: 35,
      image: sprite,
      status: "Out of Stock"
    },

    {
      id: 20,
      name: "Fanta",
      category: "Drinks",
      price: 35,
      image: fanta,
      status: "Available"
    },

    {
      id: 21,
      name: "Thums Up",
      category: "Drinks",
      price: 40,
      image: thumsup,
      status: "Available"
    },

    {
      id: 22,
      name: "Maaza",
      category: "Drinks",
      price: 30,
      image: maaza,
      status: "Available"
    },

    {
      id: 23,
      name: "Slice",
      category: "Drinks",
      price: 30,
      image: slice,
      status: "Not Available"
    },

    {
      id: 24,
      name: "Limca",
      category: "Drinks",
      price: 35,
      image: limca,
      status: "Available"
    },
    
    /* BEVERAGES */
    {
  id: 25,
  name: "Tea",
  category: "Beverages",
  price: 20,
  image: chai2,
  status: "Available"
},

{
  id: 26,
  name: "Coffee",
  category: "Beverages",
  price: 30,
  image: coffee2,
  status: "Available"
},

{
  id: 27,
  name: "Cappuccino",
  category: "Beverages",
  price: 90,
  image: cappuccino,
  status: "Available"
},

{
  id: 28,
  name: "Cold Coffee",
  category: "Beverages",
  price: 70,
  image: coldcoffee2,
  status: "Out of Stock"
},

{
  id: 29,
  name: "Green Tea",
  category: "Beverages",
  price: 40,
  image: greentea,
  status: "Available"
},

{
  id: 30,
  name: "Hot Chocolate",
  category: "Beverages",
  price: 80,
  image: hotchocolate,
  status: "Available"
},

{
  id: 31,
  name: "Latte",
  category: "Beverages",
  price: 120,
  image: latte,
  status: "Not Available"
},

{
  id: 32,
  name: "Latte Espresso",
  category: "Beverages",
  price: 110,
  image: latteespresso,
  status: "Available"
},
  ]);





  const updateStatus = (id, newStatus) => {

    const updatedItems = menuItems.map((item) =>

      item.id === id
      ? { ...item, status: newStatus }
      : item

    );

    setMenuItems(updatedItems);
  };





  return (
    <div
      className="admin-menu-page"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >




      {/* TOP */}
      <div className="admin-menu-top">

        <h1 className="admin-menu-heading">
          Menu Management
        </h1>





        <input
  type="text"
  placeholder="Search food..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>




        <button>
          + Add Item
        </button>

      </div>





      {/* TIMELINE */}
      <div className="admin-timeline-section">

        <div className="timeline-box active-timeline">

          <h2>Breakfast</h2>

          <p>8:00 AM - 11:00 AM</p>

        </div>





        <div className="timeline-box">

          <h2>Lunch</h2>

          <p>12:00 PM - 4:00 PM</p>

        </div>

      </div>





      {/* CATEGORY */}
      <div className="admin-category-section">

        <button
          className={
            activeCategory === "All"
            ? "active-category"
            : ""
          }
          onClick={() => setActiveCategory("All")}
        >
          All
        </button>





        <button
          className={
            activeCategory === "Snacks"
            ? "active-category"
            : ""
          }
          onClick={() => setActiveCategory("Snacks")}
        >
          Snacks
        </button>





        <button
          className={
            activeCategory === "Drinks"
            ? "active-category"
            : ""
          }
          onClick={() => setActiveCategory("Drinks")}
        >
          Drinks
        </button>





        <button
          className={
            activeCategory === "Beverages"
            ? "active-category"
            : ""
          }
          onClick={() => setActiveCategory("Beverages")}
        >
          Beverages
        </button>

      </div>





      {/* FOOD GRID */}
      <div className="admin-food-grid">

        {menuItems

.filter((item) => {

  const matchCategory =
    activeCategory === "All"
      ? item.category === "All"
      : item.category === activeCategory;

  const matchSearch =
    item.name.toLowerCase().includes(searchTerm.toLowerCase());

  return matchCategory && matchSearch;

})

          .map((item) => (

            <div
              className="admin-food-card"
              key={item.id}
            >

              <img
                src={item.image}
                alt=""
              />





              <div className="food-content">

                <h2>
                  {item.name}
                </h2>





                <h3>
                  ₹ {item.price}
                </h3>





                <div className="food-status">

                  <span

                    className={

                      item.status === "Available"
                      ? "available-status"

                      : item.status === "Not Available"
                      ? "not-status"

                      : "out-status"

                    }

                  >

                    {item.status}

                  </span>

                </div>





                <select

                  value={item.status}

                  onChange={(e) =>
                    updateStatus(item.id, e.target.value)
                  }

                >

                  <option>
                    Available
                  </option>

                  <option>
                    Not Available
                  </option>

                  <option>
                    Out of Stock
                  </option>

                </select>

              </div>

            </div>

          ))}

      </div>

    </div>

  );
}

export default AdminMenu;