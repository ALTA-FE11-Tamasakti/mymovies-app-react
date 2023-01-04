import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

export default class CarouselComponent extends Component {
  render() {
    return (
      <div className="carousel">
        <Carousel>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://pbs.twimg.com/media/FY-BpW9XwAIXIui.jpg"
              alt="First slide"
              style={{ width: "60" }}
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://pbs.twimg.com/media/FY-BpW9XwAIXIui.jpg"
              alt="Second slide"
              style={{ width: "60" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://pbs.twimg.com/media/FY-BpW9XwAIXIui.jpg"
              alt="Third slide"
              style={{ width: "60" }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
