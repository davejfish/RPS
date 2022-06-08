// import needed modules
// import { score, getRandomItem } from './utils.js';
// state



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


// updating name input across every section
let nameInput = document.getElementById('nameInput');
let nameDisplay = document.querySelectorAll('[id=name-display]');

nameInput.addEventListener('change', () => {
    for (let i of nameDisplay) {
        i.textContent = nameInput.value;
    }
});

// page load actions


