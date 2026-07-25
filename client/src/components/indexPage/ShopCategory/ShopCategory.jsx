import "./ShopCategory.css";
import Grid from "@mui/material/Grid";
import electronicsImg from "../../../assets/categories/laptop-category.png";
import headhonesImg from "../../../assets/categories/headphone-category.png";
import smarthomeImg from "../../../assets/categories/smarthome-category.png";
import fashionImg from "../../../assets/categories/tshirt-category.png";
import { Link } from "react-router-dom";

function ShopCategory() {
  const category = [
    {
      link: "category/electronics",
      product_img: electronicsImg,
      title: "Electronics",
      subtitle: "1200+ Products",
    },
    {
      link: "category/headphones",
      product_img: headhonesImg,
      title: "Headphones",
      subtitle: "850+ Products",
    },
    {
      link: "category/smarthome",
      product_img: smarthomeImg,
      title: "Smart Home",
      subtitle: "500+ Products",
    },
    {
      link: "category/fashion",
      product_img: fashionImg,
      title: "Fashion",
      subtitle: "800+ Fashions",
    },
  ];

  return (
    <>
      <div className="category-container">
        <h1>Shop By Category</h1>

        <div className="categories-section">
          <Grid container spacing={4}>
            {category.map((items, index) => {
              return (
                <Grid size={{ xs: 6, sm: 6, md: 3, lg: 3 }}>
                  <Link to={items.link} className="category-link">
                    <div className="category-products">
                      <img src={items.product_img} />

                      <h5>{items.title}</h5>

                      <p>{items.subtitle}</p>
                    </div>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </>
  );
}

export default ShopCategory;
