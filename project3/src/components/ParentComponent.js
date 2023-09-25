import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class ParentComponent extends Component {
  //state
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };
    this.greetparent = this.greetparent.bind(this);
  }
  //getting value from child
  greetparent(childName) {
    alert(`Hi this is ${this.state.parentName} from ${childName}`);
  }
  render() {
    return (
      <div>
        <ChildComponent sun={this.greetparent} />
      </div>
    );
  }
}
