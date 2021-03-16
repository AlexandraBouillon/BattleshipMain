const populateGrid = (row,cols)=>{
    // TODO: Using the instance variables numrow, numCols, and numShips, return
    // a 2D array representing the state of the board.
    let grid = [];
    let shipCount = Math.floor(Math.random() * Math.floor(3)) + 1;
    for (let i = 0; i < row; i++) {
        // grid.push('W');
      for(let j = 0; j < cols-1; j++) {
        grid.push('W');
      }
    }
    // console.log(grid);
    // console.log('PRE', grid, shipCount)
    while (shipCount > 0) {
        let randomRow = Math.floor(Math.random() * row)
        let randomCol = Math.floor(Math.random() * cols)
        // console.log(randomRow,randomCol)
        grid[randomRow][randomCol] = 'S'
        // console.log(grid[randomRow][randomCol])
        //  grid[randomRow] = 'S'
        // console.log(grid[randomRow])
        shipCount--
        // console.log(shipCount)
    }
    // // fill 2d with ships or waves
    return grid;
}

// console.log(populateGrid(5,5));


[
  'W', 'W', 'W', 'W', 'W',
  'W', 'W', 'W', 'W', 'W',
  'W', 'W', 'W', 'W', 'W',
  'W', 'W', 'W', 'W', 'W'
]



// const populateSingleGrid = (row,cols)=>{
//     // TODO: Using the instance variables numrow, numCols, and numShips, return
//     // a 2D array representing the state of the board.
//     let grid = [];
//     let shipCount = Math.floor(Math.random() * Math.floor(3)) + 1;
//     for (let i = 0; i < row; i++) {
//         grid.push('W');
//     }

//     while (shipCount > 0) {
//         let randomRow = Math.floor(Math.random() * row)
//          grid[randomRow] = 'S'
//         shipCount--
//     }
//     // // fill 2d with ships or waves
//     return grid;
// }
// console.log(populateSingleGrid(5,5));


[ 'W', 'W', 'W', 'S', 'W' ]
