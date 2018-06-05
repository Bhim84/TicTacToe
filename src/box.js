import React, { Component } from "react";

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        height: this.props.size,
        width: this.props.size,
        backgroundColor: "black"
      },
      player: ""
    };
    this.select = this.select.bind(this);
  }

  select() {
    if (this.state.player) {
      return;
    }
    this.props.onClick(this.props.row, this.props.col);
    this.setState(prevState => ({
      style: {
        ...prevState.style,
        backgroundColor: "grey"
      },
      player: this.state.player === "" ? this.props.player : ""
    }));
  }

  render() {
    return (
      <div
        id={this.props.id}
        row={this.props.row}
        col={this.props.col}
        style={this.state.style}
        onClick={this.select}
        className="box"
      >
        <span>{this.state.player}</span>
      </div>
    );
  }
}
