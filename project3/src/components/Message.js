import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome Visitor", //creating state
    };
  }
  changeMessage() {
    this.setState({
      message: "Thanks for Subscribing", //setstate
    });
  }

  //class component
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}
export default Message;
