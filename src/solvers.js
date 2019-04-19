/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other




//returns a single solution to the n-rooks problem
window.findNRooksSolution = function (n) {
  var newBoard = new Board({ n: n });

  var findSolution = function (board) {
    var solution; //entire matrix, array of arrays
    var count = 0;

    for (var row = 0; row < n; row++) {
      for (var col = 0; col < n; col++) {
        board.togglePiece(row, col);
        if (board.hasRowConflictAt(row) || board.hasColConflictAt(col)) {
          board.togglePiece(row, col);
        } else {
          count++;
        }
      }
    }
    if (count === n) {
      solution = board.rows();
      return solution;
    }
  }

  return findSolution(newBoard);
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
//returns a count of the total number of solutions to the n-rooks problem
window.countNRooksSolutions = function (n) {
  var newBoard = new Board({ n: n });
  var solutionCount = 0;

  var search = function (row) {
    //base case
    if (row === n - 1) {
      solutionCount++;
      return;
    }

    for (var col = 0; col < n; col++) {
      newBoard.togglePiece(row, col);
      if (!newBoard.hasAnyRooksConflicts()) {
        search(row + 1);
      }
      newBoard.togglePiece(row, col);
    }
  };

  search(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other


window.findNQueensSolution = function (n) {
  var newBoard = new Board({ n: n });
  var solution;

  var helper = function (row) {
    //base case
    debugger;
    var found = false;
    if (row === n) {
      solution = newBoard.rows();
      found = true;
      return;
    }
    for (var col = 0; col < n; col++) {
      newBoard.togglePiece(row, col);
      if (newBoard.hasAnyQueensConflicts()) {
        newBoard.togglePiece(row, col);
        if (col === n - 1) {
          helper(row + 1);
        }
      } else {
        helper(row + 1);
      }
      if (found) {
        return;
      }

      newBoard.togglePiece(row, col);
    }
  }

  helper(0);
  return solution;
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
//returns a single solution to the n-queens problem
window.countNQueensSolutions = function (n) {
  var newBoard = new Board({ n: n });
  var solutionCount = 0; //fixme

  if (n === 2 || n === 3) {
    return solutionCount;
  }

  var search = function (row) {
    //base case
    if (row === n) {
      solutionCount++;
      return;
    }

    for (var col = 0; col < n; col++) {
      newBoard.togglePiece(row, col);
      if (!newBoard.hasAnyQueensConflicts()) {
        search(row + 1);
      }
      newBoard.togglePiece(row, col);
    }
  };

  search(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};


