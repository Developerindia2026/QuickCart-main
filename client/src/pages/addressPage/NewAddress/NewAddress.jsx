import "./NewAddress.css";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import axios from "axios";
import API from "../../../config/api.js";
import { useNavigate } from "react-router-dom";

function NewAddress() {
  const Navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    houseNumber: "",
    streetAddress: "",
    landmark: "",
    city: "",
    pincode: "",
    addressType: "Home",
  });

  const handleAddress = (event) => {
    let { name, value } = event.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const addressBackend = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        `${API}/address/new-Address`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      Navigate("/address");

      console.log(formData);
    } catch (error) {
      console.log(error);
      alert("unable to save addres");
    }
  };

  return (
    <div className="new-address-container">
      <div className="newaddress-header">
        <h3>Add Your Address</h3>
      </div>

      <div className="newadddress-form">
        <form onSubmit={addressBackend}>
          <label htmlFor="fullName">Full Name</label>
          <TextField
            id="fullName"
            variant="outlined"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleAddress}
          />

          <label htmlFor="phoneNumber">Phone Number</label>
          <TextField
            id="phoneNumber"
            variant="outlined"
            name="phoneNumber"
            placeholder="Enter your 10-digit mobile number"
            value={formData.phoneNumber}
            onChange={handleAddress}
          />

          <label htmlFor="houseNumber">House No. / Building Name</label>
          <TextField
            id="houseNumber"
            variant="outlined"
            name="houseNumber"
            placeholder="Enter your house number or building name"
            value={formData.houseNumber}
            onChange={handleAddress}
          />

          <label htmlFor="streetAddress">Street Address / Area</label>
          <TextField
            id="streetAddress"
            variant="outlined"
            name="streetAddress"
            placeholder="Enter your street address"
            value={formData.streetAddress}
            onChange={handleAddress}
          />

          <label htmlFor="landmark">Landmark (Optional)</label>
          <TextField
            id="landmark"
            variant="outlined"
            name="landmark"
            placeholder="Enter a nearby landmark"
            value={formData.landmark}
            onChange={handleAddress}
          />

          <label htmlFor="city">City</label>
          <TextField
            id="city"
            variant="outlined"
            name="city"
            placeholder="Enter your city"
            value={formData.city}
            onChange={handleAddress}
          />

          <label htmlFor="pincode">PIN Code</label>
          <TextField
            id="pincode"
            variant="outlined"
            name="pincode"
            placeholder="Enter your PIN code"
            value={formData.pincode}
            onChange={handleAddress}
          />

          {/* <label htmlFor="addressType">Address Type</label>
          <TextField
            id="addressType"
            variant="outlined"
            name="addressType"
            placeholder="Home, Work, or Other"
          /> */}

          <label>Address Type</label>

          <FormControl className="address-type">
            <RadioGroup
              row
              name="addressType"
              defaultValue="Home"
              onChange={handleAddress}
              value={formData.addressType}
            >
              <FormControlLabel control={<Radio />} label="Home" value="Home" />

              <FormControlLabel control={<Radio />} label="Work" value="Work" />

              <FormControlLabel
                value="Other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>

          <button>Submit Address</button>
        </form>
      </div>
    </div>
  );
}

export default NewAddress;
