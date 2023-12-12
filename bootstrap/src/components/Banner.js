import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Col, Container, Row } from "react-bootstrap";

function Banner() {
  return (
    <div>
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col lg={8} className="mt-5">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../pizza-5179939_640.jpg")}
                  alt="First"
                />
                <Carousel.Caption>
                  <h3>Cheese Pizza</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../group_4154_menu020160928174202.jpg")}
                  alt="First"
                />
                <Carousel.Caption>
                  <h3>Pepper BBQ Chicken Pizza</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <div className="text-center">
          <h2 className="display-5 mt-5">Pizza for Every Occasion</h2>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
