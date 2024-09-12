import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carouseltem } from "./Carouseltem";

import { FC } from "react";

interface Props {
  title?: string;
}

export const Carousel: FC<Props> = ({ title = "EJemplo" }) => {
  const settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "60px",
    arrows: false,
    autoplay: false,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 924,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          className: "",
        },
      },
    ],
  };
  return (
    <>
      <h2 className="mx-6 mt-7 text-xl font-semibold">{title}</h2>
      <div className="slide-container">
        <Slider {...settings}>
          <Carouseltem />
          <Carouseltem />
          <Carouseltem />
          <Carouseltem />
          <Carouseltem />
          <Carouseltem />
        </Slider>
      </div>
    </>
  );
};
