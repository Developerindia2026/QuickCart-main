import logo from "../../assets/logo.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalMallIcon from '@mui/icons-material/LocalMall';

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const closeMenu = () => {
    setMobileMenu(false);
  };

  return (
    <>
      {/* ===========================
              DESKTOP NAVBAR
      =========================== */}

      <nav className="navbar">
        {/* Logo */}

        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src={logo} alt="NexCart Logo" />
        </Link>

        {/* Navigation */}

        <div className="items">
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/products">Products</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Desktop Buttons */}

        <div className="btn-section">
          <Link to="/cart">
            <button className="btn-like">
              <LocalMallIcon />
            </button>
          </Link>

          <button className="btn-nav">
            <SearchIcon />
          </button>

          <button className="btn-account">
            <Link to="/user">
              <AccountCircleIcon />
              <span>My Account</span>
            </Link>
          </button>
        </div>

        {/* Hamburger */}

        <button className="hamburger-menu" onClick={() => setMobileMenu(true)}>
          <MenuIcon />
        </button>
      </nav>

      {/* ===========================
            MOBILE MENU OVERLAY
      =========================== */}

      <div className={`mobile-menu ${mobileMenu ? "active" : ""}`}>
        {/* Drawer */}

        <div className="mobile-drawer">
          {/* Header */}

          <div className="mobile-header">
            <Link to="/" className="mobile-logo" onClick={closeMenu}>
              <img src={logo} alt="NexCart Logo" />
            </Link>

            <button className="close-menu" onClick={closeMenu}>
              <CloseIcon />
            </button>
          </div>

          {/* Navigation */}

          <div className="mobile-items">
            <ul>
              <li onClick={closeMenu}>
                <Link to="/">Home</Link>
              </li>

              <li onClick={closeMenu}>
                <Link to="/products">Products</Link>
              </li>

              <li onClick={closeMenu}>
                <Link to="/about">About</Link>
              </li>

              <li onClick={closeMenu}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Bottom Section */}

          <div className="mobile-icons">
            <Link to="/cart">
            <button className="mobile-btn-like" onClick={closeMenu}>
              <LocalMallIcon />
              <span>Cart</span>
            </button>
              </Link>
          

            <button className="mobile-btn-nav" onClick={closeMenu}>
              <SearchIcon />
              <span>Search</span>
            </button>

            <button className="mobile-btn-account" onClick={closeMenu}>
              <Link to="/user">
                <AccountCircleIcon />
                <span>My Account</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
