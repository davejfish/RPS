export function getRandomItem(arr) {
    let random = Math.floor(Math.random() * arr.length);
    let randomItem = arr[random];
    return randomItem;
}

export function score(playerThrow, cpuThrow) {
    switch (playerThrow) {
        case 'rock':
            if (cpuThrow === 'rock') {
                return 0;
            }
            else if (cpuThrow === 'paper') {
                return -1;
            }
            else {
                return 1;
            }
        case 'paper':
            if (cpuThrow === 'rock') {
                return 1;
            }
            else if (cpuThrow === 'paper') {
                return 0;
            }
            else {
                return -1;
            }
        case 'scissors':
            if (cpuThrow === 'rock') {
                return -1;
            }
            else if (cpuThrow === 'paper') {
                return 1;
            }
            else {
                return 0;
            }
    }
}