import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import { useSelector } from "react-redux";
import classes from "./PopularProducts.module.css";
function PopularProducts() {
  const products = useSelector((state) =>
    state.products.products?.filter((item, key) => key < 3)
  );

  // if (isLoading) {
  //   return (
  //     <section>
  //       <p>"Loading...!"</p>
  //     </section>
  //   );
  // }

  const productsList =
    products &&
    products.map((product) => (
      <ProductItem
        key={product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        price={product.price}
        image={product.images[0]}
        rating={product.rating}
      />
    ));
  return (
    <div className={classes.popular_row}>
      <div className={classes.popular__products}>{productsList}</div>
    </div>
  );
}

export default PopularProducts;
