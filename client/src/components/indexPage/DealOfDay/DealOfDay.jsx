import "./DealOfDay.css";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

// Images
import playStation from "../../../assets/deals/playstation-deal.png";
import laptop from "../../../assets/deals/laptop-deal.png";
import analogWatch from "../../../assets/deals/analog-watch-deal.png";
import earbuds from "../../../assets/deals/earbuds-deal.png";
import iphone from "../../../assets/deals/iphone-deal.png";
import mouse from "../../../assets/deals/mouse-deal.png";
import powerBank from "../../../assets/deals/powerbank-deal.png";
import tshirt from "../../../assets/deals/tshirt-deal.png";

function DealOfDay() {
  const deals = [
    {
      deal_img: playStation,
      deal_name: "Sony PlayStation VR2 (PlayStation 5)",
      rating: "4.8 (1200)",
      price: 89000,
      oldPrice: 100000,
      discount: "11%",
    },
    {
      deal_img: laptop,
      deal_name: "Acer Smartchoice Aspire One",
      rating: "4.6 (1000)",
      price: 95000,
      oldPrice: 120000,
      discount: "21%",
    },
    {
      deal_img: analogWatch,
      deal_name: "Paris Bercy Collection Modern Chronograph Watch",
      rating: "4.3 (1500)",
      price: 1999,
      oldPrice: 3000,
      discount: "33%",
    },
    {
      deal_img: earbuds,
      deal_name: "TWS Earbuds Up To 54 Hours Playback",
      rating: "4.8 (500)",
      price: 999,
      oldPrice: 1500,
      discount: "34%",
    },
    {
      deal_img: iphone,
      deal_name: "iPhone Air 1TB - Thinnest iPhone Ever",
      rating: "4.9 (1200)",
      price: 100000,
      oldPrice: 175000,
      discount: "43%",
    },
    {
      deal_img: mouse,
      deal_name: "Logitech MX Master 3S Wireless Mouse",
      rating: "4.5 (900)",
      price: 499,
      oldPrice: 999,
      discount: "50%",
    },
    {
      deal_img: powerBank,
      deal_name: "Amazon Basics 20000mAh Power Bank",
      rating: "4.4 (1200)",
      price: 800,
      oldPrice: 1200,
      discount: "33%",
    },
    {
      deal_img: tshirt,
      deal_name: "Men's Anti-Stain Casual Polo T-Shirt",
      rating: "4.8 (1800)",
      price: 699,
      oldPrice: 1200,
      discount: "42%",
    },
  ];

  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [autoplay.current]
  );

  return (
    <section className="deal-section">

      {/* ================= HEADER ================= */}

      <div className="deal-header">

        <div className="deal-left">

          <span className="deal-subtitle">
            <LocalFireDepartmentIcon />
            Limited Time Offer
          </span>

          <h2>Deal Of The Day</h2>

          <p>
            Grab today's hottest deals before they're gone. Limited stock,
            exclusive prices and premium products.
          </p>

        </div>

        <div className="deal-right">

          <div className="deal-timer">

            <span className="timer-title">
              Ends In
            </span>

            <FlipClockCountdown
              className="timer"
              to={new Date().getTime() + 24 * 3600 * 1000}
            />

          </div>

          <button className="view-btn">
            View All Deals
            <KeyboardDoubleArrowRightIcon />
          </button>

        </div>

      </div>

      {/* ================= SLIDER ================= */}

      <div className="embla">

        <div className="embla__viewport" ref={emblaRef}>

          <div className="embla__container">

            {deals.map((deal, index) => (

              <div className="embla__slide" key={index}>

                <article className="deal-card">

                  {/* Discount */}

                  <div className="discount-badge">

                    {deal.discount} OFF

                  </div>

                  {/* Wishlist */}

                  <button className="wishlist-btn">

                    <FavoriteBorderIcon />

                  </button>

                  {/* Image */}

                  <div className="deal-image">

                    <img
                      src={deal.deal_img}
                      alt={deal.deal_name}
                    />

                  </div>

                  {/* Content */}

                  <div className="deal-content">

                    <span className="deal-stock">
                      🔥 Selling Fast
                    </span>

                    <h3>
                      {deal.deal_name}
                    </h3>

                    <div className="deal-rating">

                      ⭐ {deal.rating}

                    </div>

                    <div className="price-wrapper">

                      <span className="current-price">
                        ₹{deal.price.toLocaleString()}
                      </span>

                      <span className="old-price">
                        ₹{deal.oldPrice.toLocaleString()}
                      </span>

                    </div>

                    <button className="deal-cart-btn">

                      <ShoppingCartCheckoutIcon />

                      Add To Cart

                    </button>

                  </div>

                </article>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default DealOfDay;