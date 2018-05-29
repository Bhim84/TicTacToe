import React from "react";
import { render } from "react-dom";
import Box from "./box";
import "./index.css";

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
      boxSize: 100
    };
    this.drawBox = this.drawBox.bind(this);
  }

  componentWillMount() {
    this.style = {
      position: "relative",
      left: window.innerWidth / 2 - this.state.boxSize * 3 / 2 + "px",
      top: window.innerHeight / 2 - this.state.boxSize * 3 / 2 + "px"
    };
  }

  drawBox(row, key) {
    var output = (
      <tr key={key}>
        {row.map((box, index) => (
          <td>
            <Box id={box} size={this.state.boxSize} />
          </td>
        ))}
      </tr>
    );
    return output;
  }

  render() {
    return (
      <table style={this.style}>
        <tbody>
          {this.state.board.map((row, key) => this.drawBox(row, key))}
        </tbody>
      </table>
    );
  }
}

render(<TicTacToe />, document.getElementById("root"));
