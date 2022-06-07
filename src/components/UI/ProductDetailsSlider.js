import React from "react";
import Slider from "react-slick";
import "./ProductDetailsSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

function ProducDetailsSlider({ images = [] }) {
  const settings = {
    customPaging: function (i) {
      return (
        <div>
          <img
            src={images[i]}
            alt=""
            style={{
              width: "50px",
              height: "50px",
              objectFit: "cover",
              borderRadius: "6px",
            }}
          />
        </div>
      );
    },
    arrows: true,
    dots: true,
    dotsClass: "slick-dots custom-indicator",
    infinite: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <div className="slider3">
      <Slider {...settings}>
        {images.map((item, id) => (
          <div key={id}>
            <img type="image" src={item} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProducDetailsSlider;
