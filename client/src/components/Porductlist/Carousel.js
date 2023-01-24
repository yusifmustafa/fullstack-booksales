import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Carousel.css";
import { Carousel } from "react-bootstrap";
  const Carousell = () => {
  return (
    <div className="main-slider">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2022/12/06/25346_Quote_A1_BOTY_12-06.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2022/03/09/Gateway_Quote_A1_03-09.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2022/12/06/25346_Quote_A3_12-06.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousell;
