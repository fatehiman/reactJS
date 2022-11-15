import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      xIsNext: true,
    };
  }

  doResetGame() {
    this.setState({
      history: [{ squares: Array(9).fill(null) }],
      xIsNext: true,
    });
  }

  handleClick(i) {
    const history2 = this.state.history;
    const current = history2[history2.length - 1];
    const squares2 = current.squares.slice();
    if (calculateWinner(squares2) || squares2[i]) return;
    squares2[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history2.concat([
        {
          squares: squares2,
        },
      ]),
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    const history2 = this.state.history;
    const current = history2[history2.length - 1];
    const winner = calculateWinner(current.squares);
    let gameStatus;
    if (winner) {
      gameStatus = (
        <>
          <span style={{ color: "green", fontWeight: "bold" }}> Winner: {winner} </span>
        </>
      );
    } else {
      gameStatus = (
        <>
          Next player: <span style={{ fontWeight: "Bold", color: this.state.xIsNext ? "brown" : "orange" }}> {this.state.xIsNext ? "X" : "O"} </span>
        </>
      );
    }
    return (
      <>
        {gameStatus}
        <Board squares={current.squares} runDoResetGame={() => this.doResetGame()} onClickx={(i) => this.handleClick(i)} />
      </>
    );
  }
}

class Board extends React.Component {
  renderSquares(i) {
    return <Cell valuex={this.props.squares[i]} onClick={() => this.props.onClickx(i)} />;
  }

  render() {
    return (
      <>
        <div>
          <button onClick={() => this.props.runDoResetGame()}>Reset Game</button>
        </div>
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
