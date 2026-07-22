import "./Brands.css";
import brand1 from "../../../assets/brands/logo-Casio.webp";
import brand2 from "../../../assets/brands/logo-Dell.webp";
import brand3 from "../../../assets/brands/logo-hanwha.webp";
import brand4 from "../../../assets/brands/logo-HP.webp";
import brand5 from "../../../assets/brands/logo-Kuang-tai.webp";
import brand6 from "../../../assets/brands/logo-LETV.webp";
import brand7 from "../../../assets/brands/logo-lg-chem.webp";
import brand8 from "../../../assets/brands/logo-Mitsubishi.webp";
import brand9 from "../../../assets/brands/logo-NG.webp";
import brand10 from "../../../assets/brands/logo-panasonic.webp";
import brand11 from "../../../assets/brands/logo-Primayudha.webp";
import brand12 from "../../../assets/brands/logo-samsung.webp";
import brand13 from "../../../assets/brands/logo-SICT.webp";
import brand14 from "../../../assets/brands/logo-spice-telecom.webp";
import brand15 from "../../../assets/brands/logo-Tenda.webp";

// requirment
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useRef } from "react";

function Brands() {
  const BrandsLogo = [
    {
      logo: brand1,
    },
    {
      logo: brand2,
    },
    {
      logo: brand3,
    },
    {
      logo: brand4,
    },
    {
      logo: brand5,
    },
    {
      logo: brand6,
    },
    {
      logo: brand7,
    },
    {
      logo: brand8,
    },
    {
      logo: brand9,
    },
    {
      logo: brand10,
    },
    {
      logo: brand11,
    },
    {
      logo: brand12,
    },
    {
      logo: brand13,
    },
    {
      logo: brand14,
    },
    {
      logo: brand15,
    },
  ];

  const Autoscroll = useRef(
    AutoScroll({
      speed: 1.5,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [Autoscroll.current],
  );

  return (
    <>
      <div className="brands-container">
        {/* content  */}
        <div className="brand-content">
          <p>1000+ Brands | 100% Orginal Products</p>
        </div>

        {/* cards  */}
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {BrandsLogo.map((brands, index) => {
                return (
                  <div className="embla__slide">
                    <div className="brand-logo" key={index}>
                      <img src={brands.logo} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brands;
