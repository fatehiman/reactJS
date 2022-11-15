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
      xIsNext: true,
      finalWinner: "",
    };
  }

  handleClick(i) {
    if (!this.state.squares[i] && !calculateWinner(this.state.squares)) {
      const squaresB = this.state.squares.slice();
      squaresB[i] = this.state.xIsNext ? "X" : "O";
      this.setState({ squares: squaresB, xIsNext: !this.state.xIsNext });
    }
  }

  renderSquares(i) {
    return <Cell valuex={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
  }

  doResetGame() {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true,
    });
  }

  render() {
    let gameStatus;
    const winner = calculateWinner(this.state.squares);
    if (winner) {
      // gameStatus = <span style={{ color: "red" }}> Winner: </span>;
      gameStatus = (
        <>
          <span style={{ color: "red" }}> Winner: </span> <span style={{ color: "green", fontWeight: "bold" }}> {winner} </span>
        </>
      );
      // this.setState({ finalWinner: winner });
      // this.state = {finalWinner: winner};
    } else {
      gameStatus = (
        <>
          Next player: <span style={{ color: "red" }}> {this.state.xIsNext ? "X" : "O"} </span>
        </>
      );
    }
    return (
      <>
        <div>
          <button onClick={() => this.doResetGame()}>Reset Game</button>
        </div>
        {gameStatus}
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

function Cell(props) {
  return (
    <button className="cell" onClick={props.onClick}>
      {props.valuex}
    </button>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;
