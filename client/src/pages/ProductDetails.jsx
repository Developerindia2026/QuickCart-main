import axios from "axios";
import { useState, useEffect } from "react";
import API from "../config/api";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import "./ProductDetails.css";
import useEmblaCarousel from "embla-carousel-react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";

function ProductDetails() {
  const navigate = useNavigate();

  const [isAlert, setIsAlert] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
  }, []);

  const addCart = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      return navigate("/login");
    }

    try {
      setIsLoading(true);
      const response = await axios.post(
        `${API}/cart`,
        {
          productID: product_id,
          quantityNO: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setSuccess(true);

      setIsAlert(true);

      setTimeout(() => {
        setIsAlert(false);
      }, 3000);
    } catch (error) {
      console.log(error);
      alert("Error by the frontend");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="productdetails-main">
        {productDetails && (
          <Grid container spacing={5} className="productdetails_container">
            <Grid size={{ xs: 12, md: 6 }}>
              <div className="productdetails-embla">
                <div className="productdetails-embla__viewport" ref={emblaRef}>
                  <div className="productdetails-embla__container">
                    {productDetails.image.map((img, index) => (
                      <div className="productdetails-embla__slide" key={index}>
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
                {/* ALERT BOX  */}

                {isAlert && (
                  <div className="product-details alert">
                    <Alert
                      icon={<CheckIcon fontSize="inherit" />}
                      severity="success"
                      variant="filled"
                    >
                      Product Successfully Added to Cart
                    </Alert>
                  </div>
                )}

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
                  <h4 className="price-details">₹{productDetails.price}</h4>
                </div>
                <div className="details-btn">
                  <div className="button-products">
                    <button
                      className={`cart-btn ${success ? "added" : ""}`}
                      onClick={() => addCart()}
                      disabled={success}
                    >
                      {isLoading
                        ? "Processing.."
                        : success
                          ? "✓ Added To Cart"
                          : "Add To Cart"}
                    </button>
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
