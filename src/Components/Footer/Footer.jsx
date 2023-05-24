import {
  AiOutlineTwitter,
  BsTelephone,
  FaFacebookF,
  FiMail,
  HiOutlineLocationMarker,
  RxInstagramLogo,
} from "react-icons/all";
import Logo from "../../assets/Images/Logo.png";
import "./Footer.scss";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-main">
          <div className="footer-section-1">
            <img src={Logo} alt="" />
          </div>
          <div className="footer-section-2">
            <address>
              <FiMail />
              info@monsterburger.com <br />
              <BsTelephone />
              +577 898 898 +577 898 898 2311 <br />
              <HiOutlineLocationMarker />
              Hill Street Napoleon, OH 43545
            </address>
          </div>
          <div className="footer-section-3">
            <div className="Footer-Social">
              <a href="">
                <FaFacebookF />
                <span>Facebook</span>
              </a>
              <a href="">
                <AiOutlineTwitter />
                <span>Twitter</span>
              </a>
              <a href="">
                <RxInstagramLogo />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <p>
          &copy; {new Date().getFullYear()}
          <span>Monster Burger </span>
          Fast Food. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
