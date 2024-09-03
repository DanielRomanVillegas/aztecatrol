import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carouseltem } from "./Carouseltem";

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div className="slide-container mb-9">
      <Slider {...settings}>
        <Carouseltem />
        <Carouseltem />
        <Carouseltem />
        <Carouseltem />
        <Carouseltem />
        <Carouseltem />
      </Slider>
    </div>
  );
};
