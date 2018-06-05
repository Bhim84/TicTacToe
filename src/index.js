import React from "react";
import { render } from "react-dom";
import Box from "./box";
import "./index.css";

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      boxSize: 100,
      player: 1
    };
    this.drawBox = this.drawBox.bind(this);
    this.select = this.select.bind(this);
  }

  select(row, col) {
    console.log("From index: ", row + ":" + col);
    let updatedBoard = this.state.board;
    updatedBoard[row][col] = this.state.player;
    this.setState({
      player: this.state.player === 2 ? 1 : 2,
      board: updatedBoard
    });
  }

  check() {
    let b = this.state.board;
    for (var i = 0; i < b.length; i++) {
      if ((b[i][0] === b[i][1]) === b[i][2]) {
        return true;
      }
    }
    for (var i = 0; i < b.length; i++) {
      if ((b[0][i] === b[1][i]) === b[2][i]) {
        return true;
      }
    }
    return (
      (b[0][0] === b[1][1]) === b[2][2] ||
      (b[1][0] === b[1][1]) === b[1][2] ||
      (b[2][0] === b[2][1]) === b[2][2] ||
      (b[0][0] === b[1][0]) === b[2][0] ||
      (b[0][0] === b[0][1]) === b[0][2] ||
      (b[0][0] === b[0][1]) === b[0][2]
    );
  }

  componentWillMount() {
    this.style = {
      position: "relative",
      left: window.innerWidth / 2 - this.state.boxSize * 3 / 2 + "px",
      top: window.innerHeight / 2 - this.state.boxSize * 3 / 2 + "px"
    };
  }

  drawBox(row, rowId) {
    var output = (
      <tr key={rowId}>
        {row.map((col, colId) => (
          <td>
            <Box
              row={rowId}
              col={colId}
              id={colId}
              onClick={this.select}
              player={this.state.player}
              size={this.state.boxSize}
            />
          </td>
        ))}
      </tr>
    );
    return output;
  }

  render() {
    return (
      <div style={this.style}>
        <span id="playerDetails">Player {this.state.player} Turn</span>
        <table>
          <tbody>
            {this.state.board.map((row, key) => this.drawBox(row, key))}
          </tbody>
        </table>
      </div>
    );
  }
}

render(<TicTacToe />, document.getElementById("root"));
