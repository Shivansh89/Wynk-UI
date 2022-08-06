import React from "react";
import { Carousel } from "antd";
import { Image } from "antd";
import "../styles/Slider.css";
import carouselImages from "../Data/carouselImage";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";

const arrowButtonCustomLeft = {
  display: "block",
  zIndex: "100",
  width: "25px",
  left: "10%",
  color: "black",
  fontSize: "50px",
};
const arrowButtonCustomRight = {
  display: "block",
  zIndex: "100",
  width: "25px",
  right: "10%",
  color: "black",
  fontSize: "50px",
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, ...arrowButtonCustomRight }}
      onClick={onClick}
    >
      <RightCircleFilled />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, ...arrowButtonCustomLeft }}
      onClick={onClick}
    >
      <LeftCircleFilled />
    </div>
  );
}

const Crousel = (props) => {
  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    speed: 700,
    initialSlide: 0,
    autoplay: true,
  };
  return (
    <>
      <Carousel arrows {...settings}>
        {carouselImages.map((item) => {
          return (
            <div className="cars">
              <Image src={item} />
            </div>
          );
        })}
      </Carousel>
    </>
  );
};
export default Crousel;
