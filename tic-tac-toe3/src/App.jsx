import React from "react";

class App extends React.Component {
  render() {
    return <div className="board"><Board/></div>;
  }
}


class Board extends React.Component{
  render(){
    return(
      <div className="board"></div>
    )
  }
}

class Cell extends React.Component{
  render(){
    return <div className="cell">.</div>
  }
}

export default App;
