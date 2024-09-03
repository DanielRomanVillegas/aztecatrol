import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slide-container mb-9">
      <Slider {...settings}>
        <div
          className="bg-green-500 rounded-sm p-4 h-96 w-44"
          style={{ width: "60%" }}
        >
          <h3>1</h3>
        </div>
        <div className="bg-green-500 rounded-sm p-4">
          <h3>2</h3>
        </div>
        <div className="bg-green-500 rounded-sm p-4">
          <h3>3</h3>
        </div>
        <div className="bg-green-500 rounded-sm p-4">
          <h3>4</h3>
        </div>
        <div className="bg-green-500 rounded-sm p-4">
          <h3>5</h3>
        </div>
        <div className="bg-green-500 rounded-sm p-4">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};
