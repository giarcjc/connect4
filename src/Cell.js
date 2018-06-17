import React, { PureComponent } from 'react';
import './Cell.css';

const bgColors = {
  normal: 'white',
  black: 'black',
  red: 'red',
};

class Cell extends PureComponent {
  state = {};
  cellIds = Array.from({ length: 42 }, (_, i) => i);
  status = () => {
    return 'normal';
  };

  handleClick = () => {
    console.log('handleClick: ', this.props.id);
    this.props.onClickAction(this.props.id);
  };

  render() {
    return (
             <div
              id={this.props.id}
              className="cell"
              style={{backgroundColor: bgColors[this.status()] }}
              onClick={this.handleClick}
              >
              {this.props.id}
              </div>
           )
  }
}

export default Cell;