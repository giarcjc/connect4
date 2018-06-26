import React, { Component } from 'react';
import './Board.css';
import Cell from './Cell';

class Board extends Component {
  state = {
    player1Cells: [],
    player2Cells: [],
    isInCol1: [],
    isInCol2: [],
    isInCol3: [],
    isInCol4: [],
    isInCol5: [],
    isInCol6: [],
    isInCol7: [],
  };

  cellIds = Array.from({ length: 42 }, (_, i) => i);
  col1 = this.cellIds.slice(0,6);
  col2 = this.cellIds.slice(6,12);
  col3 = this.cellIds.slice(12,18);
  col4 = this.cellIds.slice(18,24);
  col5 = this.cellIds.slice(24,30);
  col6 = this.cellIds.slice(30,36);
  col7 = this.cellIds.slice(36,42);

  onCellClick = cellId => {
    let endCellId;
    const moveToBottom = (cellId, colArray) => {
      for (let i = colArray.length - 1; cellId <= colArray[i]; i--) {
        cellId = colArray[i];
        endCellId = cellId;
        colArray.pop();
      }
    }

    this.setState(prevState => ({
      isInCol1: this.col1.indexOf(cellId) > -1 ? moveToBottom(cellId, this.col1) : prevState.isInCol1,
      isInCol2: this.col2.indexOf(cellId) > -1 ? moveToBottom(cellId, this.col2) : prevState.isInCol2,
      isInCol3: this.col3.indexOf(cellId) > -1 ? moveToBottom(cellId, this.col3) : prevState.isInCol3,
      isInCol4: this.col4.indexOf(cellId) > -1 ? moveToBottom(cellId, this.col4) : prevState.isInCol4,
      isInCol5: this.col5.indexOf(cellId) > -1 ? moveToBottom(cellId, this.col5) : prevState.isInCol5,
      isInCol6: this.col6.indexOf(cellId) > -1 ? moveToBottom(cellId, this.col6) : prevState.isInCol6,
      isInCol7: this.col7.indexOf(cellId) > -1 ? moveToBottom(cellId, this.col7) : prevState.isInCol7,
    }));

    if (this.props.player1Turn) {
      this.setState((prevState) => ({
        player1Cells: prevState.player1Cells.concat(endCellId),
        player2Cells: prevState.player2Cells,
      }))

    } else {
      this.setState((prevState) => ({
        player1Cells: prevState.player1Cells,
        player2Cells: prevState.player2Cells.concat(endCellId),
      }))
    }



    this.props.changeTurns();
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

