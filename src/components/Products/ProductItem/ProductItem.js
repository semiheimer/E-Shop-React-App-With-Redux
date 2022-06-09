import classes from "./ProductItem.module.css";
import { Rating } from "@mui/material";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart/cart-slice";
import { NavLink } from "react-router-dom";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const price = `$${props.price.toFixed(2)}`;
  // const rating = Math.round(props.rating);
  // const stars = Array(rating)
  //   .fill()
  //   .map((_, i) => <p key={i}>⭐</p>);
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        title: props.title,
        price: props.price,
        image: props.image,
        rating: props.rating,
      })
    );
  };

  return (
    <div className={classes.product}>
      <NavLink className={classes.navlink} to={`/products/${props.id}`}>
        <img src={`${props.image}`} alt="desc" />
      </NavLink>
      <p style={{ display: "block", margin: "0", height: "3rem" }}>
        {props.title}
      </p>
      <p style={{ display: "block", margin: "0" }}>
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <Rating
        className={classes.rating}
        name="half-rating-read"
        defaultValue={props.rating}
        precision={0.5}
        readOnly
        size="large"
      />
      <button onClick={addToCartHandler}>Add to Basket</button>
    </div>
  );
};
export default ProductItem;
