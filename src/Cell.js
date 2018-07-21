import React from 'react';
import './Cell.css';

class Cell extends React.Component {

  handledropGamePiece() {
    this.props.dropGamePiece(this.props.column, this.props.nextPlayer);
  }

  render() {
     let cellClasses = `cell ${this.props.cell}`;

     return (
       <button
        className={cellClasses}
        onClick={this.handledropGamePiece.bind(this)}>
        </button>
     )

  }

}


export default Cell;