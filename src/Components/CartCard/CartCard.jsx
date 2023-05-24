import { AiOutlineDelete } from "react-icons/all";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decrementItem,
  deleteItem,
} from "../../Store/Shopping/CartSlice";
import hoverImg from "../../assets/Images/leaf.png";
import "./CartCard.scss";
const CartCard = (props) => {
  const { id, name, price, quantity, subTotal, img } = props;
  const dispatch = useDispatch();
  return (
    <div className="CartCard">
      <img src={hoverImg} alt="" className="CartCard-hoverimg" />
      <div className="CartCard-left-section">
        <img src={img} alt="" />
      </div>
      <div className="CartCard-right-section">
        <h4>{name}</h4>
        <h5>
          $ <span>{price}</span>
        </h5>
        <div className="CartQunatityBtns">
          <button onClick={() => dispatch(decrementItem(id))}>-</button>
          <h5>{quantity}</h5>
          <button onClick={() => dispatch(addToCart(props))}>+</button>
        </div>
        <h5>
          <span className="subtotal">Subtotal:</span>${subTotal.toFixed(2)}
        </h5>
        <button className="deleteBtn" onClick={() => dispatch(deleteItem(id))}>
          <AiOutlineDelete /> Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
