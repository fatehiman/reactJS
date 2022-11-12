import React from "react";
import "./Game.css";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="divWithBorder">
        This is Game Class
        <div className="divWithBorder">
          <Board />
        </div>
      </div>
    );
  }
}

class Board extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <Cell tikIndex="1" />
          <Cell tikIndex="2" />
          <Cell tikIndex="3" />
        </div>
        <div className="row" style={{ backgroundColor: '#fff0f0' }}>
          <Cell tikIndex="4" />
          <Cell tikIndex="5" />
          <Cell tikIndex="6" />
        </div>
        <div className="row">
          <Cell tikIndex="7" />
          <Cell tikIndex="8" />
          <Cell tikIndex="9" />
        </div>
      </div>
    );
  }
}

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tikIndexInState: "\u00A0",
    };
  }

  doClick(event) {
    console.log(event);
    if (this.state.tikIndexInState === "\u00A0") {
      // if (this.state.tikIndexInState===)
      this.setState({
        tikIndexInState: "O",
      });
    } else {
      this.setState({
        tikIndexInState: "X",
      });
    }
  }

  render() {
    return (
      <div className="cell" onClick={(event) => this.doClick(event)}>
        {this.state.tikIndexInState}
      </div>
    );
  }
}

export default Game;
