import "./hero.css";
import { useCallback, useEffect, useState } from "react";

import headphoneImg from "../../../assets/header_headphone_image.png";
import playstationImg from "../../../assets/playstation_image.png";
import macbookImg from "../../../assets/header_macbook_image.png";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

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
    sale: "40%",
    rating: "4.9 / 5 Rating",
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
    sale: "30%",
    rating: "4.8 / 5 Rating",
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
    sale: "40%",
    rating: "5.0 / 5 Rating",
  },
];

function Hero() {
  const autoplay = Autoplay({
    delay: 4500,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      duration: 30,
    },
    [autoplay],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="hero">
      <div className="hero-embla">
        <div className="hero-embla__viewport" ref={emblaRef}>
          <div className="hero-embla__container">
            {heroSlides.map((slide) => (
              <div className="hero-embla__slide" key={slide.id}>
                <div className={slide.className}>
                  <div className="hero-container">
                    {/* LEFT */}

                    <div className="hero-content">
                      <span className="hero-badge">{slide.badge}</span>

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

                      <div className="hero-features">
                        <div className="feature-pill">🚚 Free Shipping</div>

                        <div className="feature-pill">🔒 Secure Payment</div>

                        <div className="feature-pill">⭐ Premium Quality</div>
                      </div>
                    </div>

                    {/* RIGHT */}

                    <div className="hero-image">
                      <div className="offer-card">
                        <span>SALE</span>
                        <h3>{slide.sale} OFF</h3>
                      </div>

                      <img src={slide.image} alt={slide.alt} loading="lazy" />

                      <div className="rating-card">
                        ⭐⭐⭐⭐⭐
                        <p>{slide.rating}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NAVIGATION */}

        <button
          className="embla__prev"
          onClick={scrollPrev}
          aria-label="Previous Slide"
        >
          ←
        </button>

        <button
          className="embla__next"
          onClick={scrollNext}
          aria-label="Next Slide"
        >
          →
        </button>

        {/* DOTS */}

        <div className="embla__dots">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`embla__dot ${
                index === selectedIndex ? "is-selected" : ""
              }`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
