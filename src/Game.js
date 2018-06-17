import React, { Component } from 'react';
import Board from './Board';

class Game extends Component {

  render() {
    return (
     <div className="game">
        <Board onClickAction={this.onCellClick}/>
     </div>
    );
  }
}

export default Game;
