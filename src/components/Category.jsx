import "../css/Category.css";

import { useState } from "react";

import burger from "../assets/burger.png";
import sandwich from "../assets/sandwich.png";
import drinks from "../assets/drinks.png";
import beverage from "../assets/beverage.png";

function Category() {

  const [active, setActive] = useState("All");



  const categories = [

    {
      name: "All",
      image: burger,
    },

    {
      name: "Snacks",
      image: sandwich,
    },

    {
      name: "Drinks",
      image: drinks,
    },

    {
      name: "Beverages",
      image: beverage,
    },

  ];



  return (

    <div className="category-section">

      <h2 className="category-title">
        Order Menu
      </h2>



      <div className="category-container">

        {

          categories.map((item, index) => (

            <div

              key={index}

              className={`category-card ${
                active === item.name ? "active" : ""
              }`}

              onClick={() => setActive(item.name)}

            >

              <img
                src={item.image}
                alt=""
                className="category-image"
              />

              <p>{item.name}</p>

            </div>

          ))

        }

      </div>

    </div>

  );
}

export default Category;