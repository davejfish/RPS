// import needed modules
// import { score, getRandomItem } from './utils.js';

import { score, getRandomItem } from './utils.js';

// state
let wins = 0;
let losses = 0;
let draws = 0;
let games = 0;
let choosing = 1;
let jankenArr = ['rock', 'paper', 'scissors'];

// components

// find winner, update states and scoreboard, update win/loss/draw picture, update choosing
function handleThrow(player) {
    let cpuThrow = getRandomItem(jankenArr);
    let result = score(player, cpuThrow);

    updateResults(result);
    updateResultPictures(player, cpuThrow);

    choosing = 0;
    updateClasses();

    updateStates(result);
    updateScoreboard();
}

// elements for changing classes
let chooseThrow = document.getElementById('choose-throw');
let resultsSection = document.getElementById('results-section');

// update classes to rehide the correct elements
function updateClasses() {
    if (choosing) {
        chooseThrow.classList = '';
        resultsSection.classList = 'flex-column hidden';
    } 
    else {
        chooseThrow.classList.add('hidden');
        resultsSection.classList = '';
        resultsSection.classList.add('flex-column');
    }
}

// starting the game
let playerStart = document.getElementById('avatar-select');
let start = document.getElementById('begin');

start.addEventListener('click', () => {
    chooseThrow.classList = '';
    playerStart.classList.add('hidden');
});

// play again button class updater
let playAgain = document.getElementById('play-again');
playAgain.addEventListener('click', () => {
    choosing = 1;
    updateClasses();
});

// grab results display picture and change based on result
let resultsPic = document.getElementById('win-loss-draw');
let resultsText = document.getElementById('win-loss-text');
function updateResults(result) {
    if (result === 1) {
        resultsPic.src = 'assets/youwin.png';
        resultsText.textContent = 'You Win!';
    }
    else if (result === -1) {
        resultsPic.src = 'assets/boy-lose.png';
        resultsText.textContent = 'You Lose';
    }
    else {
        resultsPic.src = 'assets/draw.png';
        resultsText.textContent = 'Draw Game';
    }
}

// update pictures for player throw and cpu throw in results
let playerThrowDisplay = document.getElementById('player-thrown');
let cpuThrowDisplay = document.getElementById('cpu-throw');
function updateResultPictures(playerThrow, cpuThrow) {
    playerThrowDisplay.src = 'assets/' + playerThrow + '.png';
    cpuThrowDisplay.src = 'assets/' + cpuThrow + '.png';
}

// update the state values based on result
function updateStates(result) {
    if (result === 1) {
        wins++;
    }
    else if (result === 0) {
        draws++;
    }
    else {
        losses++;
    }
    games++;
}

// update the scoreboard with current state values
let winsDisplay = document.getElementById('wins');
let lossesDisplay = document.getElementById('losses');
let drawsDisplay = document.getElementById('draws');
let totalGames = document.getElementById('games'); 
function updateScoreboard() {
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    drawsDisplay.textContent = draws;
    totalGames.textContent = games;
}


// grab all rock paper and scissor buttons and add handleThrow function
let rpsButtons = document.querySelectorAll('[id=throw-buttons]');
for (let i of rpsButtons) {
    i.addEventListener('click', () => {
        handleThrow(i.value);
    });
}

// updating name input across every section
let avatarSelect = document.getElementById('choose-avatar');
let playerAvatar = document.querySelectorAll('[id=player-avatar]');

avatarSelect.addEventListener('change', () => {
    for (let i of playerAvatar) {
        i.src = 'assets/' + avatarSelect.value + '.png';
    }
});

// updating player name in all sections
let nameInput = document.getElementById('nameInput');
let nameDisplay = document.querySelectorAll('[id=name-display]');

nameInput.addEventListener('change', () => {
    for (let i of nameDisplay) {
        i.textContent = nameInput.value;
    }
});

// page load actions

