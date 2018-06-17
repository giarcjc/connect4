import React, { Component } from 'react';
import Board from './Board';

class Game extends Component {
  state = {
    xIsNext: true,
  }

  // squares[i] = this.state.xIsNext ? 'X' : 'O';

  render() {
    return (
     <div className="game">
        <Board



        />
     </div>
    );
  }
}

export default Game;
