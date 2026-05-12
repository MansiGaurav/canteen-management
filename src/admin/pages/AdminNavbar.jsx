import "../css/AdminNavbar.css";

import {
  FaBell,
  FaSearch
} from "react-icons/fa";

import adminAvatar from "../../assets/avatar.png";



function AdminNavbar() {

  return (

    <div className="admin-navbar">




      {/* LEFT */}
      <div className="admin-navbar-left">

        <h1>
          Admin Dashboard
        </h1>

        <p>
          Manage cafeteria operations easily
        </p>

      </div>





      {/* RIGHT */}
      <div className="admin-navbar-right">




        {/* SEARCH */}
        <div className="admin-search-box">

          <FaSearch className="admin-search-icon" />

          <input
            type="text"
            placeholder="Search here..."
          />

        </div>





        {/* NOTIFICATION */}
        <div className="admin-notification">

          <FaBell />

        </div>





        {/* PROFILE */}
        <div className="admin-profile">

          <img
            src={adminAvatar}
            alt=""
          />



          <div>

            <h3>
              Mansi
            </h3>

            <p>
              Admin
            </p>

          </div>

        </div>

      </div>

    </div>

  );
}

export default AdminNavbar;