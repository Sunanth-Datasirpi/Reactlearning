import React from "react";
import { Container, Button } from "react-bootstrap";

const overlayStyle = {
  position: "absolute",
  content: "",
  left: 0,
  top: 0,
  background: "#000000",
  width: "100%",
  height: "100%",
  opacity: 0.6,
  zIndex: -1,
};

const imageContainerStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  zIndex: 1,
};

const contentStyle = {
  textAlign: "center",
  color: "white",
  position: "relative", // Ensure content appears above the overlay
};

function CardImage() {
  return (
    <Container fluid style={{ position: "relative" }}>
      <div style={overlayStyle}></div>
      <div style={imageContainerStyle}>
        <img
          src="https://img.freepik.com/free-photo/colleagues-using-laptops-notebooks-learning-study-session_23-2149285424.jpg?w=1380&t=st=1701546332~exp=1701546932~hmac=10734d7ce6e68a23043dc70b85e8de28b4f5aa4d3a10d47530945ae40ab98304" // Replace with your image URL
          alt="Large Image"
          style={{ maxWidth: "100%", maxHeight: "80vh" }}
        />
        <div style={contentStyle}>
          <h1>Image Title</h1>
          <p>Some description about the image.</p>
          <Button variant="primary">Button 1</Button>
          <Button variant="secondary" className="ms-2">
            Button 2
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default CardImage;
