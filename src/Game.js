import React, { Component } from 'react';
import './Game.css';

class Game extends Component {
  state = {};
  cellIds = Array.from({ length: 42 }, (_, i) => i);

  render() {
    console.log(this.cellIds);
    return (
     <div className="game">
       <div className="grid">
         {this.cellIds.map(id => {

           return (
             <div className="cell"
             style={{ width: '25%'}}></div>
           )
         })}
       </div>
     </div>
    );
  }
}

export default Game;
