import "./Advertisment.css";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// images
import gamingPad from "../../../assets/controller-ps5.png";
import headphone from "../../../assets/bose_headphone_image.png";
import earbuds from "../../../assets/sony_airbuds_image.png";

function Advertisment() {
  const autoplay = useRef(
    Autoplay({
      delay: 1500,
      stopOnMouseEnter: false,
      stopOnInteraction: true,
    }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [autoplay.current],
  );

  const goToPrev = () => emblaApi?.goToPrev();
  const goToNext = () => emblaApi?.goToNext();

  return (
    <>
      <div className="advert-embla">
        <div className="advert-embla__viewport" ref={emblaRef}>
          <div className="advert-embla__container">
            <div className="advert-embla__slide">
              <div className="advertisment-container">
                <div className="upside">
                  <h5>Up To 50% Discount</h5>
                  <p>On Gaming Accessories</p>
                  <button>Shop Now</button>
                </div>
                <div className="image-section">
                  <img src={gamingPad} />
                </div>
              </div>
            </div>
            <div className="advert-embla__slide">
              <div className="advertisment-container">
                <div className="upside">
                  <h5>Up To 100% Cashback</h5>
                  <p>On Music Accessories</p>
                  <button>Shop Now</button>
                </div>
                <div className="image-section">
                  <img src={headphone} />
                </div>
              </div>
            </div>
            <div className="advert-embla__slide">
              <div className="advertisment-container">
                <div className="upside">
                  <h5>Offers Gift Vouchers</h5>
                  <p>Experience Premium Sounds</p>
                  <button>Shop Now</button>
                </div>
                <div className="image-section">
                  <img src={earbuds} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="embla__prev" onClick={goToPrev}>
          <ArrowBackIosIcon></ArrowBackIosIcon>
        </button>
        <button className="embla__next" onClick={goToNext}>
          <ArrowForwardIosIcon></ArrowForwardIosIcon>
        </button>
      </div>
    </>
  );
}

export default Advertisment;
