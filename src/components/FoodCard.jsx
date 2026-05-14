import "../css/FoodCard.css";

// ALL ITEMS IMAGES
import samosa from "../assets/samosa.png";
import sandwich from "../assets/sandwich.png";
import noodles from "../assets/noodles.png";
import paneerwrap from "../assets/paneerwrap.png";
import momos from "../assets/momo.png";
import burger from "../assets/burger.png";
import kachori from "../assets/kachori.png";
import coldcoffee from "../assets/coldcoffee.png";
import vegroll from "../assets/vegroll.png";
import vegthali from "../assets/vegthali.png";
import chai from "../assets/chai.png";
import manchurian from "../assets/manchurian.png";

// SNACKS IMAGES
import kurkure from "../assets/kurkure.png";
import chips from "../assets/chips.png";
import fruitcake from "../assets/fruitcake.png";
import bhujiya from "../assets/bhujiya.png";
import punjabitadka from "../assets/punjabitadka.png";
import oreo from "../assets/oreo.png";
import croissant from "../assets/croissant.png";
import biscuit from "../assets/biscuit.png";

import cocacola from "../assets/cocacola.png";
import fanta from "../assets/fanta.png";
import limca from "../assets/limca.png";
import maaza from "../assets/maaza.png";
import pepsi from "../assets/pepsi.png";
import slice from "../assets/slice.png";
import sprite from "../assets/sprite.png";
import thumsup from "../assets/thumsup.png";
import chai2 from "../assets/chai2.png";
import coffee2 from "../assets/coffee2.png";
import coldcoffee2 from "../assets/coldcoffee2.png";
import greentea from "../assets/greentea.png";
import hotchocolate from "../assets/hotchocolate.png";
import latte from "../assets/latte.png";
import cappuccino from "../assets/cappuccino.png";
import latteespresso from "../assets/latteespresso.png";
function FoodCard({ selectedCategory, addToCart }) {

  // ✅ ALL ITEMS
  const foods = [
    { id: 1, image: samosa, name: "Samosa", price: 20 },
    { id: 2, image: sandwich, name: "Sandwich", price: 60 },
    { id: 3, image: noodles, name: "Noodles", price: 90 },
    { id: 4, image: paneerwrap, name: "Paneer Wrap", price: 120 },
    { id: 5, image: momos, name: "Momos", price: 80 },
    { id: 6, image: burger, name: "Veg Burger", price: 70 },
    { id: 7, image: kachori, name: "Kachori", price: 25 },
    { id: 8, image: coldcoffee, name: "Cold Coffee", price: 50 },
    { id: 9, image: vegroll, name: "Veg Roll", price: 65 },
    { id: 10, image: vegthali, name: "Veg Thali", price: 120 },
    { id: 11, image: chai, name: "Chai", price: 15 },
    { id: 12, image: manchurian, name: "Manchurian", price: 90 },
  ];

  // ✅ SNACKS ITEMS (your 8 items)
  const snacks = [
    { id: 101, image: kurkure, name: "Kurkure", price: 20 },
    { id: 102, image: chips, name: "Chips", price: 20 },
    { id: 103, image: fruitcake, name: "Fruit Cake", price: 35 },
    { id: 104, image: bhujiya, name: "Bhujiya", price: 25 },
    { id: 105, image: punjabitadka, name: "Punjabi Tadka", price: 20 },
    { id: 106, image: oreo, name: "Oreo", price: 30 },
    { id: 107, image: croissant, name: "Croissant", price: 40 },
    { id: 108, image: biscuit, name: "Biscuit", price: 25 },
  ];
  const drinks = [
    { id: 201, image: cocacola, name: "Coca Cola", price: 40 },
    { id: 202, image: fanta, name: "Fanta", price: 40 },
    { id: 203, image: limca, name: "Limca", price: 40 },
    { id: 204, image: maaza, name: "Maaza", price: 50 },
    { id: 205, image: pepsi, name: "Pepsi", price: 40 },
    { id: 206, image: slice, name: "Slice", price: 50 },
    { id: 207, image: sprite, name: "Sprite", price: 40 },
    { id: 208, image: thumsup, name: "Thums Up", price: 40 },
  ];

  const beverages = [
    { id: 301, image: chai2, name: "Chai", price: 20 },
    { id: 302, image: coffee2, name: "Coffee", price: 30 },
    { id: 303, image: coldcoffee2, name: "Cold Coffee", price: 50 },
    { id: 304, image: greentea, name: "Green Tea", price: 25 },
    { id: 305, image: hotchocolate, name: "Hot Chocolate", price: 60 },
    { id: 306, image: latte, name: "Latte", price: 70 },
    { id: 307, image: cappuccino, name: "Cappuccino", price: 80 },
    { id: 308, image: latteespresso, name: "Latte Espresso", price: 90 },
  ];

  // ✅ Decide what to show
  let displayItems = [];

  if (selectedCategory === "snacks") {
    displayItems = snacks;
  }
  else if (selectedCategory === "drinks") {
    displayItems = drinks;
  }
  else if (selectedCategory === "beverages") {
    displayItems = beverages;
  }
  else {
    displayItems = foods; // All
  }
  return (
    <div className="food-section">
      <div className="food-grid">
        {displayItems.map((item) => (
          <div className="food-card" key={item.id}>
            <img src={item.image} alt="" className="food-image" />

            <div className="food-content">
              <h3>{item.name}</h3>
              <p>₹ {item.price}</p>

              <button onClick={() => addToCart(item)}>
                Add Item
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodCard;