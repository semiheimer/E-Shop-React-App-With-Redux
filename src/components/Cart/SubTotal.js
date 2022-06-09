import React from "react";
import classes from "./SubTotal.module.css";
function SubTotal({ subTotal, totalQuantity }) {
  return (
    <div className={classes.subtotal}>
      <p>
        Subtotal ({totalQuantity} items):
        <strong>
          ${subTotal.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
        </strong>
        <small className={classes.subtotal_gift}>
          <input type="checkbox" />
          as a Gift
        </small>
      </p>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default SubTotal;
