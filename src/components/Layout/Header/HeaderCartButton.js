import classes from "./HeaderCartButton.module.css";
import CartIcon from "../../Cart/CartIcon";
import { React, useState, useEffect } from "react";
import { useSelector } from "react-redux";

function HeaderCartButton(props) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (totalQuantity === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [totalQuantity]);

  return (
    <>
      <button className={btnClasses}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>My Cart</span>
        <span className={classes.badge}>{totalQuantity}</span>
      </button>
      {/* <MyModal showCart={showCart} onCloseCart={onCartCloseHandle} title="CART">
        <Cart onClose={onCartCloseHandle}></Cart>
      </MyModal> */}
    </>
  );
}

export default HeaderCartButton;
