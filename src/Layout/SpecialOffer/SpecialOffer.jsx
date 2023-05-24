import BaconBurgerImg from "../../assets/Images/Bacon2x.png";
import "./SpecialOffer.scss";
const SpecialOffer = () => {
  return (
    <section className="SpecialOffer">
      <div className="SpecialOffer-main">
        <div className="SpecialOffer-main-left">
          <div className="SpecialOffer-main-left-text">
            <h2>Special Offer</h2>
            <h3>Order now & enjoy</h3>
            <button>25% to 50%</button>
          </div>
          <img src={BaconBurgerImg} alt="" />
        </div>
        <div className="SpecialOffer-main-right">
          <button>25% off</button>
          <h2>Bacon Burger</h2>
          <h3>Details</h3>
          <p>
            Parmesan Cheese - Lettuce - WHISKEY BBQ KETCHUP - Bacon Cheddar -
            500 gr Beef
          </p>
          <h4>
            $12.5
            <del>$20.5</del>
          </h4>
          <button>Order Now</button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
