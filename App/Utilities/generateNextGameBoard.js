module.exports = (currentBoard) => {
  return currentBoard.map((boardRow, row) => {
    return boardRow.map((value, index) => {
      let count = countBodies(row, index, currentBoard);

      if (count === 3 && !value) {
        return true;
      } else if ((count < 2 || count > 3) && value) {
        return false;
      } else {
        return value;
      }
    })
  })
}

function countBodies(row, index, currentBoard) {
  let count = 0;

  if (neighborOne(row, index, currentBoard)) count++;
  if (neighborTwo(row, index, currentBoard)) count++;
  if (neighborThree(row, index, currentBoard)) count++;
  if (neighborFour(row, index, currentBoard)) count++;
  if (neighborFive(row, index, currentBoard)) count++;
  if (neighborSix(row, index, currentBoard)) count++;
  if (neighborSeven(row, index, currentBoard)) count++;
  if (neighborEight(row, index, currentBoard)) count++;

  return count;
}

function neighborOne(row, index, currentBoard) {
  //check for first row
  if (row === 0) {
    //check for first index
    if (index === 0) {
      if (currentBoard[49][77]) return true;
    } else {
      if (currentBoard[49][index - 1]) return true;
    }
  } else {
    //check for first index
    if (index === 0) {
      if (currentBoard[row - 1][77]) return true;
    } else {
      if (currentBoard[row - 1][index - 1]) return true;
    }
  }

  return false;
}

function neighborTwo(row, index, currentBoard) {
  //check for first row
  if (row === 0) {
    if (currentBoard[49][index]) return true;
  } else {
    if (currentBoard[row - 1][index]) return true;
  }

  return false;
}

function neighborThree(row, index, currentBoard) {
  //check for first row
  if (row === 0) {
    //check for last index
    if (index === 77) {
      if (currentBoard[49][0]) return true;
    } else {
      if (currentBoard[49][index + 1]) return true;
    }
  } else {
    //check for last index
    if (index === 77) {
      if (currentBoard[row - 1][0]) return true;
    } else {
      if (currentBoard[row - 1][index + 1]) return true;
    }
  }

  return false;
}

function neighborFour(row, index, currentBoard) {
  //check for first index
  if (index === 0) {
    if (currentBoard[row][77]) return true;
  } else {
    if (currentBoard[row][index - 1]) return true;
  }

  return false;
}

function neighborFive(row, index, currentBoard) {
  //check for last index
  if (index === 77) {
    if (currentBoard[row][0]) return true;
  } else {
    if (currentBoard[row][index + 1]) return true;
  }

  return false;
}

function neighborSix(row, index, currentBoard) {
  //check for last row
  if (row === 49) {
    //check for first index
    if (index === 0) {
      if (currentBoard[0][77]) return true;
    } else {
      if (currentBoard[0][index - 1]) return true;
    }
  } else {
    //check for first index
    if (index === 0) {
      if (currentBoard[row + 1][77]) return true;
    } else {
      if (currentBoard[row + 1][index - 1]) return true;
    }
  }

  return false;
}

function neighborSeven(row, index, currentBoard) {
  //check for last row
  if (row === 49) {
    if (currentBoard[0][index]) return true;
  } else {
    if (currentBoard[row + 1][index]) return true;
  }

  return false;
}

function neighborEight(row, index, currentBoard) {
 //check for last row
 if (row === 49) {
   //check for last index
   if (index === 77) {
     if (currentBoard[0][0]) return true;
   } else {
     if (currentBoard[0][index + 1]) return true;
   }
 } else {
   //check for last index
   if (index === 77) {
     if (currentBoard[row + 1][0]) return true;
   } else {
     if (currentBoard[row + 1][index + 1]) return true;
   }
 }

 return false;
}
