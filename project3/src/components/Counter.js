import React, { Component } from "react";

class Counter extends Component {
  //state
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  //setstae
  Increment() {
    this.setState({
      count: this.state.count + 1,
    });

    //incrementing by 5

    // this.setState((previous) => ({
    //   count: previous.count + 1,
    // }));
  }

  Incrementfive() {
    this.Increment();
    this.Increment();
    this.Increment();
    this.Increment();
    this.Increment();
  }

  render() {
    return (
      <div>
        <div>Counter- {this.state.count}</div>
        <button onClick={() => this.Increment()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
