import classes from "./ProductDetails.module.css";
import ProducDetailsSlider from "../../UI/ProductDetailsSlider";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Rating } from "@mui/material";
import ValueButton from "../../UI/ValueButton";
import { cartActions } from "../../../store/cart/cart-slice";
import { useState } from "react";

function ProductDetails() {
  const dispatch = useDispatch();
  const params = useParams();
  const { products } = useSelector((state) => state.products);
  const [inputValue1, setInputValue1] = useState(1);
  const id = +params.productId;
  const currentProduct = products?.find((item) => item.id === id);

  // if (JSON.stringify(deferredQuery) === "{}" || !deferredQuery)
  //   return <p>Loading</p>;

  const { title, price, description, rating, images, brand } =
    currentProduct || {};

  const addToCartHandler = () => {
    if (inputValue1 > 0)
      dispatch(
        cartActions.addItemToCartWithQuantity({
          title,
          id,
          price,
          rating,
          image: images[0],
          quantity: +inputValue1,
        })
      );
  };

  return (
    <div className={classes.mainSide}>
      <div className={classes.leftSide}>
        <ProducDetailsSlider images={images} />
      </div>
      <div className={classes.rightSide}>
        <div
          style={{
            margin: "30px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3>
            <p style={{ display: "block", margin: "0" }}>{title}</p>
          </h3>
          <p style={{ display: "block", margin: "0" }}>
            {brand ? brand.toUpperCase() : brand}
          </p>
          <p style={{ display: "block", margin: "0" }}>{description}</p>
          <p style={{ display: "block", margin: "0" }}>
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <Rating
            className={classes.rating}
            name="half-rating-read"
            defaultValue={rating}
            precision={0.5}
            readOnly
            size="large"
          />
          <div className={classes.twobuttons}>
            <ValueButton
              setInputValue={setInputValue1}
              inputValue={inputValue1}
            />
            <button onClick={addToCartHandler}>Add to Basket</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
