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
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

function ProductDetails() {
  const navigate = useNavigate();

  const [isAlert, setIsAlert] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // REVIEW HANDLE
  const [reviewData, setReview] = useState({
    rating: "",
    comment: "",
  });

  // RENDER REVIEW
  const [isReview, setIsReview] = useState(null);

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

  // REVIE handle

  const reviewHandle = (event) => {
    const { name, value } = event.target;

    setReview((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // review submit
  const reviewSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      return (
        alert(`please make sure your account To Be Logged First`),
        navigate("/login")
      );
    }

    try {
      setIsLoading(true);
      const response = await axios.post(
        `${API}/review/${product_id}`,
        reviewData,
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        },
      );
    } catch (error) {
      console.log(error);
      alert(`review error by frontend`);
    } finally {
      setIsLoading(false);
    }
  };

  // GET REVIEW
  const renderReview = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get(`${API}/review/${product_id}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

      setIsReview(response.data.reviewData);
      console.log(response.data.reviewData);
    } catch (error) {
      console.log(error);
      alert(`UNABLE TO FETCH THE REVIEWS...`);
    }
  };

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
    renderReview();
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

        {/* REVIEW SECTION ***************************** */}

        <div className="review" id="review-submit-container">
          <div className="review__container">
            <div className="review__header">
              <h2 className="review__title">Share Your Experience</h2>
              <p className="review__subtitle">
                Your feedback helps other customers make better decisions.
              </p>
            </div>

            <form className="review__form" onSubmit={reviewSubmit}>
              <div className="review__field">
                <label className="review__label">Overall Rating</label>

                <Stack spacing={1}>
                  <Rating
                    name="rating"
                    size="large"
                    value={reviewData.rating}
                    max={5}
                    min={1}
                    onChange={(event, newValue) => {
                      setReview({
                        ...reviewData,
                        rating: newValue,
                      });
                    }}
                  />
                </Stack>
              </div>

              <div className="review__field">
                <TextField
                  fullWidth
                  multiline
                  rows={5}
                  id="review"
                  name="comment"
                  label="Write your review..."
                  variant="outlined"
                  value={reviewData.comment}
                  onChange={reviewHandle}
                />
              </div>

              <button
                type="submit"
                className="review__button"
                disabled={isLoading}
              >
                {isLoading ? "Adding Your Feedback" : "Submit Review"}
              </button>
            </form>
          </div>
        </div>

        {/* review render**************************  */}

        {isReview ? (
          <section className="review-list">
            <article className="review-card">
              <div className="review-card__header">
                <div className="review-card__avatar">
                  {isReview.user?.username?.charAt(0).toUpperCase()}
                </div>

                <div className="review-card__user">
                  <h4 className="review-card__username">
                    {isReview.user?.username}
                  </h4>

                  <p className="review-card__email">{isReview.user?.email}</p>

                  <Rating
                    value={isReview.rating}
                    readOnly
                    precision={0.5}
                    size="small"
                  />
                </div>
              </div>

              <p className="review-card__comment">{isReview.comment}</p>
            </article>
          </section>
        ) : (
          <div className="review-empty">
            <div className="review-empty-card">
              <div className="review-empty-icon">⭐</div>

              <h2>No Reviews Yet</h2>

              <p>
                Be the first customer to share your experience with this
                product. Your review helps other shoppers make better decisions.
              </p>

              <button className="review-btn">
                <a href="#review-submit-container">Write the First Review</a>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProductDetails;
