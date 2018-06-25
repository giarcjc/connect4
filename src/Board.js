import React, { Component } from 'react';
import './Board.css';
import Cell from './Cell';

class Board extends Component {
  state = {
    player1Cells: [],
    player2Cells: [],
  };

  cellIds = Array.from({ length: 42 }, (_, i) => i);

  onCellClick = cellId => {
    // console.log('onCellClick', cellId);
    // console.log('this.props.player1Turn: ---> ');
    // console.log();

    this.props.changeTurns();

    if (this.props.player1Turn) {

      this.setState((prevState) => ({
        player1Cells: prevState.player1Cells.concat(cellId),
        player2Cells: prevState.player2Cells,
      }))

    } else {
      this.setState((prevState) => ({
        player1Cells: prevState.player1Cells,
        player2Cells: prevState.player2Cells.concat(cellId),
      }))
    }

  };

  render() {
    return (
     <div className="board">
       <div className="wrapper">
         {
            this.cellIds.map(id => {
              return (
                <Cell
                  key={id}
                  id={id}
                  onClickAction={this.onCellClick}
                  selectedPlayer1Cells={this.state.player1Cells}
                  selectedPlayer2Cells={this.state.player2Cells}
                />
              )
            })
         }
       </div>
     </div>
    );
  }
}

export default Board;
