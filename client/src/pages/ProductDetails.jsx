import axios from "axios";
import { useState, useEffect } from "react";
import API from "../config/api";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import "./ProductDetails.css";
import useEmblaCarousel from "embla-carousel-react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function ProductDetails() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true, 
    slidesToScroll: 1,
  });

 const goToPrev = () => {
  if (emblaApi) emblaApi.scrollPrev();
};

const goToNext = () => {
  if (emblaApi) emblaApi.scrollNext();
};

  const { product_id } = useParams();

  console.log(product_id);
  let [productDetails, setProductDetails] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API}/product/${product_id}`);
      setProductDetails(response.data.details);
    } catch (error) {
      console.log(error);
      alert("unable to Fetch Product details");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [product_id]);

  return (
    <>
      <div className="productdetails-main">
        {productDetails && (
          <Grid container spacing={5} className="productdetails_container">
            <Grid size={{ xs: 12, md: 6 }}>
              <div className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                  <div className="embla__container">
                    {productDetails.image.map((img, index) => (
                      <div className="embla__slide" key={index}>
                        <div className="productdetails_img">
                          <img
                            src={`${API}${img}`}
                            alt={`Image ${index + 1}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="embla__prev" onClick={goToPrev}>
                  <ArrowBackIosIcon />
                </button>

                <button className="embla__next" onClick={goToNext}>
                  <ArrowForwardIosIcon />
                </button>
              </div>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <div className="productdetails-content">
                <div className="productdetails-brand">
                  <p className="brand-details">{productDetails.brand}</p>
                </div>
                <div className="productdetails-heading">
                  <h1 className="title-details">{productDetails.title}</h1>
                </div>
                <div className="productdetails-description">
                  <p className="description-details">
                    {productDetails.description}
                  </p>
                </div>
                <div className="productdetails-price">
                  <h4 className="price-details">{productDetails.price}</h4>
                </div>
                <div className="details-btn">
                  <div className="button-products">
                    <button className="buy-btn">Buy Now</button>
                  </div>
                  <div className="button-products">
                    <button className="cart-btn">Add To Cart</button>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        )}
      </div>
    </>
  );
}

export default ProductDetails;
