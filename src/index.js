import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Game';
import registerServiceWorker from './registerServiceWorker';

class Container extends React.Component {
  state = {
    gameId: 1,
  };

  resetGame = () => {
    this.setState({gameId: this.state.gameId + 1});
  };

  render() {
    return <Game key={this.state.gameId} playAgainAction={this.resetGame} />
  }
}

ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();
