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
    incrementGuess: function(){
        this.tries++;
        document.getElementById("triesCount").innerHTML = this.tries;
    },

    onEachClick: function(inputTile){
        this.matchCheckArray.push(inputTile);
        if (this.matchCheckArray.length >2){
            this.matchCheckArray.shift();
        }
    },

    matchValidation: function(){

            if (this.matchCheckArray.length > 1){
                if (this.matchCheckArray[0].firstChild.innerHTML === this.matchCheckArray[1].firstChild.innerHTML){
                this.matchCheckArray = ["MATCHED"];
            }
        }
    },
    
};