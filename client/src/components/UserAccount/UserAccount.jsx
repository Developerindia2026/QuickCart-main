import "./UserAccount.css";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PersonIcon from "@mui/icons-material/Person";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

function UserAccount() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")) || {};

  const handleLogout = ()=> {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  }

  return (
    <div className="user-container">
      {/* Logout Button */}
      <div className="logout-btn">
        <button onClick={handleLogout}>
          <LogoutIcon />
          Logout
        </button>
      </div>

      {/* Profile Card */}
      <div className="profile-card">
        <div className="profile-avatar">
          <PersonIcon />
        </div>

        <div className="profile-info">
          <h1>Hello, {user?.name || "User"} 👋</h1>
          <p>{user?.mail || user?.email}</p>
          <span>Welcome back to QuickCart.</span>
        </div>
      </div>

      {/* Dashboard Actions */}
      <div className="dashboard-section">
        <h2>My Account</h2>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <div className="user-card">
              <FavoriteBorderIcon />
              <h3>Wishlist</h3>
              <p>View and manage your saved products.</p>
            </div>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <div className="user-card">
              <ShoppingCartIcon />
              <h3>Cart</h3>
              <p>Review items waiting in your shopping cart.</p>
            </div>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <div className="user-card">
              <LocalMallIcon />
              <h3>Orders</h3>
              <p>Track current orders and view purchase history.</p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default UserAccount;