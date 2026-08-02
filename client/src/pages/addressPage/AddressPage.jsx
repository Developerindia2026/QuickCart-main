import "./AddressPage.css";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import API from "../../config/api";
import { useNavigate } from "react-router-dom";

function AddressPage() {
  const navigate = useNavigate();

  const [address, setAddress] = useState([]);

  const fetchAddress = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      return navigate("/login");
    }

    try {
      const response = await axios.get(`${API}/address`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setAddress(response.data.address);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAddress = async (itemID) => {
    const token = localStorage.getItem("token");

    if (!token) {
      return navigate("/login");
    }

    try {
      const response = await axios.delete(`${API}/address/delete/${itemID}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

      fetchAddress();
    } catch (error) {
      console.log(error);
      alert("please try after sometimes");
    }
  };

  useEffect(() => {
    fetchAddress();
  }, []);

  const submitAddress = (address) => {
    navigate("/payment", {
      state: {
        address,
      },
    });
  };

  return (
    <div className="address-container">
      {/* new address  */}
      <div className="add-address">
        <Link to="/address/new-Address">
          <button>
            Add Address
            <span>
              <AddBoxIcon />
            </span>
          </button>
        </Link>
      </div>

      {/* existing address  */}
      <div className="existing-address">
        <h2 className="existing-address-header">Select a Delivery Address</h2>

        <div className="address-grid">
          {address.map((item) => {
            return (
              <div className="address-card" key={item._id}>
                <div className="address-top">
                  <div className="address-left">
                    <input type="radio" name="selectedAddress" />

                    <span className="address-type">{item.addressType}</span>
                  </div>

                  <div className="address-actions">
                    <button>Edit</button>
                    <button onClick={() => deleteAddress(item._id)}>
                      Delete
                    </button>
                  </div>
                </div>

                <h3>{item.fullName}</h3>

                <p className="phone">{item.phoneNumber}</p>

                <p className="address-text">
                  {item.houseNumber}, {item.streetAddress},
                  {item.landmark && ` ${item.landmark},`} {item.city},
                  {item.state} - {item.pincode}
                </p>
                <div className="btn-address-submit">
                  <button onClick={() => submitAddress(item._id)}>
                    Select
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AddressPage;
