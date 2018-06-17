import React, { Component } from 'react';
import './Board.css';
import Cell from './Cell';

// const bgColors = {
//   normal: 'white',
//   black: 'black',
//   red: 'red',
// };

class Board extends Component {
  state = {};
  cellIds = Array.from({ length: 42 }, (_, i) => i);
  // status = () => {
  //   return 'normal';
  // };

  onCellClick = cellId => {
    console.log('onCellClick', cellId);
    // this.props.onClickAction(this.props.id);
  };

  render() {

    return (
     <div className="board">
       <div className="wrapper">

         {
           this.cellIds.map(id => {

            return (
              <Cell
                key={id}
                id={id}
                onClickAction={this.onCellClick}
              />
            )
          })
         }
       </div>
     </div>
    );
  }
}

export default Board;
