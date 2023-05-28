import { useState } from "react";
import { BsCart2, CiMenuFries, IoMdClose } from "react-icons/all";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import Logo from "../../assets/Images/Logo.png";
import "./NavBar.scss";
const NavBar = () => {
  const [show, setShow] = useState(false);
  const showNavBar = () => {
    setShow(!show);
  };
  const data = useSelector((state) => state.cartData.cart);
  const totalQunatity = data
    .map((item) => item.quantity)
    .reduce((x, y) => x + y, 0);

  return (
    <>
      <nav>
        <div className="Main-nav">
          <div className="Nav-logo">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div
            className={`${show ? "Nav-links Nav-links-show " : "Nav-links"}`}
          >
            <span className="Navbar-hide">
              <IoMdClose onClick={showNavBar} />
            </span>
            <ul>
              <li>
                <Link to="/" onClick={showNavBar}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/AboutUs" onClick={showNavBar}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/Menu" onClick={showNavBar}>
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/Contact" onClick={showNavBar}>
                  Contact
                </Link>
              </li>
            </ul>
            <div className="Nav-Btn">
              <Link to="/Cart" onClick={showNavBar}>
                <button>
                  <div className="Cart">
                    <BsCart2 />
                    <span>{totalQunatity}</span>
                  </div>
                </button>
              </Link>
            </div>
          </div>
          <div className="Hamburger">
            <CiMenuFries onClick={showNavBar} />
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
