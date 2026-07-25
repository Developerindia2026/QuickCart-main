import Grid from "@mui/material/Grid";
import DiscountIcon from "@mui/icons-material/Discount";
import ShieldIcon from "@mui/icons-material/Shield";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LottieModule from "lottie-react";
const Lottie = LottieModule.default;
import animation from "../../../assets/singup-animation.json";
import "./Signup.css";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";

function Signup() {
  const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

  return (
    <>
      <div className="signup-container">
        <Grid container spacing={0}>
          {/* singup design  */}
          <Grid size={{ xs: 12, md: 6 }}>
            {/* header  */}
            <div className="signup-design">
              <div className="signup-header">
                <p>WELCOME TO QUICKCART</p>

                <h1>Create your account</h1>

                <p>
                  Join QuickCart and enjoy the best shopping experience with
                  exclusive deals, secure payments, and fast delivery.
                </p>
              </div>

              {/* icons  */}
              <div className="signup-icons">
                <div className="icons-list">
                  <DiscountIcon />
                  <h5>Exclusive Offers</h5>
                  <p>Access special discounts and members-only deals.</p>
                </div>

                <div className="icons-list">
                  <ShieldIcon />
                  <h5>Fast & Secure</h5>
                  <p>Secure payments with quick and reliable delivery.</p>
                </div>

                <div className="icons-list">
                  <LocalShippingIcon />
                  <h5>Easy Returns</h5>
                  <p>
                    Hassle-free returns and quick refunds for eligible orders.
                  </p>
                </div>
              </div>

              <div className="singup-trust">
                <p>Trusted by 10,000+ happy customers</p>
              </div>
            </div>

            <div className="signup-animation">
              <Lottie animationData={animation} loop={true} autoPlay={true} />
            </div>
          </Grid>

          {/* signup form  */}
          <Grid size={{ xs: 12, md: 6 }}>
            <div className="singup-form">
              <div className="singup-container">
                {/* header  */}
                <div className="singup-right-header">
                  <h1>Sign Up</h1>
                  <p>Create a New Account</p>
                </div>

                {/* singup-form  */}
                <form>
                  {/* full name  */}
                  <label htmlFor="fullname">Full Name</label>
                  <TextField
                    id="fullname"
                    label="Enter Your Fullname"
                    variant="outlined"
                    name="Fullname"
                  />

                  {/* email  */}
                  <label htmlFor="mail">Email Address</label>
                  <TextField
                    id="mail"
                    label="Enter Your Email Address"
                    variant="outlined"
                    name="mail"
                  />

                  {/* password  */}
                  <label htmlFor="password">Password</label>
                  <TextField
                    id="password"
                    label="Enter Your password"
                    variant="outlined"
                    name="password"
                  />

                  {/* confirm password  */}
                  <label htmlFor="confirmpassword">Confirm Password</label>
                  <TextField
                    id="confirmpassword"
                    label="Please Confirm Your Password"
                    variant="outlined"
                    name="confirmPassword"
                  />

                  <Checkbox {...label} />
                  <span>
                    I agree to the Terms of Service and Privacy Policy.
                  </span>

                  <button>Signup Now</button>
                </form>
              </div>
              <div className="login-container">
                <p>
                  Already have an account? &nbsp;
                  <Link to="/login">Sign In</Link>
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Signup;
