const gameBoard = {

    pickRandomPairs: function(dimension, source){
        let randomArray = [];
        for (let i = 0; i < dimension; i++){
            let randomNum = Math.floor(Math.random()*source.length);
            randomArray[i] = source[randomNum];
        }
        return randomArray;
    },

    createAssignments: function(){
        let pairArray = input.concat(input);
        let outputAray = pairArray.sort(function(a, b){return 0.5 - Math.random()});
        return outputAray;
    },

    createIconTiles: function(targetElements, iconSource){
        for(let i = 0; i < targetElements.length; i++){
            targetElements[i].innerHTML = `<p>${iconSource[i]}</p>`;
        }
    },
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