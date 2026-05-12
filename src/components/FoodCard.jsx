import "../css/FoodCard.css";

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
function FoodCard({ addToCart }) {

  const foods = [

    {
      id: 1,
      image: samosa,
      name: "Samosa",
      price: 20,
    },

    {
      id: 2,
      image: sandwich,
      name: "Sandwich",
      price: 60,
    },

    {
      id: 3,
      image: noodles,
      name: "Noodles",
      price: 90,
    },

    {
      id: 4,
      image: paneerwrap,
      name: "Paneer Wrap",
      price: 120,
    },

    {
      id: 5,
      image: momos,
      name: "Momos",
      price: 80,
    },

    {
      id: 6,
      image: burger,
      name: "Veg Burger",
      price: 70,
    },

    {
      id: 7,
      image: kachori,
      name: "Kachori",
      price: 25,
    },

    {
      id: 8,
      image: coldcoffee,
      name: "Cold Coffee",
      price: 50,
    },
     
    {
      id: 9,
      image: vegroll,
      name: "Veg Roll",
      price: 65,
    },
    
    {
      id: 10,
      image: vegthali,
      name: "Veg Thali",
      price: 120,
    },
    
    {
      id: 11,
      image: chai,
      name: "Chai",
      price: 15,
    },
    
    {
      id: 12,
      image: manchurian,
      name: "Manchurian",
      price: 90,
    },
  ];



  return (

    <div className="food-section">

      <div className="food-grid">

        {

          foods.map((item) => (

            <div className="food-card" key={item.id}>

              <img
                src={item.image}
                alt=""
                className="food-image"
              />



              <div className="food-content">

                <h3>{item.name}</h3>

                <p>₹ {item.price}</p>



                <button
                  onClick={() => addToCart(item)}
                >
                  Add Item
                </button>

              </div>

            </div>

          ))

        }

      </div>

    </div>

  );
}

export default FoodCard;