import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card } from "antd";
import "../styles/Body.css";
import { cardsDataRow1, cardsDataRow2 } from "../Data/cardsImages";

const { Meta } = Card;

const Body = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 6, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1124, min: 464 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 730, min: 495 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
  };

  return (
    <>
      {/* !st row of cards */}
      <div className="container headings">
        <h2 className="body-headings">New Releases</h2>
        <a href="/" className="more">
          {" "}
          More{" "}
        </a>
      </div>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        customTransition="all .5"
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {cardsDataRow1.map((item) => {
          return (
            <Card
              hoverable
              
              cover={<img src={item.imgURL} />}
            >
              <Meta title={item.title} />
            </Card>
          );
        })}
      </Carousel>

      {/* 2nd row of Cards */}
      <div className="container headings">
        <h2 className="body-headings">Upcoming Artists</h2>
        <a href="/" className="more">
          {" "}
          More{" "}
        </a>
      </div>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        customTransition="all .5"
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {cardsDataRow2.map((item) => {
          return (
            <Card
              hoverable
           
              cover={<img src={item.imgURL} />}
            >
              <Meta title={item.title} />
            </Card>
          );
        })}
      </Carousel>
      {/* 3rd row of Cards */}
      <div className="container headings">
        <h2 className="body-headings">Top Charts</h2>
        <a href="/" className="more">
          {" "}
          More{" "}
        </a>
      </div>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        customTransition="all .5"
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {cardsDataRow1.map((item) => {
          return (
            <Card
              hoverable
            
              cover={<img src={item.imgURL} />}
            >
              <Meta title={item.title} />
            </Card>
          );
        })}
      </Carousel>
    </>
  );
};

export default Body;
