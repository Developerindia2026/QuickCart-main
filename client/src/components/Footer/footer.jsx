import logo from "../../assets/logo.svg";
import "./footer.css"

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="left-container">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className="left-para">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
            minus quaerat a deserunt labore nesciunt incidunt minima tenetur
            totam, hic amet eius cumque temporibus odit quasi, laudantium quam
            ut dolor possimus maiores neque vero adipisci modi nihil? Ipsum,
            eaque iste perferendis sit non quos accusamus nihil numquam suscipit
            odit cupiditate.
          </p>
        </div>

        <div className="right-side">
          <div className="center-section">
            <h3>Company</h3>
            <ul className="footer-links">
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy policy</li>
            </ul>
          </div>

          <div className="end-section">
            <h3>Get In Touch</h3>
            <p>+91 9999536528</p>
            <p>Deepanshu.dev80@gmail.com</p>
          </div>
        </div>

<br></br>

<div className="copyright-section">
          <p>Copyright 2025 © Deepanshu.dev All Right Reserved.</p>
        </div>
        
      </div>

      
    </>
  );
}

export default Footer;
