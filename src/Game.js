import React, { Component } from 'react';
import Board from './Board';
import lib from './lib';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      board: new lib.Board()
    }
  }

  handleGamedropGamePiece(columnIndex, piece) {
    if (!this.state.board.isActive) {
      return;
    }

    this.state.board.dropGamePiece(columnIndex, piece);

    let winnerMsg = this.state.board.winner ? `${this.state.board.winner.toUpperCase()} Wins!` : null;
    let tieGameMsg =  this.state.board.tieGame ? 'Tie Game, Nobody Wins!' : null;
    let gameStatus = winnerMsg ? winnerMsg : tieGameMsg
    this.message = gameStatus ? gameStatus : '';


    this.setState({
      board: this.state.board
    });
  }

  render() {
    return (
      <div>
        <h2>{this.message}</h2>
        <div className='wrapper'>
          <Board className='board'
            board={this.state.board}
            dropGamePiece={this.handleGamedropGamePiece.bind(this)}
          />
        </div>
      </div>
    )
  }
}

export default Game;
