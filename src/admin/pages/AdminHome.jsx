import "../css/AdminHome.css";
import {
  FaShoppingBag,
  FaCheckCircle,
  FaMoneyBillWave,
  FaTimesCircle
} from "react-icons/fa";

function AdminHome() {

  return (

    <div className="admin-home">

      {/* TOP STATS */}
      <div className="admin-stats-grid">

        <div className="admin-stat-card">
          <div className="admin-card-icon">
            <FaShoppingBag />
          </div>
          <h2>Total Orders</h2>
          <h1>1,245</h1>
          <p>+12% this week</p>
        </div>

        <div className="admin-stat-card">
          <div className="admin-card-icon">
            <FaCheckCircle />
          </div>
          <h2>Total Delivered</h2>
          <h1>1,102</h1>
          <p>+9% this week</p>
        </div>

        <div className="admin-stat-card">
          <div className="admin-card-icon">
            <FaMoneyBillWave />
          </div>
          <h2>Total Revenue</h2>
          <h1>₹ 48K</h1>
          <p>+18% this month</p>
        </div>

        <div className="admin-stat-card">
          <div className="admin-card-icon">
            <FaTimesCircle />
          </div>
          <h2>Cancelled Orders</h2>
          <h1>24</h1>
          <p>2 pending refunds</p>
        </div>

      </div>

      {/* ANALYTICS */}
      <div className="admin-analytics-grid">

        <div className="admin-chart-box">
          <div className="box-header">
            <h2>Sales Analytics</h2>
            <button>Weekly</button>
          </div>

          <div className="circle-wrapper">

            <div className="circle-card">
              <div className="circle-progress">81%</div>
              <p>Total Orders</p>
            </div>

            <div className="circle-card">
              <div className="circle-progress">62%</div>
              <p>Revenue Growth</p>
            </div>

            <div className="circle-card">
              <div className="circle-progress">74%</div>
              <p>Customer Growth</p>
            </div>

          </div>
        </div>

        <div className="admin-chart-box">
          <div className="box-header">
            <h2>Order Analytics</h2>
            <button>Live</button>
          </div>

          <div className="real-line-graph">
            <svg viewBox="0 0 500 220">
              <path
                d="
                M 0 170
                C 50 120, 80 190, 120 140
                S 200 90, 240 130
                S 320 200, 360 100
                S 430 60, 500 120
                "
                fill="none"
                stroke="#ffd000"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

      </div>

      {/* LOWER */}
      <div className="admin-lower-grid">

        <div className="admin-chart-box">
          <div className="box-header">
            <h2>Total Revenue</h2>
            <button>2026</button>
          </div>

          <div className="real-line-graph revenue-line">
            <svg viewBox="0 0 500 220">
              <path
                d="
                M 0 180
                C 60 140, 90 190, 140 120
                S 240 70, 290 130
                S 360 180, 410 80
                S 460 60, 500 100
                "
                fill="none"
                stroke="#ffd000"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        <div className="admin-chart-box">
          <div className="box-header">
            <h2>Stock Analytics</h2>
            <button>Today</button>
          </div>

          <div className="stock-list">

            <div className="stock-item">
              <span>Burger Buns</span>
              <span className="available">Available</span>
            </div>

            <div className="stock-item">
              <span>Cold Coffee</span>
              <span className="low">Low</span>
            </div>

            <div className="stock-item">
              <span>Momos</span>
              <span className="out">Out</span>
            </div>

            <div className="stock-item">
              <span>Paneer Wrap</span>
              <span className="available">Available</span>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}

export default AdminHome;