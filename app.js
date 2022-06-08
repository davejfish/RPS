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
    // component
    // define and grab DOM elements
    // display functions
    // optional: subscribe to events
        // event handlers - what needs to happen?
        // logic and calculations
        // state update
        // re-display components (which ones?)
    // optional: handle functions for shared event handler logic
function handleThrow(player) {
    let result = score(player, getRandomItem(jankenArr));
    console.log(result);
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


