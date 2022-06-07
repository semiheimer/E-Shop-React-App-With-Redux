import React from "react";
import bannerImage from "../../assets/banner.png";
import CheckoutItem from "./CheckoutItem";
import classes from "./Checkout.module.css";
import SubTotal from "./SubTotal";
import { useSelector } from "react-redux";

function Checkout() {
  const cartData = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const subTotal = useSelector((state) => state.cart.subTotalPrice);

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
          {`${totalQuantity} item(s): `}{" "}
          <strong>
            <small>$</small>
            {`${subTotal}`}
          </strong>
        </div>
      </div>
      <div className={classes.checkout_right}>
        <SubTotal subTotal={subTotal} totalQuantity={totalQuantity} />
      </div>
    </div>
  );
}

export default Checkout;
