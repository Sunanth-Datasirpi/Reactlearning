import React, { Component } from "react";

class Welcome extends Component {
  //class component
  render() {
    const { name } = this.props; //class props destructuring
    return <h1>Welcome to my {name}.</h1>;
  }
}
export default Welcome;
