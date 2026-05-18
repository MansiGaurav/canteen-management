import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./AuthPage.css";

function AuthPage() {
  const [role, setRole] = useState("user");
  const [isLogin, setIsLogin] = useState(false);

  //  NEW STATES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

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

  const handleSignup = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    //  GET NAME
    const nameInput = e.target.querySelector("input[type='text']");
    const name = nameInput ? nameInput.value : "User";

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

        <h2>{isLogin ? "Sign In" : "Create Account"}</h2>
        <p className="subtitle">
          {isLogin ? "Welcome back" : "Join your cafeteria dashboard"}
        </p>

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

        <form onSubmit={handleSignup}>

          {/* SIGNUP */}
          {!isLogin && (
            <>
              <input type="text" placeholder="Enter Name" required />

              {/* EMAIL */}
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <p className="error">{errors.email}</p>}

              {/* PASSWORD */}
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errors.password && <p className="error">{errors.password}</p>}

              {/* PHONE */}
              <input
                type="tel"
                placeholder="Enter Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              {errors.phone && <p className="error">{errors.phone}</p>}

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
