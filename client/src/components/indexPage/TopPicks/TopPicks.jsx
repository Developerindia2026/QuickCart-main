import "./TopPicks.css";
import Grid from "@mui/material/Grid";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import analogWatch from "../../../assets/deals/analog-watch-deal.png";
import earbuds from "../../../assets/deals/earbuds-deal.png";
import iphone from "../../../assets/deals/iphone-deal.png";
import mouse from "../../../assets/deals/mouse-deal.png";
import powerBank from "../../../assets/deals/powerbank-deal.png";
import tshirt from "../../../assets/deals/tshirt-deal.png";

function TopPicks() {
  const Picks = [
    {
      picks_img: analogWatch,
      picks_name: "Paris Bercy Collection Modern Chronograph Watch",
      rating: "3.6(1500)",
      price: "1,999",
      pdrop: "3,000",
    },
    {
      picks_img: earbuds,
      picks_name: "TWS Earbuds up to 54 Hours Playback",
      rating: "4.8(500)",
      price: "999",
      pdrop: "1500",
    },
    {
      picks_img: iphone,
      picks_name: "iPhone Air 1 TB: Thinnest iPhone Ever",
      rating: "5.8(1200)",
      price: "100,000",
      pdrop: "1,75,000",
    },
    {
      picks_img: mouse,
      picks_name: "Logitech MX Master 3S Bluetooth Edition Wireless Mouse",
      rating: "2.8(1500)",
      price: "499",
      pdrop: "999",
    },
    {
      picks_img: powerBank,
      picks_name: "Amazon Basics 20000 mAh Power Bank",
      rating: "3.8(1200)",
      price: "800",
      pdrop: "1200",
    },
    {
      picks_img: tshirt,
      picks_name: "Men's Anti-Stain Casual Solid Polo T-Shirt, Anti-Odor",
      rating: "4.8(1200)",
      price: "699",
      pdrop: "1,200",
    },
  ];

  return (
    <>
      <div className="picks-container">
        <h2>Top Picks⭐</h2>

        <Grid container spacing={3}>
          {Picks.map((items, index) => {
            return (
                <Grid size={{ xs: 6, md: 4 }} key={index}>
                  <div className="picks-card">
                    <img src={items.picks_img} />
                    <h5>{items.picks_name}</h5>

                    <p className="picks-rating">⭐{items.rating}</p>

                    <p className="picks-price">
                      ₹{items.price}
                    </p>

                    <div className="picks-btns">
                      <button className="picks-cart">Add To Cart</button>
                      <button className="picks-whitelist">
                        <FavoriteBorderIcon />
                      </button>
                    </div>
                  </div>
                </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
}

export default TopPicks;
