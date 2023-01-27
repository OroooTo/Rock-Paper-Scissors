// Blank rounds icons are added

function displayRoundIcon() {
  const userSpace = document.getElementsByClassName("won-rounds-icons")[0];
  const computerSpace = document.getElementsByClassName("lost-rounds-icons")[0];
  for (let i = 0; i < 5; i++) {
    createPlayerRoundIcons(userSpace);
    createComputerRoundIcons(computerSpace);
  }
}

displayRoundIcon();

// A playing button is pressed :

const buttonPressed = document.querySelectorAll("button");

buttonPressed.forEach((button) => {
  button.addEventListener("click", () => {
    let playerPick = button.id;
    displayPlayerChoice(playerPick);
    let computerChoiceInside = computerChoice(3);
    displayComputerChoice(computerChoiceInside);
    displayRoundResult(compareResults(playerPick, computerChoiceInside));
    colorTiles(resultTranslated);
    addRoundsPoints(compareResults(playerPick, computerChoiceInside));
    actionsGameOver(gameOver());
  });
});

// Display the player choice

function displayPlayerChoice(buttonPressed) {
  let playerSelection = document.getElementsByClassName("user-space-result")[0];
  const img = document.createElement("img");
  img.src = "./images/" + buttonPressed + ".svg";
  img.setAttribute("id", buttonPressed + "-result");

  if (buttonPressed === "rock") {
    playerSelection.appendChild(img);
    playerSelection.replaceChildren(img);
  } else if (buttonPressed === "paper") {
    playerSelection.appendChild(img);
    playerSelection.replaceChildren(img);
  } else {
    playerSelection.appendChild(img);
    playerSelection.replaceChildren(img);
  }
}

// Computer selection

function computerChoice(max) {
  let computerPick = Math.floor(Math.random() * max + 1);
  return computerPick;
}

// Display the computer choice

function displayComputerChoice(computerPick) {
  let computerSelection = document.getElementsByClassName(
    "computer-space-result"
  )[0];
  const img = document.createElement("img");

  if (computerPick === 1) {
    img.src = "./images/rock.svg";
    img.setAttribute("id", "rock-result");
    computerSelection.appendChild(img);
    computerSelection.replaceChildren(img);
  } else if (computerPick === 2) {
    img.src = "./images/paper.svg";
    img.setAttribute("id", "paper-result");
    computerSelection.appendChild(img);
    computerSelection.replaceChildren(img);
  } else if (computerPick === 3) {
    img.src = "./images/scissors.svg";
    img.setAttribute("id", "scissors-result");
    computerSelection.appendChild(img);
    computerSelection.replaceChildren(img);
  }
}

// Grey out the round loser tile

function colorTiles(resultTranslated) {
  const userPlayingSpace = document.querySelector(".computer-space-display");
  const computerPlayingSpace = document.querySelector(".user-space-display");
  const playingTiles = document.querySelectorAll(
    ".computer-space-display, .user-space-display"
  );
  if (resultTranslated === "WON") {
    userPlayingSpace.classList.add("disabled");
    computerPlayingSpace.classList.remove("disabled");
  } else if (resultTranslated === "LOST") {
    computerPlayingSpace.classList.add("disabled");
    userPlayingSpace.classList.remove("disabled");
  } else if (resultTranslated === "DRAW") {
    playingTiles.forEach((tiles) => {
      tiles.classList.remove("disabled");
    });
  }
}

// Compare results between player and computer

function compareResults(playerPick, computerChoiceInside) {
  if (playerPick === "rock") {
    playerPick = 1;
  } else if (playerPick === "paper") {
    playerPick = 2;
  } else playerPick = 3;

  if (playerPick === computerChoiceInside) {
    return (resultTranslated = "DRAW");
  } else if (
    (playerPick === 1 && computerChoiceInside === 2) ||
    (playerPick === 2 && computerChoiceInside === 3) ||
    (playerPick === 3 && computerChoiceInside === 1)
  ) {
    return (resultTranslated = "LOST");
  } else {
    return (resultTranslated = "WON");
  }
}

// Display round result

function displayRoundResult(resultTranslated) {
  document.getElementsByClassName("result-text")[0].textContent =
    resultTranslated;
}

// Adding round point

function addRoundsPoints(resultTranslated) {
  if (resultTranslated === "WON") {
    const iconToEdit = document.getElementsByClassName("player-round-icon")[0];
    iconToEdit.firstElementChild.setAttribute("fill", "#97aedd");
    iconToEdit.classList.replace("player-round-icon", "filled");
  } else if (resultTranslated === "LOST") {
    const iconToEdit = document.getElementsByClassName(
      "computer-round-icon"
    )[0];
    iconToEdit.firstElementChild.setAttribute("fill", "#df93ac");
    iconToEdit.classList.replace("computer-round-icon", "filled");
  } else if (resultTranslated === "DRAW") {
    let actualPoints = Number(
      document.getElementsByClassName("draw-rounds")[0].textContent
    );
    document.getElementsByClassName("draw-rounds")[0].textContent =
      actualPoints + 1;
  }
}

// Won rounds

function wonRoundsCounter(pointAdded) {
  let wonCounter = wonCounter + pointAdded;
  console.log(wonCounter);
  return wonCounter;
}

// Check if game is over

function gameOver() {
  let playerLastRound =
    document.getElementsByClassName("won-rounds-icons")[0].childNodes[4];
  let computerLastRound =
    document.getElementsByClassName("lost-rounds-icons")[0].childNodes[4];
  if (playerLastRound.classList.contains("filled")) {
    return "won";
  } else if (computerLastRound.classList.contains("filled")) {
    return "lost";
  }
}

// Actions if round is over

function actionsGameOver(gameOver) {
  addGamesPoints(gameOver);
  disableTheButtons(gameOver);
  playAgainButton(gameOver);
  displayWinner(gameOver);
}

// Add games points if game is over

function addGamesPoints(wonOrLost) {
  if (wonOrLost === "won") {
    let gamesWon = Number(
      document.getElementsByClassName("won-games")[0].textContent
    );
    document.getElementsByClassName("won-games")[0].textContent = gamesWon + 1;
    return true;
  } else if (wonOrLost === "lost") {
    let lostGames = Number(
      document.getElementsByClassName("lost-games")[0].textContent
    );
    document.getElementsByClassName("lost-games")[0].textContent =
      lostGames + 1;
    return false;
  }
}

// Disable playing buttons if there's game a winner

function disableTheButtons(gameOver) {
  if (gameOver === "won" || gameOver === "lost") {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.setAttribute("disabled", "");
    });
  }
}

// Display who's the winner

function displayWinner(gameOver) {
  let displayWinnerText = document.querySelector(".result-game-space");
  if (gameOver === "won") {
    displayWinnerText.textContent = "WINNER";
  } else if (gameOver === "lost") {
    displayWinnerText.textContent = "LOSER";
  }
}

// Display a "Play Again" button

function playAgainButton(gameOver) {
  if (gameOver === "won" || gameOver === "lost") {
    const divPlayerChoices = document.querySelector(".play-again-button");
    const playAgainButton = document.createElement("button");
    playAgainButton.textContent = "PLAY AGAIN";
    playAgainButton.setAttribute("id", "reset-button");
    divPlayerChoices.appendChild(playAgainButton);
    playAgainButton.addEventListener("click", reset);
  }
}

// Reset the game

function reset() {
  resetCounters();
  reactivateTheButtons();
  removePlayAgainButton();
  resetColors();
  resetIcons();
}

// Reset rounds icons

function resetIcons() {
  const iconsToReset = document.querySelectorAll(".filled");
  iconsToReset.forEach((icons) => {
    icons.firstElementChild.setAttribute("fill", "white");
  });
  const playerIconsToReset = document.querySelector(".won-rounds-icons");
  playerIconsToReset.childNodes.forEach((classToReset) => {
    classToReset.classList.replace("filled", "player-round-icon");
  });
  const computerIconsToReset = document.querySelector(".lost-rounds-icons");
  computerIconsToReset.childNodes.forEach((classToReset) => {
    classToReset.classList.replace("filled", "computer-round-icon");
  });
}

// Reset the tiles colors

function resetColors() {
  const tiles = document.querySelectorAll(
    ".computer-space-display, .user-space-display"
  );
  tiles.forEach((tilesColors) => {
    tilesColors.classList.remove("disabled");
  });
}

// Reset counter and texts from previous game

function resetCounters() {
  document.getElementsByClassName("result-text")[0].textContent = "";
  document.getElementsByClassName("user-space-result")[0].textContent = "";
  document.getElementsByClassName("computer-space-result")[0].textContent = "";
  document.getElementsByClassName("result-game-space")[0].textContent =
    "FIRST PLAYER TO WIN 5 ROUNDS";
  document.getElementsByClassName("draw-rounds")[0].textContent = "0";
}

// Reactivate playing button for next game

function reactivateTheButtons() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.removeAttribute("disabled", "");
  });
}

// Remove Play Again button

function removePlayAgainButton() {
  const playAgainButton = document.querySelector("#reset-button");
  playAgainButton.remove();
}

// Create round points icons

function createPlayerRoundIcons(iconSpace) {
  const iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const iconPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  iconSvg.setAttribute("height", "30");
  iconSvg.setAttribute("width", "30");
  iconSvg.classList.add("player-round-icon");
  iconPath.setAttribute("cx", "15");
  iconPath.setAttribute("cy", "15");
  iconPath.setAttribute("r", "10");
  iconPath.setAttribute("stroke", "white");
  iconPath.setAttribute("stroke-width", "2");
  iconPath.setAttribute("fill", "white");

  iconSvg.appendChild(iconPath);

  iconSpace.appendChild(iconSvg);
}

// Create round points icons

function createComputerRoundIcons(iconSpace) {
  const iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const iconPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  iconSvg.setAttribute("height", "30");
  iconSvg.setAttribute("width", "30");
  iconSvg.classList.add("computer-round-icon");
  iconPath.setAttribute("cx", "15");
  iconPath.setAttribute("cy", "15");
  iconPath.setAttribute("r", "10");
  iconPath.setAttribute("stroke", "white");
  iconPath.setAttribute("stroke-width", "2");
  iconPath.setAttribute("fill", "white");

  iconSvg.appendChild(iconPath);

  iconSpace.appendChild(iconSvg);
}
