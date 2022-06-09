import ProductItem from "../ProductItem/ProductItem";
import classes from "./TopProducts.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PrevArrow from "../../UI/PrevArrow";
import NextArrow from "../../UI/NextArrow";

function TopProducts({ products }) {
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

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={classes.slider2}>
      <Slider {...settings}>{productsList}</Slider>
    </div>
  );
}

export default TopProducts;
