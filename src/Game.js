import React, { Component } from 'react';
import Board from './Board';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1Turn: true,
    }
  }

  changeTurns = () => {
    console.log('changeTurns this.state.player1Turn');
    console.log(this.state.player1Turn);
    this.setState(prevState =>
      ({
        player1Turn: !prevState.player1Turn
      })
    )
  }

  render() {
    return (
     <div className="game">
        <Board
          changeTurns={this.changeTurns}
          player1Turn={this.state.player1Turn}
        />
     </div>
    );
  }
}

export default Game;
