import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./AuthPage.css";

function AuthPage() {
  const [role, setRole] = useState("user");
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
 //  VALIDATION FUNCTION
  const validateForm = () => {
    let errors = {};

    // EMAIL
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errors.email = "Invalid email format";
    }

    // PHONE
    if (!/^\d{10}$/.test(phone)) {
      errors.phone = "Phone must be exactly 10 digits";
    }

    // PASSWORD
    if (password.length !== 8) {
      errors.password = "Password must be exactly 8 characters";
    }

    return errors;
  };
    //  GET NAME FROM INPUT
    const nameInput = e.target.querySelector("input[type='text']");
    const name = nameInput ? nameInput.value : "User";

    //  STORE NAME
    localStorage.setItem("userName", name);

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

    // ✅ STORE GOOGLE USER NAME
    localStorage.setItem("userName", fakeUser.name);

    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">

        {/* TITLE */}
        <h2>{isLogin ? "Sign In" : "Create Account"}</h2>
        <p className="subtitle">
          {isLogin ? "Welcome back" : "Join your cafeteria dashboard"}
        </p>

        {/* ROLE SWITCH */}
        {!isLogin && (
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
        )}

        {/* FORM */}
        <form onSubmit={handleSignup}>

          {/* SIGNUP */}
          {!isLogin && (
            <>
              <input type="text" placeholder="Enter Name" required />
              <input type="email" placeholder="Enter Email" required />
              <input type="password" placeholder="Enter Password" required />
              <input type="tel" placeholder="Enter Phone Number" required />

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

              <button
                type="button"
                className="google-btn"
                onClick={handleGoogleLogin}
              >
                <FcGoogle size={20} />
                Continue with Google
              </button>
            </>
          )}

          {/* LOGIN */}
          {isLogin && (
            <>
              <button
                type="button"
                className="google-btn"
                onClick={handleGoogleLogin}
              >
                <FcGoogle size={20} />
                Continue with Google
              </button>

              <div className="divider">OR</div>

              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />

              {role === "admin" && (
                <input
                  type="password"
                  placeholder="Enter Secret Key"
                  required
                />
              )}

              <button type="submit" className="signup-btn">
                Sign In
              </button>
            </>
          )}

          {/* SWITCH */}
          <p className="login-text">
            {isLogin ? (
              <>
                New user?{" "}
                <span onClick={() => setIsLogin(false)}>Sign Up</span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span onClick={() => setIsLogin(true)}>Sign In</span>
              </>
            )}
          </p>

        </form>

      </div>
    </div>
  );
}

export default AuthPage;
