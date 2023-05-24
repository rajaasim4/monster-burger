import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartCard from "../../Components/CartCard/CartCard";
import "./Cart.scss";
const Cart = () => {
  const items = useSelector((state) => state.cartData);
  console.log(items.cart);
  let data = items.cart;
  let subTotal = 0;
  if (data.length > 0) {
    subTotal = data
      .map((Val) => {
        return Val.subTotal;
      })
      .reduce((x, y) => x + y);
  }
  const total = subTotal + 15;

  return (
    <div className="CartSection">
      <div className="CartSection-main">
        <div className="Cart-billing">
          <div className="Cart-billing-heading">
            <h4>Sub Total</h4>
            <h5>${subTotal.toFixed(2)}</h5>
          </div>
          <div className="Cart-billing-heading">
            <h4>Shipping Cost</h4>
            <h5>$15</h5>
          </div>
          <div className="Cart-billing-heading">
            <h4>Total</h4>
            <h5>${total.toFixed(2)}</h5>
          </div>
        </div>
        <div className="Cart-items">
          {items.cart.length <= 0 ? (
            <>
              <h1>No Items Added yet</h1>
              <Link to="/Menu">
                <button className="Cart-Menu_btn">Buy Items</button>
              </Link>
            </>
          ) : (
            items.cart.map((Val, index) => {
              return (
                <React.Fragment key={index}>
                  <CartCard {...Val} />
                </React.Fragment>
              );
            })
          )}
        </div>
      </div>
      ```
    </div>
  );
};

export default Cart;
