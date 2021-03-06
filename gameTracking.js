const gameBoard = {

    gamePieces: [],
    workingPairs: [],
    matchPairs: [],

    pickRandomPairs: function(numberOfTiles, source){
        let randomArray = [];
        for (let i = 0; i < numberOfTiles; i++){
            let randomNum = Math.floor(Math.random()*source.length);
            randomArray[i] = source[randomNum];
        }
        return randomArray;
    },

    loadGameBoardElements: function(targetClass){
       let targets =  document.getElementsByClassName(targetClass);
       return targets;
    },

    createAssignments: function(input){
        let pairArray = input.concat(input);
        let outputAray = pairArray.sort(function(a, b){return 0.5 - Math.random()});
        return outputAray;
    },

    createIconTiles: function(targetElements, iconSource){
        for(let i = 0; i < targetElements.length; i++){
            targetElements[i].innerHTML = `<p>${iconSource[i]}</p>`;
        }
    },

    //add board reset method
}

const gameState = {
    remainingMatches: 6,
    tries: 0,
    matchCheckArray: [],
    guessPlus: function(){
        this.tries++;
        document.getElementById("triesCount").innerHTML = this.tries;
    },
    scoreCheck: function(){
        //check that this is not the same node, but it is the same content
    },
};