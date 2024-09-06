import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carouseltem } from "./Carouseltem";
import { useQuery } from "../../hooks";
import { FC } from "react";

interface Props {
  title: string;
}

export const Carousel: FC<Props> = ({ title }) => {
  const { isPc } = useQuery();
  const settings = {
    className: isPc() ? "center" : "",
    centerMode: isPc(),
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: isPc() ? 3 : 1,
    slidesToScroll: 1,
    centerPadding: "60px",
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div className="slide-container my-9">
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
