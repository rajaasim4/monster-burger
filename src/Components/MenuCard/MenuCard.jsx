import { RiShoppingBasket2Line } from "react-icons/all";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../Store/Shopping/CartSlice";
import hoverImg from "../../assets/Images/leaf.png";
import "./MenuCard.scss";
const MenuCard = (props) => {
  const dispatch = useDispatch();
  const AddToCart = () => {
    dispatch(
      addToCart({
        id: props.id,
        name: props.name,
        price: props.price,
        img: props.imgsrc,
      })
    );
    toast("Item Added to the Cart");
  };
  return (
    <div className="MenuCard">
      <img src={hoverImg} alt="" className="MenuCard-hoverimg" />
      <div className="MenuCard-left-section">
        <img src={props.imgsrc} alt="" />
      </div>
      <div className="MenuCard-right-section">
        <button>{props.saleValue}</button>
        <h4>{props.name}</h4>
        <p>
          parmesan cheese - lettuce - Whiskey BBQ Ketchup - Bacon Cheddar - 500
          gr beef
        </p>
        <h5>
          $ <span>{props.price}</span>
          <del>
            $<span>{props.oldPrice}</span>
          </del>
        </h5>
        <button className="Menu-cart" onClick={AddToCart}>
          <RiShoppingBasket2Line /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
