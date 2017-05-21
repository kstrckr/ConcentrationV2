gameBoard.gamePieces = gameBoard.loadGameBoardElements('game-piece');
gameBoard.workingPairs = gameBoard.pickRandomPairs(gameBoard.gamePieces.length/2, allCodes);
gameBoard.matchPairs = gameBoard.createAssignments(gameBoard.workingPairs);
gameBoard.createIconTiles(gameBoard.gamePieces, gameBoard.matchPairs);
console.log(gameBoard.matchPairs);
