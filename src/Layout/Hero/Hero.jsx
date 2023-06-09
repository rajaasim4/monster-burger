import {
  AiOutlineTwitter,
  FaFacebookF,
  RxInstagramLogo,
} from "react-icons/all";
import { Parallax } from "react-scroll-parallax";
import BurgerImg from "../../assets/Images/hero_burger.png";
import tomato1 from "../../assets/Images/tomato1.png";
import tomato2 from "../../assets/Images/tomato2.png";
import "./Hero.scss";
const Hero = () => {
  return (
    <section className="Hero">
      <div className="Hero-main">
        <div className="Hero-main-left">
          <h3>Food Qulaity</h3>
          <div className="Hero-paragraph">
            <p>
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
              Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
              Egestas Purus Viverra Accumsan In Nisl Nisi. Arcu Cursus Vitae
              Congue Mauris Rhoncus Aenean Vel El Pellentesque Id Nibh Tortor Id
              Aliquet Lectus Proin.
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div className="Hero-main-right">
          <h1>Monster Burger</h1>

          <img src={BurgerImg} loading="lazy" alt="" className="Hero-img" />

          {/* </Slide> */}
          <Parallax
            translateY={[10]}
            speed={10}
            className="Hero-float-img Hero-float-img1"
          >
            <img
              src={tomato1}
              className="Hero-float-img Hero-float-img1"
              loading="lazy"
              alt=""
            />
          </Parallax>
          <Parallax
            translateY={[10]}
            speed={10}
            className="Hero-float-img Hero-float-img2"
          >
            <img
              src={tomato2}
              className="Hero-float-img Hero-float-img2"
              loading="lazy"
              alt=""
            />
          </Parallax>
          <h3>A delicious Burger</h3>
        </div>
      </div>
      <div className="Hero-social">
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
    </section>
  );
};

export default Hero;
