import React, { Component } from "react";
const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: ""
};
class ValidationForm extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  handleChange = (event) => {
    const isCheckBox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckBox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    //let nameError = "";
    let emailError = "";
    //let passwordError = "";
    if (!this.state.email.includes("@")) {
      emailError = "Invalid Error";
    }

    if (emailError) {
      this.setState({ emailError });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      //clear form
      this.setState(initialState);
    }
  };
  render() {
    return (
      <div>
      {/* Html Form */}
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              name="name"
              placeholder="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div style={{ fontSize: "1em", color: "red" }}>
            {this.state.nameError}
          </div>
          <div>
            <input
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div style={{ fontSize: "1em", color: "red" }}>
            {this.state.emailError}
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div style={{ fontSize: "1em", color: "red" }}>
            {this.state.passwordError}
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ValidationForm;
