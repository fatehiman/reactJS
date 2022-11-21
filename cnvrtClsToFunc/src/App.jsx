import React  from "react";

function App(){
  state = {
    name: "",
  };

  alertName = () => {
    alert(this.state.name);
  };

  handleNameInput = (e) => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div>
        <h3>This is a Class Component</h3>
        <input type="text" onChange={this.handleNameInput} value={this.state.name} placeholder="Your Name" />
        <button onClick={this.alertName}>Alert</button>
      </div>
    );
  }
}

export default App;
