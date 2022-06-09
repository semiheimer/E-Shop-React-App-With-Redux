import React from "react";
import bannerImage from "../../assets/banner.png";
import CheckoutItem from "./CheckoutItem";
import classes from "./Checkout.module.css";
import SubTotal from "./SubTotal";
import { useSelector } from "react-redux";

function Checkout() {
  const { totalQuantity, subTotalPrice, items } = useSelector(
    (state) => state.cart
  );
  const cartData = items;
  const cartList = cartData.map((item) => (
    <CheckoutItem key={item.id} item={item} />
  ));

  return (
    <div className={classes.checkout}>
      <div className={classes.checkout_left}>
        <img src={bannerImage} alt="" className={classes.checkout_banner} />
        <div>
          <h2 className={classes.checkout_title}>My Shopping Cart</h2>
          {cartList}
        </div>
        <div className={classes.subtotal}>
          {`${totalQuantity} item(s): `}
          <strong>
            <small>$</small>
            {`${subTotalPrice
              .toFixed(2)
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`}
          </strong>
        </div>
      </div>
      <div className={classes.checkout_right}>
        <SubTotal subTotal={subTotalPrice} totalQuantity={totalQuantity} />
      </div>
    </div>
  );
}

export default Checkout;
