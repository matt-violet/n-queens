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
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
//returns a count of the total number of solutions to the n-rooks problem
window.countNRooksSolutions = function (n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function (n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
//returns a single solution to the n-queens problem
window.countNQueensSolutions = function (n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};


//dont need to create a matrix of the nxn table-this is how you would
// var array = [];
// for (var i = 0; i <= n; i++) {
//   array[i] = [];
//   for (var j = 0; j <= n; j++) {
//     array[i].push(0);
//   }
// }



//nRooks
//can move left right, up or down
//one rook per row (an column)

//have an instance of the Board class
  //the board class has attributes and current attributes


//var occupiedRows = []; //containing row numbers (array index)
//var firstRowPositions tried = []; array[0][i] i = 0 through (n-1)


//Start with the left most column
  //if no rooks are placed, place one in the first position (keep track of these in an array)
//if all rooks are placed return true
  //once you place a rook
    //set the array element from 0 to 1
    //

//nQueens
//Queens can move in any direction (left, right, up down, diagonally)
//one Queen per row (and column)

//have an instance of the Board class
  //the board class has attributes and current attributes


//Start with the left most column
  //if no queens are placed, place one in the first position (keep track of these in an array)
//if all queens are placed return true