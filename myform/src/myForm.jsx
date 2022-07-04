import React, { Component } from "react";
//import { useState } from "react";

export default class MyForm extends Component {
  //  const [family, setFamily] = useState("-");
  //const savedFamily = "testFamily";
  constructor(props) {
    super(props);
    this.state = {
      savedFamily: "-",
      savedPhone: "-",
    };
    this.saveForm = this.saveForm.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  //const [phone, setPhone] = useState("-");
  saveForm(event) {
    event.preventDefault();
    //this.state = { savedFamily: "asd" };
    this.setState({
      savedFamily: event.target.elements.family.value,
      savedPhone: event.target.elements.phoneNumber.value,
    });
    //setFamily(event.target.elements.family.value);
    //setPhone(event.target.elements.phoneNumber.value);
    return;
  }

  resetForm(event) {
    event.preventDefault();
    this.setState({
      familyDefVal: "-",
      phoneDefVal: "-",
      savedFamily: "-",
      savedPhone: "-",
    });
    return;
  }

  render() {
    return (
      <form onSubmit={this.saveForm}>
        <label>
          Family: <input type="text" name="family" value={this.state.familyDefVal} />
        </label>
        <br />
        <label>
          Phone: <input type="text" name="phoneNumber" value={this.state.phoneDefVal} />
        </label>
        <br />
        <button type="submit">Save</button>
        <button onClick={this.resetForm}>Reset</button>
        <br />
        <br />
        <div style={{ border: "1px solid #707070", height: "100px", width: "300px", display: "block" }}>
          Family: <label>{this.state.savedFamily}</label> <br />
          Phone: <label>{this.state.savedPhone}</label> <br />
        </div>
      </form>
    );
  }
}
