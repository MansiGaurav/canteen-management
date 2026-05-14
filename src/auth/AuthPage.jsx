import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./AuthPage.css";

function AuthPage() {
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/home");
    }
  };

  const handleGoogleLogin = () => {
    const fakeUser = {
      name: "Mansi Gaurav",
      email: "mansi@gmail.com",
      phone: "9876543210",
    };

    console.log("Google User:", fakeUser);

    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">

        <h2>Create Account</h2>
        <p className="subtitle">Join your cafeteria dashboard</p>

        {/* ROLE SWITCH */}
        <div className="role-switch">
          <button
            className={role === "user" ? "active" : ""}
            onClick={() => setRole("user")}
          >
            User
          </button>

          <button
            className={role === "admin" ? "active" : ""}
            onClick={() => setRole("admin")}
          >
            Admin
          </button>
        </div>

        <form onSubmit={handleSignup}>

          <input type="text" placeholder="Enter Name" required />
          <input type="email" placeholder="Enter Email" required />
          <input type="password" placeholder="Enter Password" required />
          <input type="tel" placeholder="Enter Phone Number" required />

          {/* ADMIN ONLY */}
          {role === "admin" && (
            <input
              type="password"
              placeholder="Enter Secret Key"
              required
            />
          )}

          <button type="submit" className="signup-btn">
            Sign Up
          </button>

          <div className="divider">OR</div>

          {/* GOOGLE LOGIN */}
          <button
            type="button"
            className="google-btn"
            onClick={handleGoogleLogin}
          >
            <FcGoogle size={20} />
            Continue with Google
          </button>

          <p className="login-text">
            Already have an account? <span>Sign In</span>
          </p>

        </form>
      </div>
    </div>
  );
}

export default AuthPage;