import React, { Component } from 'react';
import './Board.css';
import Cell from './Cell';

// const bgColors = {
//   normal: 'white',
//   black: 'black',
//   red: 'red',
// };

class Board extends Component {
  state = {
    isInCol1: false,
    isInCol2: false,
    isInCol3: false,
    isInCol4: false,
    isInCol5: false,
    isInCol6: false,
    isInCol7: false,
  };
  cellIds = Array.from({ length: 42 }, (_, i) => i);
  col1 = this.cellIds.slice(0,6);
  col2 = this.cellIds.slice(7,11);
  col3 = this.cellIds.slice(12,17);
  col4 = this.cellIds.slice(18,23);
  col5 = this.cellIds.slice(24,29);
  col6 = this.cellIds.slice(30,35);
  col7 = this.cellIds.slice(36,41);

  // status = () => {
  //   return 'normal';
  // };

  onCellClick = cellId => {
    console.log('onCellClick', cellId);

    if (this.col1.indexOf(cellId) > 0) {
      this.setState(prevState => {
        return [...prevState.isInCol1, true];
      });
      console.log('isInCol1: ', this.state.isInCol1);
    }

    if (this.col2.includes(cellId)) {
      this.setState(prevState => {
        return [...prevState.isInCol2, true];
      });
      console.log('isInCol2: ', this.state.isInCol2);
    }

    if (this.col3.includes(cellId)) {
      this.setState(prevState => {
        return [...prevState.isInCol3, true];
      });
      console.log('isInCol3: ', this.state.isInCol3);
    }

    if (this.col4.includes(cellId)) {
      this.setState(prevState => {
        return [...prevState.isInCol4, true];
      });
      console.log('isInCol4: ', this.state.isInCol4);
    }

    if (this.col5.includes(cellId)) {
      this.setState(prevState => {
        return [...prevState.isInCol5, true];
      });
      console.log('isInCol5: ', this.state.isInCol5);
    }

    if (this.col6.includes(cellId)) {
      this.setState(prevState => {
        return [...prevState.isInCol6, true];
      });
      console.log('isInCol6: ', this.state.isInCol6);
    }

    if (this.col7.includes(cellId)) {
      this.setState(prevState => {
        return [...prevState.isInCol7, true];
      });
      console.log('isInCol7: ', this.state.isInCol7);
    }

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
