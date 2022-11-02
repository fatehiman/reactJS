import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Michael",
      family: "Jackson",
      counter: 0,
    };
  }

  addCounter1 = () => {
    return {
      newCounter: this.state.counter++,
    };
  };

  // addCounter2() {
  //   return this.state.counter++;
  // };

  render() {
    return (
      <div>
        Hello {this.state.name} {this.state.family}, your conter is <span style={{ color: "red" }}> {this.state.counter} </span>
        <br />
        <button onClick={this.addCounter1()}>Add</button>
      </div>
    );
  }
}

export default App;
