import React from "react";

class App extends React.Component {
  render() {
    return <Board />;
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    const squaresB = this.state.squares.slice();
    squaresB[i] = "X";
    this.setState({ squares: squaresB });
  }

  renderSquares(i) {
    return <Cell valuex={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
  }

  render() {
    return (
      <>
        <div className="row">
          {this.renderSquares(0)}
          {this.renderSquares(1)}
          {this.renderSquares(2)}
        </div>
        <div className="row">
          {this.renderSquares(3)}
          {this.renderSquares(4)}
          {this.renderSquares(5)}
        </div>
        <div className="row">
          {this.renderSquares(6)}
          {this.renderSquares(7)}
          {this.renderSquares(8)}
        </div>
      </>
    );
  }
}

class Cell extends React.Component {
  render() {
    return (
      <button className="cell" onClick={() => this.props.onClick()}>
        {this.props.valuex}
      </button>
    );
  }
}

export default App;
