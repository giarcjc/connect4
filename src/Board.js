import React, { Component } from 'react';
import './Board.css';

class Board extends Component {
  state = {};
  cellIds = Array.from({ length: 42 }, (_, i) => i);

  render() {

    return (
     <div className="game">
       <div className="wrapper">

         {this.cellIds.map(id => {

           return (
             <div className="cell"
             >{id}</div>
           )
         })}
       </div>
     </div>
    );
  }
}

export default Board;
