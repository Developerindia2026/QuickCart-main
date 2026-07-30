import { useParams } from "react-router-dom";
import axios from "axios";
import API from "../config/api";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import "./CategoryPage.css";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

function CategoryPage() {
  const { categoryName } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    window.scroll(0, 0);
    GetData();
  }, []);

  const GetData = async () => {
    try {
      const response = await axios.get(`${API}/category/${categoryName}`);
      setProducts(response.data.Data);
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  };

  return (
    <section className="categoryProducts-container">
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product._id} size={{ xs: 6, sm: 6, md: 4, lg: 3 }}>
             <Link to={`/product/${product._id}`}>
            <div className="product-card">
             
              <div className="product-image">
                <img src={`${API}${product.image[0]}`} alt={product.title} />
              </div>
              

              <div className="product-content">
                <span className="product-brand">{product.brand}</span>

                <h3 className="product-title">{product.title}</h3>

                <p className="product-description">{product.description}</p>

                <div className="product-footer">
                  <div className="product-info">
                    <h2 className="product-price">₹{product.price}</h2>

                    <span className="product-rating">⭐ {product.rating}</span>
                  </div>

                  <div className="category-btns">
                    <button className="cart-btn">
                      <ShoppingCartCheckoutIcon />
                    </button>

                    <button className="wishlist-btn">
                      <FavoriteBorderIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}

export default CategoryPage;
