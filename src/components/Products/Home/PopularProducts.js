import React, { useState, useEffect } from "react";
import ProductItem from "../ProductItem/ProductItem";
import { useSelector } from "react-redux";
import classes from "./PopularProducts.module.css";
const hasWindow = typeof window !== "undefined";
function getWindowDimensions() {
  const width = hasWindow ? window.innerWidth : null;

  if (width <= 480) return 1;
  if (width <= 600) return 2;
  if (width <= 760) return 3;
  if (width <= 1024) return 4;
  else return 5;
}

function PopularProducts() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  const products = useSelector((state) =>
    state.products.products?.filter((item, key) => key < windowDimensions)
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
