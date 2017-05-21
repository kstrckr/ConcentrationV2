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
    }


}