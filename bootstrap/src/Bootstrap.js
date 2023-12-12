import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function Bootstrap() {
  return (
    <Container>
      {/* Headings and muted*/}
      <p className="display-5">Hello Bootstrap</p>
      <p className="h1">Welcome</p>
      <h1 className="display-1 text-muted">Welcome</h1>
      <h1 className="display-2">Welcome</h1>
      <h1 className="display-3">Welcome</h1>
      <h1 className="display-4">Welcome</h1>
      {/* Lead */}
      <p className="lead ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
        veniam illum eum neque ut quis repellendus asperiores rerum dolores
        quidem alias consectetur unde illo est a voluptas impedit necessitatibus
        sint.
      </p>
      {/* text alignment */}
      <h1 className="display-2 text-center">Alignment</h1>
      <h1 className="display-2 text-end">Alignment</h1>
      {/* text uppercase, lowercase */}
      <p className="text-capitalize">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        reprehenderit blanditiis maxime perspiciatis ipsum eos quia possimus at
        ea dolores. Corrupti veniam, illum in alias nobis nesciunt consequuntur
        neque veritatis.
      </p>
      <p className="text-uppercase">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        reprehenderit blanditiis maxime perspiciatis ipsum eos quia possimus at
        ea dolores. Corrupti veniam, illum in alias nobis nesciunt consequuntur
        neque veritatis.
      </p>
      <p className="text-lowercase">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        reprehenderit blanditiis maxime perspiciatis ipsum eos quia possimus at
        ea dolores. Corrupti veniam, illum in alias nobis nesciunt consequuntur
        neque veritatis.
      </p>
      {/* font size */}
      <p className="fs-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        reprehenderit blanditiis maxime perspiciatis ipsum eos quia possimus at
        ea dolores. Corrupti veniam, illum in alias nobis nesciunt consequuntur
        neque veritatis.
      </p>
      {/* Font weight and styles */}
      <h4 className="fw-bold">Hello world</h4>
      <h4 className="fst-italic">Hello world</h4>
      {/* Text decoration */}
      <p className="text-decoration-underline">Hello World</p>
      <a href="@" className="text-decoration-none">
        Hello
      </a>
      <br />
      <Image src={require("./welcome.jpg")} fluid roundedCircle></Image>
      {/* text colour and background colour */}
      <p className="text-bg-primary text-warning p-3">Text Colour</p>
      {/* opacity */}
      <p className="text-black-50">Opacity</p>
      <p className="text-bg-primary text-warning p-3 m-5">Margin</p>
      <p className="text-bg-danger m-auto" style={{ width: 200 }}>
        Margin Auto
      </p>
      <br />
      <p className="text-bg-primary border border-5 border-danger rounded-pill">
        Border
      </p>
      <p className="text-bg-primary p-3 m-5 d-block">display</p>
      <br />
      <div className="d-flex flex-column align-items-center">
        <p className="m-2 p-2 text-bg-primary w-50">Flex1</p>
        <p className="m-2 p-2 text-bg-primary w-50">Flex2</p>
        <p className="m-2 p-2 text-bg-primary w-50">Flex3</p>
      </div>
      <div className="d-flex justify-content-center">
        <p className="m-2 p-2 text-bg-primary w-25">Flex1</p>
        <p className="m-2 p-2 text-bg-primary w-25">Flex2</p>
        <p className="m-2 p-2 text-bg-primary w-25">Flex3</p>
      </div>
      <div className="vstack gap-1 align-items-center">
        <p className="m-3 p-3 w-50 text-bg-secondary">VStack1</p>
        <p className="m-3 p-3 w-50 text-bg-secondary">VStack2</p>
        <p className="m-3 p-3 w-50 text-bg-secondary">VStack3</p>
      </div>
      <div className="hstack gap-1 align-items-center">
        <p className="m-3 p-3 w-50 text-bg-secondary">HStack1</p>
        <p className="m-3 p-3 w-50 text-bg-secondary">HStack2</p>
        <p className="m-3 p-3 w-50 text-bg-secondary">HStack3</p>
      </div>
      <div className="shadow bg-light m-3 p-3">Shadow</div>
      <>
        <Button className="button-color">Primary</Button>
        <Button variant="secondary">Secondary</Button>{" "}
        <Button variant="success">Success</Button>{" "}
        <Button variant="warning">Warning</Button>{" "}
        <Button variant="danger">Danger</Button>{" "}
        <Button variant="info">Info</Button>{" "}
        <Button variant="light" className="button-color">
          Light
        </Button>{" "}
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
      </>
    </Container>
  );
}

export default Bootstrap;
