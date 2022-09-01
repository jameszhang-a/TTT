const HEIGHT = 3;
const WIDTH = 3;
const PATHS = [
    [
        [0, 0],
        [0, 1],
        [0, 2],
    ],
    [
        [1, 0],
        [1, 1],
        [1, 2],
    ],
    [
        [2, 0],
        [2, 1],
        [2, 2],
    ],
    [
        [0, 0],
        [1, 0],
        [2, 0],
    ],
    [
        [0, 1],
        [1, 1],
        [2, 1],
    ],
    [
        [0, 2],
        [1, 2],
        [2, 2],
    ],
    [
        [0, 0],
        [1, 1],
        [2, 2],
    ],
    [
        [0, 2],
        [1, 1],
        [2, 0],
    ],
];
const board = document.querySelector('#board');
const restart = document.querySelector('#restart_button');
// make board
const grid = Array(HEIGHT)
    .fill(0)
    .map(() => Array(WIDTH)
    .fill(0)
    .map(() => ({
    clicked: false,
    player: '',
})));
let currentPlayer = 'o';
let gameOver = false;
const checkWinner = () => {
    for (const path of PATHS) {
        let score = 0;
        for (const pos of path) {
            score +=
                grid[pos[0]][pos[1]].player === ''
                    ? 0
                    : grid[pos[0]][pos[1]].player === 'x'
                        ? -1
                        : 1;
        }
        if (score === 3) {
            alert('o wins!');
            gameOver = true;
        }
        else if (score === -3) {
            alert('x wins!');
            gameOver = true;
        }
    }
};
const tileClick = (e) => {
    if (gameOver)
        return;
    // have to type assert bc TS doesn't know the target is an HTML element
    const target = e.target;
    let [x_coord, y_coord] = target.id.split('-');
    let [x, y] = [Number(x_coord), Number(y_coord)];
    const tile = grid[x][y];
    if (tile.clicked) {
        console.log("can't click on a clicked tile");
        return;
    }
    tile.clicked = true;
    tile.player = currentPlayer;
    target.innerHTML = currentPlayer;
    target.classList.add(currentPlayer);
    currentPlayer = currentPlayer === 'o' ? 'x' : 'o';
    checkWinner();
};
const restartGame = () => {
    for (let i = 0; i < HEIGHT; i++) {
        for (let j = 0; j < WIDTH; j++) {
            grid[i][j] = {
                clicked: false,
                player: '',
            };
            document.getElementById(`${i}-${j}`).innerHTML = '';
            document.getElementById(`${i}-${j}`).classList.remove('x');
            document.getElementById(`${i}-${j}`).classList.remove('o');
        }
    }
    gameOver = false;
    currentPlayer = 'o';
};
const initializeGame = () => {
    for (const [i, row] of grid.entries()) {
        for (const [j, _] of row.entries()) {
            const gridTile = document.createElement('div');
            gridTile.setAttribute('id', `${i}-${j}`);
            gridTile.setAttribute('class', 'tile');
            board === null || board === void 0 ? void 0 : board.appendChild(gridTile);
            gridTile.addEventListener('click', tileClick);
        }
    }
    restart.onclick = restartGame;
};
initializeGame();
export {};
