import React, { Component } from 'react';
import './Board.css';

const bgColors = {
  normal: 'white',
  black: 'black',
  red: 'red',
};

class Board extends Component {
  state = {};
  cellIds = Array.from({ length: 42 }, (_, i) => i);
  status = () => {
    return 'normal';
  }
  render() {

    return (
     <div className="board">
       <div className="wrapper">

         {this.cellIds.map(id => {

           return (
             <div className="cell"
             style={{backgroundColor: bgColors[this.status()] }}
             >{id}</div>
           )
         })}
       </div>
     </div>
    );
  }
}

export default Board;
