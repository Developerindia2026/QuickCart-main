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
import { useState } from "react";
import Person2Icon from "@mui/icons-material/Person2Outlined";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import axios from "axios";
import LockIcon from "@mui/icons-material/LockOutlined";
import API from "../../../config/api";
import { useNavigate } from "react-router-dom";

const Lottie = LottieModule.default || LottieModule;

function Signup() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [FormData, setFormData] = useState({
    fullname: "",
    mail: "",
    password: "",
    confirmPassword: "",
  });

  const HandleForm = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const BackendHandle = async (event) => {
    event.preventDefault();

    if (FormData.password !== FormData.confirmPassword) {
      return alert("Make sure your password and confirm password to be same!");
      process.exit();
    }

    try {
      setLoading(true);
      const response = await axios.post(`${API}/signup`, FormData);

        localStorage.setItem("token", response.data.token),
        localStorage.setItem("user", JSON.stringify(response.data.user));

      navigate("/user");
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-wrapper">
      <Grid container className="signup-grid-container">
        {/* Left Branding Side */}
        <Grid size={{ xs: 12, md: 6 }} className="signup-branding-section">
          <div className="signup-branding-content">
            <span className="signup-badge">WELCOME TO QUICKCART</span>

            <h1 className="signup-hero-heading">Create your account</h1>

            <p className="signup-hero-description">
              Join QuickCart and enjoy the best shopping experience with
              exclusive deals, secure payments, and fast delivery.
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
                  <p>
                    Hassle-free returns and quick refunds for eligible orders.
                  </p>
                </div>
              </div>
            </div>

            {/* Animation & Trust Indicator */}
            <div className="signup-animation-wrapper">
              <Lottie animationData={animation} loop={true} autoPlay={true} />
            </div>

            <div className="signup-trust">
              <p>
                Trusted by <span>10,000+</span> happy customers
              </p>
            </div>
          </div>
        </Grid>

        {/* Right Form Side */}
        <Grid size={{ xs: 12, md: 6 }} className="signup-form-section">
          <div className="signup-card">
            <div className="signup-form-header">
              <h2>Sign Up</h2>
              <p>Create a New Account</p>
            </div>

            <form className="signup-form" onSubmit={BackendHandle}>
              <TextField
                fullWidth
                id="fullname"
                required
                label="Full Name"
                variant="outlined"
                name="fullname"
                value={FormData.fullname}
                onChange={HandleForm}
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
                required
                label="Email Address"
                type="email"
                variant="outlined"
                name="mail"
                value={FormData.mail}
                onChange={HandleForm}
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
                required
                label="Password"
                type="password"
                variant="outlined"
                name="password"
                value={FormData.password}
                onChange={HandleForm}
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
                required
                label="Confirm Password"
                type="text"
                variant="outlined"
                name="confirmPassword"
                value={FormData.confirmPassword}
                onChange={HandleForm}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon className="input-icon" />
                    </InputAdornment>
                  ),
                }}
              />

              <div className="signup-terms">
                <Checkbox size="small" className="terms-checkbox" required />
                <span>
                  I agree to the <a href="#terms">Terms of Service</a> and{" "}
                  <a href="#privacy">Privacy Policy</a>.
                </span>
              </div>

              <button
                type="submit"
                className="signup-submit-btn"
                disabled={loading}
              >
                {loading ? "Working On It.." : "Create Account"}
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
