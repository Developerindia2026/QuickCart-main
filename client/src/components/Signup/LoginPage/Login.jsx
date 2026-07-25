import Grid from "@mui/material/Grid";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBagOutlined";
import SecurityIcon from "@mui/icons-material/SecurityOutlined";
import LocalShippingIcon from "@mui/icons-material/LocalShippingOutlined";
import LottieModule from "lottie-react";
import animation from "../../../assets/singup-animation.json";
import "./Login.css";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import InputAdornment from "@mui/material/InputAdornment";
import { Link } from "react-router-dom";

import EmailIcon from "@mui/icons-material/EmailOutlined";
import LockIcon from "@mui/icons-material/LockOutlined";

const Lottie = LottieModule.default || LottieModule;

function Login() {
  return (
    <div className="login-wrapper">
      <Grid container className="login-grid-container">
        {/* Left Branding Side (Hidden on Mobile) */}
        <Grid size={{ xs: 12, md: 6 }} className="login-branding-section">
          <div className="login-branding-content">
            <span className="login-badge">WELCOME BACK TO QUICKCART</span>

            <h1 className="login-hero-heading">Shop your favorites</h1>

            <p className="login-hero-description">
              Sign in to manage your orders, check your wishlist, and explore 
              exclusive members-only deals.
            </p>

            {/* Feature List */}
            <div className="login-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <ShoppingBagIcon />
                </div>
                <div>
                  <h5>Seamless Shopping</h5>
                  <p>Pick up right where you left off in your cart.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <SecurityIcon />
                </div>
                <div>
                  <h5>Secure Checkout</h5>
                  <p>Your data and transactions are 100% protected.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <LocalShippingIcon />
                </div>
                <div>
                  <h5>Order Tracking</h5>
                  <p>Track your ongoing orders in real-time easily.</p>
                </div>
              </div>
            </div>

            {/* Animation & Trust Indicator */}
            <div className="login-animation-wrapper">
              <Lottie animationData={animation} loop={true} autoPlay={true} />
            </div>

            <div className="login-trust">
              <p>Trusted by <span>10,000+</span> happy shoppers</p>
            </div>
          </div>
        </Grid>

        {/* Right Form Side */}
        <Grid size={{ xs: 12, md: 6 }} className="login-form-section">
          <div className="login-card">
            <div className="login-form-header">
              <h2>Welcome Back</h2>
              <p>Please enter your details to sign in</p>
            </div>

            <form className="login-form" onSubmit={(e) => e.preventDefault()}>
              <TextField
                fullWidth
                id="email"
                label="Email Address"
                type="email"
                variant="outlined"
                name="email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon className="input-icon" />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                name="password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon className="input-icon" />
                    </InputAdornment>
                  ),
                }}
              />

              <div className="login-options">
                <div className="remember-me">
                  <Checkbox size="small" className="remember-checkbox" />
                  <span>Remember me</span>
                </div>
                <a href="#forgot-password" className="forgot-password-link">
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="login-submit-btn">
                Sign In
              </button>
            </form>

            <div className="login-footer">
              <p>
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;