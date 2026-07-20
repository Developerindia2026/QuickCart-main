import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./hero.css";

import headphoneImg from "../../../assets/header_headphone_image.png";
import playstationImg from "../../../assets/playstation_image.png";
import macbookImg from "../../../assets/header_macbook_image.png";

const heroSlides = [
  {
    id: 1,
    className: "hero-slide hero-headphone",
    badge: "🔥 Limited Offer • Up to 30% OFF",
    title: "Experience Premium Sound Like Never Before",
    description:
      "Discover industry-leading headphones with crystal-clear audio, active noise cancellation, and unbeatable comfort.",
    image: headphoneImg,
    alt: "Premium Headphones",
    primaryBtn: "Shop Now",
    secondaryBtn: "Explore Collection",
  },
  {
    id: 2,
    className: "hero-slide hero-playstation",
    badge: "🎮 New Arrival",
    title: "Level Up Your Gaming Experience",
    description:
      "Powerful performance, lightning-fast loading, and immersive gameplay with the latest PlayStation console.",
    image: playstationImg,
    alt: "PlayStation 5",
    primaryBtn: "Buy Now",
    secondaryBtn: "View Details",
  },
  {
    id: 3,
    className: "hero-slide hero-macbook",
    badge: "💻 Exclusive Deal • Save 40%",
    title: "Power Meets Elegance With MacBook Pro",
    description:
      "Designed for creators and professionals with incredible speed, all-day battery life, and a stunning Retina display.",
    image: macbookImg,
    alt: "MacBook Pro",
    primaryBtn: "View Product",
    secondaryBtn: "Learn More",
  },
];

function Hero() {
  return (
    <section className="hero">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        speed={900}
        loop
        className="hero-swiper"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={slide.className}>
              <div className="hero-container">

                {/* LEFT CONTENT */}

                <div className="hero-content">

                  <span className="hero-badge">
                    {slide.badge}
                  </span>

                  <h1>{slide.title}</h1>

                  <p>{slide.description}</p>

                  <div className="hero-buttons">
                    <button className="primary-btn">
                      {slide.primaryBtn}
                    </button>

                    <button className="secondary-btn">
                      {slide.secondaryBtn}
                    </button>
                  </div>

                </div>

                {/* RIGHT IMAGE */}

                <div className="hero-image">

                  <div className="offer-card">
                    <span>SALE</span>
                    <h3>40% OFF</h3>
                  </div>

                  <img
                    src={slide.image}
                    alt={slide.alt}
                    loading="lazy"
                  />

                  <div className="rating-card">
                    ⭐⭐⭐⭐⭐
                    <p>4.9 / 5 Rating</p>
                  </div>

                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Hero;