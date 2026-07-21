import "./DealOfDay.css";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

// images
import playStation from "../../../assets/deals/playstation-deal.png";
import laptop from "../../../assets/deals/laptop-deal.png";
import analogWatch from "../../../assets/deals/analog-watch-deal.png";
import earbuds from "../../../assets/deals/earbuds-deal.png";
import iphone from "../../../assets/deals/iphone-deal.png";
import mouse from "../../../assets/deals/mouse-deal.png";
import powerBank from "../../../assets/deals/powerbank-deal.png";
import tshirt from "../../../assets/deals/tshirt-deal.png";

function DealOfDay() {
  const Deals = [
    {
      deal_img: playStation,
      deal_name: "Sony PlayStation VR2 (PlayStation 5)",
      rating: "4.8(1200)",
      price: "89,000",
      pdrop: "1,00,000",
    },
    {
      deal_img: laptop,
      deal_name: "Acer Smartchoice Aspire One",
      rating: "5.8(1000)",
      price: "95,000",
      pdrop: "1,20,000",
    },
    {
      deal_img: analogWatch,
      deal_name: "Paris Bercy Collection Modern Chronograph Watch",
      rating: "3.6(1500)",
      price: "1,999",
      pdrop: "3,000",
    },
    {
      deal_img: earbuds,
      deal_name: "TWS Earbuds up to 54 Hours Playback",
      rating: "4.8(500)",
      price: "999",
      pdrop: "1500",
    },
    {
      deal_img: iphone,
      deal_name: "iPhone Air 1 TB: Thinnest iPhone Ever",
      rating: "5.8(1200)",
      price: "100,000",
      pdrop: "1,75,000",
    },
    {
      deal_img: mouse,
      deal_name: "Logitech MX Master 3S Bluetooth Edition Wireless Mouse",
      rating: "2.8(1500)",
      price: "499",
      pdrop: "999",
    },
    {
      deal_img: powerBank,
      deal_name: "Amazon Basics 20000 mAh Power Bank",
      rating: "3.8(1200)",
      price: "800",
      pdrop: "1200",
    },
    {
      deal_img: tshirt,
      deal_name: "Men's Anti-Stain Casual Solid Polo T-Shirt, Anti-Odor",
      rating: "4.8(1200)",
      price: "699",
      pdrop: "1,200",
    },
  ];

  const autoplay = useRef(
    Autoplay({
      delay: 1500,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
  );

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [autoplay.current],
  );

  return (
    <>
      <div className="deal-header">
        <div className="deal-left">
          <h2>Deal Of The Day⚡</h2>
        </div>

        <div className="deal-right">
          <div className="deal-timer">
            <span>Ends In</span>

            <FlipClockCountdown
              className="timer"
              to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
            />
          </div>

          <button className="view-btn">
            View All Collections
            <KeyboardDoubleArrowRightIcon />
          </button>
        </div>
      </div>

      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {Deals.map((deal, index) => {
              return (
                <div className="embla__slide" key={index}>
                  <div className="cards-container">
                    <img src={deal.deal_img} />

                    <h5>{deal.deal_name}</h5>

                    <p className="deal-rating">⭐{deal.rating}</p>

                    <p className="deal-price">
                      ₹{deal.price}
                      <span className="price-drop">
                        <del>{deal.pdrop}</del>
                      </span>
                    </p>

                    <div className="deal-btns">
                      <button className="deal-cart">Add To Cart</button>
                      <button className="deal-whitelist">
                        <FavoriteBorderIcon />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default DealOfDay;
