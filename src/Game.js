import React, { Component } from 'react';
import Board from './Board';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1Turn: true,
      message: 'Next Move: Player 1'
    }
  }

  changeTurns = () => {
    console.log('changeTurns this.state.player1Turn');
    console.log(this.state.player1Turn);
    this.setState(prevState =>
      ({
        player1Turn: !prevState.player1Turn,
        message: this.state.player1Turn ? 'Next Move: Player 2' : 'Next Move: Player 1',
      })
    )
  }

  calculateWinner = () => {



  }

  render() {
    return (

     <div className="game">
        <h2>{this.state.message}</h2>
        <Board
          changeTurns={this.changeTurns}
          player1Turn={this.state.player1Turn}
        />
     </div>
    );
  }
}

export default Game;
