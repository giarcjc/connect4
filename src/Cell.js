import React from 'react';
import './Cell.css';

const Cell = (props) => {
  const cellClassName = cellId => {
    if (props.selectedPlayer1Cells.indexOf(cellId) > -1) {
      console.log('selectedPlayer1Cell: ', cellId);
      return 'black'
    }
    if (props.selectedPlayer2Cells.indexOf(cellId) > -1) {
      console.log('selectedPlayer2Cell: ', cellId);
      return 'red'
    }
    return 'normal'
  }

  const handleClick = () => {
      console.log('handleClick: ', props.id);
      props.onClickAction(props.id);
  };

  const cellClasses = `cell ${cellClassName(props.id)}`;
  return (
    <div
    id={props.id}
    className={cellClasses}
    onClick={handleClick}
    >
    {props.id}
    </div>
  )
}
//     style={{backgroundColor: cellClassName(props.id)}}


// class Cell extends PureComponent {

//   status = () => {
//     return 'normal';
//   };

//   handleClick = () => {
//     console.log('handleClick: ', this.props.id);
//     this.props.onClickAction(this.props.id);
//   };

//   render() {
//     return (
//              <div
//               id={this.props.id}
//               className="cell"
//               style={{backgroundColor: bgColors[this.status()] }}
//               onClick={this.handleClick}
//               >
//               {this.props.id}
//               </div>
//            )
//   }
// }

export default Cell;