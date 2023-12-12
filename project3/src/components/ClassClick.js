import React, { Component } from "react";

//Event handler in class

export default class ClassClick extends Component {
  render() {
    function clickhandle() {
      alert("The button is clicked");
    }
    return (
      <div>
        <button onClick={clickhandle}>Click</button>
      </div>
    );
  }
}
