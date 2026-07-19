import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import playstationimg from "../../../assets/playstation_image.png";
import headphoneimg from "../../../assets/header_headphone_image.png";
import macbookimg from "../../../assets/header_macbook_image.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Hero.css";

function Hero() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      <SwiperSlide>
        <div className="slide slide1">
          <div className="left-section">
            <p>Limited Time Offer 30% Off</p>
            <h2>Experience Pure Sound - Your Perfect Headphones Awaits!</h2>

            <div className="hero-buttons">
              <button className="primary-btn">Shop Now</button>
              <button className="secondary-btn">Explore More</button>
            </div>
          </div>

          <div className="right-section">
            <img src={headphoneimg} />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide slide2">
          <div className="left-section">
            <p>Hurry up only few lefts!</p>
            <h2>
              Next-Level Gaming Starts Here - Discover PlayStation 5 Today!
            </h2>
            <div className="hero-buttons">
              <button className="primary-btn">Buy Now</button>
              <button className="secondary-btn">Explore More</button>
            </div>
          </div>

          <div className="right-section">
            <img src={playstationimg} />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide slide3">
          <div className="left-section">
            <p>Exclusive Deal 40% Off </p>
            <h2>Power Meets Elegance - Apple MacBook Pro is Here for you!</h2>
            <div className="hero-buttons">
              <button className="primary-btn">View Now</button>
              <button className="secondary-btn">Explore More</button>
            </div>
          </div>

          <div className="right-section">
            <img src={macbookimg} />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Hero;
