import React, { Component } from 'react';
import './Board.css';
import Cell from './Cell';

class Board extends Component {
  render() {
    let board = this.props.board;
    let boardClass = this.props.board.winner ? 'board-inactive' : '';

    let cells = board.grid.map((column, colIndex) => {
      return (
        <div className='column' key={`column-${colIndex}`} >
          {column.map((cell, row) => {

            return (
              <Cell key={`cell-${row}-${colIndex}`}
                row={row}
                column={colIndex}
                cell={cell}
                nextPlayer={board.nextPlayer}
                dropGamePiece={this.props.dropGamePiece}
              />
            );
          })}
        </div>
      )
    });

    return (
      <div className={boardClass}>
        {cells}
      </div>
    )
  }
}

export default Board;

