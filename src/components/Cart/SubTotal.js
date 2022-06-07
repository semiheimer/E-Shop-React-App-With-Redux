import React from "react";
import CurrencyFormat from "react-currency-format";
import classes from "./SubTotal.module.css";
function SubTotal({ subTotal, totalQuantity }) {
  return (
    <div className={classes.subtotal}>
      <CurrencyFormat
        renderText={(formattedValue) => {
          return (
            <>
              <p>
                Subtotal ({totalQuantity} items):<strong>${subTotal}</strong>
                <small className={classes.subtotal_gift}>
                  <input type="checkbox" />
                  as a Gift
                </small>
              </p>
            </>
          );
        }}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default SubTotal;
