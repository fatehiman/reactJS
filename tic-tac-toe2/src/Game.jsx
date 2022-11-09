import React from "react";
import "./Game.css";

class Game extends React.Component {
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
    return <div>This is BoardClass</div>;
  }
}

export default Game;
