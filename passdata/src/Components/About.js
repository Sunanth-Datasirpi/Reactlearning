import React from "react";
import { useLocation } from "react-router-dom";

function About(props) {
  const location = useLocation();
  const data = location.state?.data;
  return (
    <div>
      About Page
      <h1 style={{ color: "red" }}>{data ? data.title : "Go to home"}</h1>
    </div>
  );
}

export default About;
