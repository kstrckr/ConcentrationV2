gameBoard.gamePieces = gameBoard.loadGameBoardElements('game-piece');
gameBoard.workingPairs = gameBoard.pickRandomPairs(gameBoard.gamePieces.length/2, allCodes);
gameBoard.matchPairs = gameBoard.createAssignments(gameBoard.workingPairs);
gameBoard.createIconTiles(gameBoard.gamePieces, gameBoard.matchPairs);

const liveBoard = document.getElementById('game-board');
console.log(liveBoard);
liveBoard.addEventListener('click', function(e){
    if (e.target != liveBoard){
        console.log(e.target.children);
        if (e.target.children.length === 0){
            document.getElementById("match-check").innerHTML = e.target.parentNode.innerHTML;
        } else {
            document.getElementById("match-check").innerHTML = e.target.innerHTML;
        }
        
    }
})
//console.log(gameBoard.matchPairs);
