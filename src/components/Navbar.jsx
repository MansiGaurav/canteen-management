import "../css/Navbar.css";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.png";
import {
  FaMoon,
  FaSun,
  FaBell
} from "react-icons/fa";

function Navbar() {

  const [showNotification, setShowNotification] = useState(false);

  const [darkMode, setDarkMode] = useState(true);




  /* THEME TOGGLE */
  const toggleTheme = () => {

    setDarkMode(!darkMode);

  };




  /* APPLY THEME */
  useEffect(() => {

    if(darkMode){

      document.body.classList.remove("light-theme");

    }

    else{

      document.body.classList.add("light-theme");

    }

  }, [darkMode]);





  return (

    <div className="navbar">

      {/* LEFT SIDE */}
      <div className="navbar-left">

        <h1 className="navbar-heading">
          Hello Mansi 👋
        </h1>

        <p className="navbar-text">
          Want to order something?
        </p>

      </div>





      {/* RIGHT SIDE */}
      <div className="navbar-right">

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search food..."
          className="search-bar"
        />





        {/* NOTIFICATION */}
        <div className="notification-wrapper">

          <div
            className="nav-icon"
            onClick={() =>
              setShowNotification(!showNotification)
            }
          >

            <FaBell />

          </div>





          {

            showNotification && (

              <div className="notification-box">

                <p>
                  🍔 Your order is confirmed
                </p>

                <p>
                  ☕ Cold Coffee is ready
                </p>

                <p>
                  🎉 New offers available
                </p>

              </div>

            )

          }

        </div>





        {/* THEME BUTTON */}
        <div
          className="nav-icon theme-icon"
          onClick={toggleTheme}
        >

          {

            darkMode

              ? <FaSun />

              : <FaMoon />

          }

        </div>





        {/* AVATAR */}
        <Link to="/login">

        <img
  src={avatar}
  alt=""
  className="avatar"
/>

</Link>
      </div>

    </div>

  );
}

export default Navbar;