import { useState, useEffect } from "react";
import axios from "axios";
import API from "../../config/api";
import { useLocation, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import PaymentsIcon from "@mui/icons-material/Payments";
import razorpayIcon from "../../assets/razorpay.png";
import codIcon from "../../assets/cod.png";
import "./Payment.css";

// RADIO ELEMENT
import * as React from "react";
import { pink } from "@mui/material/colors";
import Radio from "@mui/material/Radio";

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();

  const [address, setGetAddress] = useState({});

  const [cartItems, setCart] = useState([]);

  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  // GET ADDRESS FUNCTION
  const getAddressfn = async () => {
    const addressID = location.state?.address;
    const token = localStorage.getItem("token");

    if (!token || !addressID) {
      return alert("Logined user OR addressID does not Founded Yet");
      navigate("/");
    }

    try {
      const response = await axios.get(`${API}/address/${addressID}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
      setGetAddress(response.data.currentAddress);
    } catch (error) {
      console.log(error);
      alert(" the bakcend is not available yet!.....");
    }
  };

  //PAYMENT FUNCTION*****************************************
  const PaymentOrder = async () => {
    try {
      // Backend se order create karvao
      const response = await axios.post(`${API}/payment/create-order`);

      const { order } = response.data;
      // Razorpay Checkout Options
      const options = {
        key: import.meta.env.VITE_Test_API_Key,
        amount: order.amount,
        currency: order.currency,
        name: "QuickCart",
        description: "Order Payment",
        order_id: order.id,

        prefill: {
          name: "Deepanshu",
          email: "deepanshu@gmail.com",
          contact: "9999999999",
        },

        handler: async function (response) {
          const verify = await axios.post(
            `${API}/payment/verify-payment`,
            response,
          );

          console.log(verify.data);
        },

        theme: {
          color: "#2563eb",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

      navigate("/order-successful");

    } catch (error) {
      console.log(error);
    }
  };

  // GET CART ITEMS
  const getCart = async () => {
    const token = localStorage.getItem("token");

    try {
      const cart = await axios.get(`${API}/cart/payment`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

      setCart(cart.data.items);
    } catch (error) {
      conosole.log(error);
      alert("unable to fetch cart items by backend");
    }
  };

  //SUBTOTAL
  const subtotal = cartItems.reduce((total, items) => {
    return total + items.product.price * items.quantity;
  }, 0);

  const delivery = subtotal > 1000 ? 0 : 50;

  const total = subtotal + delivery;

  useEffect(() => {
    getAddressfn();
    getCart();
  }, []);

  return (
    <div className="payment-container">
      {/* ADDRESS CONTAINER  */}
      <div className="selected-address">
        <div className="selected-address__header">
          <h3>Delivery Address</h3>
        </div>

        <div className="selected-address__body">
          <div className="address-name-row">
            <h4>{address?.fullName}</h4>
            <span>{address?.addressType}</span>
          </div>

          <p>{address?.phoneNumber}</p>

          <p>
            {address?.houseNumber}, {address?.streetAddress}
          </p>

          <p>
            {address?.city} - {address?.pincode}
          </p>

          {address?.landmark && <p>Landmark: {address.landmark}</p>}
        </div>
      </div>

      {/* CART CONTAINER  */}
      <div className="payment-cart-container">
        <div className="payment-cart-heading">
          <h2>ORDER DETAILS</h2>
        </div>
        {cartItems.map((item) => {
          return (
            <div className="payment-cart-products" key={item._id}>
              <div className="payment-cart-img">
                <img
                  src={`${API}${item.product.image[0]}`}
                  alt={item.product.title}
                />
              </div>

              <div className="payment-cart-title">
                <h5>{item.product.title}</h5>
              </div>

              <div className="payment-cart-description">
                <p>{item.product.description}</p>
              </div>

              <div className="payment-cart-quantity">
                <p>Quantity: {item.quantity}</p>
              </div>

              <div className="payment-cart-price">
                <p>₹ {item.product.price * item.quantity}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ORDER SUMMERY  */}

      <div className="order-summery-container">
        <div className="order-summary">
          <h2>Order Summary</h2>

          <div className="order-summery-details">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="summary-row">
              <span>Delivery</span>
              <span>{delivery === 0 ? "FREE" : `₹${delivery}`}</span>
            </div>

            <div className="summary-row">
              <span>Tax</span>
              <span>₹0</span>
            </div>

            <hr />

            <div className="summary-total">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="payment-method-section">
        <h2 className="payment-method-heading">Payment Method</h2>

        <div className="payment-method-card">
          <div className="payment-option">
            <div className="payment-left">
              <input type="radio" name="payment" />

              <div className="payment-details">
                <h4>Razorpay</h4>
                <p>UPI, Debit Card, Credit Card, Wallet & Net Banking</p>
              </div>
            </div>

            <img src={razorpayIcon} alt="Razorpay" className="payment-logo" />
          </div>

          <div className="payment-option">
            <div className="payment-left">
              <input type="radio" name="payment" />

              <div className="payment-details">
                <h4>Cash On Delivery</h4>
                <p>Pay securely when your order is delivered.</p>
              </div>
            </div>

            <img src={codIcon} alt="COD" className="payment-logo" />
          </div>
        </div>
      </div>

      {/* .payment page  */}
      <div className="payment-section-container">
        <button className="pay-now-btn" onClick={PaymentOrder}>
          <span>PAY SECURELY</span>
          <PaymentsIcon />
        </button>
      </div>
    </div>
  );
}

export default Payment;
