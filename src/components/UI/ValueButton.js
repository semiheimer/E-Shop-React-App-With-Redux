import React from "react";
import classes from "./ValueButton.module.css";

function ValueButton({ setInputValue, inputValue }) {
  return (
    <form>
      <button
        className={classes["value-button"]}
        type="button"
        id="decrease"
        onClick={() =>
          setInputValue(inputValue === 1 ? inputValue : inputValue - 1)
        }
        value="Decrease Value"
      >
        -
      </button>
      <input
        type="number"
        className={classes.inputnumber}
        id="number"
        value={inputValue}
        onChange={(e) => setInputValue(+e.target.value)}
        min="1"
        max="4"
      />
      <button
        type="button"
        className={classes["value-button"]}
        id="increase"
        onClick={() =>
          setInputValue(inputValue === 5 ? inputValue : inputValue + 1)
        }
        value="Increase Value"
      >
        +
      </button>
    </form>
  );
}

export default ValueButton;
