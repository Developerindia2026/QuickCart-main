import "./CartDrawer.css";
import { useState, useEffect } from "react";
import axios from "axios";
import API from "../../config/api";
import Grid from "@mui/material/Grid";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

function CartDrawer() {
  const navigate = useNavigate();

  const [items, setItems] = useState([]);

  const fetchCart = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      return navigate("/login");
    }
    const response = await axios.get(`${API}/cart`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });

    setItems(response.data.products);
  };

  const deleteItem = async (itemid) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        return navigate("/login");
      }

      const response = await axios.delete(`${API}/cart/delete/${itemid}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

      fetchCart();
    } catch (error) {
      console.log(error);
      alert("somthing went wrong");
    }
  };

  const submitbtn = () => {
    navigate("/address");
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const updateQuantity = async (itemID, quantity) => {
    const token = localStorage.getItem("token");

    const response = await axios.put(
      `${API}/cart/quantity/${itemID}/${quantity}`,
      {},
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      },
    );

    fetchCart();
  };

  const subtotal = items.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);

  return (
    <div className="cart-container">
      <div className="cart-wrapper">
        {/* ---------------- Cart Items ---------------- */}
        <div className="cart-items-section">
          <div className="cart-heading">
            <h2>Shopping Cart</h2>
            <span>{items.length} Item(s)</span>
          </div>

          {items.length === 0 ? (
            <div className="empty-cart">
              <h3>Your Cart is Empty 🛒</h3>
              <p>Add some products to continue shopping.</p>
            </div>
          ) : (
            items.map((item) => (
              <div className="cart-card" key={item._id}>
                {/* Product Image */}
                <div className="cart-image">
                  <img
                    src={`${API}${item.product.image[0]}`}
                    alt={item.product.title}
                  />
                </div>

                {/* Product Details */}
                <div className="cart-details">
                  <h3>{item.product.title}</h3>

                  <p className="cart-brand">
                    Brand : <span>{item.product.brand}</span>
                  </p>

                  <p className="cart-description">{item.product.description}</p>

                  <div className="cart-price">₹ {item.product.price}</div>
                </div>

                {/* Quantity */}
                <div className="cart-quantity">
                  <h5>Quantity</h5>

                  <div className="quantity-box">
                    <button
                      className="qty-btn"
                      onClick={() => {
                        if (item.quantity > 1) {
                          updateQuantity(item._id, item.quantity - 1);
                        }
                      }}
                    >
                      <RemoveIcon />
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item._id, item.quantity + 1)}
                    >
                      <AddIcon />
                    </button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => deleteItem(item._id)}
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* ---------------- Order Summary ---------------- */}

        {items.length > 0 && (
          <div className="cart-summary">
            <h3>Order Summary</h3>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹ {subtotal}</span>
            </div>

            <div className="summary-row">
              <span>Delivery</span>
              <span className="free-delivery">FREE</span>
            </div>

            <div className="summary-row total-row">
              <span>Total</span>
              <span>₹ {subtotal}</span>
            </div>

            <button className="checkout-btn" onClick={submitbtn}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartDrawer;
