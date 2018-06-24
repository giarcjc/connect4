import React, { Component } from 'react';
import './Board.css';
import Cell from './Cell';

class Board extends Component {
  state = {
    player1Cells: [2,5,23,22,21,20],
    player2Cells: [3,9,15,21],
  };

  cellIds = Array.from({ length: 42 }, (_, i) => i);

  onCellClick = cellId => {
    console.log('onCellClick', cellId);

    this.setState((previousState) => {
      return {
        player1Cells: [...previousState.player1Cells],
        player2Cells: [...previousState.player2Cells],
      }
    })

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
