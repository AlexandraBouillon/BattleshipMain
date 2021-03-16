const populateGrid = (row,cols)=>{
    // TODO: Using the instance variables numrow, numCols, and numShips, return
    // a 2D array representing the state of the board.
    let grid = [];
    let shipCount = Math.floor(Math.random() * Math.floor(3)) + 1;
    for (let i = 0; i < row; i++) {
      for(let j = 0; j < cols; j++) {
          grid.push('🌊')
      }
    }

    // console.log('PRE', grid, shipCount)
    while (shipCount > 0) {
        let randomRow = Math.floor(Math.random() * Math.floor(row))
        let randomCol = Math.floor(Math.random() * Math.floor(cols))
        // console.log(randomRow,randomCol)
        grid[randomRow][randomCol] = '🚢'
        // console.log(grid[randomRow][randomCol])
        shipCount--
        // console.log(shipCount)
    }
    // // fill 2d with ships or waves
    return grid;
}
console.log(populateGrid(5,5));
