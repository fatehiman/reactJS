import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Jeff",
      family: "Bzoss",
    };
  }

  render() {
    return (
      <div>        
        Hello {this.state.name} {this.state.family}
      </div>
    );
  }
}

export default App;
