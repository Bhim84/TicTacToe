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
    if (this.state.player || !this.props.gameStatus) {
      return;
    }
    this.props.onClick(this.props.row, this.props.col);
    this.setState(prevState => ({
      style: {
        ...prevState.style,
        backgroundColor: this.props.player === 1 ? "#FFC300" : "#FF5733"
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
        <span className="player">{this.state.player === 1 ? "X" : "O"}</span>
      </div>
    );
  }
}
