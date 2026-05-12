import "../css/Sidebar.css";

import { useState } from "react";

import {
  FaThLarge,
  FaHeart,
  FaHamburger,
  FaCommentDots,
  FaMoneyBill,
  FaCog,
  FaSignOutAlt
} from "react-icons/fa";

function Sidebar() {

  const [activeMenu, setActiveMenu] = useState("Dashboard");



  const menus = [

    {
      name: "Dashboard",
      icon: <FaThLarge />,
    },

    {
      name: "Favorites",
      icon: <FaHeart />,
    },

    {
      name: "Orders",
      icon: <FaHamburger />,
    },

    {
      name: "Messages",
      icon: <FaCommentDots />,
    },

    {
      name: "Bills",
      icon: <FaMoneyBill />,
    },

    {
      name: "Settings",
      icon: <FaCog />,
    },

    {
      name: "Logout",
      icon: <FaSignOutAlt />,
    },

  ];



  return (

    <div className="sidebar">

      {/* LOGO */}
      <h1 className="logo">
        Cafeteria
      </h1>




      {/* MENU */}
      <ul className="menu">

        {

          menus.map((item, index) => (

            <li

              key={index}

              className={
                activeMenu === item.name
                  ? "active"
                  : ""
              }

              onClick={() =>
                setActiveMenu(item.name)
              }

            >

              {item.icon}

              {item.name}

            </li>

          ))

        }

      </ul>

    </div>

  );
}

export default Sidebar;