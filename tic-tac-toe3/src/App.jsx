import React from "react";

class App extends React.Component {
  render() {
    return <Board />;
  }
}

class Board extends React.Component {
  render() {
    return (
      <div className="board">
        <div>
          <Cell cellVal="1" />
          <Cell cellVal="2" />
          <Cell cellVal="3" />
        </div>
        <div>
          <Cell />
          <Cell />
          <Cell />
        </div>
        <div>
          <Cell />
          <Cell />
          <Cell />
        </div>
      </div>
    );
  }
}

class Cell extends React.Component {
  constructor(props) {
    super(props);
    // props.cellValLocal='6';
    this.state = {
      cellValLocal: props.cellVal,
    };
    if (!props.cellVal) {
      this.state = {
        cellValLocal: "\u00A0",
      };
    }
  }

  doOnClick() {
    console.log("Clicked!");
  }

  render() {
    // return <div className="cell">{"\u00A0"+this.state.cellValLocal} </div>;
    return (
      <div
        className="cell"
        onClick={() => {
          this.doOnClick();
        }}
      >
        {this.state.cellValLocal}{" "}
      </div>
    );
  }
}

export default App;
