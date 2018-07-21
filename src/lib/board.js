import winCheck from './winCheck';

export default class Board {

  constructor() {
    this.grid = Array(7).fill().map(() => Array(6).fill(null));
    this.winner = null;
    this.tieGame = null;
    // how many pieces have been inserted?
    this.inserts = 0;

    this.nextPlayer = refreshPlayer(this.inserts);

    // disable the board when we have a winner
    this.isActive = true;
  }


  dropGamePiece(columnIndex, piece) {

    let column = this.grid[columnIndex];
    let cellIndex = -1;

    // loop through column looking for zeros to determine next available cell
    column.forEach((columnPiece, i) => {
      if (columnPiece === null) {
        cellIndex = i;
      }
    });

    // did we find available cell?
    if (cellIndex >= 0) {

      // add piece to column cell
      column[cellIndex] = piece;
      this.inserts++;

      if (this.calculateWinner()) {
        this.isActive = false;
        this.winner = this.nextPlayer;
      } else if (this.inserts >= 42) {
        this.isActive = false;
        this.tieGame = true;
      } else {
        this.nextPlayer = refreshPlayer(this.inserts);
      }
    }
  }

  calculateWinner() {
    return winCheck(this.grid);
  }

}


// array of players, named by gamePiece color
let playerColors = [
  'red',
  'black'
];

// whose turn is it?
function refreshPlayer(inserts) {
  return playerColors[inserts % 2];
}