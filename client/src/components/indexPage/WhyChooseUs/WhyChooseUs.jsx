import "./WhyChooseUs.css";
import Grid from "@mui/material/Grid";
import PaymentsIcon from "@mui/icons-material/Payments";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";

function WhyChooseUs() {
  return (
    <>
      <div className="chooseus-container">
        <h1>Why Choose Us</h1>

        <div className="chooseus-cards">
          <Grid container spacing={0} justifyContent="center">
            {/* 1  */}
            <Grid size={{ xs: 12, sm: 6, md: 3, lg: 2 }}>
              <div className="choose-card">
                <AssuredWorkloadIcon className="choose-icon" />
                <div className="choose-content">
                  <h3>Secure Platform</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Facere architecto adipisci
                  </p>
                </div>
              </div>
            </Grid>

            {/* 2nd  */}
            <Grid size={{ xs: 12, sm: 6, md: 3, lg: 2 }}>
              <div className="choose-card">
                <PaymentsIcon className="choose-icon" />
                <div className="choose-content">
                  <h3>Digital Payments</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Facere architecto adipisci
                  </p>
                </div>
              </div>
            </Grid>

            {/* 3rd  */}
            <Grid size={{ xs: 12, sm: 6, md: 3, lg: 2 }}>
              <div className="choose-card">
                <LocalShippingIcon className="choose-icon" />
                <div className="choose-content">
                  <h3>Fast Delivery</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Facere architecto adipisci
                  </p>
                </div>
              </div>
            </Grid>

            {/* 4rd   */}
            <Grid size={{ xs: 12, sm: 6, md: 3, lg: 2 }}>
              <div className="choose-card">
                <SupportAgentIcon className="choose-icon" />
                <div className="choose-content">
                  <h3>24/7 Support</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Facere architecto adipisci
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUs;
