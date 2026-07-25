import Grid from "@mui/material/Grid";
import DiscountIcon from "@mui/icons-material/DiscountOutlined";
import ShieldIcon from "@mui/icons-material/ShieldOutlined";
import LocalShippingIcon from "@mui/icons-material/LocalShippingOutlined";
import LottieModule from "lottie-react";
import animation from "../../../assets/singup-animation.json";
import "./Signup.css";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import InputAdornment from "@mui/material/InputAdornment";
import { Link } from "react-router-dom";

import Person2Icon from "@mui/icons-material/Person2Outlined";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import LockIcon from "@mui/icons-material/LockOutlined";

const Lottie = LottieModule.default || LottieModule;

function Signup() {
  return (
    <div className="signup-wrapper">
      <Grid container className="signup-grid-container">
        {/* Left Branding Side */}
        <Grid size={{xs: 12, md: 6}} className="signup-branding-section">
          <div className="signup-branding-content">
            <span className="signup-badge">WELCOME TO QUICKCART</span>

            <h1 className="signup-hero-heading">Create your account</h1>

            <p className="signup-hero-description">
              Join QuickCart and enjoy the best shopping experience with exclusive
              deals, secure payments, and fast delivery.
            </p>

            {/* Feature List */}
            <div className="signup-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <DiscountIcon />
                </div>
                <div>
                  <h5>Exclusive Offers</h5>
                  <p>Access special discounts and members-only deals.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <ShieldIcon />
                </div>
                <div>
                  <h5>Fast & Secure</h5>
                  <p>Secure payments with quick and reliable delivery.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <LocalShippingIcon />
                </div>
                <div>
                  <h5>Easy Returns</h5>
                  <p>Hassle-free returns and quick refunds for eligible orders.</p>
                </div>
              </div>
            </div>

            {/* Animation & Trust Indicator */}
            <div className="signup-animation-wrapper">
              <Lottie animationData={animation} loop={true} autoPlay={true} />
            </div>

            <div className="signup-trust">
              <p>Trusted by <span>10,000+</span> happy customers</p>
            </div>
          </div>
        </Grid>

        {/* Right Form Side */}
        <Grid size={{xs: 12, md: 6}} className="signup-form-section">
          <div className="signup-card">
            <div className="signup-form-header">
              <h2>Sign Up</h2>
              <p>Create a New Account</p>
            </div>

            <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
              <TextField
                fullWidth
                id="fullname"
                label="Full Name"
                variant="outlined"
                name="fullname"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person2Icon className="input-icon" />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                id="mail"
                label="Email Address"
                type="email"
                variant="outlined"
                name="mail"
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

              <TextField
                fullWidth
                id="confirmpassword"
                label="Confirm Password"
                type="password"
                variant="outlined"
                name="confirmPassword"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon className="input-icon" />
                    </InputAdornment>
                  ),
                }}
              />

              <div className="signup-terms">
                <Checkbox size="small" className="terms-checkbox" />
                <span>
                  I agree to the <a href="#terms">Terms of Service</a> and{" "}
                  <a href="#privacy">Privacy Policy</a>.
                </span>
              </div>

              <button type="submit" className="signup-submit-btn">
                Create Account
              </button>
            </form>

            <div className="signup-footer">
              <p>
                Already have an account? <Link to="/login">Sign In</Link>
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Signup;