gameBoard.gamePieces = gameBoard.loadGameBoardElements('game-piece');
gameBoard.workingPairs = gameBoard.pickRandomPairs(gameBoard.gamePieces.length/2, allCodes);
gameBoard.matchPairs = gameBoard.createAssignments(gameBoard.workingPairs);
gameBoard.createIconTiles(gameBoard.gamePieces, gameBoard.matchPairs);

const liveBoard = document.getElementById('game-board');

liveBoard.addEventListener('click', function(e){
    if (e.target != liveBoard){
        let matchCheck = document.getElementById("match-check")
        if (e.target.children.length === 0){
           matchCheck.innerHTML += e.target.parentNode.innerHTML;
           gameState.onEachClick(e.target.parentNode);
           gameState.matchValidation();
        } else {
            matchCheck.innerHTML += e.target.innerHTML;
            gameState.onEachClick(e.target);
            gameState.matchValidation();
        }
        console.log(gameState.remainingMatches);

        if (gameState.matchCheckArray.length === 0){
            matchCheck.innerHTML = "<p>MATCHED!</p>";
        }
    }
})
