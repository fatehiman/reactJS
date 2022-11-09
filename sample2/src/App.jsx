import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.name = "Michael";
    this.family = "Jackson";
    this.counter = 2;
    this.state = {
      counter: 3,
    };
    //this.addCounter1 = this.addCounter1.bind(this);
  }

  //   this.setState((state) => {
  //     return {
  //       counter: this.state.counter + 1,
  //     };
  //   });
  // };

  // addCounter2() {
  //   return this.state.counter++;
  // };

  render() {
    return (
      <div>
        Hello {this.getName()} {this.family}, your counter is <span style={{ color: "red" }}> {this.state.counter} </span>
        <br />
        <button onClick={()=>this.addCounter1()}>Add</button>
      </div>
    );
  }

  getName(){
    return this.name;
  }

  addCounter1(){
  //addCounter1 = () => {
  //addCounter1 (event){
    //this.state=counter: this.state.counter + 1;
    console.log('before: '+this.state.counter);

    // this.setState((counter) => {
    //   return {
    //     counter: this.counter + 1,
    //   };
    // });
    this.setState((state) => {
      return {
        counter: this.state.counter + 1,
      };
    });

    console.log('after: '+this.state.counter);
  };

}

export default App;
