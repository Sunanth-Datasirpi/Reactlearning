import React, { Component } from "react";
import "./Box.css";
// Form using class component

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      country: "",
    };
  }
  handleFNameChange = (event) => {
    this.setState({
      firstname: event.target.value,
    });
  };
  handleLNameChange = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  };
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handlePhoneChange = (event) => {
    this.setState({
      phone: event.target.value,
    });
  };
  handleCountryChange = (event) => {
    this.setState({
      country: event.target.value,
    });
  };
  handleReset = () => {
    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      country: "",
    });
  };
  render() {
    return (
      <fieldset className="Box">
        <form>
          <div>
            <label>Firstname:</label>
            <input
              type="text"
              value={this.state.firstname}
              onChange={this.handleFNameChange}
            />
          </div>
          <br />
          <div>
            <label>Lastname:</label>
            <input
              type="text"
              value={this.state.lastname}
              onChange={this.handleLNameChange}
            />
          </div>
          <br />
          <div>
            <label>EmailID :</label>
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </div>
          <br />
          <div>
            <label>Contact :</label>
            <input
              type="tel"
              value={this.state.phone}
              onChange={this.handlePhoneChange}
            />
          </div>
          <br />
          <div>
            <label>Country: </label>
            <select
              value={this.state.country}
              onChange={this.handleCountryChange}
            >
              <option value="Ind">India</option>
              <option value="US">America</option>
              <option value="ENG">England</option>
            </select>
          </div>
          <br />
          <div>
            <button
              type="submit"
              onClick={() => alert("The data is submitted")}
            >
              Submit
            </button>
            <button type="reset" onClick={this.handleReset}>
              Reset
            </button>
          </div>
        </form>
      </fieldset>
    );
  }
}
