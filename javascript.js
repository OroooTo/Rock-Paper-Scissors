// "Rejouer" button

const buttonRejouer = document.getElementById("button-rejouer")

function reset() {
    document.getElementsByClassName("result")[0].innerHTML="";
    document.getElementsByClassName("user-space-result")[0].innerHTML="";
    document.getElementsByClassName("computer-space-result")[0].innerHTML="";
}

buttonRejouer.addEventListener("click", reset);


   
// Pierre is pressed

const buttonPierre = document.getElementById("pierre")

function playerChoiceIsPierre () {
    let playerPick = 1;
    document.getElementsByClassName("user-space-result")[0].innerHTML="PIERRE";
    let computerChoiceInside = computerChoice(3);
    let translatedComputerChoice = translateComputerPick(computerChoiceInside);
    document.getElementsByClassName("computer-space-result")[0].innerHTML= translatedComputerChoice;
    document.getElementsByClassName("result")[0].innerHTML=compareResults(playerPick, computerChoiceInside);
    addPoints(compareResults(playerPick, computerChoiceInside));
}

buttonPierre.addEventListener("click", playerChoiceIsPierre)


// Feuille is pressed

const buttonFeuille = document.getElementById("feuille")

function playerChoiceIsFeuille () {
    document.getElementsByClassName("user-space-result")[0].innerHTML="FEUILLE"
    let computerChoiceInside = computerChoice(3);
    let translatedComputerChoice = translateComputerPick(computerChoiceInside);
    document.getElementsByClassName("computer-space-result")[0].innerHTML= translatedComputerChoice;
    let playerPick = 2;
    document.getElementsByClassName("result")[0].innerHTML=compareResults(playerPick, computerChoiceInside);
    addPoints(compareResults(playerPick, computerChoiceInside));

}

buttonFeuille.addEventListener("click", playerChoiceIsFeuille)



// Ciseaux is pressed

const buttonCiseaux = document.getElementById("ciseaux")

function playerChoiceIsCiseaux () {
    document.getElementsByClassName("user-space-result")[0].innerHTML="CISEAUX"
    let computerChoiceInside = computerChoice(3);
    let translatedComputerChoice = translateComputerPick(computerChoiceInside);
    document.getElementsByClassName("computer-space-result")[0].innerHTML= translatedComputerChoice;
    let playerPick = 3;
    document.getElementsByClassName("result")[0].innerHTML=compareResults(playerPick, computerChoiceInside);
    addPoints(compareResults(playerPick, computerChoiceInside));

}

buttonCiseaux.addEventListener("click", playerChoiceIsCiseaux)



// Computer selection

function computerChoice(max) {
    let computerPick = Math.floor((Math.random() * max) + 1);
    return computerPick;
  }

function translateComputerPick(computerPick) {
    if (computerPick === 1) {
        let translatedComputerPick = "PIERRE";
        return translatedComputerPick;
    }
    else if (computerPick === 2) {
        let translatedComputerPick = "FEUILLE";
        return translatedComputerPick;
    }
    else {
        let translatedComputerPick = "CISEAUX";
        return translatedComputerPick;
    }

}



// Compare between player and computer

function compareResults(playerPick, computerChoiceInside) {
    if (playerPick === computerChoiceInside) {
        let resultTranslated = "NULLE";
        return resultTranslated;
    
    } else if (playerPick === 1 && computerChoiceInside === 2) {
        let resultTranslated = "PERDU";
        return resultTranslated;
    
    } else if (playerPick === 1 && computerChoiceInside === 3) {
        let resultTranslated = "GAGNÉ";
        return resultTranslated;
    
    } else if (playerPick === 2 && computerChoiceInside === 1) {
        let resultTranslated = "GAGNÉ";
        return resultTranslated;
    
    } else if (playerPick === 2 && computerChoiceInside === 3) {
        let resultTranslated = "PERDU";
        return resultTranslated;
    }
    else if (playerPick === 3 && computerChoiceInside === 1) {
        let resultTranslated = "PERDU";
        return resultTranslated;
    }
    else {
        let resultTranslated = "GAGNÉ";
        return resultTranslated;
    } 
}




function addPoints (resultTranslated) {
    if (resultTranslated === "GAGNÉ") {    
        let actualPoints = Number(document.getElementById("won-games").innerHTML);
        addPoint = actualPoints + 1;
        totalPoints = addPoint;
        document.getElementsByClassName("score-gagnees")[0].innerHTML= totalPoints

    } else if (resultTranslated === "NULLE" ) {
        let actualPoints = Number(document.getElementById("draw-games").innerHTML);
        addPoint = actualPoints + 1;
        totalPoints = addPoint;
        document.getElementsByClassName("score-nulles")[0].innerHTML= totalPoints

    } else {
        let actualPoints = Number(document.getElementById("lost-games").innerHTML);
        addPoint = actualPoints + 1;
        totalPoints = addPoint;
        document.getElementsByClassName("score-perdues")[0].innerHTML= totalPoints
    }
}



// function addPoints (actualPoints) {
//     let totalPoints = actualPoints;
//     document.getElementsByClassName("score-gagnees")[0].innerHTML= totalPoints;

// }

// add points to scoreboard

// function addPoints (pointEarned) {
//     let pointEarned =+ 1;
//     return pointEarned;
// }

// // function to translate result to points

// function translateResultToPoint (resultTranslated) {
//     if (resultTranslated === "NULLE" || resultTranslated === "PERDU") {
//         let pointEarned = 0;
//         return pointEarned;
//     } else {
//         let pointEarned = 1;
//         return pointEarned;
//     }
// }

// function player is playing
// choose between 1 (pierre) /2 (feuille) /3 (ciseaux) 
// display result in game-board
// greying other choices tiles/buttons



// const pierrePressedByPlayer = document.getElementById("pierre")

// function isPierre () {
//     let playerPick = 1;
//     return playerPick;
// }


// pierrePressedByPlayer.addEventListener("click", displayPlayerResult(isPierre))





// const feuillePressedByPlayer = document.getElementById("feuille")

// function isFeuille () {
//     let playerPick = 2;
//     return playerPick;
// }


// feuillePressedByPlayer.addEventListener("click", isFeuille)




// const ciseauxPressedByPlayer = document.getElementById("ciseaux")

// function isCiseaux () {
//     let playerPick = 3;
//     return playerPick;
// }

// ciseauxPressedByPlayer.addEventListener("click", isCiseaux)


// function displayPlayerResult (playerPick) {
//     if (playerPick === 1) {
//     document.getElementsByClassName("user-space")[0].innerHTML="Pierre";
//     }
//     else if (playerPick === 2) {
//     document.getElementsByClassName("user-space")[0].innerHTML="Feuille";
//     }
//     else if (playerPick === 3) {
//     document.getElementsByClassName("user-space")[0].innerHTML="Ciseaux"
//     }
//     }

// function computer-is-playing
// when player push a playing button, let computer choose randomly between 1 (pierre) /2 (feuille) /3 (ciseaux)
// display result in game-board

// function who-won? compare between player and computer result
// if player choose 1 (computer choose 1 = draw, computer choose 2 = player lose, computer choose = player win)
// if player choose 2 (computer choose 1 = player win, computer choose 2 = draw, computer choose = player lose)
// if player choose 3 (computer choose 1 = player lose, computer choose 2 = player win, computer choose = draw)


// play again button
// when score is not 0, display the button

// function reset
// when play-again button is pressed, reset the game
// clearing the tiles in game-board
// remove greying on choices tiles/buttons

// function score-board
// if win, add 1 in GAGNER
// if draw, add 1 in EGALITE
// if lose, add 1 in PERDU