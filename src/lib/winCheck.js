
function isVerticalOrHorizontalMatch(grid, outerCount, innerCount, flip) {

  let piece;
  let found = null;
  let foundPiece = null;

  for (let a = 0; a < outerCount; a++) {
    for (let b = 0; b < innerCount; b++) {

        if (flip) {
          piece = grid[a][b];
        } else {
          piece = grid[b][a];
        }

       // reset if piece is null
       if (piece === null) {
        found = null;
        foundPiece = null;
        continue;
      }

      if (piece !== foundPiece) {
        found = 1;
        foundPiece = piece;
        continue;
      }

      found++;

      if (found >= 4) {
        return true;
      }
    }
  }
  return false;
}

function isDiagonalMatch(grid, colCount, rowCount, flip) {
  let found;
  let foundPiece;
  let col;
  const matchReq = 4;

  for (let baseCol = matchReq - rowCount; baseCol < colCount - (matchReq - 1); baseCol++) {
    found = null;
    foundPiece = null;

    col = baseCol - 1;

    let rowDef = flip ? 0 : rowCount - 1;

    const conditional = (row, rowCount, flip) => {
      return flip ? row < rowCount : row >= 0;
    };

    const increment = (row, flip) => {
      return flip ? row + 1 : row - 1;
    };

    for (let row = rowDef; conditional(row, rowCount, flip); row = increment(row, flip)) {
      col++;

       // Ensure that the given column and row are on the board
       if (col >= 0 && col < colCount && row < rowCount) {

        let piece = grid[col][row];

        if(!piece) {
          found = null;
        }

        if (!!piece && (piece === foundPiece || !foundPiece) && (++found) === matchReq) {
          return true;
        }

        foundPiece = piece;

      }

    }

  }
  return false;
}


function winCheck(grid) {
  const rowCount = 6;
  const colCount = 7;
  return isVerticalOrHorizontalMatch(grid, rowCount, colCount) ||
         isVerticalOrHorizontalMatch(grid, colCount, rowCount, true) ||
         isDiagonalMatch(grid, colCount, rowCount, true) || isDiagonalMatch(grid, colCount, rowCount, false);
}


export default winCheck;