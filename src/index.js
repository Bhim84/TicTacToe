import React from "react";
import { render } from "react-dom";
import Box from "./box";
import "./index.css";

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [[-10, -10, -10], [-10, -10, -10], [-10, -10, -10]],
      boxSize: 100,
      player: 1,
      msg: "Turn",
      gameStatus: true
    };
    this.drawBox = this.drawBox.bind(this);
    this.select = this.select.bind(this);
    this.check = this.check.bind(this);
  }

  select(row, col) {
    if (this.state.gameStatus) {
      console.log("From index: ", row + ":" + col);
      let updatedBoard = this.state.board;
      updatedBoard[row][col] = this.state.player;
      if (this.check(updatedBoard)) {
        this.setState({ msg: "Won the Game", gameStatus: false });
      } else {
        this.setState({
          player: this.state.player === 2 ? 1 : 2,
          board: updatedBoard
        });
      }
    }
  }

  check(b) {
    let checkValue = this.state.player === 1 ? 3 : 6;
    for (var i = 0; i < b.length; i++) {
      if (b[i][0] + b[i][1] + b[i][2] === checkValue) {
        return true;
      }
    }
    for (i = 0; i < b.length; i++) {
      if (b[0][i] + b[1][i] + b[2][i] === checkValue) {
        return true;
      }
    }
    return b[0][0] + b[1][1] + b[2][2] === checkValue ||
      b[2][0] + b[1][1] + b[0][2] === checkValue
      ? true
      : false;
  }

  componentWillMount() {
    this.style = {
      position: "relative",
      left: window.innerWidth / 2 - this.state.boxSize * 3 / 2 + "px",
      top: window.innerHeight / 2 - this.state.boxSize * 3 / 2 + "px",
      width: "310px",
      margin: "1px 1px 0px 0px"
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
              gameStatus={this.state.gameStatus}
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
        <span id="playerDetails" className="heading">
          Player {this.state.player === 1 ? "X" : "O"} {this.state.msg}
        </span>
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
