import React, { Component } from "react";

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggleInputCase = this.toggleInputCase.bind(this);
    this.state = { uppercase: false };
  }

  toggleInputCase() {
    const isUpper = this.state.uppercase;

    // Accessing the ref using this.refs.inputField
    const value = this.refs.inputField.value;

    this.refs.inputField.value = isUpper
      ? value.toLowerCase()
      : value.toUpperCase();

    this.setState({ uppercase: !isUpper });
  }

  render() {
    return (
      <div>
        <input type="text" ref="inputField" />
        <button type="button" onClick={this.toggleInputCase}>
          {" "}
          Click
        </button>
      </div>
    );
  }
}
