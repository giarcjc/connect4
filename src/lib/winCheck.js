
/**
 * Check the elements in a given array to see if there are 4 consecutive matches
 * @param {array} head - the first element of the array being passed in
 * @param {array} tail - the rest of the array being passed in
 * @param {*} matchCount - how many matches have been found
 * @param {*} lastElement - the last element looked at
 */
function checkElements([head, ...tail], matchCount = 0, lastElement = null) {
  // the last element matches the 3 we've already found - so 4 in a row
  if (matchCount === 3 && head === lastElement) {
    return true
  }

  // this is the last element to check
  if (tail.length === 0) {
    return false;
  }

  // empty slot, check next slot
  if (head === null) {
    return checkElements(tail);
  }

  // current spot is same color as last one, so we have a match
  if (head === lastElement) {
    return checkElements(tail, matchCount + 1, head);
  }

  // head element doesn't match lastElement, so look at next element.
  // set match count at 1 because we have 1 element so far
  // if next element is same we'll increment match count above
  return checkElements(tail, 1, head);
}

/**
 * send grid column to checkElements function
 * @param {*} grid - the game board
 * @returns {boolean} match found
 */
const checkColumns = grid => {
  return grid.reduce(
    (hasMatch, column) => {
      return hasMatch || checkElements(column);
    }, false
  );
}

/**
 * send grid rows to checkElements function
 * @param {*} grid - the game board
 * @returns {boolean} match found
 */
const checkRows = grid => {
  for (let i = 0; i < grid.length; i++) {
    // create an array representing a grid row
    // for each column of the grid, get return the cell at row i
    let rowArray = grid.map(col => col[i]);
    if (checkElements(rowArray)) {
      return true;
    }
  }
}

function sliceDiagonally(grid, col, row, maxLength,leftToRight) {
  let diagonalArray = [];
  while (diagonalArray.length < maxLength) {
    diagonalArray.push(grid[col][row]);
    if (leftToRight) {
      col++
    } else {
      col--;
    }
    row++;
  }
  return diagonalArray;
}
const topLeftToBottomRight = grid => {
  const arr1 = checkElements(sliceDiagonally(grid,0,2,4,true));
  const arr2 = checkElements(sliceDiagonally(grid,0,1,5,true));
  const arr3 = checkElements(sliceDiagonally(grid,0,0,6,true));
  const arr4 = checkElements(sliceDiagonally(grid,1,0,6,true));
  const arr5 = checkElements(sliceDiagonally(grid,2,0,5,true));
  const arr6 = checkElements(sliceDiagonally(grid,3,0,4,true));
  return arr1 || arr2 || arr3 || arr4 || arr5 || arr6;
}

const topRightToBottomLeft = grid => {
  const arr1 = checkElements(sliceDiagonally(grid,6,2,4));
  const arr2 = checkElements(sliceDiagonally(grid,6,1,5));
  const arr3 = checkElements(sliceDiagonally(grid,6,0,6));
  const arr4 = checkElements(sliceDiagonally(grid,5,0,6));
  const arr5 = checkElements(sliceDiagonally(grid,4,0,5));
  const arr6 = checkElements(sliceDiagonally(grid,3,0,4));
  return arr1 || arr2 || arr3 || arr4 || arr5 || arr6;
}

function winCheck(grid) {
  return checkColumns(grid) || checkRows(grid) ||
         topLeftToBottomRight(grid) || topRightToBottomLeft(grid);
}

export default winCheck;
