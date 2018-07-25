
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



function winCheck(grid) {
  console.table(grid);
  const verticalMatch = checkColumns(grid);
  console.log('verticalMatch: ', verticalMatch);
  const horizontalMatch = checkRows(grid);
  console.log('horizontalMatch: ', horizontalMatch);
  return verticalMatch || horizontalMatch;
}

export default winCheck;
