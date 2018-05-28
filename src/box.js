import React, { Component } from "react";

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.style = {
      height: this.props.size,
      width: this.props.size
    };
  }

  render() {
    return <div style={this.style} id="box" className="box" />;
  }
}
