import React from 'react';
import './Cell.css';

const Cell = (props) => {
  const cellClassName = cellId => {
    if (props.selectedPlayer1Cells.indexOf(cellId) > -1) {
      return 'black'
    }
    if (props.selectedPlayer2Cells.indexOf(cellId) > -1) {
      return 'red'
    }
    return 'normal'
  }

  const handleClick = () => {
    props.onClickAction(props.id);
  };

  const cellClasses = `cell ${cellClassName(props.id)}`;
  return (
    <div
      id={props.id}
      className={cellClasses}
      onClick={handleClick}>
        {props.id}
    </div>
  )
}


export default Cell;